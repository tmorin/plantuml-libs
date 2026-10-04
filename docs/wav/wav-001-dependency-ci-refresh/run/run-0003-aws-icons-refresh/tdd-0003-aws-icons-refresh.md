---
title: AWS icons refresh
status: active
owner: tmorin
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/wav-001-dependency-ci-refresh.md
type: tdd
run: 0003
wave: 001
---

# AWS icons refresh

# Summary

Re-pin `source/library/packages/aws/index.ts`'s AWS architecture icons
snapshot to the current upstream asset package. No PRD exists for this run
(`TDD+pln` profile, per the wave manifest's W-3 entry) — traceability below
is to the wave manifest's own focus statement rather than to PRD IDs.
Research done before drafting (logged in
`prg-0003-aws-icons-refresh.md`) confirms the pinned snapshot is genuinely
stale (`FOLDER_DATE = "07312025"`, i.e. Q3 2025, a full year behind) and
that upstream's current package is `Icon-package_07312026...zip`
(Q3 2026) — a one-release-cycle naming-convention change
(`Asset-Package_MMDDYYYY` → `Icon-package_MMDDYYYY`) on top of the date
change, already handled by the resolver script added in a prior session.

# Scope

In scope:
- Updating the two pinned constants in
  `source/library/packages/aws/index.ts` (`FOLDER_DATE`, `ICONS_URL`) to
  the current upstream package.
- Verifying the updated factory against `npm run generate:workdir` and,
  since Podman is available in this environment,
  `npm run generate:package -- aws`.
- Confirming `test/resolve-aws-icons.spec.mjs` still passes and still
  reflects the resolver's real (dual-pattern) behavior.

Out of scope:
- Rewriting `doc/howto.upgrade-aws-package.md` — stale (see `RISK-2` for
  what's wrong with it) and outside this run's `likely_paths`
  (`source/library/packages/aws/**`, `test/resolve-aws-icons.spec.mjs`);
  flagged as a wave-level finding instead.
- Changing `scripts/resolve-aws-icons.mjs`'s parsing logic — it already
  handles both the old and new upstream filename patterns (confirmed by
  reading the script and by the live run in `prg-0003`); no code change
  needed there.
- Any other package (Azure, Font Awesome, GCP, Simple Icons) — separate
  wave runs (W-4..W-7).
- Any npm dependency change — already landed by W-1.

# PRD Traceability

No PRD exists for this run. Traceability is to the wave manifest
(`docs/wav/wav-001-dependency-ci-refresh/wav-001-dependency-ci-refresh.md`,
run `W-3`) instead:

- Manifest focus "use `aws-package-upgrading` to pull the current AWS
  architecture icons asset package, or confirm the pinned snapshot is still
  current" → addressed by `DEC-1`, `IMP-1`, `FLOW-1`.
- Manifest exit evidence "Package rebuilds via `npm run generate:package --
  p aws`; pinned snapshot matches latest upstream or the run records why
  not" → addressed by `DEC-2` (verification strategy) and `Observability
  and Verification`.

# Technical Goals

- `TG-1` — `source/library/packages/aws/index.ts`'s `FOLDER_DATE` and
  `ICONS_URL` constants point at the upstream package that is actually
  current as of this run's execution date, confirmed by live resolution
  rather than by trusting the existing pinned value or a stale example.
- `TG-2` — The factory's `create()` method continues to produce the same
  four modules (`Architecture`, `Category`, `Group`, `Resource`) with no
  regression in discovered item counts attributable to this change (a
  drop would indicate the new package's internal structure silently
  diverged from what `index.ts`'s globs expect).
- `TG-3` — The change is verified against a real package build
  (`npm run generate:package -- aws`), not just `generate:workdir`,
  since Podman/Docker are available in this environment.

# Non-Goals

- Restructuring `index.ts`'s discovery logic (globs, `getItemUrn`
  normalization) — not needed, since the new package's internal subfolder
  naming convention is unchanged (see `Current State`).
- Migrating to a versioned-package-folder architecture — the repository
  already moved away from that (single `aws/` folder, no `Aws<Quarter>Factory`
  classes); reintroducing it would contradict the current, working pattern
  (see `RISK-2`).

# Assumptions

- `ASM-1` — The upstream page `https://aws.amazon.com/architecture/icons/`
  is the correct and stable discovery surface for the current package link
  (it is what `scripts/resolve-aws-icons.mjs` already targets, and it is
  what this run's live research used). Validated by: the live `curl`/script
  run in `prg-0003` returning a real, dereferenceable `.zip` URL.
- `ASM-2` — The new package's internal subfolder naming convention
  (`Architecture-Service-Icons_<date>`, `Architecture-Group-Icons_<date>`,
  `Category-Icons_<date>`, `Resource-Icons_<date>`) will remain stable for
  at least this release, since it was independently confirmed unchanged by
  direct inspection of the downloaded zip in `prg-0003`. Validated by: that
  inspection; re-validated structurally by `npm run generate:workdir`
  succeeding and item counts not collapsing to zero.
- `ASM-3` — No `.svg`/`.png` file-level renaming occurred inside the
  renamed subfolders that would break `getItemUrn`'s regex-based
  normalization. Not independently verified file-by-file (13k+ files in
  the zip); validated indirectly by `generate:workdir`'s per-module item
  counts staying in the same order of magnitude as before the change.

# Constraints

- `CON-1` — Must stay within `likely_paths`:
  `source/library/packages/aws/**`, `test/resolve-aws-icons.spec.mjs`. No
  edits to `doc/howto.upgrade-aws-package.md`, `.github/workflows/**`, or
  any other package.
- `CON-2` — Node.js >=24 <25 (`package.json` `engines`), TypeScript via
  `ts-node`, no semicolons / double quotes (Prettier config) — match
  existing file style exactly, per `CLAUDE.md`.
- `CON-3` — `npm run generate:package -- aws` requires Podman or Docker
  and the `plantuml-generator` image; both `podman` and `docker` binaries
  are present in this environment (confirmed via `which`), unlike a
  sibling run in this wave that had to skip this step. This verification
  path is therefore available and should be used rather than settled for
  partial verification (`generate:workdir` alone) — see `DEC-2` and
  `Observability and Verification`, which both rely on this constraint
  without restating it.
- `CON-4` — This repository has no `docs/adr/` register and no
  `docs/CLAUDE.md` register declaration — Canonical Impact is "Not
  applicable" (see that section).

# Current State

`source/library/packages/aws/index.ts` implements `AwsFactory`
(`PackageFactory`), the sole AWS package factory (imported once in
`source/library/index.ts`, no version suffix). It:

1. Renders `families.csv` into a bootstrap template.
2. Downloads a zip from `ICONS_URL` via `fetchArchive` (from
   `../../../generator/workdir/archive`) into a temp dir.
3. Copies four subfolders out of the extracted zip, keyed by
   `FOLDER_DATE` (currently `"07312025"`):
   `Architecture-Service-Icons_${FOLDER_DATE}` →
   `icons/architecture`, `Architecture-Group-Icons_${FOLDER_DATE}` →
   `icons/resource/Res_Group-Icons`, `Category-Icons_${FOLDER_DATE}` →
   `icons/category`, `Resource-Icons_${FOLDER_DATE}` → `icons/resource`.
4. Overlays the package's own local `icons/` folder (checked into
   `source/library/packages/aws/icons/`, containing hand-maintained
   `resource/Res_Group-Icons` and `resource/Res_General-Icons` SVGs) on
   top, `overwrite: true`.
5. Discovers items via `glob` against four patterns (architecture,
   category, group, resource) and groups via `groups.csv`.

`scripts/resolve-aws-icons.mjs` (added in a prior session, commit
`e6d5ca9a96`, fixed in `5fc952b6e3`) fetches
`https://aws.amazon.com/architecture/icons/`, locates the anchor whose
text contains "icon package", and parses its `href` against two regexes in
sequence — first the old `Asset-Package_(\d{8}).*\.zip` pattern, falling
back to the new `Icon-package_(\d{8})` pattern — into
`{ newVersion, downloadUrl, publishedDate }`. `test/resolve-aws-icons.spec.mjs`
covers this against a static fixture (`test/fixtures/valid.html`) expecting
the `Icon-package_` branch (`aws-q1-2026` / `01302026`) — i.e. the resolver
already anticipated and handles the naming-convention change this run's
live research independently confirmed has now actually happened upstream.

Live resolution run during this session's research (`node
scripts/resolve-aws-icons.mjs`, cross-checked by a direct `curl` of the
same upstream page — see `prg-0003-aws-icons-refresh.md`) returned the
real current package:
`https://d1.awsstatic.com/onedam/marketing-channels/website/public/shared/architecture-icon-release/Icon-package_07312026.5846e92413caa21490223536cc97f1269e44fa92.zip`,
published 2026-07-31. Inspecting that zip's file listing (`unzip -l`)
confirms all four expected top-level folders exist at date suffix
`07312026` with the same `<Name>-Icons_<date>` convention `index.ts`
already parses — only the top-level package filename and its hosting path
changed, not the internal structure `index.ts` depends on.

# Proposed Design

No architectural change. This is a two-constant re-pin plus verification,
following the established pattern (every prior AWS refresh has been a
`FOLDER_DATE`/`ICONS_URL` edit, not a structural one — the versioned-folder
approach in `doc/howto.upgrade-aws-package.md` was superseded by this
constants-based approach, evidenced by the current single-folder code and
by the resolver script already anticipating exactly this kind of refresh).

No component/class or sequence/activity diagram trigger applies per the
Diagram Policy: this change does not introduce or alter a relationship
between 2+ components, and the flow (fetch → extract → copy → discover)
has no new branching or failure path beyond what `fetchArchive` already
handles. Diagrams are skipped; `FLOW-1` below covers the flow textually.

- `DEC-1` — Re-pin via direct constant edit, not a resolver-script call at
  build time.
  - `Decision:` Hardcode the newly-resolved `FOLDER_DATE = "07312026"` and
    the full `ICONS_URL` (including its content hash) into `index.ts`,
    exactly as the existing pattern does, rather than having `create()`
    call `resolve-aws-icons.mjs` dynamically at generation time.
  - `Rationale:` Matches the existing, working pattern exactly (zero
    structural risk); keeps the build deterministic and offline-reproducible
    (no network dependency inside `generate:workdir`/`generate:package`
    beyond the already-present `fetchArchive` download of the pinned URL);
    `scripts/resolve-aws-icons.mjs` is explicitly a discovery/maintenance
    tool run by a human or an upgrade skill between releases, not a
    runtime dependency of the generator.
  - `Alternatives considered:` Have `index.ts` call the resolver at build
    time to always use "whatever is current". Rejected — it would make
    every `generate:workdir` run depend on a live, unauthenticated fetch to
    a marketing page whose structure already changed once in this run's
    own research; a build should not silently change behavior between two
    otherwise-identical commits.
  - `Tradeoffs:` Pin goes stale again after the next quarterly upstream
    release (Q4 2026 per upstream's own "no releases in Q4" statement,
    reconfirmed by this run's `curl`, means the earliest next drift point
    is end of January 2027) — acceptable, matches every prior cycle, and is
    exactly what this wave's W-3 run type exists to catch.
  - `Linked PRD IDs:` None (no PRD) — wave manifest `W-3` focus.

- `DEC-2` — Verification uses the real package build, not just
  `generate:workdir`.
  - `Decision:` Run `npm run generate:package -- aws` (Podman-backed)
    as the primary verification, in addition to
    `npm run generate:workdir` and the existing Mocha suite.
  - `Rationale:` `generate:workdir` only proves the manifest/discovery
    logic runs without throwing; it does not prove the generated PlantUML
    sprites actually render. `generate:package` is the wave manifest's own
    stated exit evidence for W-3, and per `CON-3` the tooling to run it is
    available here — so there is no excuse to settle for partial
    verification.
  - `Alternatives considered:` Stop at `generate:workdir` (what a
    Podman-less environment would be forced to do). Rejected — strictly
    weaker evidence, and the tooling to do better is present.
  - `Tradeoffs:` Slower (image pull/build, actual rendering) — acceptable,
    this is a Stage 11-weight verification for an unattended run.
  - `Linked PRD IDs:` None (no PRD) — wave manifest `W-3` exit evidence.

# Repository Impact

- `IMP-1` — AWS factory pin
  - `Path(s):` `source/library/packages/aws/index.ts`
  - `Change type:` modify
  - `Why impacted:` `FOLDER_DATE` and `ICONS_URL` constants must point at
    the current upstream package (`07312026` / `Icon-package_07312026...zip`)
    instead of the stale `07312025` / `Asset-Package_07312025...zip`.
  - `Linked PRD IDs:` None — wave manifest `W-3`.
  - `Risks / notes:` Pure constant edit; no change to discovery globs,
    `getItemUrn`, or the local `icons/` overlay — see `Current State` for
    why those remain valid against the new zip.

- `IMP-2` — Resolver test currency (verification only, no expected diff)
  - `Path(s):` `test/resolve-aws-icons.spec.mjs`, `scripts/resolve-aws-icons.mjs`
  - `Change type:` none expected (verification)
  - `Why impacted:` In `likely_paths`; must be re-run to confirm the
    resolver (which this run's research relied on) is still green and that
    its dual-pattern handling is still accurate against the live page's
    actual current markup. If the live page's structure has drifted from
    what the fixture encodes in some way the test doesn't cover, this is
    where it would surface.
  - `Linked PRD IDs:` None — wave manifest `W-3` focus (confirm currency).
  - `Risks / notes:` If this test fails, it indicates a resolver
    regression unrelated to the `index.ts` pin and would need to be
    triaged before relying on the resolver's live output recorded in
    `prg-0003`.

# Canonical Impact

Not applicable — no canonical registers declared (`docs/adr/`,
`docs/CLAUDE.md` register declaration). Confirmed absent by directory
listing before drafting.

# Data Model and Contracts

- `CTR-1` — AWS source package contract (external, informal)
  - `Current contract:` `index.ts` assumes the upstream zip, once
    extracted, contains exactly four top-level folders named
    `Architecture-Service-Icons_<FOLDER_DATE>`,
    `Architecture-Group-Icons_<FOLDER_DATE>`, `Category-Icons_<FOLDER_DATE>`,
    `Resource-Icons_<FOLDER_DATE>`, each holding `.svg`/`.png` files under
    further subfolders (`Arch_48`, `48`, `Arch-Category_48`, `_48`/`_48_Light`/`_32`
    suffixes) that `getItemUrn`'s regex chain strips.
  - `Proposed contract:` Unchanged in shape; only the `<FOLDER_DATE>`
    value moves from `07312025` to `07312026`. Independently verified via
    `unzip -l` on the newly downloaded zip in this run's research — all
    four folder names present at the new date suffix.
  - `Affected files:` `source/library/packages/aws/index.ts`.
  - `Migration or compatibility notes:` None needed — this is the same
    contract the codebase has always depended on; only the version
    stamp changes. If upstream changes this internal structure in a future
    release (as it already changed the external zip filename once), that
    would be a structural break requiring `index.ts` changes beyond this
    run's scope.
  - `Linked PRD IDs:` None — wave manifest `W-3`.

# Interfaces and Behavior

No change to `PackageFactory`'s interface (`getUrn()`, `create()`) or to
the shape of the `Package`/`Item` objects it returns. `AwsFactory.create()`
continues to return the same four modules
(`aws/Architecture`, `aws/Category`, `aws/Group`, `aws/Resource`) and two
examples. Error states are unchanged: a failed fetch/extract (bad URL,
unreachable host, zip format mismatch) surfaces as whatever
`fetchArchive` throws today — no new error handling is introduced or
required, since the new URL responds `200` with a valid zip (confirmed in
research).

# Flows and Processing Logic

- `FLOW-1` — AWS package generation (unchanged shape, new pin)
  - `Trigger:` `npm run generate:workdir` (direct) or
    `npm run generate:package -- aws` (Podman-wrapped, full build).
  - `Steps:` 1) `AwsFactory.create()` renders `bootstrap.tera`. 2)
    `fetchArchive` downloads `ICONS_URL` (now the `07312026` package) and
    extracts it. 3) The four dated subfolders are copied into a working
    `icons/` tree under their un-dated target names. 4) The package's own
    local `icons/` overlay is applied. 5) `glob`-based discovery produces
    `architectureItems`, `categoryItems`, `resourcesItems`, `groupItems`.
    6) Items are unified and returned as the `Package` object consumed by
    the workdir generator.
  - `Branches / failure paths:` If the zip's extracted folder names don't
    match `${FOLDER_DATE}`-suffixed expectations, `Fe.copy`'s source path
    would not exist and the step throws — this is the exact failure mode
    this run's pre-drafting research ruled out by inspecting the real zip
    contents before committing to the new `FOLDER_DATE` value, rather than
    discovering it only at generation time.
  - `Final output / rendered result:` Updated `.workdir/library.yaml` AWS
    entries (via `generate:workdir`) and, via `generate:package -- aws`,
    rendered PlantUML sprites/examples under `distribution/aws/` (actual
    path per the existing single-package build script).
  - `Linked PRD IDs:` None — wave manifest `W-3`.

