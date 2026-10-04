---
title: Simple Icons package refresh
status: active
owner: tcmorin@gmail.com
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/wav-001-dependency-ci-refresh.md
  - docs/wav/wav-001-dependency-ci-refresh/wbc-001-dependency-ci-refresh.md
run: 0007
wave: 001
type: tdd
---

# Title

Simple Icons package refresh for `@tmorin/plantuml-libs` (wave 001, run W-7)

# Summary

Move the Simple Icons library package's pinned upstream version from
`16.9.0` to the confirmed-latest `16.34.0`, following
`.claude/skills/simpleicons-package-upgrading/SKILL.md` and its underlying
`doc/howto.upgrade-simpleicons-package.md`, adapted to this run's
local-commit-only working method (no branch push, no PR, no GitHub Actions
dispatch — see Proposed Design). No PRD exists for this run —
**traceability is incomplete**; requirements below are sourced directly
from the wave manifest
(`docs/wav/wav-001-dependency-ci-refresh/wav-001-dependency-ci-refresh.md`,
run `W-7`) and its business case, per this run's `TDD+pln` document profile
(infra-only work, scope already settled by the wave, no `prd` needed).

# Scope

In scope: `source/library/packages/simpleicons/index.ts`'s
`ICONS_VERSION` constant and any mechanical follow-on change the new
archive structure forces (glob pattern in `discover()`, path parsing in
item/URN construction, or the `.tera` templates in
`source/templates/simpleicons/`) — but only if the regenerated workdir
actually shows such a need, not speculatively.

Out of scope: any other library package (wave runs W-3..W-6), the
`.github/workflows/**` CI/CD changes (wave run W-2), the website/ETL
generator architecture, and the release/publishing process. Pushing a
branch, opening a PR, or dispatching the `package-builder` GitHub Actions
workflow — all described in `doc/howto.upgrade-simpleicons-package.md`
steps 1, 5-7, 9 — are explicitly out of scope for this run; the dispatch
brief directs committing locally only and leaving push/PR to the human.

# PRD Traceability

No PRD exists for this run (`TDD+pln` profile). Requirements are sourced
directly from:

- Wave manifest `W-7` entry: "use `simpleicons-package-upgrading` to move
  Simple Icons from 16.9.0 to the confirmed-available 16.34.0."
