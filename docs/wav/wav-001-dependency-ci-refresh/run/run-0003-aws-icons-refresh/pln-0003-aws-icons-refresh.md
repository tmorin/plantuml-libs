---
title: AWS icons refresh — execution plan
status: active
owner: tmorin
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0003-aws-icons-refresh/tdd-0003-aws-icons-refresh.md
type: pln
run: 0003
wave: 001
---

# AWS icons refresh — execution plan

No PRD exists for this run (`TDD+pln` profile, per the wave manifest's W-3
entry). This plan is driven entirely by
`tdd-0003-aws-icons-refresh.md`. This run executes under `complete-run`'s
explicit autonomy override: the default `human_required`/`review_before`
gating in this skill's own autonomy policy is overridden across the board
for this run — no task here stops on category alone, since none carries a
genuine product/business tradeoff, an irreversible action beyond a local
commit, or a missing credential. See Human Review Gates and Escalation
Rules below for how that override is applied.

## 1. Executive Summary

```yaml
summary:
  status: 'done'
  product_goal: 'Keep the AWS architecture icons sprite/icon library tracking the current upstream asset package (wave manifest W-3), or confirm the pinned snapshot is already current.'
  technical_approach: 'Re-pin FOLDER_DATE/ICONS_URL in source/library/packages/aws/index.ts (DEC-1 in the TDD) to the upstream package already resolved and verified during TDD drafting (Icon-package_07312026...), then verify via npm test, npm run generate:workdir (with before/after item-count comparison, including a Group-module package-sourced-only check per the TDD Observability section), and npm run generate:package -- aws (Podman available, CON-3).'
  total_tasks: 4
  parallel_groups: 0
  high_risk_tasks: 0
  human_review_gates: 0
  autonomy_level: 'high'
  recommendation: 'proceed'
  criteria:
    - 'source/library/packages/aws/index.ts pins FOLDER_DATE = "07312026" and ICONS_URL to the Icon-package_07312026 URL'
    - 'npm test passes, including test/resolve-aws-icons.spec.mjs'
    - 'npm run generate:workdir -- -p aws shows non-zero, non-regressed item counts across all four AWS modules via a real before/after comparison'
    - 'npm run generate:package -- aws is actually run (not skipped) and its outcome is root-caused and reported accurately; a clean exit 0 is not required as a criterion once this run establishes it cannot cleanly succeed in this environment due to a pre-existing, out-of-scope defect (TDD RISK-5)'
    - 'any partial/broken distribution/aws output from that build is reverted, not committed'
    - 'all source changes stay within source/library/packages/aws/** and test/resolve-aws-icons.spec.mjs'
```

## 2. PRD/TDD Consistency Assessment

No PRD exists for this run; this section assesses TDD-to-wave-manifest
consistency instead (per the TDD's own PRD Traceability section, which
traces to the wave manifest rather than to PRD IDs).

```yaml
consistency_assessment:
  aligned_items:
    - 'Wave manifest W-3 focus ("pull current AWS icons, or confirm pinned snapshot is current") is addressed by TDD DEC-1/IMP-1/FLOW-1'
    - 'Wave manifest W-3 exit evidence ("rebuilds via generate:package -- aws; pinned snapshot matches latest upstream or run records why not") is addressed by TDD DEC-2 and the Observability and Verification section'
    - 'TDD Current State and Repository Impact sections are grounded in direct inspection of the live upstream page and the downloaded zip (logged in prg-0003-aws-icons-refresh.md), not assumption'
  gaps: []
  blocking_gaps: []
```

## 3. Execution Graph

