---
title: Execution plan — CI/CD trigger scoping and run deduplication
status: completed
owner: tmorin
date: 2026-10-04
type: pln
run: 0002
wave: 001
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0002-ci-cd-minute-optimization/tdd-0002-ci-cd-minute-optimization.md
  - docs/wav/wav-001-dependency-ci-refresh/wav-001-dependency-ci-refresh.md
---

# Execution plan — CI/CD trigger scoping and run deduplication

## 1. Executive Summary

Three workflow files change; one of them (`continuous-integration.yaml`) holds
the npm publish, GitHub Pages and GitHub Release jobs, so the plan is shaped
around proving that file's release path survived rather than around the size
of the edit. Verification is static by necessity (`CON-4`: no push, no
rehearsal tag), which is why three of the eight tasks are verification tasks
and why the release-critical ones are not delegated.

```yaml
summary:
  status: 'done'
  product_goal: 'CI triggers automatically on push and pull request while doing the minimum work per commit: exactly one Build per commit, superseded runs cancelled, and the tag-triggered release path untouched'
  technical_approach: 'Narrow the push trigger of continuous-integration.yaml to master plus an explicit tags filter, leave pull_request unfiltered, and add a workflow-level concurrency group keyed by event kind and pull-request-number-or-ref with cancel-in-progress disabled for tag refs. Apply the same deduplication (without tags) to copilot-setup-steps.yml and add concurrency to codeql-analysis.yml. Verify statically: YAML parse, scripted trigger-semantics assertions, and a diff-containment review proving no release-job line changed.'
  total_tasks: 8
  parallel_groups: 2
  high_risk_tasks: 3
  human_review_gates: 2
  autonomy_level: 'medium'
  recommendation: 'proceed'
  criteria:
    - 'continuous-integration.yaml: push trigger matches master and every tag; pull_request unfiltered; workflow-level concurrency present'
    - 'GithubRelease, GithubPages and NpmPublication are byte-unchanged, still needs: [ Build ], still gated on startsWith(github.ref, refs/tags/)'
    - 'cancel-in-progress evaluates false for a tag ref and true for a branch or pull-request ref'
    - 'All three edited workflow files parse as YAML and pass every assertion in the verification script'
    - 'npm run lint and npm test still pass (unchanged from the pre-change baseline at 5ec73b75a6)'
    - 'No file outside .github/workflows/ and this run directory is modified'
    - 'Work is committed locally only — no push, no pull request (gate-002)'
```

## 2. PRD/TDD Consistency Assessment

No PRD exists (`TDD+pln` profile), so this section compares the TDD against
its actual referents: the wave manifest's W-2 entry and the repository.

```yaml
consistency_assessment:
  aligned_items:
    - 'TDD DEC-1/DEC-2 cover both halves of W-2 focus (dedupe + supersede); each wave exit-evidence item maps to a FLOW- and a DEC- in the TDD PRD Traceability table'
    - 'TDD Scope matches the wave manifest likely_paths (.github/workflows/**) except for this run own documents, which the TDD declares in its Repository Impact preamble'
    - 'TDD Current State matches the four files on disk: continuous-integration.yaml on: [ push, pull_request ] with no concurrency; codeql-analysis.yml already branch-filtered to master plus schedule; copilot-setup-steps.yml path-filtered to itself; package-builder.yaml workflow_dispatch only'
    - 'TDD CON-3 matches the repository: no docs/CLAUDE.md, no docs/adr/, docs/ holds only docs/wav/ — so no ADR constrains the design and Canonical Impact is correctly None'
    - 'TDD verification commands are real repository commands (npm run lint, npm test from package.json scripts); python3 with PyYAML is present in this environment'
  gaps:
    - id: gap-001
      type: 'ambiguity'
      description: 'The wave Purpose and Completion Criteria say CI must trigger on "every push", while the same sentences demand the minimum work per commit. The TDD resolves this (DEC-1, Q-1) by reading "every push" as master plus tags plus every pull request, so an un-PR-ed feature-branch push gets no run.'
      impact: 'medium'
      recommendation: 'Carried as a resolved-but-visible question (TDD Q-1) and surfaced in the run report, since it narrows wave wording rather than contradicting its exit evidence. DEF-4 (workflow_dispatch on the CI workflow) is the cheap reversal if the maintainer disagrees.'
    - id: gap-002
      type: 'risk'
      description: 'Wave manifest W-2 scope says "add concurrency groups" in the plural but names no file list; the TDD extends to codeql-analysis.yml and copilot-setup-steps.yml, and deliberately excludes package-builder.yaml (DEC-5).'
      impact: 'low'
      recommendation: 'Accept. Both inclusions are minute economy on existing jobs, which the wave Non-Goals explicitly allow; the exclusion is argued from the push-mid-flight hazard rather than from effort.'
    - id: gap-003
      type: 'risk'
      description: 'The static verification can prove what the YAML says, not how GitHub evaluates it (TDD RISK-5). No end-to-end observation is available inside this run.'
      impact: 'medium'
      recommendation: 'Mitigated by quoting GitHub documented rules in the prg Findings and by gate-001 handing the human a specific, cheap post-merge observation to make.'
  blocking_gaps: []
```

