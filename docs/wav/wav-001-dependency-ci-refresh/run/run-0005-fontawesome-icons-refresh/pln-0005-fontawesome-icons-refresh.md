---
title: Font Awesome icons refresh — execution plan
status: active
owner: tcmorin@gmail.com
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0005-fontawesome-icons-refresh/tdd-0005-fontawesome-icons-refresh.md
run: 0005
wave: 001
type: pln
---

# Font Awesome icons refresh — Execution Plan

No PRD exists for this run (`TDD+pln` profile, infra-only work whose scope
arrives settled from the wave manifest). This plan is derived from the TDD
alone (`tdd-0005-fontawesome-icons-refresh.md`); "PRD/TDD Consistency
Assessment" below is marked not applicable throughout.

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
  product_goal: 'Move the Font Awesome sprite package in @tmorin/plantuml-libs from pinned release 7.2.0 to 7.3.1, confirmed as the current latest upstream release.'
  technical_approach: 'Single-constant edit to ICONS_VERSION (TDD DEC-2), validated by comparing generate:workdir module/item counts against the captured 7.2.0 baseline (2860 items / 3 modules) (TDD DEC-1/ASM-2) and a repo-wide lint/test pass (TG-4). The full Podman-backed generate:package build (TG-3/ASM-3) was attempted four times and abandoned after repeated host-level failures under this waves concurrent Phase-P2 batch (two early attempts used a wrong -p fontawesome invocation; two corrected attempts hit a file-race EXIT=2 and a likely-OOM EXIT=137) -- the user directed stopping further attempts and completing this run on the reduced TG-2+TG-4 basis, deferring the full render to a future local retry or the repositorys own package-builder.yaml CI workflow. See TDD Deliberate Scope Reduction.'
  total_tasks: 5
  parallel_groups: 0
  high_risk_tasks: 0
  human_review_gates: 0
  autonomy_level: 'high'
  recommendation: 'proceed'
  criteria:
    - 'source/library/packages/fontawesome/index.ts ICONS_VERSION reads 7.3.1 -- MET'
    - 'npm run generate:workdir -- -p fontawesome succeeds with a plausible non-zero module/item count -- MET (2883 items / 3 modules vs 2860/3 baseline)'
    - 'npm run generate:package -- fontawesome succeeds -- NOT MET, deliberately deferred by user direction after repeated host-contention failures (see TDD RISK-4 / Deliberate Scope Reduction)'
    - 'npm run lint and npm test pass on the final repository state -- MET'
    - 'the change is committed locally on the current branch (no push, no PR) -- pending this tasks completion'
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
      title: 'Edit ICONS_VERSION to 7.3.1'
      depends_on: []
      produces:
        - 'source/library/packages/fontawesome/index.ts with ICONS_VERSION = "7.3.1"'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 90
    - id: task-002
      status: 'done'
      title: 'Regenerate the workdir for fontawesome and compare against the 7.2.0 baseline'
      depends_on: [task-001]
      produces:
        - '.workdir/library.yaml fontawesome entry populated from the 7.3.1 archive'
        - 'module/item count comparison against the 2860-item/3-module baseline'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'medium'
      confidence: 75
    - id: task-003
      status: 'blocked'
      title: 'Build the fontawesome package through Podman and inspect distribution output'
      depends_on: [task-002]
      produces:
        - 'distribution/fontawesome/** rebuilt from the 7.3.1 source'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 80
      blocked_reason: 'User-directed stop after four attempts (two with a wrong -p fontawesome invocation; two corrected attempts hit EXIT=2 file-race and EXIT=137 likely-OOM failures under this waves concurrent host contention) -- not a technical dead end, but an explicit decision to defer the full render rather than keep retrying on a contended host. See TDD RISK-4 / Deliberate Scope Reduction.'
    - id: task-004
      status: 'done'
      title: 'Repo-wide lint and test pass'
      depends_on: [task-003]
      produces:
        - 'npm run lint pass confirmation'
        - 'npm test pass confirmation'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 85
    - id: task-005
      status: 'in_progress'
      title: 'Commit locally and close out run documentation'
      depends_on: [task-004]
      produces:
        - 'local commit on the current branch (no push, no PR)'
        - 'run-0005-fontawesome-icons-refresh.md status: completed'
        - 'prg Findings/Log entries finalized'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 90
  edges:
    - from: task-001
      to: task-002
      reason: 'generate:workdir must run against the edited ICONS_VERSION to produce a meaningful comparison (TDD FLOW-1 steps 2-3)'
    - from: task-002
      to: task-003
      reason: 'the Podman build consumes the same .workdir/library.yaml state task-002 just validated (TDD FLOW-1 step 5)'
    - from: task-003
      to: task-004
      reason: 'lint/test is the final repo-wide gate, run after the package itself is confirmed buildable (TDD FLOW-1 step 6)'
    - from: task-004
      to: task-005
      reason: 'no commit until verification is green (TDD Deployment and Rollout: code-only change, rollback via git revert)'
