---
title: npm dependency upgrade — execution plan
status: active
owner: tcmorin@gmail.com
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0001-npm-dependency-upgrade/tdd-0001-npm-dependency-upgrade.md
run: 0001
wave: 001
type: pln
---

# npm dependency upgrade — Execution Plan

No PRD exists for this run (`TDD+pln` profile, infra-only work whose scope
arrives settled from the wave manifest). This plan is derived from the TDD
alone (`tdd-0001-npm-dependency-upgrade.md`); "PRD/TDD Consistency
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
  product_goal: 'Bring all npm dependencies in @tmorin/plantuml-libs current (17 outdated packages, 4 majors) without breaking npm run lint or npm test.'
  technical_approach: 'Batch the 13 non-major upgrades first (TDD DEC-1), then attempt the 4 majors independently in blast-radius order @types/node -> csv-parse -> mocha -> typescript (DEC-2/DEC-3), holding back and documenting any major that fails lint/test after a mechanical fix attempt (DEC-2), ending with a combined validation pass (FLOW-1).'
  total_tasks: 6
  parallel_groups: 0
  high_risk_tasks: 0
  human_review_gates: 0
  autonomy_level: 'high'
  recommendation: 'proceed'
  criteria:
    - 'npm outdated reports nothing actionable, or only held-back majors with a recorded reason'
    - 'npm run lint passes on the final package.json/package-lock.json state'
    - 'npm test passes on the final state'
    - 'csv-parse ends the run on one consistent version across all six call sites (TG-3)'
    - 'package-lock.json stays consistent with package.json (npm ci installs cleanly) at the final state'
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
      title: 'Baseline capture and DEC-1 minors batch upgrade'
      depends_on: []
      produces:
        - 'updated package.json/package-lock.json for 13 non-major packages'
        - 'baseline npm outdated capture'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 85
    - id: task-002
      status: 'done'
      title: 'Attempt @types/node major (25 -> 26)'
      depends_on: [task-001]
      produces:
        - 'package.json/package-lock.json with @types/node upgraded, or held back with recorded reason'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 80
    - id: task-003
      status: 'done'
      title: 'Attempt csv-parse major (6 -> 7), TG-3/DEC-4 consistency across all six call sites'
      depends_on: [task-002]
      produces:
        - 'package.json/package-lock.json with csv-parse upgraded (and source/**/*.ts fixed if needed), or held back with recorded reason'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'medium'
      confidence: 65
    - id: task-004
      status: 'done'
      title: 'Attempt mocha major (11 -> 12)'
      depends_on: [task-003]
      produces:
        - 'package.json/package-lock.json with mocha upgraded, or held back with recorded reason'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'medium'
      confidence: 70
    - id: task-005
      status: 'done'
      title: 'Attempt typescript major (6 -> 7)'
      depends_on: [task-004]
      produces:
        - 'package.json/package-lock.json with typescript upgraded, or held back with recorded reason'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'medium'
      confidence: 60
    - id: task-006
      status: 'done'
      title: 'Final combined validation and documentation'
      depends_on: [task-005]
      produces:
        - 'final npm ci && lint && test pass confirmation'
        - 'npm run generate:workdir smoke check result'
        - 'prg Findings entries documenting outcome per major'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 85
  edges:
    - from: task-001
      to: task-002
      reason: 'DEC-1 establishes a known-green floor before any major is attempted (TDD Proposed Design)'
    - from: task-002
      to: task-003
      reason: 'DEC-3 blast-radius ordering: narrowest-risk major first so csv-parse validation signal is trustworthy'
    - from: task-003
      to: task-004
      reason: 'DEC-3 ordering: runtime packages before the test runner itself'
    - from: task-004
      to: task-005
      reason: 'DEC-3 ordering: test runner validated before the compiler, since typescript is attempted last and its failure signal depends on a working mocha'
    - from: task-005
      to: task-006
      reason: 'FLOW-1 step 4 requires the combined end state of all four major attempts before final validation'