## 3. Execution Graph

```yaml
execution_graph:
  nodes:
    - id: task-001
      status: 'done'
      title: 'Rewrite continuous-integration.yaml triggers and add workflow-level concurrency'
      depends_on: []
      produces:
        - '.github/workflows/continuous-integration.yaml (on: and concurrency: blocks only)'
      agent_role: 'Infrastructure Agent'
      autonomy: 'review_before'
      risk: 'critical'
      confidence: 88
    - id: task-002
      status: 'done'
      title: 'Add a concurrency group to codeql-analysis.yml'
      depends_on: []
      produces:
        - '.github/workflows/codeql-analysis.yml (concurrency: block)'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 95
    - id: task-003
      status: 'done'
      title: 'Scope the push trigger of copilot-setup-steps.yml and add concurrency'
      depends_on: []
      produces:
        - '.github/workflows/copilot-setup-steps.yml (on: and concurrency: blocks only)'
      agent_role: 'Infrastructure Agent'
      autonomy: 'autonomous'
      risk: 'medium'
      confidence: 92
    - id: task-004
      status: 'done'
      title: 'Author and run the trigger-semantics verification script'
      depends_on: [task-001, task-002, task-003]
      produces:
        - 'scratchpad verify-workflows.py and its pass/fail output'
      agent_role: 'QA Agent'
      autonomy: 'review_after'
      risk: 'high'
      confidence: 90
    - id: task-005
      status: 'done'
      title: 'Diff-containment review: prove no release-job line changed'
      depends_on: [task-001]
      produces:
        - 'reviewed git diff -- .github/workflows/ recorded in the prg'
      agent_role: 'Security Review Agent'
      autonomy: 'review_before'
      risk: 'critical'
      confidence: 93
    - id: task-006
      status: 'done'
      title: 'Repository regression check against the pre-change baseline'
      depends_on: [task-001, task-002, task-003]
      produces:
        - 'npm run lint and npm test exit codes plus logs'
      agent_role: 'QA Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 96
    - id: task-007
      status: 'done'
      title: 'Record outcomes in the run documents and close out statuses'
      depends_on: [task-004, task-005, task-006]
      produces:
        - 'prg Log/Findings entries, pln task statuses, execution_manifest.status, run status file'
      agent_role: 'Documentation Agent'
      autonomy: 'autonomous'
      risk: 'low'
      confidence: 97
    - id: task-008
      status: 'done'
      title: 'Commit locally on the current branch (no push, no pull request)'
      depends_on: [task-007]
      produces:
        - 'one Conventional Commit containing .github/workflows/ and this run directory'
      agent_role: 'Release Agent'
      autonomy: 'autonomous'
      risk: 'medium'
      confidence: 94
  edges:
    - from: task-001
      to: task-004
      reason: 'the script asserts the rewritten triggers and the untouched release-job gates'
    - from: task-002
      to: task-004
      reason: 'the script asserts the CodeQL concurrency block'
    - from: task-003
      to: task-004
      reason: 'the script asserts the Copilot trigger scoping and the deliberate absence of a tags filter'
    - from: task-001
      to: task-005
      reason: 'diff containment can only be reviewed once the edit exists'
    - from: task-001
      to: task-006
      reason: 'regression is measured against the post-change tree'
    - from: task-002
      to: task-006
      reason: 'same tree'
    - from: task-003
      to: task-006
      reason: 'same tree'
    - from: task-004
      to: task-007
      reason: 'the prg records the script result, so the result must exist first'
    - from: task-005
      to: task-007
      reason: 'the prg records the diff-containment conclusion'
    - from: task-006
      to: task-007
      reason: 'the prg records the regression outcome against the baseline'
    - from: task-007
      to: task-008
      reason: 'the commit must contain the final state of the run documents, so documents are written before committing'
```

