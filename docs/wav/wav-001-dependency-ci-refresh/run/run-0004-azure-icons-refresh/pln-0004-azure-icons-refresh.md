---
title: Azure icons refresh — execution plan
status: active
owner: tcmorin@gmail.com
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0004-azure-icons-refresh/tdd-0004-azure-icons-refresh.md
run: 0004
wave: 001
type: pln
---

# Azure icons refresh — Execution Plan

No PRD exists for this run (`TDD+pln` profile, infra-only work whose scope
and target version arrive settled from the wave manifest). This plan is
derived from the TDD alone (`tdd-0004-azure-icons-refresh.md`); "PRD/TDD
Consistency Assessment" below is marked not applicable throughout.

This run executes under `complete-run`'s explicit autonomy override: the
default autonomy policy's `review_before`/`human_required` tiers are not
gated on category alone here — a task stops only on a genuine,
unresolvable blocker. None of this run's tasks meet that bar (see
Escalation Rules), so every task below runs autonomously. The one
instruction this override does not touch is the dispatch brief's explicit
prohibition on `git push`/PR creation — that is an external operator
instruction, not a `human_required` gate this skill is overriding.

## 1. Executive Summary

```yaml
summary:
  status: 'done'
  product_goal: 'Move the Azure icon package from upstream V23 to V24, confirmed live, following azure-package-upgrading adapted for a local-only (no push/PR) workflow.'
  technical_approach: 'Bump ICONS_VERSION to "24" (TDD IMP-1), verify no structural change requires groups.csv/template edits (DEC-2), validate via generate:workdir then the full containerized generate:package build (DEC-1), then lint/test, then commit locally.'
  total_tasks: 4
  parallel_groups: 0
  high_risk_tasks: 0
  human_review_gates: 0
  autonomy_level: 'high'
  recommendation: 'proceed'
  criteria:
    - 'ICONS_VERSION is "24" in source/library/packages/azure/index.ts'
    - 'npm run generate:workdir -- -p azure succeeds'
    - 'npm run generate:package -- azure (full podman build) succeeds and distribution/azure/Item and Group are populated, verified by direct file-count inspection, not exit code alone'
    - 'npm run lint and npm test both pass'
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
      title: 'Confirm V24 is live and bump ICONS_VERSION'
      depends_on: []
      produces:
        - 'source/library/packages/azure/index.ts with ICONS_VERSION = "24"'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 90
    - id: task-002
      status: 'done'
      title: 'Discovery-level validation and structural-change check (DEC-2)'
      depends_on: [task-001]
      produces:
        - 'generate:workdir success confirmation'
        - 'V23 vs V24 category-directory diff result (empirical TG-5 answer)'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 85
    - id: task-003
      status: 'done'
      title: 'Full containerized build and direct output verification'
      depends_on: [task-002]
      produces:
        - 'distribution/azure/Item and Group populated and rendered'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'medium'
      confidence: 70
    - id: task-004
      status: 'done'
      title: 'Final lint/test validation and local commit'
      depends_on: [task-003]
      produces:
        - 'npm run lint / npm test pass confirmation'
        - 'local commit (no push, no PR)'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 90
  edges:
    - from: task-001
      to: task-002
      reason: 'TDD FLOW-1 step 3 requires the version edit before discovery can be validated against it'
    - from: task-002
      to: task-003
      reason: 'FLOW-1 step 5: the full containerized build should only run once discovery-level correctness and the structural-change question are settled'
    - from: task-003
      to: task-004
      reason: 'Final validation and commit happen once the build artifact itself is confirmed correct, not merely "exit code 0"'
```

No parallel edges: all four tasks form one strictly sequential chain —
each depends on the previous step's artifact (the edited source file, the
generated workdir manifest, the rendered distribution output), matching
the TDD's own `FLOW-1` ordering.

## 4. Task Catalog