# Reliability, Performance, and Scalability

No change to reliability characteristics — the fetch/extract/copy/discover
pipeline is identical; only the pinned URL/date move. The new zip is
~14MB (confirmed via `curl -w '%{size_download}'` in research), the same
order of magnitude as prior packages, so no new performance concern.

# Security and Privacy

No new external integration — same `d1.awsstatic.com` CDN host AWS has
always used for this asset (only the URL path changed, not the host).
`ICONS_URL`'s pinned value includes upstream's own content hash in the
filename, which is the existing (and only) integrity signal this pattern
has ever used; this run does not change that posture.

# Observability and Verification

- `npm test` (Mocha) — specifically confirm
  `npm test -- --grep "fetchLatestAWSIconPackage"` (i.e.
  `test/resolve-aws-icons.spec.mjs`) stays green; it is unaffected by the
  `index.ts` constant change but is in `likely_paths` and must be
  re-confirmed as part of this run.
- `npm run generate:workdir` — confirm it completes without error and that
  `.workdir/library.yaml`'s AWS entries exist with non-zero item counts
  across all four modules (Architecture/Category/Group/Resource), and that
  counts are not a drastic regression from a pre-change baseline captured
  by running `generate:workdir` once before editing `index.ts` and once
  after. For the Group module specifically, check `groupItemsFromPackage`'s
  count on its own (before it is merged with `groupItemsFromCsv`), not just
  the combined `groupItems` total — `groups.csv` is static and independent
  of `ICONS_URL`, so a zip-side regression confined to the package-sourced
  half would otherwise be masked by the CSV half alone staying non-zero.