## 4. Task Catalog

```yaml
task_catalog:
  tasks:
    - id: task-001
      title: 'Rewrite continuous-integration.yaml triggers and add workflow-level concurrency'
      source_requirements:
        prd: []
        tdd:
          - 'DEC-1 (narrow push to master rather than cancel the duplicate)'
          - 'DEC-2 (concurrency keyed by event kind and pull-request-number-or-ref)'
          - 'DEC-3 (tags: [ ** ] so the release path keeps matching)'
          - 'DEC-4 (cancel-in-progress disabled for tag refs)'
          - 'IMP-1, CTR-1, FLOW-1, FLOW-2, FLOW-3, RISK-1, RISK-2'
      outputs:
        - 'on: mapping with push.branches [ master ], push.tags [ ** ], unfiltered pull_request'
        - 'workflow-level concurrency block between on: and jobs:'
        - 'zero changes at or below the jobs: key'
      verification:
        - 'python3 -c "import yaml; yaml.safe_load(open(...))" parses the file'
        - 'verify-workflows.py continuous-integration assertions all pass (task-004)'
        - 'git diff shows every changed line above the jobs: key (task-005)'
      risk: 'critical'
      confidence: 88
      human_review: 'required'
      escalation_triggers:
        - 'any need to touch a job body, an if: gate, a permissions block or a secret to make the triggers work'
        - 'ambiguity about whether a ref filter matches release tags that cannot be settled from GitHub documentation'
      delegation_tier: 'hard_judgment'
    - id: task-002
      title: 'Add a concurrency group to codeql-analysis.yml'
      source_requirements:
        prd: []
        tdd:
          - 'IMP-2, DEC-2'
      outputs:
        - 'concurrency block with the same group expression shape as task-001'
        - 'triggers and job body unchanged'
      verification:
        - 'YAML parse'
        - 'verify-workflows.py codeql assertions (push/pull_request still filtered to master, schedule intact, concurrency present)'
      risk: 'low'
      confidence: 95
      human_review: 'none'
      escalation_triggers:
        - 'any requirement to change the CodeQL triggers, matrix or security-events permission'
      delegation_tier: 'standard'
    - id: task-003
      title: 'Scope the push trigger of copilot-setup-steps.yml and add concurrency'
      source_requirements:
        prd: []
        tdd:
          - 'IMP-3, CTR-2, DEC-1, DEC-2, DEC-6'
      outputs:
        - 'push gains branches: [ master ] while keeping its paths: filter and gaining no tags: filter'
        - 'pull_request paths filter and workflow_dispatch untouched'
        - 'concurrency block added'
      verification:
        - 'YAML parse'
        - 'verify-workflows.py copilot assertions, including the negative assertion that no tags: filter was added'
      risk: 'medium'
      confidence: 92
      human_review: 'none'
      escalation_triggers:
        - 'any need to remove workflow_dispatch or the paths: filter'
      delegation_tier: 'standard'
    - id: task-004
      title: 'Author and run the trigger-semantics verification script'
      source_requirements:
        prd: []
        tdd:
          - 'Observability and Verification checks 1-2 (the per-file assertion table), CON-4, RISK-1, RISK-5'
      outputs:
        - 'scratchpad script asserting trigger filters, concurrency expressions, and the three release jobs needs/if gates'
        - 'its output, with a check count and zero failures'
      verification:
        - 'the script exits 0'
        - 'spot-check that it fails loudly when an assertion is violated, so a passing run means something'
      risk: 'high'
      confidence: 90
      human_review: 'after'
      escalation_triggers:
        - 'an assertion that cannot be expressed statically and would need a real push to settle'
      delegation_tier: 'hard_judgment'
    - id: task-005
      title: 'Diff-containment review: prove no release-job line changed'
      source_requirements:
        prd: []
        tdd:
          - 'Observability and Verification check 3, IMP-1 risks/notes, wave exit evidence #3'
      outputs:
        - 'a line-by-line conclusion recorded in the prg: every changed hunk in continuous-integration.yaml lies above jobs:'
      verification:
        - 'git diff -- .github/workflows/continuous-integration.yaml read in full'
        - 'git diff --stat for the whole tree, confirming no file outside scope changed'
      risk: 'critical'
      confidence: 93
      human_review: 'required'
      escalation_triggers:
        - 'any changed line at or below the jobs: key'
        - 'any modified file outside .github/workflows/ and this run directory'
      delegation_tier: 'hard_judgment'
    - id: task-006
      title: 'Repository regression check against the pre-change baseline'
      source_requirements:
        prd: []
        tdd:
          - 'Observability and Verification check 4'
      outputs:
        - 'npm run lint exit code, npm test exit code and passing count, compared with the baseline (both 0, 5 passing at 5ec73b75a6)'
      verification:
        - 'both exit codes are 0 and the test count is unchanged'
      risk: 'low'
      confidence: 96
      human_review: 'none'
      escalation_triggers:
        - 'any failure, which must be attributed before it is reported — this working tree is shared with wave run W-1 (npm dependency upgrade), whose edits to package.json / package-lock.json / source/** could surface here and would not be caused by this run'
      delegation_tier: 'cheap'
    - id: task-007
      title: 'Record outcomes in the run documents and close out statuses'
      source_requirements:
        prd: []
        tdd:
          - 'Canonical Impact (CI-arc-1 / CI-dom-1 both None), Deferred Work DEF-1..DEF-5'
      outputs:
        - 'prg Log entries per stage plus Findings and Lessons Learnt'
        - 'pln per-task statuses and execution_manifest.status'
        - 'run-0002 status file advanced to completed or in-progress per the manifest'
      verification:
        - 'pln task statuses and the run status file agree with what actually ran'
        - 'every TDD Q- is either resolved with its method shown or still open with a reason'
      risk: 'low'
      confidence: 97
      human_review: 'none'
      escalation_triggers:
        - 'a verification result that contradicts a document claim and cannot be reconciled by editing the document'
      delegation_tier: 'standard'
    - id: task-008
      title: 'Commit locally on the current branch (no push, no pull request)'
      source_requirements:
        prd: []
        tdd:
          - 'Deployment and Rollout'
      outputs:
        - 'one Conventional Commit (ci(workflows): ...) containing .github/workflows/ and this run directory'
      verification:
        - 'git show --stat lists only intended paths'
        - 'git status confirms nothing unintended was staged, and no push occurred'
      risk: 'medium'
      confidence: 94
      human_review: 'none'
      escalation_triggers:
        - 'unrelated modifications present in the tree at commit time (W-1 may be working concurrently) — stage paths explicitly, never git add -A'
      delegation_tier: 'standard'
```