```yaml
task_catalog:
  tasks:
    - id: task-001
      title: 'Confirm V24 is live and bump ICONS_VERSION'
      source_requirements:
        prd: []
        tdd:
          - 'TG-1'
          - 'ASM-1'
          - 'IMP-1'
      outputs:
        - 'source/library/packages/azure/index.ts: ICONS_VERSION = "24"'
      verification:
        - 'node scripts/resolve-azure-icons.mjs (confirms V24 live before editing)'
        - 'grep ICONS_VERSION source/library/packages/azure/index.ts'
      risk: 'low'
      confidence: 90
      human_review: 'none'
      escalation_triggers:
        - 'resolve-azure-icons.mjs no longer resolves V24 (upstream regression) -- stop and record, do not guess a version'
      delegation_tier: 'standard'
    - id: task-002
      title: 'Discovery-level validation and structural-change check'
      source_requirements:
        prd: []
        tdd:
          - 'TG-2'
          - 'TG-5'
          - 'ASM-3'
          - 'DEC-2'
      outputs:
        - 'npm run generate:workdir -- -p azure succeeds, icon/group counts recorded'
        - 'V23-vs-V24 top-level category directory diff recorded'
        - 'decision on IMP-2 (groups.csv/templates): no change needed, or specific change identified'
      verification:
        - 'npm run generate:workdir -- -p azure'
        - 'diff of extracted V23/V24 archive category directory listings'
        - 'grep for the groups.csv-referenced URN (ServiceVirtualNetworks) in the generated library.yaml'
      risk: 'low'
      confidence: 85
      human_review: 'none'
      escalation_triggers:
        - 'structural change found that getItemUrn()/discover() glob cannot handle -- fix the parsing logic (mechanical) rather than holding back, since this is a required adaptation, not a product tradeoff'
        - 'groups.csv-referenced URN no longer resolves -- update groups.csv to the renamed/equivalent URN if one exists, else record as a real content loss'
      delegation_tier: 'standard'
    - id: task-003
      title: 'Full containerized build and direct output verification'
      source_requirements:
        prd: []
        tdd:
          - 'TG-3'
          - 'ASM-2'
          - 'ASM-4'
          - 'RISK-4'
          - 'DEC-1'
      outputs:
        - 'distribution/azure/Item/** and distribution/azure/Group/** rendered (puml/md/png/svg as applicable)'
      verification:
        - 'npm run generate:package -- azure (correct invocation, no stray -p -- see TDD Current State finding)'
        - 'direct file-count inspection of distribution/azure/Item and Group (not exit code alone, per RISK-4)'
        - 'spot-check a handful of rendered .puml files for plausible content'
      risk: 'medium'
      confidence: 70
      human_review: 'none'
      escalation_triggers:
        - 'EACCES or "unable to create" errors from a prior container run leaving mismatched file ownership -- run `podman unshare chown -R 0:0 .workdir distribution` and retry, per ASM-4; this is a mechanical environment fix, not a blocker'
        - 'the render process fails or produces a truncated/empty output under apparent memory pressure -- retry with PLANTUML_GENERATOR_THREADS set to a lower value (e.g. 2) to reduce concurrent JVM/Inkscape processes; this is an environment accommodation, not a scope change'
        - 'after a successful-looking exit code, distribution/azure/Item or Group is empty or missing -- treat this as a failure requiring investigation (stale library.yaml, partial render), never as success, per RISK-4'
      delegation_tier: 'standard'
    - id: task-004
      title: 'Final lint/test validation and local commit'
      source_requirements:
        prd: []
        tdd:
          - 'TG-4'
          - 'CON-4'
      outputs:
        - 'npm run lint / npm test pass confirmation'
        - 'one local commit scoped to this run'\''s files (azure index.ts, this run'\''s docs) -- no push, no PR'
      verification:
        - 'npm run lint'
        - 'npm test'
        - 'git status / git diff review before committing'
      risk: 'low'
      confidence: 90
      human_review: 'none'
      escalation_triggers:
        - 'lint or test fails for a reason traceable to the ICONS_VERSION bump -- investigate and fix if mechanical; this is not expected since the bump touches no TypeScript logic'
      delegation_tier: 'standard'
```