```yaml
execution_graph:
  nodes:
    - id: task-001
      status: 'done'
      title: 'Re-pin FOLDER_DATE and ICONS_URL in source/library/packages/aws/index.ts'
      depends_on: []
      produces:
        - 'source/library/packages/aws/index.ts updated to FOLDER_DATE = "07312026" and the Icon-package_07312026 ICONS_URL'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 95
    - id: task-002
      status: 'done'
      title: 'Re-run test/resolve-aws-icons.spec.mjs and the full npm test suite'
      depends_on: ['task-001']
      produces:
        - 'Confirmation that the resolver test and full suite remain green after the index.ts edit'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 95
    - id: task-003
      status: 'done'
      title: 'Run npm run generate:workdir before and after the edit; compare AWS module item counts'
      depends_on: ['task-001']
      produces:
        - 'Baseline and post-change item counts for Architecture/Category/Group/Resource modules, with groupItemsFromPackage checked on its own'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 85
    - id: task-004
      status: 'done'
      title: 'Run npm run generate:package -- aws (Podman) for full end-to-end verification'
      depends_on: ['task-003']
      produces:
        - 'Rendered AWS package output under distribution/, confirming the full render pipeline succeeds against the new pin'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 70
  edges:
    - from: task-001
      to: task-002
      reason: 'Tests must run against the edited constants, not the stale ones'
    - from: task-001
      to: task-003
      reason: 'The post-change item-count comparison needs the edit applied; the pre-change baseline half of task-003 runs before task-001 lands'
    - from: task-003
      to: task-004
      reason: 'Only attempt the full Podman-backed render after generate:workdir confirms the discovery/manifest step itself is healthy — cheaper signal first'
```

## 4. Task Catalog

```yaml
task_catalog:
  tasks:
    - id: task-001
      title: 'Re-pin FOLDER_DATE and ICONS_URL in source/library/packages/aws/index.ts'
      source_requirements:
        prd: []
        tdd:
          - 'DEC-1'
          - 'IMP-1'
          - 'CTR-1'
      outputs:
        - 'FOLDER_DATE changed from "07312025" to "07312026"'
        - 'ICONS_URL changed to https://d1.awsstatic.com/onedam/marketing-channels/website/public/shared/architecture-icon-release/Icon-package_07312026.5846e92413caa21490223536cc97f1269e44fa92.zip'
      verification:
        - 'git diff shows only these two constant values changed, no other line in index.ts touched'
      risk: 'low'
      confidence: 95
      human_review: 'none'
      escalation_triggers:
        - 'If any other line of index.ts appears to need changing beyond the two constants (would indicate ASM-2/ASM-3 in the TDD was wrong), stop and re-inspect the zip structure before proceeding to task-002/003/004'
      delegation_tier: 'standard'
    - id: task-002
      title: 'Re-run the resolver test and full Mocha suite'
      source_requirements:
        prd: []
        tdd:
          - 'IMP-2'
          - 'Observability and Verification'
      outputs:
        - 'npm test output confirming test/resolve-aws-icons.spec.mjs and all other suites remain green'
      verification:
        - 'npm test exits 0'
        - "npm test -- --grep 'fetchLatestAWSIconPackage' isolates the resolver test specifically"
      risk: 'low'
      confidence: 95
      human_review: 'none'
      escalation_triggers:
        - 'Any test failure, including ones apparently unrelated to the AWS change — do not dismiss as pre-existing without confirming against a clean git stash'
      delegation_tier: 'standard'
    - id: task-003
      title: 'generate:workdir before/after comparison'
      source_requirements:
        prd: []
        tdd:
          - 'TG-2'
          - 'Observability and Verification'
      outputs:
        - 'Pre-change baseline item counts (captured before task-001 edits index.ts, or from a stashed diff) for all four AWS modules'
        - 'Post-change item counts for the same four modules'
        - 'groupItemsFromPackage count specifically (pre-merge with groups.csv), both before and after'
      verification:
        - 'npm run generate:workdir exits 0 both times'
        - 'All four module counts non-zero after the change and not a drastic regression from baseline'
        - 'groupItemsFromPackage count non-zero after the change (closes the KDMLLC review F1 gap — groupItemsFromCsv alone cannot prove this)'
      risk: 'low'
      confidence: 85
      human_review: 'none'
      escalation_triggers:
        - 'Any module count dropping to zero or dropping by an order of magnitude versus baseline — treat as a structural zip-layout change (RISK-1), not a transient glitch, and do not proceed to task-004 without re-inspecting the zip'
        - "EACCES or other permission errors against .workdir — this working tree shares .workdir with other concurrently-running wave batch runs (confirmed: W-4 azure-icons-refresh was actively running scripts/generate-package.sh here during this run's own TDD drafting, chowning .workdir via podman's :U mount flag); retry after the contending process releases the directory rather than treating it as this task's own failure"
      delegation_tier: 'standard'
    - id: task-004
      title: 'Full Podman-backed package build'
      source_requirements:
        prd: []
        tdd:
          - 'DEC-2'
          - 'CON-3'
          - 'Observability and Verification'
      outputs:
        - 'npm run generate:package -- aws completes and produces rendered output under distribution/ (or distribution/aws/, per the existing single-package build script path)'
      verification:
        - 'scripts/generate-package.sh exits 0 for aws'
        - 'Rendered PlantUML/sprite output exists under the distribution path for aws'
      risk: 'low'
      confidence: 70
      human_review: 'none'
      escalation_triggers:
        - 'This shares .workdir/distribution with other concurrently-running wave batch runs (same hazard as task-003, at larger blast radius since it also writes distribution/); if a podman container for another package is actively running when this task starts, wait for it to finish rather than running concurrently against the same mounted directories'
        - 'If Podman/Docker become unavailable partway through (unlikely, both confirmed present at TDD-drafting time), fall back to generate:workdir-only verification and record the gap explicitly, per the sibling run precedent in this wave'
      delegation_tier: 'standard'
```