- Phase P2 table exit evidence: "Package rebuilds via `npm run
  generate:package -- -p simpleicons`; pinned version is 16.34.0."
- Wave Completion Criteria: "Each of AWS, Azure, Font Awesome, GCP, and
  Simple Icons packages' pinned upstream version/date matches the latest
  available at the time its run executed, or the run recorded why not."

All three are addressed by this TDD; none are unresolved.

# Technical Goals

- `TG-1` — `source/library/packages/simpleicons/index.ts`'s
  `ICONS_VERSION` constant is updated from `"16.9.0"` to `"16.34.0"`,
  confirmed as the actual latest published Simple Icons release at run
  time (not merely the wave's wave-authoring-time snapshot).
- `TG-2` — `npm run generate:workdir -- -p simpleicons` succeeds against
  the new version and produces a non-decreasing, materially updated item
  count in `.workdir/library.yaml`'s `simpleicons` entry relative to the
  `16.9.0` baseline (27 modules / 3397 items).
- `TG-3` — The full build, `npm run generate:package -- -p simpleicons`
  (workdir generation + Podman-rendered PlantUML output into
  `distribution/simpleicons/`), succeeds and produces a refreshed
  `distribution/simpleicons/README.md` with an updated module/item count.
- `TG-4` — `npm run lint` and `npm test` both pass against the changed
  source tree.

# Non-Goals

- Does not touch any other package's factory (`source/library/packages/{aws,azure,fontawesome,gcp,c4model,c4k8s,domainstorytelling,eventstorming}/**`).
- Does not change `source/templates/simpleicons/*.tera` unless the 16.34.0
  archive's actual directory structure (observed empirically, not assumed)
  requires it.
- Does not change `.github/workflows/**` (wave run W-2's scope).
- Does not push a branch, open a PR, or trigger any GitHub Actions
  workflow — this run commits locally only, per the dispatch brief.

# Assumptions

- `ASM-1` — Simple Icons' GitHub release tags match its npm package
  versions one-to-one (the factory fetches
  `https://github.com/simple-icons/simple-icons/archive/${ICONS_VERSION}.zip`,
  a GitHub tag archive, not an npm tarball). Validated indirectly: `npm
  view simple-icons version` reports `16.34.0` and `npm view simple-icons
  versions --json` shows an unbroken `16.9.0 -> 16.34.0` chain with no
  gaps; the project's own prior pin (`16.9.0`) already relies on this same
  tag/version correspondence, so this is an established, not new,
  assumption. Final confirmation is empirical: `fetchArchive` either
  succeeds against the `16.34.0` tag or it doesn't (`TG-2`'s gate).
- `ASM-2` — Simple Icons has kept a stable archive layout
  (`simple-icons-<version>/icons/*.svg`, flat, one SVG per icon) across the
  16.9.0 → 16.34.0 range, so `discover()`'s glob
  (`*/icons/**/*.svg`) and `getItemUrn()`'s path-based naming need no
  change. This is the project's own working assumption baked into the
  current code (no version-conditional logic exists), consistent with
  Simple Icons' changelog practice of adding/renaming individual icons
  rather than restructuring the archive on minor releases. Validated
  empirically by `TG-2`: if the glob now yields zero or a wildly
  implausible count, this assumption is wrong and `discover()` needs a
  fix, which is in scope per Scope's "mechanical follow-on change" clause.
- `ASM-3` — This run's environment has working Podman with the
  `docker.io/thibaultmorin/plantuml-generator:1` image already pulled
  (confirmed: `podman info` and `docker info` both succeed; `podman images`
  lists the tag), so `TG-3`'s full-build verification is achievable here —
  unlike a sibling wave run that had to document Podman as unavailable.
  This is a point-in-time fact about this run's execution environment, not
  a repository constant.

# Constraints

- `CON-1` — `source/library/packages/simpleicons/index.ts` must keep its
  existing `PackageFactory` shape (`getUrn()`, `create()`) and house style
  (no semicolons, double quotes, aliased `import P from "path"`,
  `readonly`-free since this class has no stored properties) — match
  the surrounding file rather than refactoring it.
- `CON-2` — `./.workdir`, `./distribution`, and `./public` are generated
  output, never hand-edited (per `doc/howto.upgrade-simpleicons-package.md`'s
  own Notes section, consistent with this repository's generator
  architecture — `source/generator/workdir` and `source/generator/website`
  own those directories).
- `CON-3` — `scripts/generate-package.sh` hardcodes `podman run` (not
  `docker run`); this run's full-build verification (`TG-3`) must go
  through `npm run generate:package -- -p simpleicons`, not a hand-rolled
  `docker run` invocation, to stay consistent with how every other package
  in this repository is built and with how CI builds it.
- `CON-4` — Only one package (`simpleicons`) rebuilds via `-p simpleicons`;
  the full `scripts/generate-library.sh` (all packages + website) is not
  required and is explicitly out of scope — rebuilding unrelated packages
  would touch files outside this run's `likely_paths`.

# Current State

- `source/library/packages/simpleicons/index.ts`: single factory class
  `SimpleiconsFactory`. `ICONS_VERSION = "16.9.0"` (line 13) builds
  `ICONS_URL` as a GitHub tag archive URL. `create()` calls `fetchArchive`
  to download+extract that archive into `context.pkgTmpDirPath`, then
  `discover()` globs `*/icons/**/*.svg` inside it, building one module per
  first-letter-of-name (`simpleicons/<letter>`) with one `Item` per icon
  (`icon.type: "Source"`, `shape.type: "Icon"`). No `csv-parse` import —
  confirmed by reading the file's import list; this package is unaffected
  by W-1's `csv-parse` 6→7 bump.
- `source/templates/simpleicons/`: `bootstrap.tera` and
  `documentation.tera`, referenced by `create()`'s `templates.bootstrap`/
  `templates.documentation` fields. Not expected to need changes per
  `ASM-2`.
- Baseline output at `16.9.0` (captured before this run's change):
  `distribution/simpleicons/README.md` reports 27 modules, 3397 items
  total; `.workdir/library.yaml` contains one `urn: simpleicons` package
  entry generated from the `16.9.0` pin (this is generated output and its
  line position shifts on every regeneration, so no line number is cited).
- `npm view simple-icons version` → `16.34.0`; `npm view simple-icons
  versions --json` lists every minor from `16.9.0` through `16.34.0` with
  no gaps, confirming `16.34.0` is both latest and directly reachable from
  the current pin (not a skipped-major jump).
- Wave run `W-1` (npm dependency upgrade) is `completed`; `npm run
  generate:workdir` already ran clean against the upgraded npm dependency
  set, including the `csv-parse` 6→7 bump — irrelevant to this package
  directly (no `csv-parse` import here) but confirms the shared generator
  pipeline (`source/generator/workdir/**`) this package's `create()` runs
  through is itself in a known-good state.
- No `docs/adr/` register, no `docs/CLAUDE.md` register declaration, and
  no `docs/bkg/` directory exist in this repository (confirmed by
  directory listing) — no binding ADRs to check, no canonical/backlog
  register to update.

# Proposed Design

Follow `.claude/skills/simpleicons-package-upgrading/SKILL.md`'s referenced
procedure (`doc/howto.upgrade-simpleicons-package.md`), but substitute this
run's own working method for the parts of that how-to written for a
different (GitHub-MCP/branch/PR/CI-dispatch) operating context. No new
component, service, or architectural boundary is introduced — this is a
one-constant version bump plus a generated-output rebuild, so no
component/class diagram applies (diagram trigger 1 does not fire).

`DEC-1` — Bump `ICONS_VERSION` directly in place, no branch/PR workflow.

- Decision: Edit `source/library/packages/simpleicons/index.ts` line 13 to
  `const ICONS_VERSION = "16.34.0"` on the current working branch
  (`chore/upgrade-deps-and-ci-wave`), committing locally when done — no
  `feat/upgrade-simpleicons-icons` branch, no push, no PR, no
  `package-builder` GitHub Actions dispatch (how-to steps 1, 5-7, 9 are
  superseded by this run's dispatch brief: "Do not git push and do not
  open a pull request").
- Rationale: the how-to's branch/PR/CI-dispatch flow assumes a different
  agent operating context (a standalone GitHub-MCP-driven maintenance bot
  working against `master` via PR); this run instead executes inside an
  already-checked-out wave batch branch under `complete-run`/`complete-wave`
  orchestration, which commits locally and leaves push/PR to the human per
  explicit instruction.
- Alternatives considered: following the how-to's branch/PR flow literally
  — rejected, directly contradicts the dispatch brief's "do not push, do
  not open a PR" instruction and would create an orphan branch nothing in
  this wave tracks.
- Tradeoffs: none of substance — the how-to's GitHub-dispatch path exists
  to let the *generated* `distribution/` output be produced by CI instead
  of locally; this run produces it locally instead (`DEC-2`), which is a
  strictly stronger verification signal (this session observes the actual
  build output, rather than trusting a CI run it can't inspect for
  "generated a commit it wants to override" per the how-to's own
  Troubleshooting section).
- Linked requirements: `TG-1`; wave `W-7` focus line.

`DEC-2` — Verify via the real local build pipeline
(`npm run generate:package -- -p simpleicons`), not just
`generate:workdir`, because Podman is available in this environment.

- Decision: Run `npm run generate:workdir -- -p simpleicons` first as a
  fast, container-free check (confirms `fetchArchive` succeeds against the
  new tag and `discover()` still finds a plausible icon set), then run the
  full `npm run generate:package -- -p simpleicons` (which internally
  re-runs `generate:workdir` scoped to just the `simpleicons` package, per
  the `-p` argument `scripts/generate-package.sh` forwards, then renders
  via `podman run ... plantuml-generator:1 ... --urn=simpleicons
  --clean-urn=simpleicons`) to produce the real `distribution/simpleicons/`
  output and confirm it renders without error.
- Rationale: this environment's `docker info`/`podman info` both succeed
  and the `plantuml-generator:1` image is already pulled locally (`ASM-3`)
  — the sibling-run caveat in the dispatch brief ("if Podman/Docker is
  unavailable ... say so explicitly") does not apply here, so the stronger
  verification is both possible and required by `TG-3`.
- Alternatives considered: stopping at `generate:workdir` only (what the
  Podman-unavailable sibling run had to do) — rejected as insufficient
  here specifically because it *is* available; settling for the weaker
  check when the stronger one is reachable would under-verify `TG-3`.
- Tradeoffs: slower (container build/render takes longer than
  `ts-node`-only workdir generation) but bounded and one-time.
- Linked requirements: `TG-2`, `TG-3`.

`DEC-3` — Treat a changed item/module count as expected and verify
plausibility, not regression, unless the count decreases or collapses to
near-zero.

- Decision: After `TG-2`/`TG-3` run, compare the new
  `distribution/simpleicons/README.md` module/item totals against the
  `16.9.0` baseline (27 modules, 3397 items). An increase is the expected,
  passing outcome (Simple Icons adds icons regularly across 25 minor
  releases 16.9.0→16.34.0); a count that decreases, or drops to
  near-zero/zero, is treated as a build defect requiring investigation
  (likely `ASM-2` broken) before this run is considered done.
- Rationale: matches the how-to's own Troubleshooting section ("Icon count
  changes unexpectedly ... this is normal behavior") while still giving
  this run a concrete, falsifiable pass/fail signal rather than accepting
  any non-crash output uncritically.
- Alternatives considered: pinning an exact expected final count ahead of
  time — rejected, this run cannot know Simple Icons' exact current icon
  count without running the build itself, and hardcoding a guess would be
  presented as fact rather than a verified observation (Authoring
  Principle 6).
- Tradeoffs: none.
- Linked requirements: `TG-2`, `TG-3`.

`DEC-4` — **Course correction (mid-execution, directed by the orchestrating
session):** verify via an isolated build, and do not regenerate the
repository's tracked `distribution/simpleicons/**`/`.workdir/**` locally;
leave that to the CI `package-builder.yaml` workflow once this branch is
pushed.

- Decision: `DEC-2`'s original plan (regenerate the real, tracked
  `distribution/simpleicons/**` locally via `npm run generate:package`)
  is superseded. During Stage 10 execution, this run independently
  confirmed a real hazard: `scripts/generate-package.sh`'s Podman mount
  (`-v .../.workdir:/workdir:z,U -v .../distribution:/distribution:z,U`)
  operates on the whole shared `.workdir`/`distribution` trees, not a
  package-scoped subset, and concurrent sibling wave runs (W-3..W-6) were
  observed actively racing on that same shared state (see this run's prg
  Log for the `ps aux` evidence and the ownership-corruption/recovery
  incident that followed). The orchestrating session then directed, mid
  task: do not run the full containerized rebuild as the standing
  verification method (too slow/resource-heavy with multiple concurrent
  wave runs doing the same thing); rely on `npm run generate:workdir -- -p
  simpleicons` counts as the primary content-verification signal; use the
  small `eip` package as a one-time toolchain sanity-check proxy instead
  of rebuilding simpleicons' full 3000+-icon set repeatedly; and commit
  the `index.ts` version bump without a full regenerated
  `distribution/simpleicons/**`, naming the repository's existing
  `package-builder.yaml` GitHub Actions workflow (`workflow_dispatch`) as
  the natural follow-up once this branch is pushed, rather than running it
  from this session.
- What actually happened: this run *had already* completed one full,
  successful `generate:workdir` + Podman-rendered `generate:package -p
  simpleicons` build before the course correction landed — but run
  entirely inside an isolated scratchpad copy of `.workdir`/`distribution`
  (not the repository's tracked directories), specifically to dodge the
  shared-state race already identified. That isolated build (27 modules,
  3464 items, exit 0 — see prg Findings) is kept as corroborating
  evidence that the pipeline works end-to-end for the new version, but is
  not the standing verification method going forward and never touched
  the tracked `distribution/simpleicons/**`. The subsequent `eip`-as-proxy
  attempt (directed by the course correction) failed with a pre-existing,
  unrelated generator error and, worse, destructively cleaned tracked
  `distribution/eip/**` before failing (a repository-tracked, out-of-scope
  directory) — recovered via a Podman UID-mapping fix plus `git restore`
  (full incident in the prg). Given the real risk just demonstrated, this
  run did not re-attempt the `eip` proxy a second time, judging the
  already-completed isolated `simpleicons` build to be strictly stronger,
  already-obtained evidence for the same claim ("the toolchain still
  works") at zero additional risk.
- Rationale: an orchestrating-session directive mid-execution, consistent
  with a hazard this run had independently found and documented — not a
  product/business tradeoff, so it does not trigger the `complete-run`
  autonomy override's human-escalation bar; it is a technical operating
  adjustment this run is authorized to apply.
- Alternatives considered: retrying the `eip` proxy build a second time —
  rejected, the first attempt's failure was unrelated to this run's change
  and already-obtained isolated-build evidence makes a second attempt pure
  added risk for no new information; forcibly regenerating the tracked
  `distribution/simpleicons/**` locally despite the directive — rejected,
  directly contravenes the orchestrating session's explicit instruction.
- Tradeoffs: the repository's tracked `distribution/simpleicons/**`
  remains stale (still reflects `16.9.0` output) until CI's
  `package-builder.yaml` runs post-push — an explicit, named open item
  (see Deployment and Rollout, Open Questions), not a silently-accepted
  gap.
- Linked requirements: `TG-2`, `TG-3` (satisfied via the isolated build's
  evidence rather than a tracked-directory regeneration).

# Repository Impact

`IMP-1` — `source/library/packages/simpleicons/index.ts`

- Path(s): `source/library/packages/simpleicons/index.ts`
- Change type: modify
- Why impacted: `ICONS_VERSION` constant update (`DEC-1`); possible
  mechanical `discover()`/`getItemUrn()` fix only if `ASM-2` is falsified
  by the actual build.
- Linked requirements: `TG-1`.
- Risks / notes: this is the only hand-edited source file expected for
  this run.

`IMP-2` — `source/templates/simpleicons/*.tera` (conditional)

- Path(s): `source/templates/simpleicons/bootstrap.tera`,
  `source/templates/simpleicons/documentation.tera`
- Change type: modify (conditional — only if the new archive structure
  forces a template path change; not expected per `ASM-2`)
- Why impacted: these templates reference icon paths that must match
  whatever structure `discover()` produces.
- Linked requirements: `TG-2`, `TG-3`.
- Risks / notes: left untouched unless the build demonstrates a need.

`IMP-3` — `.workdir/**`, `distribution/simpleicons/**` (generated, not
hand-edited) — **superseded by `DEC-4`: not regenerated in the tracked
repository tree by this run**

- Path(s): `.workdir/library.yaml`, `.workdir/.cache/simpleicons/**`,
  `distribution/simpleicons/**`
- Change type: none, in the tracked repository tree, by this run's own
  commit. Verification evidence was produced in an isolated scratchpad
  copy instead (`DEC-4`); the repository's own `.workdir/**` and
  `distribution/simpleicons/**` are untouched by this run and remain at
  their pre-change (`16.9.0`) generated state.
- Why impacted: N/A for this run's commit — this item is retained to
  record that the *original* plan impacted these paths, and to point at
  `DEC-4` for why the final commit does not.
- Linked requirements: `TG-2`, `TG-3` (satisfied via isolated-build
  evidence per `DEC-4`, not via a tracked-directory change).
- Risks / notes: the tracked `distribution/simpleicons/**` is stale
  relative to `ICONS_VERSION = "16.34.0"` until CI's
  `package-builder.yaml` regenerates it post-push (see Deployment and
  Rollout).

# Canonical Impact

Not applicable — no canonical registers declared. This repository has no
`docs/adr/` register and no `docs/CLAUDE.md` register declaration (both
confirmed absent by directory listing at drafting time), so there is no
`arc`/`dom` register for this change to make stale, per the dispatch
brief's instruction to skip register-dependent steps rather than invent
one.

# Data Model and Contracts

No shared data structure, API boundary, or external-service integration
contract changes. The only "format" produced is the `Package`/`Item`
manifest shape consumed by `source/generator/workdir/manifest.ts`'s
existing types — unchanged by this run; `SimpleiconsFactory.create()`
continues to return the same `Package` shape it always has. The only
external integration point (`ICONS_URL`, a GitHub archive download) is a
value change (version string), not a shape change.

# Interfaces and Behavior

No user-facing behavior change beyond the icon set itself growing/updating
to match upstream Simple Icons 16.34.0 — new icons may appear, existing
icons may be renamed/removed if upstream did so (tracked entirely by
`discover()`'s own glob + filename logic, not by any manual mapping this
run maintains). CLI developer experience (`npm run generate:workdir -- -p
simpleicons`, `npm run generate:package -- -p simpleicons`) is unchanged
in shape — same flags, same output locations.

# Flows and Processing Logic

`FLOW-1` — Version bump and verification

- Trigger: this run's implementation start (`complete-run`'s Stage 10,
  the orchestrating skill's implementation stage).
- Steps:
  1. Confirm `16.34.0` is still the latest Simple Icons version at
     execution time (`npm view simple-icons version` — re-validates `ASM-1`
     against drift between wave-authoring time and execution time).
  2. Edit `source/library/packages/simpleicons/index.ts` line 13:
     `ICONS_VERSION = "16.34.0"` (`DEC-1`).
  3. Run `npm run generate:workdir -- -p simpleicons`; inspect
     `.workdir/library.yaml`'s `simpleicons` entry and resulting item
     count against the `3397`-item baseline (`DEC-3`).
  4. If step 3 shows zero/near-zero items or an error, treat `ASM-2` as
     falsified: inspect the actual fetched archive layout
     (`context.pkgTmpDirPath`/the extracted zip) and apply the minimal
     `discover()`/template fix needed, then re-run step 3.
  5. **(per `DEC-4`, superseding the original plan)** Run the full
     Podman-rendered build in an isolated scratchpad copy of
     `.workdir`/`distribution`, not the repository's tracked directories,
     to avoid racing concurrent sibling wave runs sharing the same
     tracked `.workdir`/`distribution` trees; compare the isolated
     build's `distribution/simpleicons/README.md` module/item totals
     against the `27`/`3397` baseline (`DEC-3`). Do not regenerate the
     tracked `distribution/simpleicons/**` locally.
  6. Run `npm run lint` and `npm test` over the full changed tree (`TG-4`).
- Branches / failure paths: step 4's fallback only triggers on an
  empirically observed discovery failure, not speculatively. A count
  decrease at step 5 is a defect to investigate before declaring this run
  done, not an accepted outcome.
- Final output / rendered result: updated
  `source/library/packages/simpleicons/index.ts` only (tracked); an
  isolated-scratchpad build's module/item counts as verification evidence
  (not committed); a prg Log/Findings entry recording the before/after
  counts and the `DEC-4` course correction.
- Linked requirements: `TG-1`, `TG-2`, `TG-3`, `TG-4`.

No sequence/activity diagram is included: this flow has one external
integration point (the archive fetch, already modeled by the existing
`fetchArchive` utility) and only one conditional branch (`ASM-2`
falsification), which is simple enough to state as the step list above
without a second diagram — diagram trigger 2 (meaningful branching,
asynchronous behavior, or non-trivial failure paths) is a closer call than
trigger 1 but doesn't clear the bar once the single branch is already
spelled out textually; adding a diagram here would restate `FLOW-1`'s
steps rather than add clarity.

# Reliability, Performance, and Scalability

Not materially affected — one-time version bump to an already-existing
fetch-and-render pipeline. The only latent scaling concern is archive
size/icon count growth (Simple Icons has grown from whatever it was at
16.9.0 to its 16.34.0 count), which this pipeline already handles
generically (no hardcoded icon count anywhere in `discover()`).

# Security and Privacy

No credentials, secrets, or privacy-sensitive data are touched. The
archive fetch is from `github.com/simple-icons/simple-icons`, the same
trusted upstream this package has always pulled from — only the version
tag in the URL changes.

# Observability and Verification

Repository-realistic checks, all runnable in this environment:

- `npm view simple-icons version` / `npm view simple-icons versions
  --json` — confirms `16.34.0` is latest and directly reachable, before
  and independent of any code change.
- `npm run generate:workdir -- -p simpleicons` — fast, container-free
  check; inspect `.workdir/library.yaml`'s `simpleicons` entry and item
  count.
- Full Podman-rendered build (`npm run generate:workdir` +
  `podman run ... plantuml-generator:1 ... --urn=simpleicons`), run once
  in an isolated scratchpad copy of `.workdir`/`distribution` rather than
  the tracked repository directories (`DEC-4`) — avoids racing concurrent
  sibling wave runs sharing the same tracked trees. Confirms the pipeline
  renders without error for the new version; does not regenerate the
  tracked `distribution/simpleicons/**`.
- `distribution/simpleicons/README.md` module/item count comparison
  against the `27`/`3397` baseline (`DEC-3`), read from the isolated
  build's output.
- `npm run lint` (`eslint .`) — must pass at the final state.
- `npm test` (`mocha`) — must pass at the final state; this package has no
  dedicated spec file (no `test/*simpleicon*` file exists), so regression
  coverage here is the existing suite plus the generator pipeline run
  itself, not a package-specific unit test. A failure in an unrelated spec
  (e.g. the AWS/Azure network-dependent specs `CLAUDE.md` flags as
  "expect them to be slow") is out of this run's scope — note it rather
  than treating it as a regression caused by this change.
- `git status`/`git diff` review of `source/library/packages/simpleicons/index.ts`
  before committing, to confirm the change is exactly the intended
  one-line (or minimal) edit.

# Deployment and Rollout

Code-only change: this run's commit touches only
`source/library/packages/simpleicons/index.ts` (the `ICONS_VERSION`
constant). Per `DEC-4`, the tracked `distribution/simpleicons/**` and
`.workdir/**` are **not** regenerated by this run and remain at their
pre-change (`16.9.0`-generated) state — a known, explicit open item, not
an oversight. No data migration, no external service dependency change,
no feature flag. Rollback is `git revert` of this run's commit.

**Named follow-up (not performed by this run):** the repository's existing
`package-builder.yaml` GitHub Actions workflow accepts a
`workflow_dispatch` trigger (per `doc/howto.upgrade-simpleicons-package.md`
step 6) that runs `generate:workdir` + the Podman render through CI
infrastructure rather than this local host. Once this run's branch is
pushed, triggering that workflow for `pkgName=simpleicons` is the natural
next step to bring the tracked `distribution/simpleicons/**` current —
this run does not trigger it, consistent with the dispatch brief's "do not
push, do not open a PR" instruction (triggering a `workflow_dispatch`
against a pushed branch is a step for whoever pushes next).

This TDD does not authorize publishing, pushing, or opening a PR — `npm
run release`/`release:publish`, `git push`, and `gh pr create` are
explicitly not invoked by this run, per the dispatch brief.

# Risks and Tradeoffs

- `RISK-1` — Upstream Simple Icons may have renamed or removed icons
  between 16.9.0 and 16.34.0, which would silently change or drop
  generated PlantUML sprite names downstream consumers (of this library
  package, outside this repository) might depend on. Mitigation: out of
  this run's control — Simple Icons' own versioning governs this, and the
  wave's own completion criteria only ask that the pinned version track
  upstream latest, not that every historical icon name be preserved.
  Recorded here as a known, accepted tradeoff of any upstream version
  bump.
- `RISK-2` — The archive structure could have changed in a way `ASM-2`
  doesn't anticipate, producing a build that "succeeds" with a near-zero
  or garbage item count rather than an obvious error. Mitigation: `DEC-3`'s
  explicit count-plausibility check (not just build-exit-code) at `FLOW-1`
  step 6 catches this.
- `RISK-3` — Podman/Docker environment availability is specific to this
  run's execution host; a differently-provisioned future environment
  could lose the ability to re-run `TG-3`'s full verification. Mitigation:
  none needed for this run itself (it has the capability now); noted only
  so a future reader understands why this run's verification went further
  than a sibling's.

# Open Questions

None — the wave manifest fully specifies scope (move `ICONS_VERSION` to
`16.34.0`) and this run's own research (`npm view`) already confirmed that
target is both latest and directly reachable. Whether the archive
structure changed is an empirical question `FLOW-1` resolves by running
the actual build, not a question to pre-answer here.

# Deferred Work

- `DEF-1` — `RISK-1`'s icon rename/removal is not tracked or diffed
  item-by-item against the 16.9.0 baseline by this run; a future run
  wanting a precise added/removed/renamed icon list would need to diff
  `.workdir/library.yaml`'s `simpleicons` entries before/after, which this
  run does not do (only aggregate module/item counts, per `DEC-3`). No
  `docs/bkg/` register exists in this repository to file it against, so it
  is recorded here and in this run's prg instead.
- `DEF-2` — **Open item per `DEC-4`:** the tracked
  `distribution/simpleicons/**` (and `.workdir/**`) was intentionally not
  regenerated by this run and still reflects the `16.9.0` build output,
  even though `source/library/packages/simpleicons/index.ts` now pins
  `16.34.0`. Content/count verification for this run was done via an
  isolated-scratchpad build instead (see `DEC-4`, Observability). The
  named follow-up is triggering the repository's `package-builder.yaml`
  GitHub Actions workflow (`workflow_dispatch`, `pkgName=simpleicons`)
  once this run's branch is pushed — not performed by this run. Whoever
  pushes this branch should trigger that workflow (or run
  `npm run generate:package -- -p simpleicons` locally once the shared
  `.workdir`/`distribution` trees are no longer contended by concurrent
  wave runs) before treating `distribution/simpleicons/**` as current.

# File Placement and Frontmatter

Saved at
`docs/wav/wav-001-dependency-ci-refresh/run/run-0007-simpleicons-refresh/tdd-0007-simpleicons-refresh.md`,
matching this run's wave-owned directory convention. Frontmatter: `title`,
`status: draft`, `owner`, `date`, `related`, `run: 0007`, `wave: 001`,
`type: tdd` — no PRD to list in `related` since none exists for this
`TDD+pln`-profile run.