## 5. Parallelization Plan

```yaml
parallelization_plan:
  groups: []
```

No parallel groups: each task's input is the previous task's verified
output (edited source -> generated manifest -> rendered distribution ->
final commit). There is nothing in this run's own path-set that could run
concurrently with itself.

## 6. Human Review Gates

```yaml
human_review_gates:
  gates: []
```

None. Per the autonomy override, a version-pin bump to a static content
source is not a product/business tradeoff and carries no irreversible
action (rollback is a `git revert`, per the TDD's Deployment and Rollout
section) — every escalation trigger above routes to a mechanical fix or a
recorded finding, not a human stop. The one standing instruction this plan
does not override is the dispatch brief's push/PR prohibition, which
task-004 honors directly rather than treating as a gate to escalate.

## 7. Risk Assessment

```yaml
risk_assessment:
  by_task:
    - id: task-001
      risk: 'low'
      rationale: 'Single-line literal change, no logic touched.'
    - id: task-002
      risk: 'low'
      rationale: 'Pure validation/comparison step; worst case is discovering a structural change that requires IMP-2, which is itself a bounded, well-understood edit.'
    - id: task-003
      risk: 'medium'
      rationale: 'Requires a working Podman setup and sufficient system resources (observed memory-pressure-driven failures in this environment at default thread count); the fix (reduced PLANTUML_GENERATOR_THREADS, ownership chown) is known and mechanical, but this task genuinely failed twice before succeeding during TDD drafting, so it is not a trivial pass-through.'
    - id: task-004
      risk: 'low'
      rationale: 'Mechanical devDependency-style validation and a local commit; no push/PR per CON-4.'
  by_area:
    - area: 'infra'
      risk: 'medium'
      rationale: 'The only material risk surface is the local Podman/container build environment (resource limits, rootless UID mapping), not the Azure version bump itself, which is a one-line, low-risk change.'
    - area: 'content'
      risk: 'low'
      rationale: 'V24 is additive-only per the empirical category-directory diff (no removals); the one groups.csv-referenced URN was confirmed to still resolve.'
```

## 8. Confidence Assessment

```yaml
confidence_assessment:
  by_task:
    - id: task-001
      score: 90
      rationale: 'Confirmed live via resolve-azure-icons.mjs before editing; mechanical one-line change.'
    - id: task-002
      score: 85
      rationale: 'Discovery already run during TDD drafting with a clean result (714 icons, 7 groups, same 29 categories); residual uncertainty is only in edge-case icon naming collisions (unifyItems dedup), already noted as a non-blocking finding.'
    - id: task-003
      score: 70
      rationale: 'Observed two real failures in this environment (EACCES from stale ownership, then a resource-pressure render failure) before finding the working combination (clean ownership + reduced thread count); confidence reflects that this is empirically fragile in this specific environment, not that the approach is wrong.'
    - id: task-004
      score: 90
      rationale: 'Lint/test are unaffected by a content-source version pin; only residual risk is an unrelated pre-existing failure.'
```

## 9. Agent Assignment Plan