```

No parallel edges: all six tasks modify the same `package.json`/
`package-lock.json` pair sequentially (TDD `IMP-1`/`IMP-2`), so there is no
safe parallel group — this matches the TDD's own sequencing rationale
(`DEC-1`, `DEC-2`, `DEC-3`), not an arbitrary planning choice.

## 4. Task Catalog

```yaml
task_catalog:
  tasks:
    - id: task-001
      title: 'Baseline capture and DEC-1 minors batch upgrade'
      source_requirements:
        prd: []
        tdd:
          - 'TG-1'
          - 'TG-4'
          - 'DEC-1'
          - 'IMP-1'
          - 'IMP-2'
      outputs:
        - 'npm outdated baseline captured'
        - '13 non-major packages upgraded to their Wanted/Latest version'
        - 'npm ci && npm run lint && npm test green on this batch'
      verification:
        - 'npm ci'
        - 'npm run lint'
        - 'npm test'
      risk: 'low'
      confidence: 85
      human_review: 'none'
      escalation_triggers:
        - 'a non-major package upgrade fails lint/test and the DEC-1 bisect-and-fix-or-revert procedure cannot isolate the offender within this task'
      delegation_tier: 'standard'
    - id: task-002
      title: 'Attempt @types/node major (25 -> 26)'
      source_requirements:
        prd: []
        tdd:
          - 'TG-1'
          - 'TG-2'
          - 'DEC-2'
          - 'DEC-3'
          - 'ASM-3'
      outputs:
        - '@types/node upgraded to latest major, or reverted to its pinned pre-attempt version with a recorded reason'
      verification:
        - 'npm run lint'
        - 'npm test'
      risk: 'low'
      confidence: 80
      human_review: 'none'
      escalation_triggers:
        - 'failure traces to a Node.js engine-version mismatch, invalidating ASM-3 — record as a finding, do not change engines.node (CON-1) to force it through'
      delegation_tier: 'standard'
    - id: task-003
      title: 'Attempt csv-parse major (6 -> 7), TG-3/DEC-4 consistency across all six call sites'
      source_requirements:
        prd: []
        tdd:
          - 'TG-3'
          - 'DEC-2'
          - 'DEC-4'
          - 'IMP-3'
          - 'CTR-1'
      outputs:
        - 'csv-parse upgraded to latest major with all six call sites (source/generator/workdir/discovery.ts plus five package index.ts files) on one consistent API shape, or reverted to its pinned pre-attempt version with a recorded reason'
      verification:
        - 'npm run lint'
        - 'npm test'
        - 'grep for csv-parse import shape across all six files to confirm consistency (TG-3)'
      risk: 'medium'
      confidence: 65
      human_review: 'none'
      escalation_triggers:
        - 'a csv-parse 7 API change requires non-mechanical redesign of discovery/parsing logic at any of the six call sites (DEC-2 step 2 fix-vs-hold-back triage) -- hold back, do not redesign'
        - 'any attempt to leave a mixed version state across the six call sites (DEC-4 forbids this)'
      delegation_tier: 'standard'
    - id: task-004
      title: 'Attempt mocha major (11 -> 12)'
      source_requirements:
        prd: []
        tdd:
          - 'TG-1'
          - 'TG-2'
          - 'DEC-2'
          - 'DEC-3'
      outputs:
        - 'mocha upgraded to latest major, or reverted to its pinned pre-attempt version with a recorded reason'
      verification:
        - 'npm run lint'
        - 'npm test'
      risk: 'medium'
      confidence: 70
      human_review: 'none'
      escalation_triggers:
        - 'mocha 12 changes default spec discovery or CLI flags in a way that silently stops running existing test/*.spec.* files (CLAUDE.md test conventions) rather than failing loudly -- verify test count/coverage did not silently drop, not just that the command exited 0'
      delegation_tier: 'standard'
    - id: task-005
      title: 'Attempt typescript major (6 -> 7)'
      source_requirements:
        prd: []
        tdd:
          - 'TG-1'
          - 'TG-2'
          - 'DEC-2'
          - 'DEC-3'
          - 'CON-3'
      outputs:
        - 'typescript upgraded to latest major, or reverted to its pinned pre-attempt version with a recorded reason'
      verification:
        - 'npm run lint'
        - 'npm test'
        - 'npm run generate:workdir (ts-node smoke check)'
      risk: 'medium'
      confidence: 60
      human_review: 'none'
      escalation_triggers:
        - 'typescript 7 changes default type-checking strictness (tsconfig.json has no explicit strict/target/lib) in a way that surfaces pre-existing type errors across many files -- if the fix set grows beyond a few mechanical signature/import edits, hold back per DEC-2 step 2 rather than widen scope'
      delegation_tier: 'standard'
    - id: task-006
      title: 'Final combined validation and documentation'
      source_requirements:
        prd: []
        tdd:
          - 'TG-1'
          - 'TG-2'
          - 'TG-4'
          - 'FLOW-1'
          - 'RISK-3'
      outputs:
        - 'final npm ci && npm run lint && npm test pass confirmation over the combined end state of all four major attempts'
        - 'npm run generate:workdir smoke check result (soft signal, CON-4)'
        - 'prg Findings entries: outcome (upgraded/held-back + reason) for each of the four majors, plus the final npm outdated state'
      verification:
        - 'npm ci'
        - 'npm run lint'
        - 'npm test'
        - 'npm run generate:workdir'
        - 'npm outdated (final state)'
      risk: 'low'
      confidence: 85
      human_review: 'none'
      escalation_triggers:
        - 'the combined end state (all attempted majors together) fails validation even though each major passed individually (RISK-3) -- bisect to the interacting pair and hold back the most recently added major first'
      delegation_tier: 'standard'
