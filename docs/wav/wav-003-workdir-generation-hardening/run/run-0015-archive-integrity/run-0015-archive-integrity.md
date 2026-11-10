---
type: run
run: 0015
status: completed
profile: single-document
wave: 003
---

# Run 0015 - archive-integrity

Run of wave 003 (workdir-generation-hardening), manifest id W-2, phase P1.

## Scope

Make a cached archive always be a complete, valid zip that was fully extracted, in
`source/generator/workdir/archive.ts`, the one module all the archive-based
packages (seven: `aws`, `azure`, `eip`, `fontawesome`, `gcp`, `material`,
`simpleicons`, through `fetchArchive`) use to fetch and unpack their icons.

In scope: `source/generator/workdir/archive.ts` and `test/archive.spec.js` (plus a
zip fixture under `test/fixtures/` if the spec does not build one).

Out of scope: `source/generator/workdir/validation.ts` and `source/library/index.ts`
(W-1, already committed), the AWS package, `resolve-aws-icons.mjs` and
`doc/howto.upgrade-aws-package.md` (W-3), any reformatting of `archive.ts` beyond the
change (wave Risks: it keeps W-1's diff readable), any Podman build.

## Current state

Read in `archive.ts` and `test/archive.spec.js` on `wave-003` at `5068a44f54`:

- `download()` already writes to `<zipFile>.part`, rejects a non-2xx status and an empty
  body, and renames to `zipFile` only on success. It does **not** look at the content, so
  a 200 response with an HTML page is cached as `icons.zip` and trusted by every later
  run (`existsSync(zipFile)`).
- `extractArchive()` does `mkdirSync(destDir)` then `extractZip(...)` into it, and treats
  `existsSync(destDir)` as "already extracted". An extraction interrupted midway (killed
  process, corrupt or truncated zip) leaves a partial `destDir` that every later run
  trusts, so a package silently discovers a fraction of its icons.
- `test/archive.spec.js` serves `"zip-content"` as the 200 body of `/ok.zip` and caches
  the string `"cached"`; neither is a zip, so both fixtures change with this run.
- Callers pass `iconsZipDst` as `<pkgTmpDirPath>/icons` (`temp_icons` for `aws`); nothing
  globs the parent `pkgTmpDirPath`, so a sibling `<destDir>.part` is never discovered as
  an icon source.

## Done when

- `AC-1` `download()` rejects a 2xx body whose first four bytes are not `PK\x03\x04`,
  before the rename: no file at `zipFile`, no `<zipFile>.part`, and the error names the
  URL. Tested in `test/archive.spec.js` with a local HTTP server and no network.
- `AC-2` `download()` still caches a body that is a real zip, and still does not fetch
  when `zipFile` is already cached as a valid zip (`AC-7` covers a cached non-zip). The two
  pre-existing fixtures are replaced by real zip bytes, built in the spec or checked in
  under `test/fixtures/`, with no new dependency.
- `AC-3` `extractArchive()` never leaves `destDir` in place unless extraction finished:
  a zip that fails midway (valid header, truncated body) makes it reject, leaves no
  `destDir` and no `<destDir>.part`; a following call with a good zip extracts fully.
  A `<destDir>.part` left by a killed run is cleared and extracted again.
- `AC-4` A complete `destDir` is still not extracted again (a sentinel file written in it
  survives a second call).
- `AC-5` `npm test` passes with more tests than the 16 of the baseline, `npm run lint` exits
  0, prettier is clean on the changed files, and
  `npm run generate:workdir -- -w <empty scratch dir>` (all packages, no Podman) exits 0,
  which shows the magic check accepts the real archive of every package.
- `AC-6` The source and test diff touches only the files named under Scope; `archive.ts` keeps its
  formatting outside the changed functions.
- `AC-7` A cached `zipFile` whose bytes are not a zip is discarded and re-fetched (the server
  is hit once, `zipFile` ends as the real zip); a valid cached zip causes no request. Tested
  in `test/archive.spec.js`.

## Decisions

- `DEC-1` Validate by magic bytes. After the body is written to `<zipFile>.part` and
  before the rename, read the first four bytes and require `PK\x03\x04`; on failure the
  existing `catch` removes the `.part` file and rethrows. The error names the URL.
  Rejected: trusting `Content-Type` (hosts serve zips as `application/octet-stream`,
  `binary/octet-stream` or `application/x-zip-compressed`, so it would reject valid
  archives); opening the archive with `yauzl` to read the central directory (stronger,
  but `yauzl` is only a transitive dependency of `extract-zip`, and the wave scope says
  magic bytes). A truncated but well-headed body is caught at extraction (`DEC-3`).
- `DEC-2` `PK\x05\x06` (an archive with no entry) is rejected along with every other
  non-`PK\x03\x04` prefix: every package archive holds icons, and an empty archive would
  extract cleanly and then yield zero icons, the silent failure this run removes.
- `DEC-3` Extract into `<destDir>.part`, then `renameSync` it to `destDir`. Before
  extracting, remove a stale `<destDir>.part`; on any failure remove it and rethrow. So
  `existsSync(destDir)` keeps meaning "extraction finished", with no extra file inside
  `destDir`. The `.part` suffix mirrors `download()`. Rejected: a completion marker file
  inside `destDir` (a new artefact that the packages' `**/*` globs could pick up, and
  every existing complete `destDir` would lack it and be re-extracted).
- `DEC-4` Residual risk, accepted: a `destDir` left half-extracted by the code before this
  run cannot be told from a complete one. CI starts from a clean checkout; a developer
  clears it by deleting `.workdir/.tmp/<pkg>`. Not worth a heuristic.
- `DEC-5` Resolved from `Q-1` (Stage 3, from the repository: `download()` already holds the
  `url` and the `context.info` logger at the cached branch, so re-fetching needs nothing new).
  `download()` also reads the first four bytes of an already cached `zipFile`; one that is not
  `PK\x03\x04` is logged with `context.info`, removed, and fetched again through the same
  `.part` path as `DEC-1`. This repairs a cache poisoned by the pre-run code and makes "a cached
  archive is always a valid zip" hold for old caches too. A valid cached zip is still not
  fetched. Rejected: leaving the cache unchecked (the poisoned `icons.zip` of a developer's
  `.tmp` would be trusted forever and fail only at extraction, with no hint of the cause).
## Tasks

One sequence, one agent, tests before the code they pin:

1. `T-1` In `test/archive.spec.js`, replace the two non-zip fixtures with real zip bytes and
   add the non-zip 200 case and the cached non-zip case (`AC-1`, `AC-2`, `AC-7`). The new case fails before `T-2`.
2. `T-2` In `archive.ts`, add the magic-bytes check to `download()` (`DEC-1`, `DEC-2`, `DEC-5`).
3. `T-3` Add the `extractArchive` cases: truncated zip, stale `.part`, complete `destDir`
   kept (`AC-3`, `AC-4`). The first two fail before `T-4`.
4. `T-4` In `archive.ts`, change `extractArchive()` to extract into `<destDir>.part` and rename
   (`DEC-3`).
5. `T-5` Run `npm test`, `npm run lint`, prettier on the changed files, and the all-package
   `generate:workdir` into a scratch directory (`AC-5`, `AC-6`).

### Task results (Stage 10)

Single-document profile, no pln: each task was worked inline in order, one agent, tests first.

- `T-1` done. Spec builds real zip bytes in `buildZip` (stored entries, `zlib.crc32`, no dependency); added the HTML 200, empty-archive 200 (`PK\x05\x06`), cached valid (no request), cached non-zip (one request, re-fetched) and cached non-zip with a failing re-fetch cases. The three new rejection and re-fetch cases failed before `T-2`.
- `T-2` done. `isZip()` and the check on `<zipFile>.part` before the rename, plus the cached-file check, in `archive.ts`.
- `T-3` done. `extractArchive` cases: complete archive, truncated zip then good zip, stale `.part`, sentinel kept. Truncated and stale `.part` cases failed before `T-4`.
- `T-4` done. `extractArchive()` extracts into `<destDir>.part`, renames, removes the `.part` on failure.
- `T-5` done. `npm test` 24 passing (baseline 16); `npm run lint` exit 0; prettier clean on both files; `npm run generate:workdir -- -w <scratch dir>` exit 0 for all packages, each of the seven `icons.zip` starts with `PK\x03\x04`, no `.part` left; the source and test diff is `archive.ts` and `archive.spec.js` only.

## Canonical impact

None to update. This repository declares no `arc` or `dom` register (`docs/` holds only
`wav/`, and there is no `docs/CLAUDE.md`), and the howtos under `doc/` describe the
`.workdir/.tmp/<pkg>/...` paths this run keeps unchanged. `doc/howto.upgrade-aws-package.md`
("Archive download fails") is W-3's file, so a line about the new "not a zip" error is
left out here on purpose.

## Verification

Stage 11, by an agent other than the implementer, on tree `3463b3ca46f06270129a71c780cf3dc68229535f`
(`archive.ts` and `archive.spec.js` modified). No pln exists (single-document), so the checks are
the run's own `AC-5` and `AC-6`, run once, here:

- `npm test`: exit 0, 24 passing (baseline 16, so 8 new tests).
- `npm run lint`: exit 0. `npx prettier --check` on the two changed files: clean.
- `npm run generate:workdir -- -w <empty scratch dir>` (all packages, no Podman): exit 0 in 288s;
  each of the seven `icons.zip` starts with `PK\x03\x04` (the magic check accepts every real
  archive); no `.part` file left.
- Diff review: `git diff` of source and test is `source/generator/workdir/archive.ts` (34 lines,
  `isZip`, the two checks in `download()`, the `.part` directory in `extractArchive()`) and
  `test/archive.spec.js`; no fixture added, no debug leftover, formatting of `archive.ts` untouched
  outside the changed functions. The only other working-tree changes are the wave's documents.

Acceptance re-check, read against the code:

| AC | Evidence |
|---|---|
| AC-1 | `download()` throws `response body is not a zip archive for (<url>)` on the `.part` before `renameSync`; the `catch` removes the `.part`; tests for an HTML body and an empty archive (`PK\x05\x06`) assert no `zipFile`, no `.part` and the URL in the message |
| AC-2 | `/ok.zip` serves real zip bytes built by `buildZip` (no dependency) and is cached byte-for-byte; a valid cached zip causes no request (`hits` empty) |
| AC-3 | `extractArchive()` extracts into `<destDir>.part`, renames on success, removes the `.part` and rethrows on failure; tests: truncated zip rejects with neither directory left, then a good zip extracts; a stale `.part` is cleared |
| AC-4 | `existsSync(destDir)` still short-circuits; the sentinel test passes |
| AC-5 | the four results above |
| AC-6 | the diff review above |
| AC-7 | `isZip(zipFile)` on a cached file, logged with `context.info`, removed and fetched again; tests: one request and the real zip, and a failing re-fetch leaves no file |

Not confirmed: the Podman render (out of scope, `eip` build not needed since only the TypeScript
workdir stage changed); the accepted residual risk of `DEC-4` (a `destDir` half-extracted by the code
before this run) is untestable by design. `docs/bkg/` and `tooling/docs/check-backlog.py` do not
exist in this repository, so the backlog check and expiry sweep do not apply.

## Open questions

None open. `Q-1` was resolved at Stage 3 (see `DEC-5`).

## Stage 2 review (KDMLLC)

Reviewer: the Stage 2 agent, a different agent from the one that generated this
document (a bare stub: frontmatter and one sentence). Referent read: `archive.ts`,
`test/archive.spec.js`, the seven `index.ts` callers' `iconsZipDst` lines, `extract-zip`'s
entry point, the wave plan's W-2 row and risks, run 0014's tdd, `manage-runs`' completion
contract. Scores of the stub: KISS 5, DRY 5, MECE 1, LEAN 5, LUCID 2, C n/a (nothing
claimed).

| ID | Principle | Sev | Finding | Applied |
|---|---|---|---|---|
| F-1 | MECE-MISSING | S3 | No scope, no done-when, no decision, no task list, no canonical-impact answer: the profile "drops files, never questions" and none was answered | Sections Scope to Canonical impact written from the wave row and the code |
| F-2 | MECE-MISSING | S2 | No statement of the failure paths: non-zip body, truncated archive, stale `.part`, legacy partial directory | `AC-1` to `AC-4`, `DEC-4` |
| F-3 | LUCID | S2 | A reader cannot tell which files W-2 may touch next to W-1 (shared `source/generator/workdir/`) | Scope, out-of-scope list, `AC-6` |
| F-4 | C-ENV | S2 | The wave row (the intended rule) says `download()` rejects a non-zip "before the rename"; the existing spec fixtures (`"zip-content"`, `"cached"`) are non-zip bodies the new rule rejects, so the environment, not the run, is what changes | Current state, `AC-2`, `T-1` |
| F-5 | MECE-MISSING | S1 | Whether a cached non-zip is checked is undecided in the wave row | `Q-1`, left to Stage 3 |

Review pass: inline (not independent). The stub was reviewed by an agent other than the
one that created it, but the body above was written by that same agent to apply the
review's own rewrite plan, so the body has had no second reading; Stage 3 (open
questions) and Stage 7 (C scan against the code) are the next passes over it.