## 5. Parallelization Plan

```yaml
parallelization_plan:
  groups:
    - id: parallel-group-001
      tasks:
        - task-002
        - task-003
      reason: 'Separate files, neither touching the publishing workflow; both are isolated additive YAML edits with explicit acceptance criteria, so they are dispatched concurrently.'
      conflict_risks:
        - 'Both live under .github/workflows/, so a careless agent could edit the wrong file — each dispatch names exactly one path and forbids touching any other.'
        - 'task-001 runs inline in the orchestrating session at the same time; it owns continuous-integration.yaml exclusively, so there is no shared-file conflict.'
    - id: parallel-group-002
      tasks:
        - task-005
        - task-006
      reason: 'Independent verification angles over the same finished tree: one reads the diff, the other runs the repository test suite. Neither writes to the tree.'
      conflict_risks:
        - 'None on files. task-006 may surface failures caused by wave run W-1 in the shared working tree; attribution is part of the task, not an afterthought.'
```

## 6. Human Review Gates

```yaml
human_review_gates:
  gates:
    - id: gate-001
      trigger: 'A change to the trigger conditions of the workflow that performs npm publish, GitHub Pages deployment and GitHub Release'
      required_before: []
      required_after: ['task-001', 'task-005']
      reviewer_focus:
        - 'the push trigger declares both branches and tags — without tags, no tag push would run and every release would silently stop'
        - 'GithubRelease, GithubPages and NpmPublication are untouched in the diff, including their needs: [ Build ] and startsWith(github.ref, refs/tags/) gates'
        - 'cancel-in-progress can never evaluate true for a tag ref'
        - 'after merging, the cheap confirming observation: the next tag push still shows all four jobs in the Actions run'
    - id: gate-002
      trigger: 'Publishing this work beyond the local repository'
      required_before: ['git push', 'pull request creation']
      required_after: []
      reviewer_focus:
        - 'pushing the branch and opening the pull request are explicitly reserved for the human by this run dispatch; the run stops at a local commit'
```

