---
title: Workdir reference validation, execution plan
status: draft
owner: tmorin
date: 2026-11-10
type: pln
run: 0014
wave: 003
related:
  - docs/wav/wav-003-workdir-generation-hardening/wav-003-workdir-generation-hardening.md
  - docs/wav/wav-003-workdir-generation-hardening/run/run-0014-workdir-reference-validation/tdd-0014-workdir-reference-validation.md
  - docs/wav/wav-003-workdir-generation-hardening/run/run-0014-workdir-reference-validation/run-0014-workdir-reference-validation.md
---

# Workdir reference validation, execution plan

No PRD exists for this run (profile `TDD+pln`). Requirements are the sourced `WR-n` of the TDD, from the wave manifest.

# 1. Executive Summary

```yaml
summary:
  status: 'done'
  product_goal: 'npm run generate:workdir rejects, per package, an example template absent from the template directory and a Reference icon urn matching no item of the package, with one error naming the package and every broken reference'
  technical_approach: 'new side-effect-free module source/generator/workdir/validation.ts exporting validatePackage, called from create() in source/library/index.ts after each factory resolves, unit-tested by test/workdir-validation.spec.js'
  total_tasks: 3
  parallel_groups: 1
  high_risk_tasks: 0
  human_review_gates: 0
  autonomy_level: 'high'
  recommendation: 'proceed'
  criteria:
    - 'validatePackage throws one Error listing every missing example template and dangling Reference icon of a package (WR-1, WR-2, WR-3)'
    - 'test/workdir-validation.spec.js passes without network (WR-4)'
    - 'create() calls validatePackage for each selected package (DEC-1)'
    - 'npm run lint exits 0'
    - 'generate:workdir on all packages exits 0, checked at the run verification, not in a task (WR-5)'
```

# 2. PRD/TDD Consistency Assessment

There is no PRD; the TDD traces `WR-1` to `WR-6` to the wave manifest and states all six are addressed.

```yaml
consistency_assessment:
  aligned_items:
    - 'WR-1 to WR-3 map to DEC-1 to DEC-4 and IMP-1'
    - 'WR-4 maps to DEC-5 and IMP-2'
    - 'WR-5 is covered by the all-package run, not by a task'
  gaps:
    - id: gap-001
      type: 'missing_requirement'
      description: 'No PRD, by design (TDD+pln profile); requirement IDs are WR-n from the wave manifest'
      impact: 'low'
      recommendation: 'Accept; the TDD labels them as sourced'
    - id: gap-002
      type: 'risk'
      description: 'The call site in create() has no unit test (RISK-2, DEF-1)'
      impact: 'low'
      recommendation: 'Cover it with the all-package run and the manual negative check at run verification'
  blocking_gaps: []
```

# 3. Execution Graph

```yaml
execution_graph:
  nodes:
    - id: task-001
      status: 'done'
      title: 'Create validatePackage in source/generator/workdir/validation.ts'
      depends_on: []
      produces:
        - 'source/generator/workdir/validation.ts'
      agent_role: 'Backend Implementation Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 88
    - id: task-002
      status: 'done'
      title: 'Write test/workdir-validation.spec.js'
      depends_on: [task-001]
      produces:
        - 'test/workdir-validation.spec.js'
      agent_role: 'Test Generation Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 88
    - id: task-003
      status: 'done'
      title: 'Call validatePackage from create() in source/library/index.ts'
      depends_on: [task-001]
      produces:
        - 'source/library/index.ts'
      agent_role: 'Backend Implementation Agent'
      autonomy: 'autonomous'
      risk: 'medium'
      confidence: 82
  edges:
    - from: task-001
      to: task-002
      reason: 'the spec imports validation.ts'
    - from: task-001
      to: task-003
      reason: 'the call site imports validatePackage'
```

# 4. Task Catalog