```

## 5. Parallelization Plan

```yaml
parallelization_plan:
  groups: []
```

No parallel groups: every task shares `package.json`/`package-lock.json`
as both input and output, and the TDD's own ordering (`DEC-1`, `DEC-2`,
`DEC-3`) is a sequential risk-isolation strategy, not an artifact of
planning convenience. Running any two tasks concurrently would reintroduce
exactly the attribution ambiguity `DEC-1`/`DEC-2` exist to avoid.

## 6. Human Review Gates

```yaml
human_review_gates:
  gates: []
```

None. Per the autonomy override, no category here (major version bump,
devDependency change) rises to a genuine product/business tradeoff or an
irreversible action — every task's escalation triggers route to a
documented hold-back, not a human stop, and a hold-back is itself an
accepted planned outcome per the wave manifest's own Non-Goals.

## 7. Risk Assessment

```yaml
risk_assessment:
  by_task:
    - id: task-001
      risk: 'low'
      rationale: 'Patch/minor bumps are semver-declared backward-compatible; skill explicitly calls this class "always safe".'
    - id: task-002
      risk: 'low'
      rationale: 'Types-only package; worst case is a type-checking error, not a runtime behavior change.'
    - id: task-003
      risk: 'medium'
      rationale: 'Runtime package used at six call sites across five distinct library packages plus shared discovery.ts; a behavioral change here has the widest blast radius of the four majors.'
    - id: task-004
      risk: 'medium'
      rationale: 'Test runner itself -- a breaking change could mask test failures rather than surfacing them cleanly.'
    - id: task-005
      risk: 'medium'
      rationale: 'Compiler itself, and tsconfig.json has no explicit strict/target/lib pins, so TypeScript 7 defaults could shift type-checking behavior project-wide.'
    - id: task-006
      risk: 'low'
      rationale: 'Validation-only task; the only risk is RISK-3 (untested version combination), which this task exists specifically to catch.'
  by_area:
    - area: 'infra'
      risk: 'medium'
      rationale: 'Four independent major version bumps to build/test tooling (csv-parse, mocha, typescript, @types/node) carry cumulative regression risk even though each is individually mitigated by DEC-2 hold-back policy.'
    - area: 'docs'
      risk: 'low'
      rationale: 'No documentation deliverables beyond this runs own prg/pln/tdd records.'