```

No parallel groups: each task's output is the next task's required input
(edit -> regenerate -> build -> validate -> commit), matching TDD `FLOW-1`'s
own sequential verification loop — there is no safe parallel split for a
single-file, single-package change.

## 4. Task Catalog

```yaml
task_catalog:
  tasks:
    - id: task-001
      title: 'Edit ICONS_VERSION to 7.3.1'
      source_requirements:
        prd: []
        tdd:
          - 'TG-1'
          - 'DEC-2'
          - 'IMP-1'
      outputs:
        - 'source/library/packages/fontawesome/index.ts line 13 reads const ICONS_VERSION = "7.3.1"'
      verification:
        - 'grep for the new version string in the file'
      risk: 'low'
      confidence: 90
      human_review: 'none'
      escalation_triggers: []
      delegation_tier: 'standard'
    - id: task-002
      title: 'Regenerate the workdir for fontawesome and compare against the 7.2.0 baseline'
      source_requirements:
        prd: []
        tdd:
          - 'TG-2'
          - 'ASM-2'
          - 'DEC-1'
          - 'DEC-3'
          - 'CON-2'
      outputs:
        - 'npm run generate:workdir -- -p fontawesome succeeds against 7.3.1'
        - 'module/item count recorded and compared to the 2860-item/3-module baseline'
      verification:
        - 'npm run generate:workdir -- -p fontawesome'
        - 'read .workdir/library.yaml fontawesome entry and count modules/items'
      risk: 'medium'
      confidence: 75
      human_review: 'none'
      escalation_triggers:
        - 'EACCES on .workdir/** -- apply DEC-3 (podman unshare chown -R 0:0 .workdir) and retry, do not escalate for this alone'
        - 'count is zero or the module list/names changed structurally (ASM-2 disproven) -- investigate discover()/getItemUrn() against the actual 7.3.1 archive layout before concluding failure'
      delegation_tier: 'standard'
    - id: task-003
      title: 'Build the fontawesome package through Podman and inspect distribution output'
      source_requirements:
        prd: []
        tdd:
          - 'TG-3'
          - 'ASM-3'
          - 'CON-1'
      outputs:
        - 'NOT PRODUCED -- attempted four times (npm run generate:package -- fontawesome, corrected invocation), failed each time under host contention from this waves concurrent Phase-P2 batch (EXIT=2 file-not-found race under 8-thread rendering; EXIT=137 likely-OOM kill under a PLANTUML_GENERATOR_THREADS=1 retry). User directed stopping further attempts; distribution/fontawesome/** remains at its last-committed 7.2.0-era state.'
      verification:
        - 'npm run generate:package -- fontawesome (corrected invocation -- no -p flag; scripts/generate-package.sh prepends it internally)'
        - 'inspect a sample of distribution/fontawesome/ output (README icon count, a rendered sprite file) -- not performed, no successful build to inspect'
      risk: 'low'
      confidence: 80
      human_review: 'none'
      escalation_triggers:
        - 'Podman build fails for a reason unrelated to the .workdir ownership hazard already covered by task-002 -- read the failure, apply a narrow mechanical fix if the skills troubleshooting section covers it, otherwise record as a finding rather than widening scope'
      delegation_tier: 'standard'
      actual_outcome: 'blocked by user direction, not by an unresolvable technical failure -- see TDD RISK-4 / Deliberate Scope Reduction'
    - id: task-004
      title: 'Repo-wide lint and test pass'
      source_requirements:
        prd: []
        tdd:
          - 'TG-4'
      outputs:
        - 'npm run lint exits 0'
        - 'npm test exits 0'
      verification:
        - 'npm run lint'
        - 'npm test'
      risk: 'low'
      confidence: 85
      human_review: 'none'
      escalation_triggers:
        - 'a lint/test failure traces to this runs own change rather than pre-existing/unrelated state -- fix if mechanical and in scope, otherwise record and continue per the autonomy override'
      delegation_tier: 'standard'
    - id: task-005
      title: 'Commit locally and close out run documentation'
      source_requirements:
        prd: []
        tdd:
          - 'CON-4'
      outputs:
        - 'one local commit containing the ICONS_VERSION edit and any regenerated distribution/fontawesome/** output, Conventional-Commits-formatted'
        - 'run-0005-fontawesome-icons-refresh.md status: completed'
        - 'pln execution_manifest.status: done'
        - 'prg Findings/Lessons Learnt finalized'
      verification:
        - 'git log shows the new commit'
        - 'git status is clean (or shows only expected untouched sibling-run changes outside this runs scope)'
      risk: 'low'
      confidence: 90
      human_review: 'none'
      escalation_triggers:
        - 'git status shows unexpected changes outside source/library/packages/fontawesome/** and distribution/fontawesome/** -- do not stage/commit files belonging to a concurrently-running sibling run'
      delegation_tier: 'standard'
