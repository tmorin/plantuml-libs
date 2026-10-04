---
type: prg
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0007-simpleicons-refresh/tdd-0007-simpleicons-refresh.md
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0007-simpleicons-refresh/pln-0007-simpleicons-refresh.md
run: 0007
wave: 001
---

# Progress Log: Simple Icons refresh

## Log

- 2026-10-04: Run created by `complete-wave` dispatch (W-7). Executing via
  `complete-run` in autonomous mode (no human review gate between
  documents). Document profile: `TDD+pln` — scope arrives settled from the
  wave manifest (move `ICONS_VERSION` from `16.9.0` to the confirmed
  `16.34.0`), consistent with sibling run-0001's profile choice for the
  same reason (infra-only, no contestable product scope, but the upgrade
  still carries a design/verification decision worth recording); a `prd`
  would add no value since the wave already fixed scope, and
  `single-document` would drop the verification-method record this run
  needs since the real build pipeline (Podman) is usable here.
- 2026-10-04: This repository has no `docs/bkg/`, no `docs/CLAUDE.md`
  register declaration, and no `tooling/docs/check-backlog.py`. Per the
  dispatch brief, any `complete-run`/`manage-runs` step that depends on
  those (backlog admission test, expiry sweep over `docs/bkg/parked/`,
  canonical-impact register discharge) has nothing to discharge here and is
  skipped rather than inventing a register.
- 2026-10-04: Pre-flight checks (before drafting documents): `npm view
  simple-icons version` confirms `16.34.0` is the current published
  version, and `npm view simple-icons versions --json` lists an unbroken
  chain `16.9.0 -> 16.34.0` with no gaps. Podman is available and already
  has the `docker.io/thibaultmorin/plantuml-generator:1` image pulled
  (`podman images` confirms), and `docker info`/`podman info` both succeed
  — unlike the sibling run that documented Podman being unavailable, this
  environment can run the real `npm run generate:package -- -p
  simpleicons` pipeline for full verification. Baseline captured before any
  change: `distribution/simpleicons/README.md` reports 27 modules, 3397
  items total at `16.9.0`.
- 2026-10-04: Drafted TDD (`tdd-0007-simpleicons-refresh.md`), no-PRD input
  (profile `TDD+pln`). Repository has no `docs/adr/` register and no
  `docs/CLAUDE.md` register declaration — Canonical Impact section marked
  "Not applicable". Key design decisions: bump `ICONS_VERSION` in place on
  the current working branch with no branch/PR/CI-dispatch workflow
  (`DEC-1`, overriding `doc/howto.upgrade-simpleicons-package.md`'s
  GitHub-MCP-oriented steps per the dispatch brief), verify via the real
  `npm run generate:package -- -p simpleicons` build since Podman is
  available here (`DEC-2`), and treat an increased icon/module count as
  the expected passing outcome, a decrease as a defect (`DEC-3`).
