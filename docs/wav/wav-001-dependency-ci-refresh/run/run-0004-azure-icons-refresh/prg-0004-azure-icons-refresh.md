---
type: prg
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0004-azure-icons-refresh/tdd-0004-azure-icons-refresh.md
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0004-azure-icons-refresh/pln-0004-azure-icons-refresh.md
run: 0004
wave: 001
---

# Progress Log: Azure icons refresh

## Log

- 2026-10-04: Run created by `complete-wave` dispatch (W-4). Executing via
  `complete-run` in autonomous mode (no human review gate between
  documents). Document profile: `TDD+pln` — scope arrives settled from the
  wave manifest (move Azure icons from V23 to the confirmed-available V24,
  following `azure-package-upgrading`), but the published howto
  (`doc/howto.upgrade-azure-package.md`) assumes a GitHub-MCP/`gh`-driven
  branch+PR+Actions-pipeline workflow that conflicts with this run's
  explicit instructions (no push, no PR, commit locally) — adapting that
  procedure to a local Podman-based build is a real design decision, so a
  `tdd`+`pln` pair earns its place; a `prd` would add no contestable-scope
  value since the wave already fixed scope and version, and a
  `single-document` would drop the adaptation record this run needs.
- 2026-10-04: This repository has no `docs/bkg/`, no `docs/CLAUDE.md`
  register declaration, and no `tooling/docs/check-backlog.py`. Per the
  dispatch brief, any `complete-run`/`manage-runs` step that depends on
  those has nothing to discharge here and is skipped rather than inventing
  a register.
