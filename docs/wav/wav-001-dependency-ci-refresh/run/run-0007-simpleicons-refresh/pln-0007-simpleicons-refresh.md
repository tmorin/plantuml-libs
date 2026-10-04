---
title: Simple Icons package refresh — execution plan
status: active
owner: tcmorin@gmail.com
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0007-simpleicons-refresh/tdd-0007-simpleicons-refresh.md
run: 0007
wave: 001
type: pln
---

# Simple Icons package refresh — Execution Plan

No PRD exists for this run (`TDD+pln` profile, infra-only work whose scope
arrives settled from the wave manifest). This plan is derived from the TDD
alone (`tdd-0007-simpleicons-refresh.md`); "PRD/TDD Consistency Assessment"
below is marked not applicable throughout.

This run executes under `complete-run`'s explicit autonomy override: the
default autonomy policy's `review_before`/`human_required` tiers are not
gated on category alone here — a task stops only on a genuine,
unresolvable blocker (conflicting requirements with no defensible
resolution, a missing credential, an unresearchable external fact, or a
real product/business tradeoff). None of this run's tasks meet that bar
(see Escalation Rules), so every task below runs autonomously.

## 1. Executive Summary

```yaml
summary:
  status: 'done'
  product_goal: 'Move the Simple Icons library package pin in @tmorin/plantuml-libs from 16.9.0 to the confirmed-latest 16.34.0 without regressing the build, lint, or test suite.'
  technical_approach: 'Bump ICONS_VERSION in source/library/packages/simpleicons/index.ts (TDD DEC-1), verify via an isolated generate:workdir + Podman-rendered build rather than regenerating the tracked distribution/simpleicons/** (DEC-2/DEC-4), compare the resulting module/item counts against the 27-module/3397-item baseline (DEC-3), confirm lint/test still pass (TG-4), and commit locally. Tracked distribution/simpleicons/** staleness left as an explicit open item (DEF-2) per mid-execution course correction.'
  total_tasks: 5
  parallel_groups: 0
  high_risk_tasks: 0
  human_review_gates: 0
  autonomy_level: 'high'
  recommendation: 'proceed'
  criteria:
    - 'source/library/packages/simpleicons/index.ts ICONS_VERSION reads "16.34.0"'
    - 'a full generate:workdir + Podman-rendered build succeeds against the new version, run in an isolated scratchpad (DEC-4 course correction: not a regeneration of the tracked distribution/simpleicons/**)'
    - 'module/item counts from that isolated build are plausible relative to the 27/3397 baseline (increase expected, decrease treated as a defect)'
    - 'tracked distribution/simpleicons/** remains stale pending the CI package-builder.yaml follow-up (DEF-2), named explicitly rather than silently left'
    - 'npm run lint passes'
    - 'npm test passes'
```

## 2. PRD/TDD Consistency Assessment

Not applicable — no PRD exists for this `TDD+pln`-profile run.

```yaml
consistency_assessment:
  aligned_items: []
  gaps: []
  blocking_gaps: []
```

## 3. Execution Graph