```

## 8. Confidence Assessment

```yaml
confidence_assessment:
  by_task:
    - id: task-001
      score: 85
      rationale: '13 packages, all patch/minor, explicitly declared safe by the dependency-management skill; the only uncertainty is whether any one of them has an undeclared breaking change despite semver.'
    - id: task-002
      score: 80
      rationale: 'Types-only; ASM-3 (no Node engine floor change) is plausible but unverified until attempted.'
    - id: task-003
      score: 65
      rationale: 'Six call sites, one shared discovery module; csv-parse 7s actual API delta from 6.x was not independently researched before planning (TDD treats this as an empirical question resolved by FLOW-1, not a pre-answered one) -- lowest confidence of the four majors given blast radius.'
    - id: task-004
      score: 70
      rationale: 'Mocha major bumps have historically been CLI/config-surface changes rather than test-semantics changes, but this was not verified against the actual 12.x changelog before planning.'
    - id: task-005
      score: 60
      rationale: 'TypeScript majors routinely change default strictness/lib behavior; with no explicit tsconfig pins, this project is maximally exposed to that -- lowest confidence task.'
    - id: task-006
      score: 85
      rationale: 'Pure validation/documentation; the only uncertainty is RISK-3s combined-state interaction, which is low-likelihood given each prior task already validated independently.'