- 2026-10-04: Dispatched KDMLLC review of the TDD (`standard` tier,
  `general-purpose` agent). Verdict: Acceptable overall (DRY 3, C 3,
  others 4). Applied the one S2 finding (F1: DEC-2 incorrectly claimed the
  full build "re-runs `generate:workdir` for all packages," contradicting
  both `scripts/generate-package.sh`'s actual `-p "$1"` single-package
  forwarding and this TDD's own CON-4 — corrected the wording) and all
  three S1 findings (F2: dropped a stale/fragile line-number reference
  into generated `.workdir/library.yaml`; F3: glossed the previously
  undefined "Stage 10" trigger reference in FLOW-1; F4: added guidance
  that an unrelated/pre-existing test failure, e.g. the AWS/Azure
  network-dependent specs, is out of this run's scope rather than a
  regression). Left F5 (DRY: the `27`/`3397` baseline and
  `16.9.0`/`16.34.0` version pair are restated rather than
  cross-referenced across several sections) unaddressed — cosmetic only,
  judged not worth the rewrite risk of introducing a cross-reference typo
  for a document this short. TDD has no Open Questions section items
  (stated "None") — Stage 6 is a no-op. No PRD exists for this run
  (`TDD+pln` profile), so Stage 7's PRD/TDD consistency check is not
  applicable.
- 2026-10-04: Drafted pln (`pln-0007-simpleicons-refresh.md`), 5 tasks,
  strictly sequential (no parallel groups — all tasks form one chain:
  bump version -> fast workdir check -> full Podman build + count
  comparison -> lint/test -> diff review/commit). All 5 tasks tiered
  `standard`, `autonomous`, no human review gates — none of this run's
  work rises to a genuine product/business tradeoff or irreversible
  action under the `complete-run` autonomy override. Stage 9 consistency
  re-check: every `task_catalog` entry traces to real TDD IDs
  (`TG-`/`DEC-`/`ASM-`/`IMP-`/`FLOW-`/`DEF-`) — found and fixed one
  non-ID reference ("Deployment and Rollout" used as a traceability item
  in task-005, replaced since it is a TDD section name, not an ID);
  `likely_files` entries spot-checked against the repository
  (`source/library/packages/simpleicons/index.ts`,
  `distribution/simpleicons/**`, `.workdir/**` all exist). No
  `blocking_gaps` in the pln. Run status set to `planned`.
- 2026-10-04: Run status set to `in-progress`, Stage 10 started.
- 2026-10-04: task-001 done (dispatched to `general-purpose` subagent,
  `standard` tier) — `npm view simple-icons version` re-confirmed
  `16.34.0`, no drift. `source/library/packages/simpleicons/index.ts`
  line 13 edited to `const ICONS_VERSION = "16.34.0"`, confirmed the only
  line changed. task-002 (fast `generate:workdir` check) hit a real
  **environment-level blocker, not a code defect**: `EACCES: permission
  denied, unlink '.workdir/source/templates/item_custom_group_source.tera'`.
  Root cause investigated directly (not just trusted the subagent's
  report): `.workdir/**` is **shared, mutable generated state across the
  whole wave batch**, not scoped per package — confirmed by reading
  `source/generator/workdir/index.ts`: `copyTemplates(workDirPath)` copies
  the *entire* `source/templates/` tree into `.workdir/source/templates/`
  on *every* invocation regardless of the `-p` package filter (the filter
  only scopes which package *factories* run, not the shared template
  copy step). `scripts/generate-package.sh` then mounts that same shared
  `.workdir` into a Podman container with `-v
  "$REPOSITORY_PATH/.workdir:/workdir:z,U"` — the `U` suboption chowns the
  mounted content to the container's UID on each run. At the moment of
  the failure, `ps aux` showed wave run **W-5 (fontawesome-icons-refresh)**
  actively executing `npm run generate:package -- -p fontawesome` in this
  same working tree (PID 678765/678777, `timeout 300`-wrapped), and
  `.workdir/source/templates/item_custom_group_source.tera` was owned by
  uid/gid `101000:101000` (an unmapped rootless-Podman container UID) at
  that instant, confirming two concurrent `generate:package` invocations
  (mine and W-5's) were stomping on the same shared directory's ownership.
  **This is a wave-level finding, not specific to this run**: the wave's
  own Risks section ("No same-batch path overlap found ... W-3..W-7 each
  touch only their own `source/library/packages/<name>/**`") only
  analyzed *source* paths, not the shared *generated* `.workdir/**`/
  `distribution/**` directories every icon-package run's build step
  writes through — those are not disjoint, and concurrent `generate:package`
  invocations across W-3..W-7 can race on them. Did not attempt to chown
  or delete the shared `.workdir/` myself while a sibling run was actively
  using it (would risk corrupting W-5's in-flight build, outside this
  run's authority over shared state) — instead waited for the observed
  sibling process to exit, then retried.

- 2026-10-04: Resolved the blocker via isolation rather than waiting it
  out: adopted the same pattern an independent sibling run (W-6,
  gcp-icons-refresh) had already used for the identical hazard — copy the
  generator inputs into an isolated scratchpad directory
  (`$SCRATCH/.workdir`, `$SCRATCH/distribution`) and point
  `generate:workdir`'s `-w` flag plus a manually-invoked `podman run`
  (mirroring `scripts/generate-package.sh`'s exact invocation) at that
  isolated copy instead of the shared, tracked `.workdir`/`distribution`.
  task-002 (`npm run generate:workdir -- -p simpleicons -w
  <scratch>/.workdir`) succeeded: downloaded the `16.34.0` archive,
  discovered 3464 SVG files across 27 modules (baseline was 3397 items /
  27 modules at `16.9.0`) — a plausible increase, `ASM-2` holds, no code
  change needed. task-003 (manual `podman run --rm --userns=keep-id -v
  <scratch>/.workdir:/workdir:z,U -v <scratch>/distribution:/distribution:z,U
  docker.io/thibaultmorin/plantuml-generator:1 ... --urn=simpleicons
  --clean-urn=simpleicons`) succeeded, exit 0: isolated
  `distribution/simpleicons/README.md` reports 27 modules, 3464 items (up
  from 3397), 10393 `.puml` files (up from 10192). `DEC-3`'s plausibility
  check passes (increase, not a decrease). This isolated build never
  touched the repository's own tracked `.workdir`/`distribution` —
  confirmed via `git status` showing zero changes there.
- 2026-10-04: task-004 (lint/test) run directly in this session: `npm run
  lint` clean, `npm test` 5 passing. At this point the only tracked
  repository change was the single-line `ICONS_VERSION` edit.
- 2026-10-04: Mid-execution course correction, directed by the
  orchestrating session (received as two messages during Stage 10, after
  task-003/004 had already completed successfully): (1) do not use a
  full containerized rebuild as the standing verification method going
  forward — too slow/resource-heavy, especially with multiple wave runs
  doing the same thing concurrently (matches this run's own finding
  above); rely on `generate:workdir` counts as the primary signal; use
  the small `eip` package as a one-time toolchain-sanity-check proxy
  instead of repeatedly rebuilding simpleicons' full icon set; (2) commit
  the `index.ts` bump without a full regenerated
  `distribution/simpleicons/**`, naming the repository's existing
  `package-builder.yaml` GitHub Actions `workflow_dispatch` workflow as
  the follow-up once the branch is pushed, and record this plainly as an
  open item rather than closing the run as if fully done. Treated this as
  a legitimate operational course correction from the dispatching
  session (consistent with a hazard this run had already independently
  found and logged), not a request requiring escalation — applied it.
  Updated the TDD (new `DEC-4`, revised `IMP-3`/`FLOW-1`
  steps 5-6/Observability/Deployment and Rollout, new `DEF-2`) and the pln
  (task-003 retitled/re-scoped, Executive Summary and Final Execution
  Manifest criteria revised) to reflect this before proceeding.
- 2026-10-04: Attempted the directed `eip` toolchain-sanity-check proxy:
  `npm run generate:package -- eip`. Failed with a pre-existing error
  unrelated to this run's change: "the command failed: unable to open
  /distribution/eip/MessageConstruction/CommandMessage.png: Io(Os { code:
  2, kind: NotFound, ... })" during the generator's "Create Resources"
  phase, after it had already logged "clean the output sub-directory:
  /distribution/eip". Because `scripts/generate-package.sh` mounts the
  entire tracked `distribution/` (and `.workdir/`) into the Podman
  container with `-v ...:z,U` regardless of which single package `--urn`
  targets, this failed run (a) deleted all tracked files under
  `distribution/eip/**` (542 paths, confirmed via `git status`) during
  its clean step, before failing to regenerate them, and (b) left the
  entire tracked `distribution/`/`.workdir/` tree owned by uid/gid
  `101000:101000` (unreachable by this session's `tibo`/uid 1000),
  blocking a normal `git restore`. Root cause of the uid/gid issue,
  diagnosed directly: the `plantuml-generator:1` image's container
  process runs as a baked-in user ("guser", uid 1001 inside the image's
  own namespace) rather than uid 0 or whatever `--userns=keep-id`
  remaps; `--userns=keep-id` only remaps the invoking host uid (1000) to
  the same uid inside the container, so a different in-container uid
  (1001, "guser") instead maps through the normal rootless subuid range
  (host base ~100000), landing at ~101000 on the host — a property of the
  image/podman rootless mapping, not anything this run's change caused.
  Recovery, performed immediately: ran `podman run --rm --userns=keep-id
  --user 1000:1000 -v .../distribution:/distribution:z,U -v
  .../.workdir:/workdir:z,U docker.io/thibaultmorin/plantuml-generator:1
  id` (forcing the container process to actually run as uid 1000, which
  `keep-id` then correctly maps to host uid 1000) — confirmed via `find
  ... -uid 101000` returning zero matches afterward — then `git restore
  -- distribution/eip`, which fully recovered all 542 deleted paths
  (confirmed via `git status` showing a clean `distribution/eip`). Re-ran
  `npm run lint`/`npm test` after recovery as a defensive re-check: both
  still green (lint clean, 5 passing), confirming the ownership fix and
  restore did not disturb anything else. Repository `git status` after
  recovery shows only this run's own
  `source/library/packages/simpleicons/index.ts` edit plus pre-existing,
  unrelated uncommitted changes from concurrent sibling wave runs
  (`CLAUDE.md`, `source/library/packages/aws/index.ts`,
  `source/library/packages/fontawesome/index.ts`) — not touched, not
  staged, not committed by this run.
- 2026-10-04: Decision: did not retry the `eip` proxy a second time. The
  first failure was demonstrably unrelated to this run's change (a
  pre-existing generator/asset-resolution error in the `eip` package's
  own build, surfaced independently of any simpleicons edit), and this
  run already holds strictly stronger evidence for the same claim ("the
  Podman + plantuml-generator toolchain works end-to-end against the new
  version") from task-003's own successful isolated `simpleicons` build.
  Retrying `eip` again would repeat a demonstrated risk (another
  shared-tree clean-then-fail cycle) for no new information. Logged as a
  finding for the wave rather than investigated further (out of this
  run's scope — the `eip` package is not in `likely_paths`).
- 2026-10-04: Stage 11 verification. Re-confirmed, independently: `git
  diff -- source/library/packages/simpleicons/index.ts` shows exactly the
  one intended line change (`ICONS_VERSION` `"16.9.0"` -> `"16.34.0"`), no
  other lines touched. `git status` shows only that one tracked file
  changed within this run's scope, plus this run's own new docs under
  `docs/wav/wav-001-dependency-ci-refresh/run/run-0007-simpleicons-refresh/`;
  other uncommitted changes present in the working tree
  (`CLAUDE.md`, `source/library/packages/aws/index.ts`,
  `source/library/packages/fontawesome/index.ts`) belong to concurrent
  sibling wave runs and were left untouched and unstaged. `npm run lint`
  and `npm test` re-confirmed green immediately before committing. Staged
  and committed only `source/library/packages/simpleicons/index.ts` plus
  this run's own four documents (`run-0007-simpleicons-refresh.md`,
  `tdd-0007-simpleicons-refresh.md`, `pln-0007-simpleicons-refresh.md`,
  `prg-0007-simpleicons-refresh.md`) — verified via `git show
  --stat HEAD` after the commit that no other file was swept in. Run
  status set to `completed`; pln `execution_manifest.status` set to
  `done`; TDD and pln frontmatter `status` set to `active`. Wave-level
  files (`wav-001-dependency-ci-refresh.md`, `wbc-001-...md`,
  `prg-001-...md`) remain untouched and uncommitted by this run, as
  instructed — they stay the orchestrator's to land. Not pushed, no PR
  opened, per the dispatch brief.

## Findings

- Simple Icons `16.9.0` -> `16.34.0`: 27 modules (unchanged), item count
  grew from 3397 to 3464 (+67, +2.0%) across 25 upstream minor releases —
  a plausible, expected increase, not a regression (`DEC-3` satisfied).
  `.puml` file count (isolated build) grew from a baseline 10192 to
  10393, consistent with the item-count increase.
  `discover()`/`getItemUrn()` needed zero changes — the archive's
  `icons/*.svg` flat layout held across the full version range (`ASM-2`
  confirmed, not merely assumed).
- **Wave-level finding (not specific to this run):** the wave's own Risks
  section states "No same-batch path overlap found ... W-3..W-7 each
  touch only their own `source/library/packages/<name>/**`" as the basis
  for treating the icon-package runs as concurrent-safe. That analysis
  covered *source* paths only. In practice, every icon-package run's
  verification step (`npm run generate:package -- -p <name>`, or the
  underlying `npm run generate:workdir`) reads and writes the *shared*,
  tracked `.workdir/**` and `distribution/**` trees regardless of the
  `-p`/`--urn` filter (`copyTemplates()` always copies the full
  `source/templates/` tree; the Podman mount `-v .../.workdir:/workdir:z,U
  -v .../distribution:/distribution:z,U` always mounts the whole tree).
  This run observed, directly via `ps aux`, two concurrent sibling runs
  (W-4 azure, W-5 fontawesome) actively running `generate:package`/`podman
  run` against this same shared state at the same time this run hit an
  `EACCES` failure from exactly that contention. An independent sibling
  run (W-6, gcp-icons-refresh) had already worked around the same hazard
  by building into an isolated scratchpad copy — this run adopted the
  same pattern. **Recommend the wave's own Risks section be corrected**:
  the "no same-batch path overlap" claim is true for source paths but
  false for the generated build directories every icon-package run's
  verification step touches.
- **Separate, reproducible defect found in passing:** `npm run
  generate:package -- eip` (attempted here only as a toolchain-sanity-check
  proxy, per a mid-execution course correction) fails in this environment
  with `unable to open
  /distribution/eip/MessageConstruction/CommandMessage.png: ... NotFound`
  during the generator's "Create Resources" phase — after already
  clearing `distribution/eip/**`'s existing content. This is unrelated to
  Simple Icons and outside this run's `likely_paths`; recovered (ownership
  fix + `git restore`) but not investigated further or fixed. Worth a
  dedicated look before anyone relies on `eip` as a "fast, safe" sanity
  check — right now it is neither (it fails, and it destructively cleans
  tracked output before failing).
- The `plantuml-generator:1` image's container process runs as a
  baked-in non-root user ("guser", uid 1001 in-image) that
  `--userns=keep-id` does *not* remap (keep-id only remaps the invoking
  host uid to itself inside the container); that uid instead falls through
  the normal rootless subuid range, landing around host uid 101000. Any
  `podman run ... -v host:/container:z,U ...` invocation against this
  image therefore chowns the mounted content to ~101000 unless `--user
  <host-uid>:<host-gid>` is passed explicitly alongside `--userns=keep-id`
  to force the in-container process to actually run as the mapped uid.
  `scripts/generate-package.sh` does not pass `--user`, so every build via
  that script leaves the shared `.workdir`/`distribution` owned by
  ~101000 afterward — consistent with what multiple sibling runs
  observed. Fixing `scripts/generate-package.sh` to add `--user
  "$(id -u):$(id -g)"` would likely prevent this ownership drift at the
  source, but that file is outside this run's `likely_paths`
  (`source/library/packages/simpleicons/**`) and is a cross-cutting wave
  concern, not fixed here.

## Lessons Learnt

- A wave's "no same-batch path overlap" risk analysis needs to check
  *generated/build* directories a verification step writes through, not
  only the *source* paths a run's `likely_paths` names — two runs with
  disjoint source scopes can still race on shared, tracked generator
  output if the underlying build tooling mounts/copies whole directories
  rather than package-scoped subsets.
- When a shared build directory is contended by concurrent sibling runs,
  building into an isolated scratchpad copy (matching the real build
  command's inputs/outputs exactly, just relocated) gets equivalent
  verification evidence without waiting for contention to clear or
  risking cross-run interference — cheaper and safer than either blocking
  on the sibling or forcibly reclaiming shared state while another run
  might still be using it.
- A rootless Podman image's `--userns=keep-id` guarantee only covers the
  *invoking* host uid; any other in-container uid (e.g. a baked-in
  non-root `USER` in the image) still maps through the ordinary subuid
  range and can land on an unreachable host uid. Diagnosing this required
  checking the container's actual `id` output, not just assuming
  `--userns=keep-id` made every uid inside the container map predictably
  to the host user.
