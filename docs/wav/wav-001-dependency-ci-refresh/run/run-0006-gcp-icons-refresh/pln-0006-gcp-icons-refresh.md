---
title: GCP icons refresh — execution plan
status: active
owner: tcmorin@gmail.com
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0006-gcp-icons-refresh/tdd-0006-gcp-icons-refresh.md
run: 0006
wave: 001
type: pln
---

# GCP icons refresh — Execution Plan

No PRD exists for this run (`TDD+pln` profile, infra-only work whose scope
arrives settled from the wave manifest). This plan is derived from the TDD
alone (`tdd-0006-gcp-icons-refresh.md`); "PRD/TDD Consistency Assessment"
below is marked not applicable throughout.

This run executes under `complete-run`'s explicit autonomy override: the
default autonomy policy's `review_before`/`human_required` tiers are not
gated on category alone here — a task stops only on a genuine,
unresolvable blocker. None of this run's tasks meet that bar (see
Escalation Rules), so every task below runs autonomously.

**Shared-working-directory hazard discovered mid-run**: this wave's batch
members (`W-1`..`W-7`) execute in the same checked-out working tree, not
isolated worktrees. `npm run generate:workdir`'s `-p <pkg>` flag still
processes only the named package, but the generator's `create(context)`
writes one shared `.workdir/library.yaml` containing *all* processed
packages — a `-p gcp`-scoped run overwrites that file with gcp-only
content, and a concurrent sibling's own `-p <theirpkg>` (or unscoped,
all-package) run does the same in the other direction. Live evidence found
mid-run: `git status` showed ~8,000 pending changes under
`distribution/azure/**` and a modified `source/library/packages/
simpleicons/index.ts` from sibling runs `W-4`/`W-7` actively executing
concurrently, and three `plantuml-generator` Podman containers were
observed `Up` simultaneously (`podman ps -a`). Task-003 below therefore
runs its verification build in a fully isolated `-w <scratch-dir>` working
directory and a scratch distribution output directory (outside the repo),
never touching the shared `.workdir/` or any sibling's in-flight output,
and only writes to the real `distribution/gcp/**` (confirmed clean of any
sibling's pending changes throughout this run) as a final, scoped copy.

## 1. Executive Summary

```yaml
summary:
  status: 'done'
  product_goal: 'Fix the GCP icon packages dead upstream fetch URL and refresh its content, closing the silent-empty-package failure this run found.'
  technical_approach: 'Repoint ICONS_URL at Googles current "legacy console icons" asset (DEC-1), add a zero-icons guard (DEC-2) and a dated freshness-checkpoint comment (DEC-3) in source/library/packages/gcp/index.ts, correct the three dead-URL references in doc/howto.upgrade-gcp-package.md (DEC-4), then verify via an isolated generate:workdir + generate:package build (FLOW-1) before copying the verified output into the real distribution/gcp/.'
  total_tasks: 4
  parallel_groups: 0
  high_risk_tasks: 0
  human_review_gates: 0
  autonomy_level: 'high'
  recommendation: 'proceed'
  criteria:
    - 'source/library/packages/gcp/index.ts fetches a URL that resolves (HTTP 200, real zip) and reproduces 216 icons / 22 groups'
    - 'a future zero-icons response fails the build loudly instead of silently (TG-2)'
    - 'doc/howto.upgrade-gcp-package.md contains no remaining dead-URL reference presented as current (TG-4)'
    - 'npm run lint and npm test pass'
    - 'npm run generate:package -- -p gcp succeeds (Podman/Docker confirmed available) and distribution/gcp/ reflects the corrected content'
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
      title: 'Fix source/library/packages/gcp/index.ts (DEC-1/DEC-2/DEC-3)'
      depends_on: []
      produces:
        - 'ICONS_URL repointed to the legacy-icons asset'
        - 'zero-icons guard in create()'
        - 'dated freshness-checkpoint comment'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 90
    - id: task-002
      status: 'done'
      title: 'Correct doc/howto.upgrade-gcp-package.md (DEC-4)'
      depends_on: []
      produces:
        - 'all three dead-URL references corrected (Step 2, Step 3, Troubleshooting)'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 95
    - id: task-003
      status: 'done'
      title: 'Isolated verification build (generate:workdir + generate:package)'
      depends_on: [task-001]
      produces:
        - 'confirmed 216 icons / 22 groups via isolated generate:workdir'
        - 'confirmed full Podman render via isolated generate:package, diffed against checked-in distribution/gcp/'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 85
    - id: task-004
      status: 'done'
      title: 'Apply verified output to the real distribution/gcp/, final repo-wide validation, prg close-out'
      depends_on: [task-002, task-003]
      produces:
        - 'distribution/gcp/** matching the isolated, verified build'
        - 'npm run lint / npm test green on the final combined state'
        - 'prg Findings/Lessons Learnt finalized, run status advanced'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 80
```

## 4. Task Catalog

```yaml
task_catalog:
  tasks:
    - id: task-001
      title: 'Fix source/library/packages/gcp/index.ts'
      source_requirements: ['DEC-1', 'DEC-2', 'DEC-3', 'TG-1', 'TG-2', 'TG-3']
      description: 'Replace the dead ICONS_URL with https://services.google.com/fh/files/misc/google-cloud-legacy-icons.zip; add a comment recording the 2024-2025 Google icon-library restructure and a dated (2026-10-04) 216-icons/22-groups checkpoint; add a guard in create() that throws if discover() returns 0 items.'
      status: 'done'
      results: 'Applied. Comment cites run 0006s TDD/prg for the full reasoning. Guard message names the URL and points at doc/howto.upgrade-gcp-package.md.'
    - id: task-002
      title: 'Correct doc/howto.upgrade-gcp-package.md'
      source_requirements: ['DEC-4', 'TG-4']
      description: 'Update Step 2s fixed-URL statement, Step 3 bullet 1s "correct URL" check, and the Troubleshooting sections "extract the zip locally" note to the new URL/filename; add one sentence on the three-archive restructure with a pointer to run 0006.'
      status: 'done'
      results: 'All three occurrences corrected; grep -n "google-cloud-icons.zip" doc/howto.upgrade-gcp-package.md now matches only the intentional historical "now 404s" sentence in the corrected Step 2 text.'
    - id: task-003
      title: 'Isolated verification build'
      source_requirements: ['TG-1', 'ASM-2', 'ASM-4', 'IMP-3']
      description: 'Run npx ts-node source/generator/workdir -p gcp -w <scratch>/.workdir to confirm icon/group counts in isolation (no shared-state risk). If it confirms 216/22, run the Podman render (scripts/generate-package.shs podman invocation, pointed at the same isolated -w workdir and a scratch distribution output dir instead of the shared ones) to fully verify the rendered package, then diff the scratch distribution/gcp/ against the checked-in distribution/gcp/.'
      status: 'done'
      results: 'Isolated generate:workdir logged "discovered 216 pictures file", "found (216) icons", "found (22) groups" — matches ASM-2 exactly. Isolated Podman render executed against the same isolated workdir/distribution (three concurrent sibling containers were observed via podman ps -a at the same time, confirming the isolation was necessary, not precautionary theater).'
    - id: task-004
      title: 'Apply verified output and finish'
      source_requirements: ['TG-1', 'IMP-3', 'wave W-6 exit evidence']
      description: 'Diff the isolated builds distribution/gcp/ against the repos checked-in distribution/gcp/; if the diff matches ASM-2s prediction (no structural differences), copy the isolated outputs distribution/gcp/ over the repos distribution/gcp/ (the only scoped, non-overlapping write into generated output this run makes). Run npm run lint and npm test against the combined working-tree state. Update this plns execution_manifest, the run status file, and the prgs Log/Findings/Lessons Learnt to close out.'
      status: 'done'
      results: 'Isolated render diffed file-by-file against the checked-in distribution/gcp/ (2710 files, exact count match). Found exactly one genuine content difference (icon PrivateConnectivity -- new artwork from upstream) plus 672 PNG-only differences confirmed to be render-environment noise (a control check on an unrelated, source-unchanged file, Group/GroupAccount.Local.png, also rendered at a different pixel width between runs). Applied only the 7 genuinely-changed files (PrivateConnectivity.puml/.png variants, full.puml, single.puml) to the real distribution/gcp/ via a short-lived container scoped to that one subtree (see prg Findings for the file-ownership workaround required). npm run lint and npm test both passed on the combined working-tree state (5/5 tests green, 57s). run-0006-gcp-icons-refresh.md and this plns execution_manifest both advanced to their final status.'
```

## 5. Parallelization Plan

```yaml
parallelization_plan:
  groups:
    - tasks: [task-001, task-002]
      rationale: 'Disjoint files (index.ts vs the markdown how-to); both are small, independent edits with no shared state. Executed sequentially in practice (one agent, trivial size) but no ordering dependency exists between them.'
```

## 6. Human Review Gates

```yaml
human_review_gates:
  gates: []
```

None. Per the autonomy override, nothing here rises to a genuine
product/business tradeoff or an irreversible action — the one real fork
(`DEC-1`'s choice of which upstream asset to track) was resolved with
direct evidence (a name-for-name content diff), not a guess, and is fully
documented in the TDD rather than escalated.

## 7. Risk Assessment

```yaml
risk_assessment:
  by_task:
    - id: task-001
      risk: 'low'
      rationale: 'Single constant + one length-check guard; no change to discover()/getItemUrn() parsing logic (CON-1).'
    - id: task-002
      risk: 'low'
      rationale: 'Markdown documentation only; no sibling wave-batch run has reason to touch this GCP-specific how-to.'
    - id: task-003
      risk: 'low'
      rationale: 'Fully isolated from the shared .workdir/ and distribution/ — the only risk this task carries is a false-positive verification (isolation bug), mitigated by directly inspecting the isolated output.'
    - id: task-004
      risk: 'low'
      rationale: 'distribution/gcp/ confirmed clean of any sibling pending changes throughout this run (git status checked repeatedly); the copy is scoped to that one subtree.'
  by_area:
    - area: 'infra'
      risk: 'low'
      rationale: 'Content-identical asset relocation (ASM-2) plus a defensive guard and a doc fix — no new failure surface beyond what RISK-1/RISK-2 already name in the TDD.'
    - area: 'docs'
      risk: 'low'
      rationale: 'One how-to file, GCP-specific, no overlap with any other wave-batch run.'
```

## 8. Confidence Assessment

```yaml
confidence_assessment:
  by_task:
    - id: task-001
      score: 90
      rationale: 'ASM-2 (name-for-name content match) was directly verified before this task, not assumed; the only residual uncertainty is Q-1 (byte-level SVG content, unverifiable without the old asset).'
    - id: task-002
      score: 95
      rationale: 'Pure text correction; verified complete via grep after the edit.'
    - id: task-003
      score: 85
      rationale: 'generate:workdir result matched the prediction exactly; the Podman render adds genuine new verification (template rendering, not just discovery) with lower but still high confidence since this is the first time this runs code path has been exercised end to end.'
    - id: task-004
      score: 80
      rationale: 'Expected to be a clean copy-and-validate step given task-003s result, but not yet executed at plan-drafting time.'
```

## 9. Agent Assignment Plan

```yaml
agent_assignment_plan:
  assignments:
    - task_id: task-001
      agent_role: 'Infrastructure Agent'
      objective: 'Repoint ICONS_URL, add the freshness-checkpoint comment, and add the zero-icons guard in source/library/packages/gcp/index.ts, per DEC-1/DEC-2/DEC-3.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-1: point ICONS_URL at https://services.google.com/fh/files/misc/google-cloud-legacy-icons.zip (content-identical replacement, ASM-2).'
          - 'DEC-2: throw if discover() returns 0 items, scoped to this package only (archive.ts fix deferred, DEF-1).'
          - 'DEC-3: record a dated last-verified comment since GCP has no real version to pin.'
          - 'CON-1: no change to discover()/getItemUrn() parsing logic.'
      likely_files:
        - 'source/library/packages/gcp/index.ts'
      acceptance_criteria:
        - 'ICONS_URL resolves (HTTP 200, real zip) and reproduces 216 icons when fetched'
        - 'create() throws a clear error if discover() ever returns 0 items again'
      verification:
        - 'curl -sIL on the new URL (expect 200)'
        - 'npm run generate:workdir -- -p gcp (isolated or shared once safe) logs found (216) icons'
      escalation_triggers:
        - 'the new URL also fails to resolve or returns a structurally different archive'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-002
      agent_role: 'Infrastructure Agent'
      objective: 'Correct all three dead-URL references in doc/howto.upgrade-gcp-package.md per DEC-4, and note the 2024-2025 three-archive restructure.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-4: all three occurrences (Step 2, Step 3 bullet 1, Troubleshooting), not Step 2 alone — per this runs own KDMLLC review finding F1.'
      likely_files:
        - 'doc/howto.upgrade-gcp-package.md'
      acceptance_criteria:
        - 'grep -n "google-cloud-icons.zip" doc/howto.upgrade-gcp-package.md matches only the intentional historical "now 404s" sentence'
      verification:
        - 'grep -n "google-cloud-icons.zip" doc/howto.upgrade-gcp-package.md'
      escalation_triggers: []
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-003
      agent_role: 'QA Agent'
      objective: 'Verify task-001s fix in a working directory fully isolated from the shared .workdir/ and distribution/ (per this plns shared-working-directory hazard note), first via generate:workdir, then via a full Podman render if the counts match.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'IMP-3: .workdir/ and distribution/gcp/ are generated, not hand-edited; expected unchanged content per ASM-2.'
          - 'ASM-4: Podman and Docker are both available in this environment.'
      likely_files: []
      acceptance_criteria:
        - 'isolated generate:workdir reports 216 icons / 22 groups'
        - 'isolated Podman render completes without error and produces distribution/gcp/Item, Group, README.md'
      verification:
        - 'npx ts-node source/generator/workdir -p gcp -w <scratch>/.workdir'
        - 'podman run ... plantuml-generator library generate library.yaml --urn=gcp --clean-urn=gcp -O=<scratch>/distribution (isolated paths only)'
      escalation_triggers:
        - 'icon/group counts differ from the 216/22 prediction'
        - 'Podman render errors'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-004
      agent_role: 'QA Agent'
      objective: 'Diff the isolated builds output against the checked-in distribution/gcp/, copy it in if it matches ASM-2s no-structural-change prediction, run npm run lint && npm test on the combined state, and close out this runs pln/prg/run-status files.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'Observability and Verification section: git diff distribution/gcp/ expected to show no structural differences; npm run lint / npm test must pass.'
      likely_files:
        - 'distribution/gcp/**'
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0006-gcp-icons-refresh/pln-0006-gcp-icons-refresh.md'
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0006-gcp-icons-refresh/prg-0006-gcp-icons-refresh.md'
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0006-gcp-icons-refresh/run-0006-gcp-icons-refresh.md'
      acceptance_criteria:
        - 'distribution/gcp/ in the repo matches the verified isolated build'
        - 'npm run lint and npm test both pass on the combined working-tree state'
        - 'run status file, pln execution_manifest, and prg status all agree'
      verification:
        - 'diff -rq (isolated distribution/gcp) (repo distribution/gcp) before/after the copy'
        - 'npm run lint'
        - 'npm test'
      escalation_triggers:
        - 'the diff shows a structural difference (added/removed/renamed items) contradicting ASM-2'
        - 'npm run lint or npm test fails on the combined state'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
```

## 10. Verification Plan

```yaml
verification_plan:
  checks:
    - task_id: task-001
      methods:
        - 'curl -sIL https://services.google.com/fh/files/misc/google-cloud-legacy-icons.zip'
        - 'npm run generate:workdir -- -p gcp (isolated)'
      success_criteria:
        - 'HTTP 200; 216 icons / 22 groups logged'
    - task_id: task-002
      methods:
        - 'grep -n "google-cloud-icons.zip" doc/howto.upgrade-gcp-package.md'
      success_criteria:
        - 'only the intentional historical reference remains'
    - task_id: task-003
      methods:
        - 'isolated generate:workdir'
        - 'isolated generate:package (Podman)'
      success_criteria:
        - '216 icons / 22 groups; Podman render completes; output structurally matches the checked-in distribution/gcp/'
    - task_id: task-004
      methods:
        - 'npm run lint'
        - 'npm test'
        - 'diff -rq against the isolated verified build'
      success_criteria:
        - 'all exit 0; no unexplained structural diff'
```

## 11. Escalation Rules

```yaml
escalation_rules:
  rules:
    - condition: 'The new URL (google-cloud-legacy-icons.zip) also fails to resolve, or resolves to a structurally different archive than ASM-2 predicted'
      action: 'Stop, re-render the real page in a browser to find the current correct link, and update DEC-1 with the new finding rather than guessing.'
    - condition: 'The isolated Podman render shows a structural diff against the checked-in distribution/gcp/ (added/removed/renamed items) contradicting ASM-2'
      action: 'Do not copy the isolated output into the real distribution/gcp/ until the diff is explained; record the actual change in the prg instead of silently accepting it.'
    - condition: 'npm run lint or npm test fails on the combined state after task-004s copy'
      action: 'Bisect to this runs own change (the only source edit is source/library/packages/gcp/index.ts) before assuming an unrelated concurrent sibling change caused it; check git status for sibling-run interference first given the shared-working-directory hazard noted above.'
    - condition: 'Any genuinely unresolvable blocker per the complete-run autonomy override'
      action: 'Stop that task, mark it blocked in this pln, log it in the prg, and continue with whatever does not depend on it.'
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
  parallel_groups:
    - [task-001, task-002]
  required_human_gates: []
  highest_risk_tasks: []
  lowest_confidence_tasks:
    - task-004
  next_action: 'None -- run complete. ICONS_URL fixed and verified (216 icons / 22 groups, byte-level diff against the prior build found exactly one genuine content change -- PrivateConnectivity -- applied to the real tree); doc/howto.upgrade-gcp-package.md corrected; npm run lint and npm test both green.'
  criteria:
    - 'source/library/packages/gcp/index.ts fetches a resolving URL and reproduces 216 icons / 22 groups -- MET (task-001/task-003)'
    - 'a future zero-icons response fails loudly (TG-2) -- MET (task-001 guard)'
    - 'doc/howto.upgrade-gcp-package.md has no remaining dead-URL reference presented as current (TG-4) -- MET (task-002, verified via grep)'
    - 'npm run lint and npm test pass -- MET (task-004: lint clean, 5/5 tests passing)'
    - 'npm run generate:package -- -p gcp succeeds and distribution/gcp/ reflects the corrected content -- MET (task-003/task-004: isolated render succeeded end to end, 2710/2710 files, verified content copied into the real distribution/gcp/)'
```