- `npm run generate:package -- aws` — see `CON-3` for why this is
  available and required here; confirms the full render pipeline (not just
  discovery) succeeds against the new pin.
- `npm run lint` — confirm the edited file still passes (two-constant edit,
  no new lint surface expected, but cheap to re-confirm).

# Deployment and Rollout

Code-only, config-value change (two constants) with an external data
dependency (the upstream zip URL). No migration, no backward-compatibility
concern — this factory is re-run fresh on every `generate:workdir`/
`generate:package` invocation; there is no persisted prior state to
migrate. Rollback is a one-commit `git revert` of the constant edit. This
section is planning guidance only; this run does not push or open a PR
(left to the human per the dispatch brief).

# Risks and Tradeoffs

- `RISK-1` — Upstream could change the internal zip structure again in a
  future release (it already changed the external filename pattern once).
  Mitigated for *this* run by directly inspecting the actual downloaded
  zip's contents before committing to the constant values, rather than
  assuming the pattern held. Residual risk for *future* refreshes is
  inherent to depending on an unversioned third-party asset and is exactly
  why this wave treats AWS refresh as its own recurring run type.
- `RISK-2` — `doc/howto.upgrade-aws-package.md` (the doc the
  `aws-package-upgrading` skill points at) describes an architecture that
  no longer matches the repository: versioned package folders
  (`source/library/packages/aws-<version>`), a per-version
  `Aws<Quarter><Year>Factory` class, and a `package-builder.yaml` GitHub
  Actions pipeline triggered via `gh workflow run`. The actual current
  architecture is the single `source/library/packages/aws/` folder with
  `AwsFactory` and the `FOLDER_DATE`/`ICONS_URL` constants this TDD edits.
  Not fixed by this run (out of `likely_paths`); left as a wave-level
  finding in the final report so the orchestrator or a future run can
  decide whether to update it (see `DEF-1`). Risk if left unaddressed: a
  future agent invoking the `aws-package-upgrading` skill literally
  (rather than checking repository reality first, as this run did) could
  attempt to rename `source/library/packages/aws/` into a versioned
  folder, undoing the current architecture.