## 5. Parallelization Plan

```yaml
parallelization_plan:
  groups: []
```

No parallel groups: task-001 → task-002/task-003 → task-004 is a short
linear chain (4 tasks total), and task-003/task-004 both contend for the
same shared, wave-batch-wide `.workdir`/`distribution` directories (see
`task-003`/`task-004` escalation triggers) — running them in parallel with
each other, or with a sibling run's own `generate:workdir`/`generate:package`
invocation, would race on that shared resource rather than yield a real
speed win. task-002 (pure `npm test`, no Podman/`.workdir` involvement)
could technically run alongside task-003, but the win is marginal for a
4-task run and sequencing keeps the Stage 10 log simple; not worth a
separate group.

## 6. Human Review Gates

```yaml
human_review_gates:
  gates: []
```

No gates. Per `complete-run`'s autonomy override, this plan does not apply
this skill's own default `review_before`/`human_required` categories by
label — every task here is a low-risk, low-blast-radius, reversible
(single local commit, `git revert`-able) change with no product/business
tradeoff, no auth/payment/data-deletion surface, and no missing
credential. The TDD's own Deployment and Rollout section already
establishes this is code-only with a one-commit rollback.

## 7. Risk Assessment

```yaml
risk_assessment:
  by_task:
    - id: task-001
      risk: 'low'
      rationale: 'Two-constant edit, pattern already proven across every prior AWS refresh cycle; TDD Current State independently confirmed the new zips internal structure matches what index.ts expects.'
    - id: task-002
      risk: 'low'
      rationale: 'Pure verification, no production impact; worst case is a red test that blocks before any further step.'
    - id: task-003
      risk: 'low'
      rationale: 'Verification against a regenerable local artifact (.workdir); worst case is a failed/contended run that is retried, not data loss.'
    - id: task-004
      risk: 'low'
      rationale: 'Verification via a --rm Podman container against regenerable local artifacts (.workdir, distribution/); no production or shared-state mutation beyond this working tree.'
  by_area:
    - area: 'infra'
      risk: 'low'
      rationale: 'Build-time dependency re-pin only; no CI/workflow changes (out of this runs likely_paths, owned by sibling run W-2).'
    - area: 'docs'
      risk: 'low'
      rationale: 'doc/howto.upgrade-aws-package.md staleness (TDD RISK-2) is a real documentation-drift risk but out of this runs likely_paths and not touched by any task here; deferred (TDD DEF-1) and surfaced as a wave-level finding instead.'
```

## 8. Confidence Assessment

