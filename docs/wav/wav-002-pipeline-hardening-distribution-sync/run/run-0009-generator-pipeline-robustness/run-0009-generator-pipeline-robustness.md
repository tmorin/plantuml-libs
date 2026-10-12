---
type: run
run: 0009
status: completed
wave: 002
profile: single-document
---

# Run 0009: Generator pipeline robustness

Document profile: `single-document`. Scope arrives settled (wave W-2 names
three specific defects), the design has no live alternative worth recording
as rejected beyond what is listed under Decisions, and the work is one
sequence for one agent. This document carries scope, decisions, canonical
impact, verification and findings; the review passes were run against it
(see Review).

## Scope and done-criteria

1. `download()` in `source/generator/workdir/archive.ts` rejects a non-2xx
   response and an empty body for every package, before extraction.
2. A failed `generate:workdir` makes `scripts/generate-package.sh` stop
   before `podman run`; the fix is at the source, not a workaround in the
   script.
3. The `podman run` invocation passes `--user "$(id -u):$(id -g)"` next to
   `--userns=keep-id` (local script only; `package-builder.yaml` out of scope).

Done when: tests cover 1 and 2 without real network failures, `npm run lint`
and `npm test` pass, and the script behaviour in 2 and 3 was observed.

## Decisions

- **Root cause of the swallowed failure** (`source/generator/workdir/index.ts`):
  the promise chain ends in `.catch((e) => console.error(...))`, which
  handles the rejection and so lets Node exit with code 0. Fixed by setting
  `process.exitCode = 1` in that catch (keeps the log line, lets pending
  work flush, no `process.exit`). `set -e` in the script then aborts at the
  `cd ... && npm run generate:workdir` line with no change to the script
  needed for requirement 2. Confirmed on the original file: exit 0; fixed: exit 1.
- **Fetch guard**: check `resource.ok` (message carries status + URL), keep
  the existing no-body check, and reject an empty (0-byte) body.
- **No partial cache file**: previously `download()` piped to `zipFile`
  directly and resolved on the body's `end` event; any failed download left a
  file at `zipFile`, and the `existsSync` cache check would then skip
  re-download forever. Now streams via `stream/promises` `pipeline` into
  `<zipFile>.part`, rejects on 0 bytes, renames on success, removes the
  `.part` on any failure. Needed for requirement 1 to be meaningful: failing
  loudly once but poisoning the cache would make the second run "succeed"
  with a bad archive.
- `download` is now exported (for the test); `fetchArchive` signature unchanged.
- **Rejected**: injecting a fetch function for mocking (changes the
  signature used by 8 package factories); a localhost `http` server is used
  in the test instead, which exercises real `node-fetch`.
- **Rejected**: patching `generate-package.sh` to detect failure (e.g. grep
  the output); would leave every other caller of `generate:workdir` (CI,
  npm scripts) with the same silent exit 0.

## Review (self-run KDMLLC pass over this document and the diff)

Change is minimal and has no duplication; the cache-poisoning fix is the one
addition beyond the literal focus and is justified above (S2: without it the
guard is bypassed on the second run). Not changed, deliberately:
`extractArchive` skips when `destDir` exists, so a failed mid-way extraction
leaves a partial directory that a rerun trusts (see Findings).

## Canonical impact

None. This repository has no `docs/arc`/`docs/dom` registers or `docs/bkg/`
and no analysis was fulfilled by this run; no architecture or domain
invariant changes.

## Verification (actually run)

- `npm test`: 11 passing (6 new in `test/archive.spec.js`: 2xx written,
  404 / 500 / empty-200 rejected with no `zipFile` or `.part` left, cached
  file not refetched, generator exits non-zero on failure).
- `npm run lint`: clean.
- `npm run generate:workdir -- -p eip`: succeeds (exit 0, 55+14 items) —
  happy path unaffected by the new download code.
- `scripts/generate-package.sh` with a stub `npm` running the real generator
  with a failing workdir: script exit 1, stub `podman` never invoked. With a
  succeeding stub: `podman run --rm --userns=keep-id --user 1000:1000 ...`.
- Not run: a real Podman render (`generate:package -- eip`); the podman
  invocation was verified against a stub only, so `--user` combined with
  `--userns=keep-id` and the `:z,U` mounts is unproven on a real Podman.

## Findings

- `extractArchive` has the same cache-trust weakness as the old `download`
  (partial `destDir` after a failed extraction is never retried). Out of
  scope here; candidate for a later hardening run.
- A 200 response with a non-zip body (e.g. an HTML error page) passes the
  new guard and fails in `extract-zip` instead — loud, but after the cached
  `zipFile` has been written, so the bad file stays cached. Same follow-up.
- `node-fetch` v3 is loaded via `require` from ts-node (CommonJS); works on
  Node 24.

## Log

- 2026-10-11: dispatched by complete-wave as W-2 (profile settled as
  `single-document`); root cause traced; fix, tests and verification done;
  status `completed`.