```

## 5. Parallelization Plan

```yaml
parallelization_plan:
  groups: []
```

None — a single-file edit followed by a strictly sequential
generate-then-validate-then-commit chain has no safe parallel split.

## 6. Human Review Gates

```yaml
human_review_gates:
  gates: []
```

None. Per the autonomy override, nothing in this run rises to a genuine
product/business tradeoff or an irreversible action outside this run's own
scope — a structural archive-layout surprise (`ASM-2` disproven) or a
Podman build failure routes to investigation/hold-back/recording, not a
human stop, per the Escalation Rules below.

## 7. Risk Assessment

```yaml
risk_assessment:
  by_task:
    - id: task-001
      risk: 'low'
      rationale: 'Single constant edit, mechanical, no ambiguity.'
    - id: task-002
      risk: 'medium'
      rationale: 'Depends on the 7.3.1 archives internal structure matching 7.2.0s (ASM-2, unverified until run) and on the shared .workdir scratch directory not being mid-write by a concurrent sibling run (CON-2).'
    - id: task-003
      risk: 'low'
      rationale: 'Podman confirmed usable in this environment (ASM-3); the build step itself is the same mechanism already exercised successfully for other packages in this wave batch.'
    - id: task-004
      risk: 'low'
      rationale: 'Repository-wide validation only; this runs change surface (one constant, one packages generated output) is narrow.'
    - id: task-005
      risk: 'low'
      rationale: 'Local commit only, no push/PR (CON-4); rollback is a plain git revert.'
  by_area:
    - area: 'infra'
      risk: 'low'
      rationale: 'One pinned-version bump to a static sprite package; the only elevated-risk element is the shared scratch-directory contention already identified and mitigated (DEC-3).'
```

## 8. Confidence Assessment

```yaml
confidence_assessment:
  by_task:
    - id: task-001
      score: 90
      rationale: 'Mechanical single-line edit with no ambiguity.'
    - id: task-002
      score: 75
      rationale: 'ASM-2 (archive structure stability) and CON-2 (shared-directory contention) are both empirical/environmental unknowns resolved only at execution time.'
    - id: task-003
      score: 80
      rationale: 'ASM-3 already validated at Stage 0 (podman info succeeds, image present); residual uncertainty is only whether the specific fontawesome urn build succeeds cleanly.'
    - id: task-004
      score: 85
      rationale: 'Narrow change surface; low likelihood of an unrelated repo-wide regression.'
    - id: task-005
      score: 90
      rationale: 'Pure documentation/commit task once verification is green.'