```

## 9. Agent Assignment Plan

```yaml
agent_assignment_plan:
  assignments:
    - task_id: task-001
      agent_role: 'Infrastructure Agent'
      objective: 'Run npm outdated to capture the baseline, then upgrade all non-major-version packages (the 13 of the 17 outdated packages that are not @types/node, csv-parse, mocha, or typescript) in one batch, validating with npm ci && npm run lint && npm test.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-1: batch the 13 non-major upgrades first, establish a known-green floor before any major is attempted.'
          - 'If this batch fails, bisect to the offending package(s) and apply the same mechanical-fix-or-revert triage as DEC-2.'
      likely_files:
        - 'package.json'
        - 'package-lock.json'
      acceptance_criteria:
        - 'npm outdated no longer lists any of the 13 non-major packages as behind Wanted/Latest'
        - 'npm run lint and npm test both pass'
      verification:
        - 'npm ci'
        - 'npm run lint'
        - 'npm test'
      escalation_triggers:
        - 'bisection cannot isolate a failing package within the batch'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-002
      agent_role: 'Infrastructure Agent'
      objective: 'Upgrade @types/node to its latest major (26.x) and validate. Hold back to the pre-attempt pinned version if lint/test fails and no mechanical fix resolves it.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-2: install, lint+test, mechanical-fix-or-revert triage.'
          - 'DEC-3: @types/node attempted first among the four majors (narrowest blast radius).'
          - 'ASM-3: no expected Node engine floor change; if validation failure traces to Node version, this assumption is wrong and the major is held back.'
      likely_files:
        - 'package.json'
        - 'package-lock.json'
      acceptance_criteria:
        - '@types/node is at latest major and lint/test pass, OR package.json/package-lock.json are reverted to the pre-attempt pinned version with the reason recorded for the next task to log'
      verification:
        - 'npm run lint'
        - 'npm test'
      escalation_triggers:
        - 'failure traces to a Node.js engine-version mismatch'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-003
      agent_role: 'Infrastructure Agent'
      objective: 'Upgrade csv-parse to its latest major (7.x) and validate across all six call sites (source/generator/workdir/discovery.ts, and source/library/packages/{aws,c4model,c4k8s,domainstorytelling,eventstorming}/index.ts). If the parse() API shape changed, fix all six identically (DEC-4) -- never a partial/mixed state. Hold back to the pre-attempt pinned version if a fix would require non-mechanical redesign.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-4: one consistent csv-parse version across all six consumers is a hard requirement (TG-3), since downstream wave runs W-3..W-7 depend on a settled API.'
          - 'CTR-1: current contract is import { parse } from "csv-parse/sync" with an identical options shape at all six sites.'
      likely_files:
        - 'package.json'
        - 'package-lock.json'
        - 'source/generator/workdir/discovery.ts'
        - 'source/library/packages/aws/index.ts'
        - 'source/library/packages/c4model/index.ts'
        - 'source/library/packages/c4k8s/index.ts'
        - 'source/library/packages/domainstorytelling/index.ts'
        - 'source/library/packages/eventstorming/index.ts'
      acceptance_criteria:
        - 'csv-parse is at latest major, all six call sites use one consistent API shape, and lint/test pass, OR package.json/package-lock.json (and any attempted source edits) are reverted to the pre-attempt pinned version with the reason recorded'
      verification:
        - 'npm run lint'
        - 'npm test'
        - 'grep -rn "csv-parse" source to confirm identical import shape across all six files'
      escalation_triggers:
        - 'API change requires non-mechanical redesign of parsing/discovery logic'
        - 'any temptation to leave a mixed version/shape state across the six files'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-004
      agent_role: 'Infrastructure Agent'
      objective: 'Upgrade mocha to its latest major (12.x) and validate, paying attention to whether the full existing test/*.spec.* set still actually runs (not just whether the command exits 0). Hold back to the pre-attempt pinned version if lint/test fails and no mechanical fix resolves it.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-2/DEC-3: mocha attempted after csv-parse, before typescript, since it is the test runner itself.'
          - 'Current State: no .mocharc.* file exists; npm test runs bare mocha using its own default spec discovery against test/*.spec.js and test/*.spec.mjs files.'
      likely_files:
        - 'package.json'
        - 'package-lock.json'
      acceptance_criteria:
        - 'mocha is at latest major, the same set of test files is discovered and run as before the bump, and lint/test pass, OR reverted to the pre-attempt pinned version with the reason recorded'
      verification:
        - 'npm run lint'
        - 'npm test'
        - 'compare test file count/names discovered before and after the bump'
      escalation_triggers:
        - 'default spec discovery silently changes (fewer files/tests run than before) without the command itself failing'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-005
      agent_role: 'Infrastructure Agent'
      objective: 'Upgrade typescript to its latest major (7.x) and validate. tsconfig.json has no explicit strict/target/lib settings, so watch for newly-surfaced type errors from TypeScript 7 defaults. Apply mechanical fixes (import/signature only, matching the no-semicolon/double-quote house style) if few and narrow; hold back to the pre-attempt pinned version otherwise.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-2/DEC-3: typescript attempted last among the four majors, after the test runner is already validated.'
          - 'CON-3: no semicolons, double-quote strings -- any source edit must match house style.'
          - 'Current State: tsconfig.json has no target/lib/strict set, so the TypeScript version itself governs checking behavior.'
      likely_files:
        - 'package.json'
        - 'package-lock.json'
        - 'tsconfig.json (only if a config-level fix, not a source rewrite, resolves a new strictness default -- prefer this over touching many source files)'
      acceptance_criteria:
        - 'typescript is at latest major and lint/test/generate:workdir pass, OR reverted to the pre-attempt pinned version with the reason recorded'
      verification:
        - 'npm run lint'
        - 'npm test'
        - 'npm run generate:workdir'
      escalation_triggers:
        - 'fix set required to pass grows beyond a few mechanical edits, indicating a real strictness-default shift rather than a narrow incompatibility'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-006
      agent_role: 'QA Agent'
      objective: 'Run the final combined validation pass (npm ci && npm run lint && npm test && npm run generate:workdir) over the end state of all prior tasks, re-run npm outdated to confirm the final actionable state, and write the prg Findings entries documenting the outcome (upgraded, or held back with reason) for each of the four majors plus the 13 minors batch.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'FLOW-1 step 4: final combined npm ci && lint && test pass over the combined end state.'
          - 'RISK-3: a combination of versions untested individually could still fail together -- this is the check that catches it.'
          - 'CON-4: generate:workdir is a soft smoke signal (Podman-free), not a hard gate; scripts/generate-library.sh and npm run generate:package are out of reach in this environment.'
      likely_files:
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0001-npm-dependency-upgrade/prg-0001-npm-dependency-upgrade.md'
      acceptance_criteria:
        - 'npm ci, npm run lint, and npm test all pass on the final combined state'
        - 'npm outdated final state recorded'
        - 'prg Findings section names the outcome of each of the four majors and the minors batch'
      verification:
        - 'npm ci'
        - 'npm run lint'
        - 'npm test'
        - 'npm run generate:workdir'
        - 'npm outdated'
      escalation_triggers:
        - 'combined state fails even though each task individually passed'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
