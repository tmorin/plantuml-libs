---
title: Execution plan — manual dispatch trigger for Continuous Integration
status: completed
owner: tmorin
date: 2026-10-11
type: pln
run: 0010
wave: 002
related:
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/run/run-0010-ci-manual-dispatch-trigger/tdd-0010-ci-manual-dispatch-trigger.md
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/wav-002-pipeline-hardening-distribution-sync.md
---

# Execution plan — manual dispatch trigger for Continuous Integration

## 1. Executive Summary

The plan makes one additive edit to the workflow that publishes to npm,
GitHub Pages and GitHub Releases. The edit is wrapped in static verification
that stands in for the end-to-end trigger test this run cannot perform
(TDD `CON-2`). The plan is a single sequence: edit, prove containment, prove
gating, run the wave-gate commands. The only parallelism is between the two
independent verification angles.

```yaml
summary:
  status: 'done'
  product_goal: 'Let a branch without a pull request be built in CI on demand, without opening any new path to publishing (wave W-3).'
  technical_approach: 'Add a bare workflow_dispatch trigger. Add a job-level if on Build that skips it, and through needs the three publish jobs, for a dispatch from a tag ref. Every existing trigger, the concurrency block and the publish jobs stay byte-identical.'
  total_tasks: 4
  parallel_groups: 1
  high_risk_tasks: 1
  human_review_gates: 1
  autonomy_level: 'medium'
  recommendation: 'proceed'
  criteria:
    - 'continuous-integration.yaml declares workflow_dispatch alongside push (branches [master], tags [**]) and pull_request (WR-1, wave P1 gate)'
    - 'git diff of the file removes no content line; on.push, on.pull_request, concurrency and the three publish jobs are deep-equal to the ca546685e9 baseline (WR-2, WR-3, CON-1)'
    - 'the FLOW-2 truth table holds for the modelled expressions, which are pinned to the file text: no non-push event reaches a publish job (WR-4)'
    - 'the verification harness fails against mutated copies (negative test)'
    - 'npm run lint and npm test exit 0 on the shared working tree (wave P1 gate)'
```

## 2. PRD/TDD Consistency Assessment

```yaml
consistency_assessment:
  aligned_items:
    - 'No PRD exists (TDD+pln profile). The TDD sources WR-1..WR-5 from the wave manifest W-3 entry and the dispatch brief. Every WR maps to a DEC/IMP/FLOW in the TDD traceability table.'
    - 'DEC-2 satisfies WR-4 (no unintended publish) and CON-1 (publish if lines frozen) together.'
  gaps:
    - id: gap-001
      type: 'risk'
      description: 'WR-5 (a real workflow_dispatch run completes Build) cannot be observed inside this run. The workflow must be on the default branch (ASM-3), and this run may not push (CON-2).'
      impact: 'low'
      recommendation: 'Carry it as a post-merge observation for the human (TDD Deployment and Rollout). The run does not claim it.'
    - id: gap-002
      type: 'ambiguity'
      description: 'The dispatch brief freezes the publish jobs tag-gating and also asks that a dispatch cannot publish. Taken naively, these pull in opposite directions.'
      impact: 'medium'
      recommendation: 'Resolved by TDD DEC-2: guard Build, not the publish jobs. Recorded as an autonomous decision in the prg and the final report.'
  blocking_gaps: []
```

## 3. Execution Graph

```yaml
execution_graph:
  nodes:
    - id: task-001
      status: 'done'
      title: 'Add workflow_dispatch and the Build tag-dispatch guard to continuous-integration.yaml'
      depends_on: []
      produces:
        - '.github/workflows/continuous-integration.yaml (2 additive hunks)'
      agent_role: 'Infrastructure Agent'
      autonomy: 'human_required'
      risk: 'critical'
      confidence: 90
    - id: task-002
      status: 'done'
      title: 'Static containment and gating verification, with negative test'
      depends_on: [task-001]
      produces:
        - 'verify_ci.py result against the edited file (session scratchpad, not committed)'
        - 'negative-test results against mutated copies'
      agent_role: 'QA Agent'
      autonomy: 'human_required'
      risk: 'high'
      confidence: 90
    - id: task-003
      status: 'done'
      title: 'Wave-gate commands: npm run lint and npm test'
      depends_on: [task-001]
      produces:
        - 'lint and test exit codes'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 85
    - id: task-004
      status: 'done'
      title: 'Hand-off without commit: leave the edit and run docs uncommitted for the orchestrator'
      depends_on: [task-002, task-003]
      produces:
        - 'working-tree changes limited to this run paths; no commit, no push'
      agent_role: 'Release Agent'
      autonomy: 'review_after'
      risk: 'medium'
      confidence: 90
  edges:
    - from: task-001
      to: task-002
      reason: 'verifies the edit'
    - from: task-001
      to: task-003
      reason: 'the gate is measured on the post-change tree'
    - from: task-002
      to: task-004
      reason: 'do not hand off an unverified release-workflow edit'
    - from: task-003
      to: task-004
      reason: 'do not hand off on an unexplained red gate'
```