```yaml
execution_graph:
  nodes:
    - id: task-001
      status: 'done'
      title: 'Confirm latest version and bump ICONS_VERSION'
      depends_on: []
      produces:
        - 'source/library/packages/simpleicons/index.ts with ICONS_VERSION = "16.34.0"'
        - 're-confirmed latest-version fact at execution time'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 90
    - id: task-002
      status: 'done'
      title: 'Fast workdir check (container-free)'
      depends_on: [task-001]
      produces:
        - '.workdir/library.yaml simpleicons entry regenerated against 16.34.0'
        - 'item-count plausibility signal before the slower full build'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 80
    - id: task-003
      status: 'done'
      title: 'Full build via Podman (isolated scratchpad) and count comparison -- DEC-4 course correction applied'
      depends_on: [task-002]
      produces:
        - 'full build executed once, successfully, in an isolated scratchpad (not the tracked distribution/simpleicons/**) -- 27 modules, 3464 items, exit 0'
        - 'module/item count comparison against the 27/3397 baseline (DEC-3): increase confirmed (27 modules unchanged, 3464 vs 3397 items)'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'medium'
      confidence: 70
    - id: task-004
      status: 'done'
      title: 'Lint and test validation'
      depends_on: [task-003]
      produces:
        - 'npm run lint pass confirmation'
        - 'npm test pass confirmation'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 85
    - id: task-005
      status: 'done'
      title: 'Diff review, local commit, and prg documentation'
      depends_on: [task-004]
      produces:
        - 'git diff reviewed and confirmed scoped to the intended files'
        - 'local commit of the change'
        - 'prg Findings entry documenting before/after counts'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 90
  edges:
    - from: task-001
      to: task-002
      reason: 'The workdir check needs the new ICONS_VERSION already in place to fetch the right archive (TDD FLOW-1 steps 1-3)'
    - from: task-002
      to: task-003
      reason: 'DEC-2: the fast container-free check runs first; the slower Podman build only follows once the cheap check shows a plausible result, per FLOW-1 step 4s fallback (fix discover() first if the fast check is already broken, before paying for a full build)'
    - from: task-003
      to: task-004
      reason: 'TG-4 validates the full changed tree, which only exists once the full build has run (source edit plus regenerated distribution/** output)'
    - from: task-004
      to: task-005
      reason: 'Nothing is committed until both the build and the validation gate are green'
```

No parallel edges: all five tasks form one strictly sequential chain, each
consuming the prior task's output (edited source -> fast check -> full
build -> lint/test -> commit) over the same files
(`source/library/packages/simpleicons/index.ts`, `.workdir/**`,
`distribution/simpleicons/**`) — there is no safe parallel split within
this run's own scope.

## 4. Task Catalog