```

## 9. Agent Assignment Plan

```yaml
agent_assignment_plan:
  assignments:
    - task_id: task-001
      agent_role: 'Infrastructure Agent'
      objective: 'Change source/library/packages/fontawesome/index.ts line 13 from const ICONS_VERSION = "7.2.0" to const ICONS_VERSION = "7.3.1". No other line changes unless task-002 proves ASM-2 wrong.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-2: edit only ICONS_VERSION unless the 7.3.1 archive structure actually differs from 7.2.0s.'
      likely_files:
        - 'source/library/packages/fontawesome/index.ts'
      acceptance_criteria:
        - 'ICONS_VERSION reads "7.3.1"'
      verification:
        - 'grep ICONS_VERSION source/library/packages/fontawesome/index.ts'
      escalation_triggers: []
      suggested_subagent_type: '(none -- inline, trivial)'
      suggested_model: '(default)'
    - task_id: task-002
      agent_role: 'Infrastructure Agent'
      objective: 'Run npm run generate:workdir -- -p fontawesome against the 7.3.1 source. Compare the resulting module/item counts to the 2860-item/3-module 7.2.0 baseline already captured. If EACCES occurs on .workdir, run podman unshare chown -R 0:0 .workdir and retry.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'ASM-2: archive structure expected stable; validated empirically by this task.'
          - 'DEC-3: ownership-reclaim fallback for the shared .workdir scratch directory, never a destructive wipe.'
      likely_files:
        - '.workdir/library.yaml (generated, not committed)'
      acceptance_criteria:
        - 'generate:workdir succeeds and reports a plausible non-zero module/item count'
      verification:
        - 'npm run generate:workdir -- -p fontawesome'
      escalation_triggers:
        - 'count is zero or module names/structure changed unexpectedly'
      suggested_subagent_type: '(none -- inline, requires the already-captured baseline context)'
      suggested_model: '(default)'
    - task_id: task-003
      agent_role: 'Infrastructure Agent'
      objective: 'Run npm run generate:package -- -p fontawesome (Podman build) and inspect a sample of the resulting distribution/fontawesome/ output.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'ASM-3: Podman confirmed usable in this environment at Stage 0.'
          - 'TG-3: this is a hard verification gate here, not a soft one, given ASM-3 holds.'
      likely_files:
        - 'distribution/fontawesome/**'
      acceptance_criteria:
        - 'generate:package succeeds; distribution/fontawesome/ output looks sane on spot-check'
      verification:
        - 'npm run generate:package -- -p fontawesome'
      escalation_triggers:
        - 'Podman build fails for a reason unrelated to the .workdir ownership hazard'
      suggested_subagent_type: '(none -- inline, continuation of the same verification chain)'
      suggested_model: '(default)'
    - task_id: task-004
      agent_role: 'QA Agent'
      objective: 'Run npm run lint and npm test over the full repository and confirm both pass.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'TG-4: npm run lint and npm test must remain green after the change.'
      likely_files: []
      acceptance_criteria:
        - 'npm run lint exits 0'
        - 'npm test exits 0'
      verification:
        - 'npm run lint'
        - 'npm test'
      escalation_triggers:
        - 'a failure traces to this runs own change'
      suggested_subagent_type: '(none -- inline)'
      suggested_model: '(default)'
    - task_id: task-005
      agent_role: 'QA Agent'
      objective: 'Stage and commit only this runs own files (source/library/packages/fontawesome/index.ts and distribution/fontawesome/**), using a Conventional Commits message. Update run-0005-fontawesome-icons-refresh.md to status: completed and this plns execution_manifest.status to done. Do not git push or open a pull request.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'CON-4: no push, no PR -- commit locally on the current branch only.'
      likely_files:
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0005-fontawesome-icons-refresh/run-0005-fontawesome-icons-refresh.md'
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0005-fontawesome-icons-refresh/pln-0005-fontawesome-icons-refresh.md'
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0005-fontawesome-icons-refresh/prg-0005-fontawesome-icons-refresh.md'
      acceptance_criteria:
        - 'a local commit exists containing exactly this runs scoped changes'
        - 'run status file and pln manifest agree on completion'
      verification:
        - 'git log -1'
        - 'git status'
      escalation_triggers:
        - 'git status shows files outside this runs scope that would be swept into the commit'
      suggested_subagent_type: '(none -- inline)'
      suggested_model: '(default)'