**Autonomy override in force.** This run executes under `complete-run`'s
explicit autonomy override, so `task-001` and `task-005` (`human_review:
required`) and `task-004` (`human_review: after`) were executed without
pausing for a human, and `gate-001` is discharged by recorded evidence —
the verification script's assertions and the reviewed diff — rather than by a
human stop mid-run. A future reader should not infer from the absence of a
pause that the gate was dropped: it was converted from a stop into an
auditable artefact, named in the final report. `gate-002` is **not**
overridden; the override covers category-based gating, not this run's
explicit instruction to leave pushing to the human.

## 7. Risk Assessment

```yaml
risk_assessment:
  by_task:
    - id: task-001
      risk: 'critical'
      rationale: 'A branches-only push filter stops matching tag pushes, so the three release jobs would never fire and nothing would fail loudly — npm run release would appear to succeed and publish nothing (TDD RISK-1). Executed inline, never delegated.'
    - id: task-002
      risk: 'low'
      rationale: 'Additive concurrency on a security-scanning workflow with no publishing involvement; worst case is a superseded CodeQL analysis being cancelled, which is the intent.'
    - id: task-003
      risk: 'medium'
      rationale: 'Trigger semantics change on a workflow Copilot depends on; the failure mode is a setup validation not running, which is visible rather than silent.'
    - id: task-004
      risk: 'high'
      rationale: 'This script is the substitute for an end-to-end test. A wrong or vacuous assertion would manufacture false confidence in the release path, so it must fail loudly when violated.'
    - id: task-005
      risk: 'critical'
      rationale: 'Last line of defence on the publishing jobs; a missed changed line here is a production incident discovered at the next release.'
    - id: task-006
      risk: 'low'
      rationale: 'Read-only commands; nothing under .github/ is read by lint or the test suite, so the expected result is no change from baseline.'
    - id: task-007
      risk: 'low'
      rationale: 'Documentation. The real risk is a document claiming a verification that did not happen, which the quality checklist asserts against.'
    - id: task-008
      risk: 'medium'
      rationale: 'A commit in a working tree shared with a concurrent run could capture another run work. Mitigated by staging explicit paths only.'
  by_area:
    - area: 'infra'
      risk: 'critical'
      rationale: 'GitHub Actions trigger configuration is the entire blast radius, and it gates npm publication, GitHub Pages and GitHub Releases.'
    - area: 'security'
      risk: 'low'
      rationale: 'No permissions, secret usage or trigger type changes. pull_request (not pull_request_target) is retained, so fork pull requests still run without secret access; narrowing push additionally prevents a fork-branch push from starting a run in this repository context.'
    - area: 'data'
      risk: 'low'
      rationale: 'No data model, schema or generated artefact is touched.'
    - area: 'docs'
      risk: 'low'
      rationale: 'This run own documents only; the wave manifest and wave progress log are orchestrator-owned and deliberately not written here.'
```

## 8. Confidence Assessment

```yaml
confidence_assessment:
  by_task:
    - id: task-001
      score: 88
      rationale: 'The YAML is small and the semantics are documented and quoted, but no end-to-end observation is possible inside this run (CON-4), so the residual gap is GitHub evaluation versus documented behaviour (RISK-5) rather than anything about the edit itself.'
    - id: task-002
      score: 95
      rationale: 'Purely additive block; the triggers it interacts with are already correct.'
    - id: task-003
      score: 92
      rationale: 'High confidence on branches plus paths; the deliberate omission of tags rests on the documented unreliability of path filters for tag pushes, which the design treats as a reason to not run at all rather than as something to depend on.'
    - id: task-004
      score: 90
      rationale: 'Assertions are mechanical, but their adequacy is a judgment call: they prove the file says what the design intends, not that GitHub agrees.'
    - id: task-005
      score: 93
      rationale: 'A diff of a 150-line file is fully reviewable; the only failure mode is reviewer inattention, which the explicit above-the-jobs-key criterion removes.'
    - id: task-006
      score: 96
      rationale: 'A baseline was captured before any edit (lint 0, test 0 with 5 passing at 5ec73b75a6), so the comparison is exact rather than remembered.'
    - id: task-007
      score: 97
      rationale: 'Bookkeeping against results already in hand.'
    - id: task-008
      score: 94
      rationale: 'Explicit path staging on a branch that is already the wave working branch; the only uncertainty is concurrent activity from W-1 in the same tree.'
```