```yaml
task_catalog:
  tasks:
    - id: task-001
      title: 'Confirm latest version and bump ICONS_VERSION'
      source_requirements:
        prd: []
        tdd:
          - 'TG-1'
          - 'DEC-1'
          - 'ASM-1'
          - 'IMP-1'
      outputs:
        - 'npm view simple-icons version re-confirmed as 16.34.0 at execution time'
        - 'source/library/packages/simpleicons/index.ts line 13 updated to const ICONS_VERSION = "16.34.0"'
      verification:
        - 'npm view simple-icons version'
        - 'grep ICONS_VERSION source/library/packages/simpleicons/index.ts'
      risk: 'low'
      confidence: 90
      human_review: 'none'
      escalation_triggers:
        - 'npm view reports a version newer than 16.34.0 at execution time (drift since wave authoring) -- use the actually-latest version instead and record the drift'
      delegation_tier: 'standard'
    - id: task-002
      title: 'Fast workdir check (container-free)'
      source_requirements:
        prd: []
        tdd:
          - 'TG-2'
          - 'DEC-2'
          - 'ASM-2'
          - 'FLOW-1'
      outputs:
        - 'npm run generate:workdir -- -p simpleicons exit 0'
        - '.workdir/library.yaml simpleicons entry regenerated; item count inspected for plausibility'
      verification:
        - 'npm run generate:workdir -- -p simpleicons'
        - 'inspect .workdir/library.yaml simpleicons entry'
      risk: 'low'
      confidence: 80
      human_review: 'none'
      escalation_triggers:
        - 'zero or near-zero items discovered, or the command errors -- ASM-2 is falsified; inspect the fetched archive layout and apply the minimal discover()/template fix before proceeding to task-003 (stays in scope per TDD Scope)'
      delegation_tier: 'standard'
    - id: task-003
      title: 'Full build via Podman (isolated scratchpad) and count comparison -- DEC-4 course correction applied'
      source_requirements:
        prd: []
        tdd:
          - 'TG-2'
          - 'TG-3'
          - 'DEC-2'
          - 'DEC-3'
          - 'DEC-4'
          - 'ASM-3'
          - 'IMP-3'
      outputs:
        - 'full generate:workdir + podman run build executed once, successfully, in an isolated scratchpad copy of .workdir/distribution (not the tracked repository directories) -- exit 0'
        - 'module/item count comparison against the 27-module/3397-item 16.9.0 baseline, read from the isolated builds README.md'
        - 'tracked distribution/simpleicons/** and .workdir/** left untouched/unregenerated by this run (DEC-4, DEF-2)'
      verification:
        - 'npm run generate:workdir -- -p simpleicons -w <scratchpad>/.workdir'
        - 'podman run --rm --userns=keep-id -v <scratchpad>/.workdir:/workdir:z,U -v <scratchpad>/distribution:/distribution:z,U docker.io/thibaultmorin/plantuml-generator:1 plantuml-generator library generate library.yaml --urn=simpleicons --clean-urn=simpleicons -O=/distribution'
        - 'grep -oP "\\d+(?= items)" <scratchpad>/distribution/simpleicons/README.md | paste -sd+ | bc (sum items, compare to 3397 baseline)'
        - 'grep "provides .* modules" <scratchpad>/distribution/simpleicons/README.md (compare to 27 baseline)'
      risk: 'medium'
      confidence: 70
      human_review: 'none'
      escalation_triggers:
        - 'the build fails (Podman/image/render error)'
        - 'the resulting item/module count decreases or collapses to near-zero relative to baseline (DEC-3) -- treat as a defect, not an accepted outcome; investigate before proceeding'
        - 'a shared-directory race with a concurrent sibling wave run is detected (ps aux shows another generate:package/podman run process) -- use the isolated scratchpad approach rather than the tracked .workdir/distribution (DEC-4)'
      delegation_tier: 'standard'
    - id: task-004
      title: 'Lint and test validation'
      source_requirements:
        prd: []
        tdd:
          - 'TG-4'
      outputs:
        - 'npm run lint pass confirmation'
        - 'npm test pass confirmation'
      verification:
        - 'npm run lint'
        - 'npm test'
      risk: 'low'
      confidence: 85
      human_review: 'none'
      escalation_triggers:
        - 'a failure traces to an unrelated, pre-existing spec (e.g. AWS/Azure network-dependent tests) -- note as out of scope per TDD Observability, do not treat as a regression from this change'
        - 'a failure traces to the simpleicons change itself -- fix before proceeding to task-005'
      delegation_tier: 'standard'
    - id: task-005
      title: 'Diff review, local commit, and prg documentation'
      source_requirements:
        prd: []
        tdd:
          - 'TG-1'
          - 'TG-2'
          - 'TG-3'
          - 'TG-4'
          - 'DEF-1'
      outputs:
        - 'git diff/git status reviewed and confirmed scoped to source/library/packages/simpleicons/index.ts plus generated .workdir/**, distribution/simpleicons/** and this runs own docs'
        - 'local commit (no push, no PR)'
        - 'prg Findings entry: before/after module/item counts, confirmed final ICONS_VERSION'
      verification:
        - 'git status'
        - 'git diff --stat'
      risk: 'low'
      confidence: 90
      human_review: 'none'
      escalation_triggers:
        - 'git status shows changes outside this runs likely_paths (source/library/packages/simpleicons/**) or outside generated output/this runs own docs -- investigate before committing'
      delegation_tier: 'standard'
```

## 5. Parallelization Plan

```yaml
parallelization_plan:
  groups: []
```

No parallel groups: a strictly sequential five-task chain, each task
consuming the previous task's output (edited source -> fast check -> full
Podman build -> lint/test -> commit). Running any two tasks concurrently
would mean linting/testing or comparing counts against an incomplete or
stale build.

## 6. Human Review Gates

```yaml
human_review_gates:
  gates: []
```