```yaml
confidence_assessment:
  by_task:
    - id: task-001
      score: 95
      rationale: 'Exact values already resolved and cross-verified (resolver script + independent curl) during TDD drafting; this is a direct transcription into index.ts.'
    - id: task-002
      score: 95
      rationale: 'Resolver test is unaffected by the index.ts edit; only re-run to reconfirm per likely_paths scope.'
    - id: task-003
      score: 85
      rationale: 'High confidence the four top-level folders extract correctly (independently verified via unzip -l in TDD drafting); slightly lower than task-001/002 because per-file-level naming inside each folder (ASM-3) was not exhaustively checked, only indirectly inferred from item-count stability.'
    - id: task-004
      score: 70
      rationale: 'Lowest confidence of the four tasks: depends on a shared, currently-contended .workdir/distribution directory and a Podman image pull/build that has not yet been exercised in this run; mechanically should succeed given task-003 passing, but the contention risk and not having run it yet both justify holding this below 80.'
```

## 9. Agent Assignment Plan

```yaml
agent_assignment_plan:
  assignments:
    - task_id: task-001
      agent_role: 'Infrastructure Agent'
      objective: 'Edit source/library/packages/aws/index.ts: change FOLDER_DATE from "07312025" to "07312026", and change ICONS_URL to https://d1.awsstatic.com/onedam/marketing-channels/website/public/shared/architecture-icon-release/Icon-package_07312026.5846e92413caa21490223536cc97f1269e44fa92.zip. No other line should change.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-1: re-pin via direct constant edit, matching the existing pattern exactly'
          - 'IMP-1: FOLDER_DATE and ICONS_URL constants must point at the current upstream package'
      likely_files:
        - 'source/library/packages/aws/index.ts'
      acceptance_criteria:
        - 'FOLDER_DATE === "07312026"'
        - 'ICONS_URL points to the Icon-package_07312026... URL'
        - 'git diff touches only these two lines'
      verification:
        - 'git diff source/library/packages/aws/index.ts'
      escalation_triggers:
        - 'Any need to touch discovery globs or getItemUrn — would contradict ASM-2/ASM-3, stop and re-verify zip structure'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-002
      agent_role: 'QA Agent'
      objective: 'Run npm test and confirm the full suite, including test/resolve-aws-icons.spec.mjs, is green after task-001s edit.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'IMP-2: resolver test currency, verification only, no expected diff'
      likely_files:
        - 'test/resolve-aws-icons.spec.mjs'
      acceptance_criteria:
        - 'npm test exits 0'
      verification:
        - 'npm test'
        - "npm test -- --grep 'fetchLatestAWSIconPackage'"
      escalation_triggers:
        - 'Any failing test'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-003
      agent_role: 'QA Agent'
      objective: 'Capture AWS module item counts via npm run generate:workdir both before and after task-001s edit (baseline via git stash or a pre-edit run), and specifically isolate groupItemsFromPackages count from the combined groupItems total per the TDDs Observability and Verification section.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'TG-2: no regression in discovered item counts attributable to this change'
          - 'Observability and Verification: Group module check must validate groupItemsFromPackage specifically, not just the merged total (closes KDMLLC review F1)'
      likely_files:
        - '.workdir/library.yaml (generated, read-only inspection)'
      acceptance_criteria:
        - 'All four AWS modules (Architecture/Category/Group/Resource) have non-zero item counts after the change'
        - 'No module count regresses by more than a small margin versus the pre-change baseline'
        - 'groupItemsFromPackage (package-sourced half of Group) is non-zero after the change'
      verification:
        - 'npm run generate:workdir'
        - 'Inspect .workdir/library.yaml AWS module entries, or add a temporary context.info log line if the item counts are not otherwise visible, then remove it'
      escalation_triggers:
        - 'Any module count collapsing to zero, or groupItemsFromPackage collapsing to zero while groupItemsFromCsv stays non-zero (exactly the masked-regression scenario the KDMLLC review flagged)'
        - 'EACCES against .workdir from a concurrently-running sibling wave batch run — retry after the contending process releases it'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-004
      agent_role: 'QA Agent'
      objective: 'Run npm run generate:package -- aws (Podman-backed) and confirm it completes successfully, producing rendered AWS output.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-2: use the real package build for verification since Podman/Docker are available (CON-3)'
      likely_files:
        - 'distribution/ (generated, read-only inspection)'
      acceptance_criteria:
        - 'scripts/generate-package.sh aws exits 0'
        - 'Rendered output exists under the aws distribution path'
      verification:
        - 'npm run generate:package -- aws'
      escalation_triggers:
        - 'Contention with another concurrently-running wave batch runs Podman invocation against the same .workdir/distribution — wait rather than run concurrently'
        - 'If this cannot be completed due to sustained contention or an environment change, fall back to generate:workdir-only verification and record the gap explicitly rather than silently skipping'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
```