## Stage 7 consistency check (C scan)

Profile single-document: there is no separate PRD/TDD pair, so the C scan ran over this
document's own requirements (`AC-`) against its design (`DEC-`, `Tasks`) and against the
code and the wave plan as referent. Reviewer: the Stage 7 agent, a different agent from the
Stage 2 and Stage 3 writers of the body.

Claims checked against evidence:

- Every `AC-` is addressed by a `DEC-` and a task: `AC-1`/`AC-2`/`AC-7` by `DEC-1`, `DEC-2`,
  `DEC-5` and `T-1`/`T-2`; `AC-3`/`AC-4` by `DEC-3` and `T-3`/`T-4`; `AC-5`/`AC-6` by `T-5`.
  None dropped.
- No decision contradicts a requirement. `DEC-4` (legacy partial `destDir` accepted) does not
  contradict `AC-3`, which is scoped to what `extractArchive()` itself leaves.
- Open questions: none open; `Q-1` resolved as `DEC-5`/`AC-7` at Stage 3, and the section says
  so. Nothing lost.
- Code facts hold: seven packages call `fetchArchive` (`fontawesome` included) with
  `iconsZipDst` as `<pkgTmpDirPath>/icons` (`temp_icons` for `aws`); the only other
  `pkgTmpDirPath` child is eip's `additional_icons`, so a sibling `<destDir>.part` is never a
  glob source. `download()` and `extractArchive()` behave as described. `npx mocha --dry-run`
  gives 16 tests, the baseline of `AC-5`. The `-w` option exists (default `.workdir`).
  `extract-zip` rejects a zip with a valid `PK\x03\x04` header and a truncated body ("end of
  central directory record signature not found"), so `AC-3`'s failure case is reachable and
  `DEC-1`'s claim that a truncated body is caught at extraction holds. The wave row's
  "temporary directory or completion marker" is satisfied by the temporary directory of `DEC-3`.

| ID | Principle | Sev | Finding | Applied |
|---|---|---|---|---|
| F-6 | CONSISTENT | S1 | `AC-7` sat inside Decisions, between `DEC-5` and Tasks, so a reader scanning Done-when missed it | Moved under `AC-6` in Done when |
| F-7 | LUCID | S1 | `AC-6` said "the diff" while the run's own documents are also in the working tree | Reworded to "source and test diff" |
| F-8 | LUCID | S1 | `AC-2` had one over-long line and `DEC-4`/`DEC-5` a stray blank line | Rewrapped, spacing aligned |

No C-DOC or C-ENV outcome: the document and its referents agree, so no side was fixed beyond
the three presentation items above. No product decision needed, no blocker.

Review pass: dispatched (Stage 7 ran in a fresh leaf agent, different from the drafter of the body;
a leaf agent cannot dispatch further, so the check was done inline by that reviewer).