None. Per the autonomy override, no category here (a one-constant version
bump plus a local build/verify/commit sequence) rises to a genuine
product/business tradeoff or an irreversible action — every task's
escalation triggers route to a documented fix-or-investigate step, not a
human stop, and this run explicitly does not push or open a PR (the one
step that would touch anything outside this run's own local working
tree).

## 7. Risk Assessment

```yaml
risk_assessment:
  by_task:
    - id: task-001
      risk: 'low'
      rationale: 'Single constant edit; npm view already confirmed the target version and its direct reachability from the current pin before this plan was drafted.'
    - id: task-002
      risk: 'low'
      rationale: 'Container-free, fast smoke check; worst case is a discovery failure that is caught here cheaply, before the slower full build.'
    - id: task-003
      risk: 'medium'
      rationale: 'Depends on an external network fetch (GitHub archive) and a Podman-rendered build whose failure modes (render error, implausible item count) are only observable once the build actually runs.'
    - id: task-004
      risk: 'low'
      rationale: 'Standard repository validation; this package has no dedicated spec file, so no package-specific test risk beyond the general suite.'
    - id: task-005
      risk: 'low'
      rationale: 'Review and local commit only; no push, no PR, no publish -- fully reversible via git revert.'
  by_area:
    - area: 'infra'
      risk: 'medium'
      rationale: 'One external-archive-dependent, Podman-rendered build step (task-003) carries the runs only meaningful risk; everything else is low.'
    - area: 'docs'
      risk: 'low'
      rationale: 'No documentation deliverables beyond this runs own prg/pln/tdd records.'
```

## 8. Confidence Assessment

```yaml
confidence_assessment:
  by_task:
    - id: task-001
      score: 90
      rationale: 'npm view already confirmed 16.34.0 as latest and directly reachable before planning; this is a single-line edit.'
    - id: task-002
      score: 80
      rationale: 'ASM-2 (stable archive layout across the version range) is plausible given Simple Icons own changelog practice, but not independently verified until this task runs.'
    - id: task-003
      score: 70
      rationale: 'Depends on ASM-3 (Podman availability, already confirmed) and ASM-2 holding at the full-build level too; lowest confidence task because it is the first time the real upstream archive at 16.34.0 is actually fetched and rendered.'
    - id: task-004
      score: 85
      rationale: 'Standard, well-understood validation commands; this package has no csv-parse or other cross-cutting dependency touched by W-1, reducing interaction risk.'
    - id: task-005
      score: 90
      rationale: 'Pure review/commit step; the only uncertainty is whether a stray generated-file diff needs explaining, which git status/diff --stat directly surfaces.'
```

## 9. Agent Assignment Plan