## 9. Agent Assignment Plan

```yaml
agent_assignment_plan:
  assignments:
    - task_id: task-001
      agent_role: 'Infrastructure Agent'
      objective: 'Replace on: [ push, pull_request ] with a filtered mapping (push.branches [ master ], push.tags [ ** ], unfiltered pull_request) and insert a workflow-level concurrency block, changing nothing at or below jobs:.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-3: without a tags filter the workflow does not run for tag pushes, which would silently disable every release'
          - 'DEC-4: cancel-in-progress must evaluate false for refs/tags/*'
          - 'DEC-2: group ${{ github.workflow }}-${{ github.event_name }}-${{ github.event.pull_request.number || github.ref }}'
      likely_files:
        - '.github/workflows/continuous-integration.yaml'
      acceptance_criteria:
        - 'a tag push still triggers the workflow and still reaches GithubRelease, GithubPages and NpmPublication'
        - 'a feature-branch push no longer triggers the workflow; its commit is built once by the pull_request event'
        - 'house style preserved: two-space indent, [ a, b ] flow sequences with inner spaces'
      verification:
        - 'YAML parse, verification script, diff containment'
      escalation_triggers:
        - 'any change needed below jobs:'
      suggested_subagent_type: '(inline)'
      suggested_model: '(default)'
    - task_id: task-002
      agent_role: 'Infrastructure Agent'
      objective: 'Add a workflow-level concurrency block to codeql-analysis.yml, matching the group expression used in continuous-integration.yaml, without touching triggers, matrix, permissions or steps.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'IMP-2: triggers already branch-filtered, so only the concurrency block is added; the weekly schedule keys into its own group via github.event_name'
      likely_files:
        - '.github/workflows/codeql-analysis.yml'
      acceptance_criteria:
        - 'concurrency.group contains github.event_name and github.event.pull_request.number with a github.ref fallback'
        - 'cancel-in-progress is plain true, not the tag-guarded expression (DEC-4: no tag ref can reach this workflow)'
        - 'no other line of the file changes'
      verification:
        - 'YAML parse and the codeql assertions of the verification script'
      escalation_triggers:
        - 'any requirement to change triggers or permissions'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-003
      agent_role: 'Infrastructure Agent'
      objective: 'Add branches: [ master ] to the push trigger of copilot-setup-steps.yml (keeping its paths: filter, adding no tags: filter) and add a concurrency block.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'DEC-6: only continuous-integration.yaml gets a tags filter, because only it has release jobs; adding one here would make the workflow run on every release tag'
          - 'CTR-2: workflow_dispatch and the pull_request paths filter are untouched'
      likely_files:
        - '.github/workflows/copilot-setup-steps.yml'
      acceptance_criteria:
        - 'push requires both the master branch and the self path; no tags: key exists'
        - 'workflow_dispatch and pull_request arms unchanged; job body unchanged'
      verification:
        - 'YAML parse and the copilot assertions of the verification script, including the negative tags assertion'
      escalation_triggers:
        - 'any need to remove workflow_dispatch or the paths filter'
      suggested_subagent_type: 'general-purpose'
      suggested_model: '(default)'
    - task_id: task-004
      agent_role: 'QA Agent'
      objective: 'Author a Python script that loads all four workflow files and asserts the trigger, concurrency and release-job facts the wave exit evidence depends on, then run it.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'Observability check 2, including the YAML 1.1 gotcha that the bare key on parses as boolean True'
          - 'RISK-1: the tag assertions are the ones that matter'
      likely_files:
        - 'session scratchpad verify-workflows.py (not committed)'
      acceptance_criteria:
        - 'asserts push.branches, push.tags, unfiltered pull_request, both concurrency expressions, and needs/if on all three release jobs'
        - 'asserts package-builder.yaml is still workflow_dispatch-only with no concurrency'
        - 'exits non-zero on any violation'
      verification:
        - 'script exit code 0 with a printed check count'
      escalation_triggers:
        - 'an assertion that cannot be made static'
      suggested_subagent_type: '(inline)'
      suggested_model: '(default)'
    - task_id: task-005
      agent_role: 'Security Review Agent'
      objective: 'Read the full workflow diff and establish that no line at or below the jobs: key of continuous-integration.yaml changed, and that no file outside scope was modified.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'IMP-1 risks/notes: the four job definitions, including the three if gates, must come out of the diff untouched'
      likely_files:
        - '.github/workflows/continuous-integration.yaml'
      acceptance_criteria:
        - 'every diff hunk in that file is above jobs:'
        - 'git diff --stat lists only .github/workflows/ files and this run documents'
      verification:
        - 'git diff read in full, not summarised'
      escalation_triggers:
        - 'any changed release-job line'
      suggested_subagent_type: '(inline)'
      suggested_model: '(default)'
    - task_id: task-006
      agent_role: 'QA Agent'
      objective: 'Run npm run lint and npm test on the post-change tree, write both logs to files, and report exit codes and the mocha passing count.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'Observability check 4: neither command reads .github/, so the expected result is identical to baseline'
      likely_files:
        - 'none — read-only execution'
      acceptance_criteria:
        - 'both exit codes 0; mocha count still 5 passing'
        - 'logs persisted so the orchestrating session can read the evidence rather than trust a summary'
      verification:
        - 'the orchestrating session reads the log files itself'
      escalation_triggers:
        - 'any failure, reported with the failing test name and no attribution guess'
      suggested_subagent_type: 'general-purpose'
      suggested_model: 'haiku'
    - task_id: task-007
      agent_role: 'Documentation Agent'
      objective: 'Write the verification outcomes into the prg, update pln task statuses and execution_manifest.status, and set the run status file.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'Canonical Impact: both entries None, with the reason recorded'
      likely_files:
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0002-ci-cd-minute-optimization/*.md'
      acceptance_criteria:
        - 'no document claims a check that was not run'
        - 'statuses agree with reality'
      verification:
        - 'read-back of the frontmatter and the manifest block'
      escalation_triggers:
        - 'an irreconcilable contradiction between a document and a result'
      suggested_subagent_type: '(inline)'
      suggested_model: '(default)'
    - task_id: task-008
      agent_role: 'Release Agent'
      objective: 'Stage the three workflow files and this run directory explicitly and commit with a Conventional Commit message. Do not push and do not open a pull request.'
      context:
        prd_excerpts: []
        tdd_excerpts:
          - 'Deployment and Rollout: config-only change, rollback is a git revert of this single commit'
      likely_files:
        - '.github/workflows/*.y*ml'
        - 'docs/wav/wav-001-dependency-ci-refresh/run/run-0002-ci-cd-minute-optimization/'
      acceptance_criteria:
        - 'git show --stat lists only those paths'
        - 'no push, no pull request (gate-002)'
      verification:
        - 'git show --stat and git status'
      escalation_triggers:
        - 'unrelated modified files in the tree at commit time'
      suggested_subagent_type: '(inline)'
      suggested_model: '(default)'
```