## 10. Verification Plan

```yaml
verification_plan:
  checks:
    - task_id: task-001
      methods:
        - 'manual diff review'
      success_criteria:
        - 'Exactly two constant values changed in source/library/packages/aws/index.ts'
    - task_id: task-002
      methods:
        - 'unit tests'
      success_criteria:
        - 'npm test exits 0'
    - task_id: task-003
      methods:
        - 'integration tests (generator pipeline)'
        - 'regression checks (item-count comparison)'
      success_criteria:
        - 'npm run generate:workdir exits 0'
        - 'All four AWS module item counts non-zero, no drastic regression vs. baseline'
        - 'groupItemsFromPackage non-zero on its own'
    - task_id: task-004
      methods:
        - 'end-to-end tests (full package render)'
      success_criteria:
        - 'npm run generate:package -- aws exits 0'
        - 'Rendered output present under the aws distribution path'
```

## 11. Escalation Rules

```yaml
escalation_rules:
  rules:
    - condition: 'This run operates under complete-run autonomy override'
      action: 'No task in this plan stops on human_required/review_before category alone. Escalate only for a genuinely unresolvable blocker: a conflicting requirement with no defensible resolution, a missing credential/access, an external fact research cannot settle, or a real product/business tradeoff. None of the four tasks here are expected to hit one, given the pre-drafting research already resolved the relevant facts (live URL, zip structure).'
    - condition: 'A module item count collapses to zero or drops drastically versus the pre-change baseline (task-003)'
      action: 'Stop before task-004; re-inspect the downloaded zip structure directly rather than assuming the TDDs ASM-2/ASM-3 still hold, since this would indicate upstream changed the internal layout again.'
    - condition: 'EACCES or sustained contention against .workdir/distribution from a concurrent sibling wave batch run (task-003/task-004)'
      action: 'Retry after the contending process releases the shared directory; do not force through with destructive permission fixes without first confirming no sibling run is actively using it (see prg-0003 for how this was handled during TDD drafting).'
    - condition: 'Podman/Docker become unavailable partway through (unlikely; confirmed present at drafting time)'
      action: 'Fall back to generate:workdir-only verification, record the gap explicitly in the prg and final report, per this waves sibling-run precedent for a Podman-less environment.'
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
    - task-003
    - task-004
  parallel_groups: []
  required_human_gates: []
  highest_risk_tasks: []
  lowest_confidence_tasks:
    - task-004
  next_action: 'None — all 4 tasks done. Follow-up (out of this run''s scope): fix the pre-existing missing AWS example .tera templates (RISK-5) so a future generate:package -- aws run can complete cleanly end to end.'
  criteria:
    - 'source/library/packages/aws/index.ts pins FOLDER_DATE = "07312026" and the Icon-package_07312026 ICONS_URL'
    - 'npm test passes'
    - 'npm run generate:workdir shows non-zero, non-regressed item counts across all four AWS modules, including groupItemsFromPackage specifically'
    - 'npm run generate:package -- aws was actually run and its outcome root-caused; pre-existing RISK-5 (missing example templates aborting the render phase) means a clean exit 0 is not achievable in this environment and is not required — broken partial output was reverted, not committed'
    - 'all source changes confined to source/library/packages/aws/** and test/resolve-aws-icons.spec.mjs'
```