```yaml
agent_assignment_plan:
  assignments:
    - task_id: task-001
      agent_role: 'Infrastructure Agent'
      objective: 'Run node scripts/resolve-azure-icons.mjs to confirm V24 is live, then edit ICONS_VERSION from "23" to "24" in source/library/packages/azure/index.ts.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'ASM-1: V24 must be independently reconfirmed live at execution time, not merely trusted from wave-authoring time.'
          - 'IMP-1: single-line, mechanical edit; ICONS_URL is derived, no second literal to change.'
      likely_files:
        - 'source/library/packages/azure/index.ts'
      acceptance_criteria:
        - 'ICONS_VERSION is the string "24"'
        - 'resolve-azure-icons.mjs output confirms V24 before the edit is made'
      verification:
        - 'node scripts/resolve-azure-icons.mjs'
      escalation_triggers:
        - 'resolve-azure-icons.mjs fails or resolves a different version than expected'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-002
      agent_role: 'Infrastructure Agent'
      objective: 'Run npm run generate:workdir -- -p azure against the V24-pinned source, record icon/group counts, and diff the V23 vs V24 extracted archive category-directory listings to decide whether groups.csv/templates need any change (empirically, not speculatively).'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'TG-5: any structural change must be recorded, whether or not it requires an edit.'
          - 'DEC-2: only touch groups.csv/templates if the diff shows a real structural change.'
          - 'Current State: V23 baseline was 705 icons/7 groups/29 categories; this task reconfirms V24s own numbers.'
      likely_files:
        - 'source/library/packages/azure/groups.csv (read-only inspection unless DEC-2 fires)'
        - 'source/templates/azure/** (read-only inspection unless DEC-2 fires)'
      acceptance_criteria:
        - 'generate:workdir -- -p azure exits 0 and reports a plausible icon/group count'
        - 'category-directory diff result is recorded (even if "no change")'
      verification:
        - 'npm run generate:workdir -- -p azure'
        - 'find <extracted-v23>/Icons -maxdepth 1 -type d vs find <extracted-v24>/Icons -maxdepth 1 -type d'
      escalation_triggers:
        - 'a structural change is found that breaks discover()/getItemUrn() or the groups.csv URN reference'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-003
      agent_role: 'Infrastructure Agent'
      objective: 'Run the full containerized build (npm run generate:package -- azure, using the correct single-argument invocation, not the documented-but-buggy -- -p azure form) and verify distribution/azure/Item and Group are actually populated by direct file-count inspection -- never trust exit code 0 alone, since this environment was observed to report success while leaving those directories empty.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'RISK-4: rootless Podman UID-mapping can leave files owned by a container-mapped UID, breaking a subsequent ts-node step with a silently-non-propagating EACCES; fix with `podman unshare chown -R 0:0 .workdir distribution`.'
          - 'DEC-1: full local build-and-verify replaces the howtos branch/push/Actions-dispatch/PR steps.'
          - 'Current State: the documented `npm run generate:package -- -p azure` invocation passes an extra -p that the script does not expect; use `npm run generate:package -- azure` instead.'
      likely_files:
        - 'distribution/azure/** (generated output, not hand-edited)'
      acceptance_criteria:
        - 'distribution/azure/Item/** and distribution/azure/Group/** contain the expected rendered files (puml/md/png as applicable), confirmed by direct find/count, not just a 0 exit code'
      verification:
        - 'npm run generate:package -- azure'
        - 'find distribution/azure/Item -name "*.puml" | wc -l (and similarly for Group)'
        - 'spot-check a few rendered .puml files for plausible content (correct urn, sprite name)'
      escalation_triggers:
        - 'build fails repeatedly after the chown + reduced-thread-count mitigation -- escalate as a genuine environment blocker'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-004
      agent_role: 'QA Agent'
      objective: 'Run npm run lint and npm test against the final state, review git status/diff to confirm only the expected files changed, and create one local commit (no push, no PR per CON-4).'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'TG-4: lint and test must both pass at the final state.'
          - 'CON-4: no push, no PR, no workflow dispatch -- commit locally only.'
      likely_files:
        - 'source/library/packages/azure/index.ts'
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0004-azure-icons-refresh/**'
      acceptance_criteria:
        - 'npm run lint and npm test both exit 0'
        - 'git diff shows only the ICONS_VERSION change plus this runs own documents (and distribution/azure/** regenerated content)'
        - 'exactly one local commit created on the current branch, not pushed'
      verification:
        - 'npm run lint'
        - 'npm test'
        - 'git status / git diff review'
      escalation_triggers:
        - 'git diff shows unexpected files changed outside this runs scope'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
```

## 10. Verification Plan