## 4. Task Catalog

```yaml
task_catalog:
  tasks:
    - id: task-001
      title: 'Add workflow_dispatch and the Build tag-dispatch guard'
      source_requirements:
        prd: []
        tdd: ['WR-1', 'WR-4', 'DEC-1', 'DEC-2', 'DEC-3', 'IMP-1', 'CTR-1', 'ASM-5']
      outputs:
        - 'on: gains a bare workflow_dispatch: key after pull_request:'
        - "Build gains if: ${{ !(github.event_name == 'workflow_dispatch' && startsWith(github.ref, 'refs/tags/')) }} after name:, with a comment that also states the rule that any new publish job must need Build (TDD RISK-3)"
        - 'both hunks in one working-tree change, never one without the other (TDD Proposed Design step 3, ASM-5)'
      verification:
        - 'git diff removes no content line'
        - 'task-002 harness'
      risk: 'critical'
      confidence: 90
      human_review: 'required'
      escalation_triggers:
        - 'any existing line would need to change to make the YAML valid'
      delegation_tier: 'hard_judgment'
    - id: task-002
      title: 'Static containment and gating verification'
      source_requirements:
        prd: []
        tdd: ['CON-1', 'CON-2', 'FLOW-2', 'Observability and Verification 1-5']
      outputs:
        - 'harness PASS on the edited file; FAIL on each mutation'
      verification:
        - 'python3 -I verify_ci.py ci.baseline.yaml .github/workflows/continuous-integration.yaml exits 0'
        - 'the same harness exits 1 for each mutated copy: guard removed, publish if altered, push filter altered'
      risk: 'high'
      confidence: 90
      human_review: 'required'
      escalation_triggers:
        - 'any FAIL on the real file'
        - 'a mutation the harness does not catch'
      delegation_tier: 'hard_judgment'
    - id: task-003
      title: 'Wave-gate commands'
      source_requirements:
        prd: []
        tdd: ['Observability and Verification 6']
      outputs:
        - 'exit codes and pass counts'
      verification:
        - 'npm run lint exit 0'
        - 'npm test exit 0'
      risk: 'low'
      confidence: 85
      human_review: 'none'
      escalation_triggers:
        - 'a failure. Attribute it to this change or to sibling runs 0008/0009 edits in the shared tree before reporting; never round it up'
      delegation_tier: 'cheap'
    - id: task-004
      title: 'Hand-off without commit'
      source_requirements:
        prd: []
        tdd: ['Deployment and Rollout']
      outputs:
        - 'uncommitted changes to .github/workflows/continuous-integration.yaml and this run directory, nothing else attributable to this run'
      verification:
        - 'git status --porcelain: this run changes are only those paths; sibling paths untouched by this run'
      risk: 'medium'
      confidence: 90
      human_review: 'after'
      escalation_triggers:
        - 'any commit, branch switch, push or PR action. The working tree is on the default branch (master) and is shared with two concurrently running sibling runs. Branching would move HEAD under them, and committing on master is not authorised. The dispatch brief makes committing optional, so the run leaves it to the orchestrator.'
      delegation_tier: 'hard_judgment'
```

`task-004` is tiered `hard_judgment` despite its `medium` risk. In a working
tree shared with two concurrently running sibling runs, any git write is
exactly the step where someone else's work gets captured or moved. The task
therefore deliberately makes no git write at all.

## 5. Parallelization Plan

```yaml
parallelization_plan:
  groups:
    - id: parallel-group-001
      tasks: [task-002, task-003]
      reason: 'both only read the post-change tree'
      conflict_risks:
        - 'none between them. task-003 reads files that sibling runs 0008/0009 are concurrently editing, so its result measures the shared tree, not this change'
```

## 6. Human Review Gates