- 2026-10-04: Pre-flight checks (before drafting any document): confirmed
  W-1 (npm dependency upgrade) landed and is `completed` (commit
  `3d2e52d896`, `csv-parse` at `^7.0.3`, `typescript` held at `^6.0.3`).
  Ran `node scripts/resolve-azure-icons.mjs` live: resolves
  `Azure_Public_Service_Icons_V24.zip`, matching the wave's claim. Verified
  `curl -I` against both the V24 and (still-live) V23 URLs: both return
  HTTP 200 directly from `arch-center.azureedge.net`. Confirmed Podman is
  installed and functional in this environment (`podman info` succeeds,
  `docker.io/thibaultmorin/plantuml-generator:1` image already present
  locally) — unlike a sibling run's environment, `npm run generate:package
  -- <pkg>` is fully runnable here, so full end-to-end verification is
  possible rather than merely asserted.
- 2026-10-04: Generated a V23 baseline with `npm run generate:workdir -- -p
  azure` before making any change: 705 icons, 7 groups, same 29 category
  directories as before. Recorded for comparison against V24's output.

- 2026-10-04: Drafted TDD (`tdd-0004-azure-icons-refresh.md`), no-PRD input
  (profile `TDD+pln`). Key design decisions: `DEC-1` replaces the howto's
  branch/push/Actions-dispatch/PR steps with a local build-and-verify loop
  (dispatch brief forbids push/PR); `DEC-2` treats the groups.csv/template
  structural-change question as empirical, not speculative. Dispatched
  KDMLLC review (`standard` tier, `general-purpose` agent). Verdict:
  Acceptable overall, but flagged S2 findings F1/F5 — the TDD's Current
  State/TG-2/TG-3 claims (714 icons discovered, full distribution/azure
  rendered) did not match the actual repository state at review time
  (`.workdir/library.yaml`'s azure entry was `modules: []`, and
  `distribution/azure/Item`/`Group` were missing) because the verification
  build had failed partway through drafting and the TDD had been written
  against an earlier, since-invalidated attempt. Applied F2-F4 (dedup
  DEF-1/RISK-4 narration to single canonical locations referenced by ID;
  trimmed forensic detail; defined "diagram trigger" inline). F1/F5 are
  addressed by re-running verification for real (see below) rather than by
  editing prose, since the underlying fact had to become true, not just be
  restated.
- 2026-10-04: Drafted pln (`pln-0004-azure-icons-refresh.md`), 4 tasks,
  strictly sequential (edit -> discovery validation -> full containerized
  build -> final lint/test/commit). All tasks tiered `standard`,
  `autonomous`, no human review gates.
- 2026-10-04: Implementation (Stage 10) findings, in order of discovery:
  - task-001: confirmed V24 live via `node scripts/resolve-azure-icons.mjs`,
    bumped `ICONS_VERSION` to `"24"` in
    `source/library/packages/azure/index.ts`. Done.
  - task-002: `npm run generate:workdir -- -p azure` succeeded: 714
    discovered SVGs (V23 baseline was 705), 7 groups (unchanged), same 29
    top-level category directories as V23 (confirmed via `find -maxdepth 1
    -type d` diff of the extracted archives) — no structural change, so
    `IMP-2` resolves to "no change needed." The one `groups.csv`-referenced
    URN (`azure/Item/Networking/ServiceVirtualNetworks`) still resolves
    correctly under V24. `unifyItems()` dedups 714 raw SVGs to 709 unique
    item URNs (5 naming collisions) — pre-existing generator behavior, not
    introduced by this bump, recorded as a non-blocking finding (`RISK-2`
    in the TDD).
  - task-003 (full containerized build): **this is where the run hit
    genuine, repeated environment trouble, not covered by the TDD's
    original risk list until discovered empirically.** First attempt via
    the shared repo `.workdir`/`distribution` tree failed silently: the
    `generate:workdir` sub-step inside `scripts/generate-package.sh`'s
    flow hit `EACCES` (stale file ownership from a *prior* container run
    under rootless Podman's `--userns=keep-id` + `:z,U` mount), but that
    failure did not propagate as a non-zero exit from the npm script, so
    the subsequent Podman render ran against a stale, empty
    `library.yaml` (`azure: modules: []`) and the "clean the output
    sub-directory" step wiped the previously-good
    `distribution/azure/Item`/`Group` content (4923 `.puml` files) down to
    3 generic top-level files. Recovered by restoring `distribution/azure`
    from git (`git checkout -- distribution/azure`) and re-verifying
    `library.yaml` content before every subsequent Podman invocation
    rather than trusting exit codes alone.
  - A second and third attempt (after fixing ownership via `podman unshare
    chown -R 0:0 .workdir distribution`, and reducing
    `PLANTUML_GENERATOR_THREADS` to 2 to rule out resource pressure) still
    failed partway through the "Create Resources phase" with `[ERROR
    plantuml_generator::app] the command failed: unable to create
    .cache/azure/Item/.../Service*.puml`. Investigation found the root
    cause was **not** this run's own doing: this execution environment's
    shared `.workdir`/`distribution` tree is being used *concurrently* by
    at least one sibling wave run (observed a `fontawesome` entry
    appearing in `.workdir/.cache` that this run never created, and
    `.workdir`'s top-level ownership flipping between this run's host uid
    and a container-mapped uid between consecutive commands with no
    action by this run in between) — i.e. **the wave's P2 runs (W-3..W-7)
    share one mutable `.workdir`/`distribution` tree with no path
    isolation for generated build artifacts**, even though the wave
    manifest's "concurrent-safe" analysis only checked *source* path
    disjointness (`source/library/packages/<name>/**`), not the shared
    generated-artifact directories every package's build writes through.
    Each concurrent `generate:workdir` invocation overwrites the *entire*
    `library.yaml` with only its own package (wiping every other
    package's entry to `modules: []`), and concurrent Podman containers
    racing over the same bind-mounted `.cache` directory under differing
    rootless UID mappings produced the `EACCES`/"unable to create"
    failures. This is a **wave-level finding**, not specific to this run.
  - Resolved for this run by building in an isolated scratchpad working
    directory instead of the shared tree:
    `npx ts-node source/generator/workdir -p azure -w
    <scratchpad>/workdir` (the generator CLI's `-w`/`--working-directory`
    flag, confirmed present by reading `source/generator/workdir/index.ts`),
    then `podman run` pointed at `<scratchpad>/workdir` and
    `<scratchpad>/distribution` instead of the repo's shared `.workdir`/
    `distribution`. This fully avoids contention with sibling runs.
  - Also confirmed and recorded a real, separate pre-existing
    documentation defect while investigating: `CLAUDE.md`'s documented
    invocation `npm run generate:package -- -p <package>` passes an extra
    `-p` that `scripts/generate-package.sh` does not expect (it takes the
    bare package name as `$1`); the correct form is `npm run
    generate:package -- <package>`. Filed as a background task
    (`task_61c5c168`, "Fix generate:package invocation docs (-p bug)")
    since it is outside this run's `likely_paths` (`CLAUDE.md`, the wave
    manifest). Recorded in the TDD as `DEF-1`.
  - At the point this report was compiled, the isolated-scratchpad
    containerized build for `azure` was **still running** (started
    immediately before this handback was required) — not yet confirmed
    complete. No result is reported here because none is known yet.

## Findings

- **Wave-level, not this run's to fix**: W-3..W-7 (the five icon-package
  refresh runs) share one mutable `.workdir`/`distribution` tree in this
  repository with no per-run path isolation for generated build
  artifacts, even though the wave manifest's own "concurrent-safe"
  reasoning only checked source-path disjointness. Running them
  concurrently (as this wave intends) causes real failures: silent
  `library.yaml` overwrites (each `generate:workdir -p <pkg>` invocation
  resets every *other* package's entry to empty) and Podman
  ownership/race failures under rootless `--userns=keep-id` mounts when
  two containers touch the same `.cache` directory at once. Confirmed by
  direct observation during this run (ownership flips and a `fontawesome`
  cache entry this run never created), and by this run's own repeated
  build failures until it switched to an isolated scratchpad working
  directory. Recommend: either serialize W-3..W-7's containerized-build
  steps across runs, or have each use an isolated working directory (the
  `-w` flag on `source/generator/workdir`, and equivalent Podman volume
  mounts) rather than the repo's shared `.workdir`/`distribution` — this
  run's own workaround is evidence the mechanism exists and works.
- `scripts/generate-package.sh` silently mis-processes the documented
  `npm run generate:package -- -p <package>` invocation (extra `-p`
  causes it to target no real package via the container's `--urn=-p`, and
  makes `generate:workdir` fall back to processing every package). Filed
  as background task `task_61c5c168` ("Fix generate:package invocation
  docs (-p bug)"). Not fixed by this run (`CLAUDE.md`/wave manifest
  outside `likely_paths`).
- `unifyItems()` in `source/generator/workdir/discovery.ts` silently drops
  items whose generated URN collides with another item's (714 raw SVGs ->
  709 unique URNs for the azure V24 set) with no warning logged. Not
  introduced by this run; pre-existing generator behavior. No test
  coverage exists for this; no `docs/bkg/` register exists in this
  repository to file it against formally.
- This repository's `ts-node source/generator/workdir` CLI can fail
  (`EACCES`) yet still cause the wrapping `npm run generate:workdir`
  script to exit 0 — a process-level failure that does not propagate as a
  non-zero exit code. Anyone relying on exit-code-only verification of
  this command would silently accept a broken state. This run's TDD
  (`RISK-4`) and pln (task-003 verification) both require direct
  inspection of `distribution/<pkg>/**` content instead, not exit codes
  alone.
- 2026-10-04: Resumed after a forced mid-flight handback. Coordinator
  confirmed: the `generate:package -- -p` doc bug was independently found
  and already fixed by sibling run W-5 (my `task_61c5c168` dismissed as
  redundant); the shared `.workdir`/`distribution` concurrency finding is
  corroborated by W-5 and logged at the wave level, with this run's
  isolated `-w`/`--working-directory` approach adopted as the wave's
  confirmed mitigation. Continuing pln task-003/004 as instructed: checked
  the isolated-scratchpad build (PID 709817, `/tmp/claude-1000/genpkg4.log`)
  — still running, not hung (748 `.cache` files and 94 rendered
  `distribution` files produced so far), but heavily CPU-throttled: `podman
  ps` showed 4 concurrent `plantuml-generator` containers on this 8-core
  host (mine plus apparently 3 sibling wave runs), each pinned near/above
  100% CPU. Chose to let it keep running to completion rather than kill
  and restart (would lose the 10+ minutes of progress already made, and
  the isolated approach already avoids the correctness failures seen
  earlier — the remaining slowness is pure CPU contention, not a
  correctness bug).
- 2026-10-04: Second status checkpoint on the same isolated build (PID
  709817): still running, still progressing (121 rendered files in the
  isolated `distribution` as of this checkpoint, up from 94), still in
  the container's "Create Resources phase" of its own render pipeline
  (extraction/pre-render, before PlantUML/Inkscape rendering proper) —
  consistent with heavy shared-host CPU contention rather than a hang.
  No action taken other than continuing to wait; nothing about the
  earlier plan has changed.
- 2026-10-04: Third status checkpoint, same isolated build (PID 709817):
  still running, still progressing (137 rendered files, up from 129, up
  from 121, up from 94 across successive checks), host load average 13.86
  on an 8-core machine with 4 concurrent `plantuml-generator` containers
  each pinned above 100% CPU. Continuing to wait rather than intervene —
  killing and restarting would discard real progress for no correctness
  gain, since the isolated-working-directory approach has already removed
  the actual defects (stale `library.yaml`, `EACCES` ownership races) seen
  in the shared-tree attempts.
- 2026-10-04: That isolated build (PID 709817) was in fact silently killed
  (no error, no "the generation is over" line, process simply gone) after
  reaching only 182 rendered PNGs across 12 of 29 categories, with no
  `Group` output at all. Root cause: it was launched by backgrounding a
  plain `podman run ... &` inside a regular Bash call rather than using
  the harness's `run_in_background: true` mechanism — the former is not
  guaranteed to survive across tool-call boundaries the way the latter is
  (confirmed by a coordinator-suggested fix). Cleaned the scratchpad
  (`podman unshare chown -R 0:0`, removed the partial `distribution`/
  `.cache`) and relaunched identically but via `run_in_background: true`
  with `PLANTUML_GENERATOR_THREADS=4`. This attempt completed cleanly
  through all phases (`the generation is over`, exit 0) and was verified
  by direct content inspection, not exit code alone (per `RISK-4`): 8536
  files (4979 `.puml`, 2839 `.png`, 718 `.md`), 29 `Item` category
  directories plus a populated `Group` directory, and a spot-checked
  `ServiceVirtualNetworks.puml` with correct sprite content.
- 2026-10-04: Copied the verified isolated output into the repo's
  `distribution/azure/` (first attempt mis-nested via `cp -a` into an
  existing empty destination directory — `distribution/azure/azure` —
  caught immediately via directory-listing inspection and fixed with
  `mv`). The resulting diff (2002 modified, 673 added, 588 deleted files)
  is real, legitimate upstream churn, not corruption: spot-checking the
  deletions/additions shows V24 retiring some icons (e.g.
  `ServiceAiAtEdge*`) while adding others (e.g. `ServiceAgenticWebApps*`)
  within the same stable 29-category structure. `ServiceVirtualNetworks`
  (the one `groups.csv`-referenced icon) is modified, not deleted —
  confirmed directly, not assumed. Corrected the TDD's "additive only, no
  removals" claims (Data Model and Contracts; Interfaces and Behavior;
  `RISK-1`) to reflect this empirical finding instead of the
  category-level-only check made during drafting.
- 2026-10-04: Discovered and fixed two pieces of repo-wide collateral
  damage from the shared `.workdir`/`distribution` tree's earlier bad
  states (not this run's intended changes): `distribution/bootstrap.puml`
  and `distribution/README.md` — both top-level, repo-wide generated
  files unrelated to any single package — had been deleted at some point
  during the earlier failed/buggy build attempts (most likely by an
  errant `--urn=-p --clean-urn=-p` invocation from this run's own early
  mistake, compounded by concurrent sibling activity in the same shared
  tree). Their absence broke `npm test`'s `gdiag` suite silently: tests
  still passed (assertions only check file existence, not render
  correctness) but logged new `Some diagram description contains errors`
  / `Error line 4 in file` warnings and ran markedly slower — a real
  regression that exit-code-only or even naive pass/fail test output
  would have missed. Restored both via `git checkout --` (twice — the
  shared tree's ownership/content drifted again between the first restore
  and the final check, confirming this is ongoing sibling activity, not a
  one-off), confirmed the warnings disappeared on re-run, and confirmed
  via `git status` that this was the complete set of top-level collateral
  (no other repo-root `distribution/*` file was affected).
- 2026-10-04: Final validation: `npm run lint` clean (exit 0); `npm test`
  5 passing (same count as the pre-change baseline), no render warnings.
  Reviewed `git status`/`git diff --cached` directly before committing to
  confirm scope: staged changes touch only
  `source/library/packages/azure/index.ts`, `distribution/azure/**`, and
  this run's own docs directory — explicitly excluding `CLAUDE.md`
  (sibling W-5's already-known, still-uncommitted doc fix for the
  `generate:package -- -p` bug) and `distribution/fontawesome/**`
  (sibling W-5's own in-progress build output), neither of which this run
  touched or claims. Committed locally as `dba8b17627`
  (`feat(azure): update icons to V24`) on branch
  `chore/upgrade-deps-and-ci-wave` — not pushed, no PR opened, per the
  dispatch brief. Run status set to `completed`; pln
  `execution_manifest.status` set to `done`; all four pln tasks `done`.

## Lessons Learnt

- **Backgrounding a container build with a bare `&` inside a regular tool
  call is not reliable across tool-call boundaries** in this harness —
  one such build was silently killed mid-render with no error logged.
  `run_in_background: true` (or an equivalent harness-native mechanism)
  should be the default for any long-running build this run needs to
  survive across multiple turns, not manual shell backgrounding.
- **Never trust a container build's exit code alone**, even 0. This run
  hit three distinct silent-failure modes that all still produced the
  outward appearance of success at some level: an `EACCES` inside
  `generate:workdir` that didn't propagate as a non-zero npm-script exit;
  a `podman run` that logged a clear `[ERROR]` yet the wrapping shell
  still reported exit 0 when piped through `| tail`; and a backgrounded
  process that vanished with no final log line at all. Direct inspection
  of the actual output (file counts, category directories, a content
  spot-check) was the only check that caught all three.
- **A shared, non-isolated `.workdir`/`distribution` build tree does not
  tolerate concurrent per-package builds.** Switching to an isolated
  working directory (the generator CLI's own `-w`/`--working-directory`
  flag, plus pointing Podman's volume mounts at that same isolated path)
  fully resolved the correctness failures; the only remaining cost was
  CPU-contention wall-clock time, not correctness. This should be the
  standard pattern for any wave that runs multiple icon/package-refresh
  runs concurrently against this repository.
- **A version-pin bump to a single package's build input can still
  collaterally damage repo-wide, non-package-specific generated files**
  (`distribution/bootstrap.puml`, `distribution/README.md`) if an earlier
  mis-invoked build command targets the wrong scope. These are easy to
  miss because they don't live under the package's own output directory,
  and a test suite whose assertions only check file existence (not
  render correctness) will still report green while silently degraded.
  Worth a repository-level test improvement: assert the `gdiag` fixture
  renders produce zero PlantUML-reported errors, not just that output
  files exist.