```

## 10. Verification Plan

```yaml
verification_plan:
  checks:
    - task_id: task-001
      methods:
        - 'npm ci'
        - 'npm run lint'
        - 'npm test'
      success_criteria:
        - 'all three commands exit 0'
    - task_id: task-002
      methods:
        - 'npm run lint'
        - 'npm test'
      success_criteria:
        - 'both commands exit 0, or package is reverted and reason recorded'
    - task_id: task-003
      methods:
        - 'npm run lint'
        - 'npm test'
        - 'grep for csv-parse import consistency across all six call sites'
      success_criteria:
        - 'both commands exit 0 and all six call sites share one API shape, or package is reverted and reason recorded'
    - task_id: task-004
      methods:
        - 'npm run lint'
        - 'npm test'
        - 'test file discovery comparison (before/after)'
      success_criteria:
        - 'both commands exit 0 and the same test files are discovered, or package is reverted and reason recorded'
    - task_id: task-005
      methods:
        - 'npm run lint'
        - 'npm test'
        - 'npm run generate:workdir'
      success_criteria:
        - 'all three commands exit 0 (generate:workdir treated as soft signal per CON-4), or package is reverted and reason recorded'
    - task_id: task-006
      methods:
        - 'npm ci'
        - 'npm run lint'
        - 'npm test'
        - 'npm run generate:workdir'
        - 'npm outdated'
      success_criteria:
        - 'npm ci/lint/test exit 0 on the combined end state'
        - 'npm outdated reports nothing actionable beyond documented hold-backs'
```

## 11. Escalation Rules

```yaml
escalation_rules:
  rules:
    - condition: 'A major upgrade fails lint/test and no mechanical (import/signature-only) fix resolves it within the task'
      action: 'Revert that package to its pre-attempt pinned version, record the reason in the prg Findings section, and proceed to the next task -- this is a documented planned outcome (wave manifest Non-Goals), not an escalation to a human.'
    - condition: 'A fix attempt would require non-mechanical redesign of discovery/parsing logic (csv-parse) or broad source-wide type-error remediation (typescript)'
      action: 'Treat as a hold-back per the condition above rather than widening this runs scope to a redesign.'
    - condition: 'A failure traces to the Node.js engine floor (ASM-3 proven wrong) or would require changing engines.node (CON-1) or the CommonJS/ESM package shape (CON-2)'
      action: 'Hold back the responsible major and record the finding; do not change engines.node or the package module shape to force it through -- that is a decision outside this runs scope.'
    - condition: 'The combined end state (task-006) fails even though each major passed individually (RISK-3)'
      action: 'Bisect by reverting the most recently added major first, re-validate, and continue reverting in reverse-attempt order until green; record which combination was untenable.'
    - condition: 'Any genuinely unresolvable blocker per the complete-run autonomy override (conflicting requirements with no defensible resolution, a missing credential, an unresearchable external fact, or a real product/business tradeoff)'
      action: 'Stop that task, mark it blocked in this pln, log it in the prg, and continue with whatever does not depend on it -- surface in the final report rather than halting the whole run.'
```

## 12. Final Execution Manifest

```yaml
execution_manifest:
  status: 'done'
  recommendation: 'proceed'
  autonomy_level: 'high'
  total_tasks: 6
  autonomous_tasks: 6
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
    - task-006
  parallel_groups: []
  required_human_gates: []
  highest_risk_tasks:
    - task-003
    - task-004
    - task-005
  lowest_confidence_tasks:
    - task-005
    - task-003
  next_action: 'None — run complete. 16 of 17 outdated packages upgraded; typescript (6->7) held back on an upstream @typescript-eslint compatibility gate (typescript-eslint#10940), documented in prg Findings. Final npm ci/lint/test all green.'
  criteria:
    - 'npm outdated reports nothing actionable, or only held-back majors with a recorded reason — MET: only typescript remains, with a recorded reason'
    - 'npm run lint and npm test pass on the final combined state — MET'
    - 'csv-parse ends on one consistent version across all six call sites — MET (7.0.3, zero source changes needed)'
    - 'package-lock.json stays consistent with package.json throughout — MET (npm ci verified clean at final state)'
```