```yaml
task_catalog:
  tasks:
    - id: task-001
      title: 'Create validatePackage in source/generator/workdir/validation.ts'
      source_requirements:
        prd: []
        tdd:
          - 'WR-1, WR-2, WR-3'
          - 'DEC-1, DEC-2, DEC-3, DEC-4'
          - 'CTR-1'
          - 'IMP-1'
          - 'CON-1, CON-2'
      outputs:
        - 'source/generator/workdir/validation.ts exporting validatePackage(pkg: Package, tplDirPath: string): void, with no import of ./index and no side effect at import'
        - 'example check: P.join(tplDirPath, example.template) must exist and be a file, no package-prefix assumption'
        - 'icon check: item.icon of type Reference must have a urn in the set of item urns of all modules of the package'
        - 'one Error whose message starts with invalid package "<urn>": and has one line per finding, in the wording of DEC-4'
      verification:
        - 'npx eslint source/generator/workdir/validation.ts exits 0'
        - 'npx prettier --check source/generator/workdir/validation.ts exits 0'
        - 'grep -c "from \"./index\"" source/generator/workdir/validation.ts prints 0'
      risk: 'low'
      confidence: 88
      human_review: 'none'
      escalation_triggers:
        - 'Package or Item types in manifest.ts differ from what the TDD describes'
      delegation_tier: 'standard'
      results: 'tier standard, model sonnet, effort medium, profile low-cost, passed first time, inline (leaf), independently verified'
    - id: task-002
      title: 'Write test/workdir-validation.spec.js'
      source_requirements:
        prd: []
        tdd:
          - 'WR-4, WR-6'
          - 'DEC-5'
          - 'IMP-2'
          - 'CON-3'
      outputs:
        - 'test/workdir-validation.spec.js requiring ts-node/register and validation.ts, with hand-built Package literals and a temp directory under .tmp/workdir-validation-spec/ recreated in beforeEach'
        - 'cases: valid package passes; missing template throws naming package and template; dangling reference throws naming package and urn; both faults give one message with two lines; a reference to an item of another module of the same package passes'
      verification:
        - 'npm test -- test/workdir-validation.spec.js passes (all cases green)'
        - 'npx eslint test/workdir-validation.spec.js exits 0'
        - 'npx prettier --check test/workdir-validation.spec.js exits 0'
      risk: 'low'
      confidence: 88
      human_review: 'none'
      escalation_triggers:
        - 'a case can only pass by changing the message wording of DEC-4'
      delegation_tier: 'standard'
      results: 'tier standard, model sonnet, effort medium, profile low-cost, passed first time, inline (leaf), independently verified'
    - id: task-003
      title: 'Call validatePackage from create() in source/library/index.ts'
      source_requirements:
        prd: []
        tdd:
          - 'WR-1, WR-2, WR-5'
          - 'DEC-1'
          - 'FLOW-1'
          - 'IMP-1'
          - 'CON-1, CON-4'
      outputs:
        - 'the selected-package map callback is an async function: try { const pkg = await packageFactory.create(packageContext); validatePackage(pkg, context.tplDirPath); return pkg } finally { packageContext.timeEnd(timerLabel) }, replacing the .finally chain'
        - 'import of validatePackage from ../generator/workdir/validation, placed with the local imports'
        - 'emptyModule branch unchanged; archive.ts untouched'
      verification:
        - 'npx eslint source/library/index.ts exits 0'
        - 'npx prettier --check source/library/index.ts exits 0'
        - 'grep -n "validatePackage" source/library/index.ts shows the import and one call'
      risk: 'medium'
      confidence: 82
      human_review: 'none'
      escalation_triggers:
        - 'context.tplDirPath is not available on the generation context'
        - 'the change needs an edit to archive.ts or a package factory'
      delegation_tier: 'standard'
      results: 'tier standard, model sonnet, effort medium, profile low-cost, passed first time, inline (leaf), independently verified'
```

# 5. Parallelization Plan

```yaml
parallelization_plan:
  groups:
    - id: parallel-group-001
      tasks:
        - task-002
        - task-003
      reason: 'both depend only on task-001 and change disjoint files'
      conflict_risks:
        - 'none: test/workdir-validation.spec.js and source/library/index.ts are distinct'
```

# 6. Human Review Gates

```yaml
human_review_gates:
  gates: []
```

No gate: every task is isolated and low or medium risk. The run operates under the autonomy override of `complete-run`; no task here is `human_required`, so no gate is bypassed.

# 7. Risk Assessment

```yaml
risk_assessment:
  by_task:
    - id: task-001
      risk: 'low'
      rationale: 'pure function, no I/O beyond existence checks'
    - id: task-002
      risk: 'low'
      rationale: 'test only, no network'
    - id: task-003
      risk: 'medium'
      rationale: 'changes the shared create() path of every package; a too strict rule would fail existing packages (RISK-1)'
  by_area:
    - area: 'api'
      risk: 'medium'
      rationale: 'generate:workdir becomes stricter, library.yaml shape unchanged'
    - area: 'infra'
      risk: 'low'
      rationale: 'code-only, local generator, rollback by revert'
```

# 8. Confidence Assessment

```yaml
confidence_assessment:
  by_task:
    - id: task-001
      score: 88
      rationale: 'fully specified by DEC-2 to DEC-4 and CTR-1'
    - id: task-002
      score: 88
      rationale: 'cases listed in DEC-5; pattern exists in test/archive.spec.js'
    - id: task-003
      score: 82
      rationale: 'the call-site shape is given in DEC-1; integration is only proved by the all-package run'
```

# 9. Agent Assignment Plan