```yaml
agent_assignment_plan:
  assignments:
    - task_id: task-001
      agent_role: 'Infrastructure Agent'
      objective: 'Re-run npm view simple-icons version to confirm 16.34.0 is still latest at execution time, then edit source/library/packages/simpleicons/index.ts line 13 to const ICONS_VERSION = "16.34.0".'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-1: bump ICONS_VERSION in place, no branch/PR workflow.'
          - 'ASM-1: GitHub release tags match npm package versions one-to-one for simple-icons.'
      likely_files:
        - 'source/library/packages/simpleicons/index.ts'
      acceptance_criteria:
        - 'ICONS_VERSION reads "16.34.0" (or a newer version if drift is detected and recorded)'
      verification:
        - 'npm view simple-icons version'
        - 'grep ICONS_VERSION source/library/packages/simpleicons/index.ts'
      escalation_triggers:
        - 'a newer version than 16.34.0 is now published'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-002
      agent_role: 'Infrastructure Agent'
      objective: 'Run npm run generate:workdir -- -p simpleicons and inspect the resulting .workdir/library.yaml simpleicons entry for a plausible, non-zero item count.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-2: fast container-free check first, before the full Podman build.'
          - 'ASM-2: stable archive layout assumed; falsified only if discovery yields zero/near-zero items or errors.'
      likely_files:
        - '.workdir/library.yaml'
        - '.workdir/.cache/simpleicons/**'
      acceptance_criteria:
        - 'command exits 0 and the simpleicons entry shows a plausible item count (not zero/near-zero)'
      verification:
        - 'npm run generate:workdir -- -p simpleicons'
      escalation_triggers:
        - 'zero/near-zero items or an error -- fix discover()/getItemUrn() minimally per TDD Scope before proceeding'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-003
      agent_role: 'Infrastructure Agent'
      objective: 'Run npm run generate:package -- -p simpleicons (full Podman-rendered build) and compare distribution/simpleicons/README.md module/item totals against the 27-module/3397-item 16.9.0 baseline.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-2: Podman is confirmed available in this environment; the full build is both possible and required by TG-3.'
          - 'DEC-3: an increase is the expected passing outcome; a decrease or near-zero collapse is a defect.'
      likely_files:
        - 'distribution/simpleicons/**'
        - '.workdir/**'
      acceptance_criteria:
        - 'npm run generate:package -- -p simpleicons exits 0'
        - 'distribution/simpleicons/README.md regenerated with a module/item count that is not a decrease from the 27/3397 baseline'
      verification:
        - 'npm run generate:package -- -p simpleicons'
        - 'grep -oP "\\d+(?= items)" distribution/simpleicons/README.md | paste -sd+ | bc'
      escalation_triggers:
        - 'build failure (Podman/image/render error)'
        - 'count decrease or near-zero collapse'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-004
      agent_role: 'QA Agent'
      objective: 'Run npm run lint and npm test over the full changed tree and confirm both pass.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'TG-4: npm run lint and npm test both pass against the changed source tree.'
          - 'Observability: an unrelated pre-existing spec failure (e.g. AWS/Azure network tests) is out of this runs scope, note rather than treat as a regression.'
      likely_files: []
      acceptance_criteria:
        - 'npm run lint exits 0'
        - 'npm test exits 0, or any failure is confirmed unrelated to this runs change and noted as such'
      verification:
        - 'npm run lint'
        - 'npm test'
      escalation_triggers:
        - 'a failure traces to the simpleicons change itself'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-005
      agent_role: 'QA Agent'
      objective: 'Review git status/git diff --stat to confirm the change is scoped to source/library/packages/simpleicons/index.ts plus generated .workdir/**/distribution/simpleicons/** and this runs own docs, commit locally (no push, no PR), and write the prg Findings entry.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'Deployment and Rollout: code-only change, rollback via git revert; this run does not push, open a PR, or publish.'
          - 'DEF-1: icon rename/removal is not diffed item-by-item, only aggregate counts.'
      likely_files:
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0007-simpleicons-refresh/prg-0007-simpleicons-refresh.md'
      acceptance_criteria:
        - 'git diff is scoped as expected'
        - 'local commit created'
        - 'prg Findings entry records before/after counts and final ICONS_VERSION'
      verification:
        - 'git status'
        - 'git diff --stat'
      escalation_triggers:
        - 'changes outside this runs likely_paths or generated output appear in the diff'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
```

## 10. Verification Plan

```yaml
verification_plan:
  checks:
    - task_id: task-001
      methods:
        - 'npm view simple-icons version'
        - 'grep ICONS_VERSION source/library/packages/simpleicons/index.ts'
      success_criteria:
        - 'the file reads the confirmed-latest version string'
    - task_id: task-002
      methods:
        - 'npm run generate:workdir -- -p simpleicons'
      success_criteria:
        - 'exit 0; .workdir/library.yaml simpleicons entry has a plausible non-zero item count'
    - task_id: task-003
      methods:
        - 'npm run generate:package -- -p simpleicons'
        - 'distribution/simpleicons/README.md module/item count comparison'
      success_criteria:
        - 'exit 0; count is not a decrease from the 27/3397 baseline'
    - task_id: task-004
      methods:
        - 'npm run lint'
        - 'npm test'
      success_criteria:
        - 'both exit 0 (or any test failure confirmed unrelated to this change)'
    - task_id: task-005
      methods:
        - 'git status'
        - 'git diff --stat'
      success_criteria:
        - 'diff scoped to expected files; commit created'
```