Two assignments deviate from a naive reading of the Delegation Policy and say
why here rather than silently: `task-004` and `task-005` look mechanical (write
a script; read a diff) but are the *only* evidence standing in for an
end-to-end test of a release trigger, so the Policy's safety rule puts them
inline with `task-001`. `task-006` is genuinely mechanical and is dispatched —
with its logs written to files, so the orchestrating session verifies the
artefact rather than a self-reported "done".

## 10. Verification Plan

```yaml
verification_plan:
  checks:
    - task_id: task-001
      methods:
        - 'static analysis (YAML parse)'
        - 'contract tests (scripted trigger-semantics assertions)'
        - 'regression check (diff containment)'
      success_criteria:
        - 'push.branches == [ master ] and push.tags == [ ** ]'
        - 'pull_request present with no branches narrowing'
        - 'concurrency.group contains github.event_name and github.event.pull_request.number'
        - 'cancel-in-progress is an expression negating startsWith(github.ref, refs/tags/)'
        - 'GithubRelease, GithubPages, NpmPublication each still needs: [ Build ] with the unchanged tag gate'
        - 'Build is still unconditional'
    - task_id: task-002
      methods:
        - 'static analysis'
        - 'contract tests'
      success_criteria:
        - 'concurrency block present with cancel-in-progress: true (no tag ref can reach this workflow — DEC-4)'
        - 'push and pull_request still filtered to master; schedule intact; no push.tags key added'
    - task_id: task-003
      methods:
        - 'static analysis'
        - 'contract tests'
      success_criteria:
        - 'push has branches [ master ] plus the self paths filter and no tags key (DEC-6, asserted negatively)'
        - 'workflow_dispatch retained; pull_request paths filter retained'
        - 'concurrency block present with cancel-in-progress: true'
    - task_id: task-004
      methods:
        - 'self-check of the harness'
      success_criteria:
        - 'script exits 0 over the post-change tree and prints its check count'
        - 'the harness is demonstrated to fail when an assertion is violated, so a pass is informative'
    - task_id: task-005
      methods:
        - 'manual diff review (required — no automated substitute exists)'
      success_criteria:
        - 'no changed line at or below jobs: in continuous-integration.yaml'
        - 'no modified file outside .github/workflows/ and this run directory'
    - task_id: task-006
      methods:
        - 'linting'
        - 'unit and integration tests'
      success_criteria:
        - 'npm run lint exits 0'
        - 'npm test exits 0 with 5 passing, matching the pre-change baseline'
    - task_id: task-007
      methods:
        - 'document read-back'
      success_criteria:
        - 'pln statuses, execution_manifest.status and the run status file agree with the results above'
    - task_id: task-008
      methods:
        - 'repository state inspection'
      success_criteria:
        - 'one local commit containing only intended paths; branch not pushed'
```