```yaml
human_review_gates:
  gates:
    - id: gate-001
      trigger: 'the release-workflow edit is ready to be committed and leave this machine'
      required_before: []
      required_after: ['task-004']
      reviewer_focus:
        - 'DEC-2: guard on Build rather than on the publish jobs'
        - 'post-merge observation of WR-5, plus an optional dispatch from an existing tag that should show every job skipped'
```

**Autonomy override.** This run executes under `complete-run`'s explicit
autonomy override. `task-001` and `task-002` (`human_required`) are performed
without a stop, because they can be verified another way: a pure-addition
diff, a structural deep-equality check against the baseline, and a
mutation-tested gating harness. `gate-001` is a human gate the run cannot
discharge. Committing, pushing and opening a PR are out of scope here. The
run ends with uncommitted, verified changes and hands both the commit and
the gate to the orchestrator and the human.

## 7. Risk Assessment

```yaml
risk_assessment:
  by_task:
    - id: task-001
      risk: 'critical'
      rationale: 'the file gates npm publish, GitHub Pages and GitHub Releases; a wrong edit to on: or to a publish if could stop releases or publish unintentionally'
    - id: task-002
      risk: 'high'
      rationale: 'it is the only evidence standing in for an end-to-end test; a harness that passes vacuously would hide task-001 errors'
    - id: task-003
      risk: 'low'
      rationale: 'neither eslint (JS/TS files only) nor mocha reads .github/'
    - id: task-004
      risk: 'medium'
      rationale: 'shared working tree with concurrent sibling runs'
  by_area:
    - area: 'infra'
      risk: 'critical'
      rationale: 'production release path'
```

## 8. Confidence Assessment

```yaml
confidence_assessment:
  by_task:
    - id: task-001
      score: 90
      rationale: 'two small additive hunks; the gating semantics (ASM-1..4) are verified against GitHub docs'
    - id: task-002
      score: 90
      rationale: 'the harness already fails as expected against the unchanged baseline (3 FAIL), which is its first negative case'
    - id: task-003
      score: 85
      rationale: 'the shared tree may carry sibling-run failures unrelated to this change'
    - id: task-004
      score: 90
      rationale: 'explicit-path staging is mechanical once the path list is fixed'
```

## 9. Agent Assignment Plan

```yaml
agent_assignment_plan:
  assignments:
    - task_id: task-001
      agent_role: 'Infrastructure Agent'
      objective: 'Make the two additive edits exactly as the TDD Proposed Design states.'
      context:
        prd_excerpts: []
        tdd_excerpts: ['Proposed Design', 'DEC-1', 'DEC-2', 'DEC-3', 'CON-1']
      likely_files: ['.github/workflows/continuous-integration.yaml']
      acceptance_criteria: ['no removed content line in the diff', 'YAML parses', 'both hunks present together']
      verification: ['git diff', 'python3 yaml.safe_load']
      escalation_triggers: ['an existing line must change']
      suggested_subagent_type: '(inline)'
      suggested_model: '(default)'
    - task_id: task-002
      agent_role: 'QA Agent'
      objective: 'Run the static harness on the real file and on mutated copies.'
      context:
        prd_excerpts: []
        tdd_excerpts: ['FLOW-2', 'Observability and Verification']
      likely_files: ['session scratchpad run-0010/verify_ci.py', 'session scratchpad run-0010/ci.baseline.yaml']
      acceptance_criteria: ['exit 0 on the real file', 'exit 1 on every mutation']
      verification: ['the harness output itself']
      escalation_triggers: ['any FAIL on the real file']
      suggested_subagent_type: '(inline)'
      suggested_model: '(default)'
    - task_id: task-003
      agent_role: 'QA Agent'
      objective: 'Run npm run lint and npm test, writing logs to the scratchpad; report exit codes and pass counts.'
      context:
        prd_excerpts: []
        tdd_excerpts: ['Observability and Verification 6']
      likely_files: []
      acceptance_criteria: ['both exit 0']
      verification: ['the orchestrator reads the logs, not the subagent summary']
      escalation_triggers: ['non-zero exit']
      suggested_subagent_type: 'general-purpose'
      suggested_model: 'haiku'
    - task_id: task-004
      agent_role: 'Release Agent'
      objective: 'Confirm the working-tree changes attributable to this run are only the workflow file and this run directory; make no commit, branch switch or push.'
      context:
        prd_excerpts: []
        tdd_excerpts: ['Deployment and Rollout']
      likely_files: ['.github/workflows/continuous-integration.yaml', 'docs/wav/wav-002-pipeline-hardening-distribution-sync/run/run-0010-ci-manual-dispatch-trigger/']
      acceptance_criteria: ['nothing staged by this run; no new commit by this run']
      verification: ['git status --porcelain', 'git log shows no commit made by this run (HEAD moved to 40ad066a12 through sibling-run commits only)']
      escalation_triggers: ['a git write appears necessary']
      suggested_subagent_type: '(inline)'
      suggested_model: '(default)'
```