```yaml
verification_plan:
  checks:
    - task_id: task-001
      methods:
        - 'node scripts/resolve-azure-icons.mjs'
        - 'grep ICONS_VERSION source/library/packages/azure/index.ts'
      success_criteria:
        - 'resolves V24 and the literal reads "24"'
    - task_id: task-002
      methods:
        - 'npm run generate:workdir -- -p azure'
        - 'category-directory diff'
      success_criteria:
        - 'exits 0, icon/group counts recorded, diff result recorded'
    - task_id: task-003
      methods:
        - 'npm run generate:package -- azure'
        - 'direct file-count inspection of distribution/azure/Item and Group'
      success_criteria:
        - 'exits 0 AND distribution/azure/Item and Group are non-trivially populated (file counts consistent with the V23 baseline order of magnitude, not near-zero)'
    - task_id: task-004
      methods:
        - 'npm run lint'
        - 'npm test'
        - 'git status / git diff'
      success_criteria:
        - 'both commands exit 0; diff scoped to expected files; one local commit created'
```

## 11. Escalation Rules

```yaml
escalation_rules:
  rules:
    - condition: 'A container build reports exit 0 but distribution/azure/Item or Group is empty or far smaller than the V23 baseline'
      action: 'Treat as a failure, not success (RISK-4) -- regenerate library.yaml via generate:workdir, confirm it is populated, fix any ownership mismatch via podman unshare chown, and retry the container build, optionally with a reduced PLANTUML_GENERATOR_THREADS.'
    - condition: 'generate:workdir fails with EACCES after a prior container run'
      action: 'Run `podman unshare chown -R 0:0 .workdir distribution` and retry -- a known, mechanical environment fix (ASM-4), not a blocker.'
    - condition: 'A structural change between V23 and V24 breaks discover()/getItemUrn() parsing or the groups.csv-referenced URN'
      action: 'Fix the parsing logic or groups.csv reference mechanically (IMP-2) -- this is a required adaptation to ship the version bump correctly, not a scope expansion requiring escalation.'
    - condition: 'Any genuinely unresolvable blocker per the complete-run autonomy override (conflicting requirements with no defensible resolution, a missing credential, an unresearchable external fact, or a real product/business tradeoff)'
      action: 'Stop that task, mark it blocked in this pln, log it in the prg, and continue with whatever does not depend on it -- surface in the final report rather than halting the whole run.'
```

## 12. Final Execution Manifest

```yaml
execution_manifest:
  status: 'done'
  recommendation: 'proceed'
  autonomy_level: 'high'
  total_tasks: 4
  autonomous_tasks: 4
  review_before_tasks: 0
  review_after_tasks: 0
  human_required_tasks: 0
  blocked_tasks: 0
  critical_path_tasks:
    - task-001
    - task-002
    - task-003
    - task-004
  parallel_groups: []
  required_human_gates: []
  highest_risk_tasks:
    - task-003
  lowest_confidence_tasks:
    - task-003
  next_action: 'None -- run complete. ICONS_VERSION is "24"; full containerized build succeeded in an isolated scratchpad working directory (after two prior attempts against the shared .workdir/distribution tree failed due to confirmed cross-run contention, and one isolated attempt was silently killed because it was backgrounded with a bare `&` instead of the harness run_in_background mechanism); verified output copied into the repo distribution/azure/, confirmed by direct file count (4979 .puml, up from the V23 baselines 4923) and spot-check, not exit code alone; npm run lint and npm test both green; committed locally as dba8b17627 on branch chore/upgrade-deps-and-ci-wave, not pushed.'
  criteria:
    - 'ICONS_VERSION is "24" -- MET'
    - 'generate:workdir -- -p azure succeeds -- MET (714 icons, 7 groups, 709 unique item URNs)'
    - 'full containerized build succeeds with populated distribution/azure/Item and Group, verified directly -- MET (8536 files: 4979 puml, 2839 png, 718 md; 29 Item category dirs plus Group, matching V23 structure; groups.csv-referenced ServiceVirtualNetworks icon confirmed retained)'
    - 'npm run lint and npm test pass -- MET (lint clean; 5 passing tests, same count as baseline)'
```