The plan deliberately contains no end-to-end check, because the only true one
is a real push and the first real push after this change is a release
candidate (`CON-4`, `RISK-5`). `gate-001` therefore carries the one cheap
observation the human can make after merging.

## 11. Escalation Rules

```yaml
escalation_rules:
  rules:
    - condition: 'A trigger change cannot be made without editing a job body, an if: gate, a permissions block or a secret reference in continuous-integration.yaml'
      action: 'Stop task-001, leave the file unmodified, and escalate — the edit has left the scope that makes this run reversible.'
    - condition: 'Any verification shows a release job line changed, or that a tag push would not match the push filter'
      action: 'Revert the file to HEAD immediately and escalate with the diff; never ship a partially verified publishing trigger.'
    - condition: 'npm run lint or npm test fails on the post-change tree'
      action: 'Re-run against HEAD to separate this run from concurrent wave run W-1 activity in the shared working tree, report both results with attribution, and do not claim a green suite.'
    - condition: 'An open question cannot be settled from the repository or from vendor documentation'
      action: 'Leave it as an open Q- in the TDD with its impact stated, log it in the prg, and continue with the tasks that do not depend on it (complete-run autonomy override).'
    - condition: 'The working tree contains modifications outside this run scope at commit time'
      action: 'Stage explicit paths only, never git add -A, and name the foreign paths in the final report.'
    - condition: 'Anything would require pushing the branch or opening a pull request'
      action: 'Stop at gate-002 — reserved for the human by this run dispatch, and not covered by the autonomy override.'
```

## 12. Final Execution Manifest

```yaml
execution_manifest:
  status: 'done'
  recommendation: 'proceed'
  autonomy_level: 'medium'
  total_tasks: 8
  autonomous_tasks: 5
  review_before_tasks: 2
  review_after_tasks: 1
  human_required_tasks: 0
  blocked_tasks: 0
  critical_path_tasks:
    - task-001
    - task-004
    - task-005
    - task-007
    - task-008
  parallel_groups:
    - parallel-group-001
    - parallel-group-002
  required_human_gates:
    - gate-001
    - gate-002
  highest_risk_tasks:
    - task-001
    - task-005
    - task-004
  lowest_confidence_tasks:
    - task-001
    - task-004
    - task-003
  next_action: 'Done — all 8 tasks complete, committed locally as c345a1bd8f. Remaining action is the human-owned gate-002: review the diff, push the branch and open the pull request. gate-001 post-merge observation: confirm the next tag push still shows all four jobs.'
  criteria:
    - 'A push to a feature branch with an open pull request runs Build exactly once for that commit'
    - 'A second rapid push cancels the first run in progress'
    - 'Tag pushes still trigger GithubRelease, GithubPages and NpmPublication, with cancel-in-progress disabled for tag refs'
    - 'All verification-plan checks pass, including the unchanged npm run lint / npm test baseline'
    - 'Work is committed locally only; push and pull request are left to the human (gate-002)'
```