```

## 10. Verification Plan

```yaml
verification_plan:
  checks:
    - task_id: task-001
      methods:
        - 'grep ICONS_VERSION source/library/packages/fontawesome/index.ts'
      success_criteria:
        - 'reads "7.3.1"'
    - task_id: task-002
      methods:
        - 'npm run generate:workdir -- -p fontawesome'
      success_criteria:
        - 'succeeds; module/item count is non-zero and plausible against the 2860/3 baseline'
    - task_id: task-003
      methods:
        - 'npm run generate:package -- -p fontawesome'
      success_criteria:
        - 'succeeds; distribution/fontawesome/ output present and sane on spot-check'
    - task_id: task-004
      methods:
        - 'npm run lint'
        - 'npm test'
      success_criteria:
        - 'both exit 0'
    - task_id: task-005
      methods:
        - 'git log -1'
        - 'git status'
      success_criteria:
        - 'commit exists, scoped only to this runs files'
```

## 11. Escalation Rules

```yaml
escalation_rules:
  rules:
    - condition: 'EACCES on .workdir/** during generate:workdir or generate:package'
      action: 'Run podman unshare chown -R 0:0 .workdir (DEC-3) and retry -- this is a documented, idempotent environment fix, not an escalation.'
    - condition: 'generate:workdir reports a zero or structurally implausible count for 7.3.1 (ASM-2 disproven)'
      action: 'Investigate discover()/getItemUrn() against the actual 7.3.1 archive layout; apply a mechanical fix if narrow (glob pattern / path parsing only); if it would require non-mechanical redesign, stop and record as a blocker per the autonomy override rather than widening scope.'
    - condition: 'generate:package (Podman build) fails for a reason unrelated to the .workdir ownership hazard'
      action: 'Consult doc/howto.upgrade-fontawesome-package.md Troubleshooting section; apply a narrow fix if it matches a documented cause, otherwise record as a finding and treat TG-3 as unmet rather than forcing a fix.'
    - condition: 'npm run lint or npm test fails for a reason traceable to this runs change'
      action: 'Fix if mechanical and in scope; otherwise hold the change back and record why, per the same hold-back philosophy sibling run 0001 used for its majors.'
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
  blocked_tasks: 1
  critical_path_tasks:
    - task-001
    - task-002
    - task-003
    - task-004
    - task-005
  parallel_groups: []
  required_human_gates: []
  highest_risk_tasks:
    - task-002
  lowest_confidence_tasks:
    - task-002
  next_action: 'None for this run. Follow-up (not scheduled): rebuild distribution/fontawesome/** for 7.3.1 either locally (npm run generate:package -- fontawesome, once the host is not contended by a concurrent batch) or via .github/workflows/package-builder.yaml (workflow_dispatch, pkgName: fontawesome) after this branch is pushed -- see TDD DEF-2.'
  criteria:
    - 'ICONS_VERSION reads 7.3.1 -- MET'
    - 'generate:workdir succeeds with a plausible count -- MET (2883 items / 3 modules vs 2860/3 baseline)'
    - 'generate:package succeeds -- NOT MET, deliberately deferred by explicit user direction after 4 failed attempts under this waves concurrent host contention (see TDD RISK-4 / Deliberate Scope Reduction, task-003 blocked_reason)'
    - 'npm run lint and npm test pass -- MET (lint: 0 problems; test: 5 passing)'
    - 'local commit exists, no push/PR -- pending this tasks final commit step'
```