## 11. Escalation Rules

```yaml
escalation_rules:
  rules:
    - condition: 'A newer Simple Icons version than 16.34.0 is published by the time task-001 runs'
      action: 'Use the actually-latest version instead, and record the drift from the wave manifests 16.34.0 figure in the prg -- this is a factual update, not a product decision.'
    - condition: 'task-002s fast check shows zero/near-zero items or errors (ASM-2 falsified)'
      action: 'Inspect the fetched archive layout and apply the minimal discover()/getItemUrn()/template fix needed (TDD Scope explicitly allows this), then re-run task-002 before proceeding to task-003.'
    - condition: 'task-003s full build fails, or produces a decreased/near-zero item count relative to the 27/3397 baseline'
      action: 'Treat as a defect per DEC-3, not an accepted outcome -- investigate (archive structure, render error) before proceeding to task-004.'
    - condition: 'task-004s npm test failure traces to an unrelated, pre-existing spec (e.g. AWS/Azure network-dependent tests)'
      action: 'Note it in the prg as out of scope per TDD Observability; do not block this run on it.'
    - condition: 'task-005s diff review shows changes outside source/library/packages/simpleicons/**, generated .workdir/**/distribution/simpleicons/**, or this runs own docs'
      action: 'Investigate before committing -- do not commit an unexplained out-of-scope change.'
    - condition: 'Any genuinely unresolvable blocker per the complete-run autonomy override (conflicting requirements with no defensible resolution, a missing credential, an unresearchable external fact, or a real product/business tradeoff)'
      action: 'Stop that task, mark it blocked in this pln, log it in the prg, and continue with whatever does not depend on it -- surface in the final report rather than halting the whole run.'
```

## 12. Final Execution Manifest

```yaml
execution_manifest:
  status: 'done'
  recommendation: 'proceed'
  autonomy_level: 'high'
  total_tasks: 5
  autonomous_tasks: 5
  review_before_tasks: 0
  review_after_tasks: 0
  human_required_tasks: 0
  blocked_tasks: 0
  critical_path_tasks:
    - task-001
    - task-002
    - task-003
    - task-004
    - task-005
  parallel_groups: []
  required_human_gates: []
  highest_risk_tasks:
    - task-003
  lowest_confidence_tasks:
    - task-003
  next_action: 'None -- run complete. ICONS_VERSION bumped to 16.34.0 and committed locally (not pushed). Content verified via an isolated generate:workdir + Podman build (27 modules, 3464 items, up from 27/3397) rather than a regeneration of the tracked distribution/simpleicons/** (DEC-4 course correction, directed mid-execution). Open item (DEF-2): tracked distribution/simpleicons/**/.workdir/** remain at their pre-change (16.9.0) state; trigger package-builder.yaml (workflow_dispatch, pkgName=simpleicons) once this branch is pushed. lint/test green throughout.'
  criteria:
    - 'source/library/packages/simpleicons/index.ts ICONS_VERSION reads "16.34.0" (or newer, with drift recorded) -- MET'
    - 'a full generate:workdir + Podman-rendered build succeeds against the new version in an isolated scratchpad (DEC-4) -- MET (exit 0, 27 modules / 3464 items)'
    - 'that builds module/item counts are not a decrease from the 27/3397 baseline -- MET (27 modules unchanged, 3464 > 3397 items)'
    - 'the tracked distribution/simpleicons/** staleness is recorded as an explicit open item (DEF-2), not silently closed -- MET (see TDD DEF-2, Deployment and Rollout; this manifests next_action)'
    - 'npm run lint passes -- MET'
    - 'npm test passes -- MET (5 passing)'
    - 'npm run lint passes'
    - 'npm test passes'
```