- `RISK-5` — `npm run generate:package -- aws` exits non-zero in this
  environment for a reason unrelated to this run's change: AWS declares
  two examples ("Chef Automate Architecture on AWS", "Git to S3 Webhooks")
  whose `.tera` templates do not exist anywhere in
  `source/library/packages/aws/templates/` — a pre-existing gap, confirmed
  via direct inspection and via `git diff` showing the `examples:` array
  itself untouched by this run. This is more than cosmetic: the render
  pipeline's "Render Atomic Templates (Other)" phase aborts *entirely*
  once its thread pool hits these two fatal errors, which also aborts most
  of the real icon content's PNG (and some `.puml`/`.md`) rendering for
  that same phase — confirmed by comparing the build's output against the
  previously-committed `distribution/aws` baseline via `git status`
  (thousands of previously-good `.png` files came back deleted and were
  not regenerated, not just the two example files). So this run's full
  Podman build cannot cleanly regenerate `distribution/aws` while this
  pre-existing defect stands. Not fixed by this run (would require
  authoring new example `.tera` content, a different scope); the broken
  partial build output was reverted (`git checkout`/`git clean`) rather
  than committed. Flagged for the final report as a real, outstanding gap
  in this run's full-render verification, not resolved here.
- `RISK-6` — `scripts/generate-package.sh` does not actually abort when
  its own internal `npm run generate:workdir -- -p "$1"` step fails (its
  `set -e` does not trip, because a Node/`ts-node` uncaught rejection is
  logged but does not propagate a non-zero process exit code here) — it
  proceeds to the Podman render step regardless, using whatever
  `.workdir/library.yaml` happens to already be on disk. In this run that
  was harmless (the on-disk manifest was already the correct post-change
  state from a prior successful run), but it is a latent correctness gap:
  a stale or wrong `library.yaml` could be silently rendered without the
  script ever failing loudly. Not fixed by this run (`scripts/` is out of
  `likely_paths`); flagged for the final report.