## 10. Verification Plan

```yaml
verification_plan:
  checks:
    - task_id: task-001
      methods: ['diff review', 'YAML parse']
      success_criteria: ['git diff -- .github/workflows/continuous-integration.yaml has no - lines other than the --- header']
    - task_id: task-002
      methods: ['structural regression check', 'expression truth table', 'mutation (negative) test']
      success_criteria: ['0 failures on the real file', 'at least 1 failure on each mutated copy']
    - task_id: task-003
      methods: ['linting', 'unit tests']
      success_criteria: ['npm run lint exit 0', 'npm test exit 0']
    - task_id: task-004
      methods: ['working-tree review']
      success_criteria: ['this run changed only its own paths; no commit made']
```

Not verifiable in this run: a real `workflow_dispatch` execution (`WR-5`),
and GitHub's runtime agreeing with its documented `needs`/`success()` rule
(TDD `RISK-2`). Both are handed to `gate-001`.

## 11. Escalation Rules

```yaml
escalation_rules:
  rules:
    - condition: 'the edit cannot be made without changing an existing line of the on: block, the concurrency block or a publish job'
      action: 'stop task-001, mark blocked, report. CON-1 is the wave exit evidence.'
    - condition: 'the harness reports any FAIL on the real file, or misses a mutation'
      action: 'fix and re-run; if the cause is a semantic disagreement with the TDD, mark blocked and report'
    - condition: 'lint/test fail'
      action: 'attribute it (this change vs sibling runs in the shared tree); report verbatim; do not mark done if this change is implicated'
    - condition: 'any step would push, open a PR, or trigger a remote workflow'
      action: 'out of scope (CON-2). Do not do it; leave it to gate-001.'
```

Under `complete-run`'s autonomy override, the `human_required` labels on
`task-001`/`task-002` do not trigger a stop by category. The rules above
are the only stop conditions.

## 12. Final Execution Manifest

```yaml
execution_manifest:
  status: 'done'
  recommendation: 'proceed'
  autonomy_level: 'medium'
  total_tasks: 4
  autonomous_tasks: 1
  review_before_tasks: 0
  review_after_tasks: 1
  human_required_tasks: 2
  blocked_tasks: 0
  critical_path_tasks: [task-001, task-002, task-004]
  parallel_groups: [parallel-group-001]
  required_human_gates: [gate-001]
  highest_risk_tasks: [task-001]
  lowest_confidence_tasks: [task-003]
  next_action: 'none in this run. Hand to gate-001: the human commits and merges, then observes WR-5 (a workflow_dispatch run on a branch completes Build with the publish jobs skipped). That is only observable after the change reaches master.'
  criteria:
    - 'workflow_dispatch declared alongside unchanged push/pull_request triggers'
    - 'diff is pure addition; on.push, on.pull_request, concurrency and the publish jobs are deep-equal to baseline'
    - 'harness 0 failures on the real file and catches every mutation'
    - 'npm run lint and npm test exit 0'
    - 'working-tree changes by this run limited to its own paths; no commit made (left to orchestrator)'
```

## Execution Results

```yaml
results:
  - task_id: task-001
    status: 'done'
    result: '7 lines added, 0 removed in .github/workflows/continuous-integration.yaml. Both hunks are in one uncommitted working-tree change. Implemented inline (hard_judgment).'
  - task_id: task-002
    status: 'done'
    result: 'verify_ci.py against the edited file: 28 checks, 0 failures, exit 0. Stripping the 7 added lines reproduces the baseline byte-for-byte. 7 mutated copies (guard removed, guard inverted, publish if widened, release needs removed, push tags filter altered, dispatch inputs added, cancel-in-progress altered) each exit 1. Run inline.'
  - task_id: task-003
    status: 'done'
    result: 'npm run lint exit 0. npm test exit 0, 11 passing (8s). Run inline, not dispatched: two commands whose logs had to be read here anyway.'
  - task_id: task-004
    status: 'done'
    result: 'no commit, no branch switch, no push. git status shows this run touched only the workflow file and its own run directory.'
```