```yaml
agent_assignment_plan:
  assignments:
    - task_id: task-001
      agent_role: 'Backend Implementation Agent'
      objective: 'Implement validatePackage as specified in DEC-2, DEC-3, DEC-4 and CTR-1'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-2: join tplDirPath and example.template as is, require an existing file'
          - 'DEC-3: Set of item urns across modules; each Reference icon urn must be in it'
          - 'DEC-4: collect all findings, throw one Error starting invalid package "<urn>":'
      likely_files:
        - 'source/generator/workdir/validation.ts'
        - 'source/generator/workdir/manifest.ts'
      acceptance_criteria:
        - 'no import of index.ts, no side effect at import'
        - 'house style: no semicolons, double quotes, P and Fe aliases'
      verification:
        - 'npx eslint source/generator/workdir/validation.ts exits 0'
        - 'npx prettier --check source/generator/workdir/validation.ts exits 0'
        - 'grep -c "from \"./index\"" source/generator/workdir/validation.ts prints 0'
      escalation_triggers:
        - 'manifest.ts types contradict the TDD'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
      suggested_effort: 'low'
    - task_id: task-002
      agent_role: 'Test Generation Agent'
      objective: 'Write the unit spec of DEC-5 with no network'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-5 case list; async function tests; clean .tmp in beforeEach'
      likely_files:
        - 'test/workdir-validation.spec.js'
      acceptance_criteria:
        - 'the five cases of DEC-5 exist and pass'
      verification:
        - 'npm test -- test/workdir-validation.spec.js passes (all cases green)'
        - 'npx eslint test/workdir-validation.spec.js exits 0'
        - 'npx prettier --check test/workdir-validation.spec.js exits 0'
      escalation_triggers:
        - 'a case needs a message wording different from DEC-4'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
      suggested_effort: 'low'
    - task_id: task-003
      agent_role: 'Backend Implementation Agent'
      objective: 'Wire validatePackage into create() with the async try/finally shape of DEC-1'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-1 call-site shape; CON-1 no new .then chain; CON-4 do not touch archive.ts'
      likely_files:
        - 'source/library/index.ts'
      acceptance_criteria:
        - 'timing behaviour of packageContext.timeEnd is preserved'
        - 'the emptyModule branch is unchanged'
      verification:
        - 'npx eslint source/library/index.ts exits 0'
        - 'npx prettier --check source/library/index.ts exits 0'
        - 'grep -n "validatePackage" source/library/index.ts shows the import and one call'
      escalation_triggers:
        - 'tplDirPath is missing on the context'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
      suggested_effort: 'medium'
```

# 10. Verification Plan

Per-task checks are fast and local (see the Task Catalog). The repository suite and the heavy checks are not in a task.

```yaml
verification_plan:
  checks:
    - task_id: task-001
      methods:
        - 'eslint'
        - 'prettier --check'
      success_criteria:
        - 'both exit 0'
    - task_id: task-002
      methods:
        - 'mocha on test/workdir-validation.spec.js'
        - 'eslint'
      success_criteria:
        - 'all five cases pass without network'
    - task_id: task-003
      methods:
        - 'eslint'
        - 'prettier --check'
        - 'grep'
      success_criteria:
        - 'lint and format clean, one import and one call of validatePackage'
```

Once per run, at the run verification (Stage 11 of `complete-run`): `npm test` (no failing test, passing count above the baseline read before the change) and `npm run lint` (exit 0). At the phase gate, not in a task: `npm run generate:workdir -- -w <empty scratch dir>` on all packages exits 0 (needs network, `WR-5`), and the manual negative check on `eip` (rename one example template, expect exit 1 naming `eip` and the template, restore it). `npm test` is not known to be red on the starting repository; AWS and Azure specs make network requests and are slow.

# 11. Escalation Rules

This run operates under the autonomy override of `complete-run`: no task here is `human_required`, but should one arise it is executed without a stop and logged in the prg.

```yaml
escalation_rules:
  rules:
    - condition: 'the all-package run rejects an existing package'
      action: 'narrow the rule in validation.ts, never edit the package (RISK-1); log it in the prg'
    - condition: 'the change would need archive.ts, a package factory or manifest.ts to change'
      action: 'stop that task and log it; these are out of scope (CON-4)'
    - condition: 'a task fails its own verification'
      action: 'one retry one rung up with the failing output, then inline and logged as a finding'
```

# 12. Final Execution Manifest

```yaml
execution_manifest:
  status: 'done'
  recommendation: 'proceed'
  autonomy_level: 'high'
  total_tasks: 3
  autonomous_tasks: 3
  review_before_tasks: 0
  review_after_tasks: 0
  human_required_tasks: 0
  blocked_tasks: 0
  critical_path_tasks:
    - task-001
    - task-003
  parallel_groups:
    - parallel-group-001
  required_human_gates: []
  highest_risk_tasks:
    - task-003
  lowest_confidence_tasks:
    - task-003
  next_action: 'implement task-001, then task-002 and task-003 in parallel'
  criteria:
    - 'all three tasks verified'
    - 'npm test and npm run lint pass at the run verification'
    - 'all-package generate:workdir exits 0 at the phase gate'
```