- `RISK-4` — The wave manifest's own stated exit evidence for W-3 (and
  this session's `CLAUDE.md` context, before any sibling run's uncommitted
  fix) documents `npm run generate:package -- -p aws` as the invocation.
  Verified directly (`bash -x scripts/generate-package.sh -p aws`) that
  this is wrong: the script treats its own `$1` as the bare package name
  and prepends `-p` itself when calling `generate:workdir` internally, so
  passing `-p aws` makes `$1="-p"` and the script ends up running
  `generate:workdir -- -p -p` and `podman run ... --urn=-p`. The correct
  invocation is the bare package name, `npm run generate:package -- aws`
  — used throughout this TDD/pln instead of the wave manifest's literal
  text. Not this run's bug to fix in `CLAUDE.md` itself (out of
  `likely_paths`; a sibling run had already independently made the same
  correction there, uncommitted, at time of observation) — flagged for the
  final report.
- `RISK-3` — `test/resolve-aws-icons.spec.mjs`'s fixture
  (`test/fixtures/valid.html`, expecting `aws-q1-2026`) will drift further
  from reality (now two releases behind: live is Q3 2026) without blocking
  anything, since it's a static fixture by design. Not a defect — fixtures
  for HTML-parsing tests are expected to be static — but worth noting so a
  future reader doesn't mistake the fixture's `aws-q1-2026` for the
  real current version (it was already historical, per this run's
  research, before this run even started).

# Open Questions

None — the two items the wave dispatch brief flagged as open (whether the
naming-convention change breaks the resolver, and whether the internal zip
structure changed) were both resolved during pre-drafting research (see
`prg-0003-aws-icons-refresh.md`): the resolver already handles the new
pattern (prior-session work), and the internal structure is unchanged.

# Deferred Work

- `DEF-1` — Updating `doc/howto.upgrade-aws-package.md` to match the
  actual current architecture. See `RISK-2` for what's stale about it; out
  of this run's `likely_paths`.

# File Placement and Frontmatter

Saved at
`docs/wav/wav-001-dependency-ci-refresh/run/run-0003-aws-icons-refresh/tdd-0003-aws-icons-refresh.md`,
following this wave's established run-directory convention (matching
`run-0001-npm-dependency-upgrade`'s sibling TDD). Frontmatter: `title`,
`status`, `owner`, `date`, `related`, `type: tdd`, plus `run: 0003` and
`wave: 001` per this repository's wave/run convention (precedent:
`tdd-0001-npm-dependency-upgrade.md`).
