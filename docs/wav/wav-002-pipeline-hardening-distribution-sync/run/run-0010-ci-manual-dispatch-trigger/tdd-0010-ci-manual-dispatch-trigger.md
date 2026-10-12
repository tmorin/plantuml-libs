---
title: Manual dispatch trigger for the Continuous Integration workflow
status: implemented
owner: tmorin
date: 2026-10-11
type: tdd
run: 0010
wave: 002
related:
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/wav-002-pipeline-hardening-distribution-sync.md
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/run/run-0010-ci-manual-dispatch-trigger/run-0010-ci-manual-dispatch-trigger.md
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/run/run-0010-ci-manual-dispatch-trigger/pln-0010-ci-manual-dispatch-trigger.md
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/run/run-0010-ci-manual-dispatch-trigger/prg-0010-ci-manual-dispatch-trigger.md
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0002-ci-cd-minute-optimization/tdd-0002-ci-cd-minute-optimization.md
---

# Manual dispatch trigger for the Continuous Integration workflow

# Summary

wav-001's run-0002 narrowed `continuous-integration.yaml`'s `push` trigger to
`master` and tags. Since then, a feature branch with no open pull request
cannot be built in CI. This design adds a `workflow_dispatch` trigger so such a
branch can be built on demand.

The design also closes the one hazard the new trigger brings with it. The three
publish jobs (`GithubRelease`, `GithubPages`, `NpmPublication`) are gated only
on `startsWith(github.ref, 'refs/tags/')`, and a manual dispatch can be started
from a tag. Without a guard, a dispatch from a tag would publish.

# Scope

In scope:

- `.github/workflows/continuous-integration.yaml`: its `on:` block and the
  `Build` job's job-level condition.

Out of scope:

- Every other workflow file.
- The `push`/`tags`/`pull_request` triggers, the `concurrency` block and the
  three publish jobs, which stay byte-identical (`CON-1`).
- Release strategy and publish destinations (wave Non-Goals).

# PRD Traceability

**Traceability is incomplete. There is no PRD**, by design: the run uses the
`TDD+pln` profile. Requirements come from the wave manifest
(`wav-002-pipeline-hardening-distribution-sync.md`, run `W-3`) and the
orchestrator's dispatch brief. This document labels them `WR-n`. They are
sourced from those two documents, not invented, but they are not PRD IDs.

| ID | Requirement (source) | Addressed by |
|---|---|---|
| `WR-1` | `continuous-integration.yaml` declares `workflow_dispatch` alongside its existing triggers (wave P1 gate, W-3 scope) | `DEC-1`, `IMP-1` |
| `WR-2` | The existing `push`/`tags`/`pull_request` triggers keep their current behaviour. The publish jobs' tag-gating stays byte-identical (W-3 exit evidence, P1 gate) | `CON-1`, `DEC-3` |
| `WR-3` | The `concurrency` block is not altered (dispatch brief) | `CON-1` |
| `WR-4` | A manual dispatch cannot publish unintentionally (dispatch brief) | `DEC-2`, `IMP-1` |
| `WR-5` | A `workflow_dispatch` run completes `Build` (W-3 exit evidence) | `FLOW-1`. Observable only after merge to `master` (`ASM-3`), so it is not verifiable inside this run |

# Technical Goals

- `TG-1`: any branch that contains this change can be built from the
  Actions tab or with `gh workflow run`, with or without a pull request.
  GitHub runs the copy of the workflow file at the dispatched ref, so a
  branch cut before the merge gains the trigger only after it rebases onto,
  or merges, `master` (`ASM-5`).
- `TG-2`: no event the workflow accepts after the change can reach a publish
  job unless it is a `push` of a tag. Today a tag push is the only event that
  can.

# Non-Goals

- Dispatch inputs (e.g. "skip tests", "publish anyway"). See `DEC-1`.
- Re-running a release by manual dispatch. GitHub's "Re-run jobs" on the
  original tag-push run already covers that, and it keeps
  `github.event_name == 'push'`.
- Adding `actionlint` or any other workflow linter to the repository. wav-001
  deferred this as run-0002's `DEF-5`, and it stays deferred.

# Assumptions

All four were checked against GitHub's documentation during Stage 6 (2026-10-11).
How each was resolved is recorded in the prg's Findings.

- `ASM-1` (**verified**): a `workflow_dispatch` run can target a tag, and
  `GITHUB_REF` is then that tag. GitHub's events reference says that once a
  workflow has run, "Once a workflow has run at least once, you can dispatch
  it against any branch or tag via the GitHub API or GitHub CLI". It defines `GITHUB_REF` for this event as the
  "Branch or tag that received dispatch". The UI how-to only mentions a
  branch dropdown, but API and CLI are enough to make the hazard real.
- `ASM-2` (**verified**): when a job in `needs` is skipped, a dependent job is
  also skipped. The `jobs.<job_id>.needs` reference says that if a job fails
  or is skipped, all jobs that need it are skipped "unless the jobs use a
  conditional expression that causes the job to continue". The expressions
  reference says a default `success()` status check applies unless the
  condition calls a status function. The publish jobs' `if:` calls none
  (no `always()`), so it does not cause continuation.
- `ASM-3` (**verified**): the events reference says this event "will only
  trigger a workflow run if the workflow file exists on the default branch".
  `WR-5` is therefore first observable after this change merges to `master`.
- `ASM-4` (**verified, by absence**): the `workflow_dispatch` event is
  documented with only `inputs` and the dispatched `ref`. No
  `branches`/`tags` filter is documented, so the ref cannot be restricted at
  trigger level.
- `ASM-5` (**partly verified**): a dispatch runs the workflow file as it
  exists at the dispatched ref. The events reference defines `GITHUB_SHA` for
  this event as the "Last commit on the `GITHUB_REF` branch or tag". What
  GitHub does for a ref whose copy lacks `workflow_dispatch` is not in the
  documentation read in Stage 6. The commonly reported behaviour is an HTTP
  422 refusal. It is observed after merge (Deployment and Rollout), and
  nothing in this design depends on it.

# Constraints

- `CON-1`: the following must stay byte-identical: the `push` trigger
  (including its comment), the `pull_request` trigger, the `concurrency`
  block, and the three publish jobs in full. Verified by diff (`TG-2`/`WR-2`
  hinge on it).
- `CON-2`: GitHub Actions cannot be run locally in this environment, and this
  run must not push or trigger remote workflows. Verification is static:
  YAML parse, structural comparison against the baseline, and a truth table
  over the gating expressions.
- `CON-3`: house style for this file. Two-space indentation, `${{ }}`-wrapped
  expressions in `if:`, explanatory comments above non-obvious lines (as
  run-0002 did for `tags:`).

# Current State

`.github/workflows/continuous-integration.yaml` at `ca546685e9`:

- `on.push`: `branches: [ master ]`, `tags: [ '**' ]`. `on.pull_request`:
  unfiltered.
- `concurrency.group`: `${{ github.workflow }}-${{ github.event_name }}-${{ github.event.pull_request.number || github.ref }}`.
  `cancel-in-progress` is false only for tag refs.
- `Build` has no job-level `if:`. Nothing in its steps depends on
  `github.event_name` or `github.ref`.
- `GithubRelease`, `GithubPages` and `NpmPublication` each declare
  `needs: [ Build ]` and `if: ${{ startsWith(github.ref, 'refs/tags/') }}`.
  None of them references `github.event_name`.

Other workflows already use `workflow_dispatch`: `package-builder.yaml` (with
inputs) and `copilot-setup-steps.yml` (bare). So the trigger is an existing
pattern in this repository.

# Proposed Design

1. Append a bare `workflow_dispatch:` key to `on:`, after `pull_request:`,
   under a two-line comment pointing at the `Build` guard. The existing lines
   are untouched and the diff is pure addition.
2. Give `Build` a job-level guard, with a comment explaining it:

   ```yaml
   Build:
     name: "Build"
     # a manual dispatch from a tag would otherwise reach the tag-gated
     # publish jobs below, which all `need` Build. Any new publish job must
     # also `need` Build to inherit this guard.
     if: ${{ !(github.event_name == 'workflow_dispatch' && startsWith(github.ref, 'refs/tags/')) }}
   ```

   The guard skips `Build` for a dispatch from a tag, and only then. The
   publish jobs depend on `Build`, so `ASM-2` skips them too. Their own `if:`
   lines do not change.

3. **Both hunks ship in one change (one commit).** GitHub runs the workflow
   file at the dispatched ref (`ASM-5`). A copy of the file that has the
   trigger without the guard would therefore be an unguarded tag hazard for
   every tag created from it. That copy must never exist on any ref. The
   guard protects exactly the refs whose copy of the file carries the trigger.
   Tags created before this change carry neither, so a dispatch to them is
   refused rather than published (`ASM-5`).

The change is one file, two hunks, no new boundary and no non-trivial
branching beyond a single condition. The diagram triggers do not apply, so the
design stays textual. The truth table in `FLOW-2` replaces an activity
diagram.

- `DEC-1 — Bare trigger, no inputs`
  - `Decision:` `workflow_dispatch:` with no `inputs`.
  - `Rationale:` the need is "build this ref". The ref picker already supplies
    the only parameter. This matches `copilot-setup-steps.yml`.
  - `Alternatives considered:` inputs such as `skip-tests` or a `publish`
    toggle. Rejected. Nothing asks for them, and a `publish` input would
    re-open the exact hazard `DEC-2` closes.
  - `Tradeoffs:` none material.
  - `Linked PRD IDs:` `WR-1`.

- `DEC-2 — Guard the shared upstream job, not the publish jobs`
  - `Decision:` put the dispatch-from-tag guard on `Build` (job-level `if:`).
    The three publish jobs inherit the skip through `needs`.
  - `Rationale:` this is the cheapest placement that satisfies both `WR-4`
    and `CON-1` (alternative 3 also satisfies both, at a higher cost). The publish jobs' `if:` lines are frozen, so the hazard must be
    stopped upstream of them. All three already `need` `Build`, so one guard
    covers all three. A future fourth publish job that also `needs: [ Build ]`
    inherits it.
  - `Alternatives considered:`
    1. Add `&& github.event_name == 'push'` to each publish job's `if:`.
       Semantically the most direct. Rejected: it edits the three frozen
       lines, which breaks `CON-1` and the wave's "byte-identical" exit
       evidence.
    2. Accept the hazard and document it. Rejected. A dispatch on an older
       tag (one created after this change) checks out that tag. `GithubPages`
       would redeploy the *old* site over the current one, a rollback of the
       public documentation. `GithubRelease` (`allowUpdates: true`) would
       overwrite that old release's asset. `NpmPublication` would fail on the
       already-published version, leaving the run red after the damage.
    3. Put a failing guard *step* in `Build` instead of a job-level `if:`.
       Louder, because the run goes red with a message. Rejected: it spends a
       runner to report a refusal, and it adds a step to every normal run's
       log. A skipped run already shows plainly that nothing was built or
       published.
    4. Restrict `workflow_dispatch` to branches at trigger level. Not
       available (`ASM-4`).
  - `Tradeoffs:` `Build`'s definition changes even for events it does not
    affect. This is acceptable because the condition is a constant `true`
    for `push` and `pull_request` (`FLOW-2`). A tag-ref dispatch is silently
    skipped rather than refused with a message. The YAML comment is the
    explanation.
  - `Linked PRD IDs:` `WR-2`, `WR-4`.
  - `Status:` taken autonomously under `complete-run`'s autonomy override.
    The wave orchestrator then accepted it as a run-level decision on
    2026-10-11. **Flag for the wave report:** the wave text described `Build`
    as having no event-name condition. After this run it has one, by design.

- `DEC-3 — Pure-addition diff`
  - `Decision:` add new lines only. Do not reorder or reformat existing ones.
    `workflow_dispatch:` goes after `pull_request:`, and the `Build` guard
    goes after `name:`.
  - `Rationale:` additions only keep the diff small and reviewable. They do
    not by themselves prove `CON-1`: a line added inside a publish job is
    still an addition. `CON-1` is proven by verification check 2.
  - `Alternatives considered:` alphabetising the `on:` keys. Rejected as
    churn.
  - `Tradeoffs:` none.
  - `Linked PRD IDs:` `WR-2`, `WR-3`.

# Repository Impact

- `IMP-1 — CI workflow`
  - `Path(s):` `.github/workflows/continuous-integration.yaml`
  - `Change type:` additive. As implemented, 7 added lines and 0 removed:
    3 in `on:` (a 2-line comment and the trigger) and 4 in `Build` (a 3-line
    comment and the `if:`).
  - `Why impacted:` `WR-1`, `WR-4`.
  - `Linked PRD IDs:` `WR-1`..`WR-4`.
  - `Risks / notes:` this file gates real publishing (`RISK-1`). It is the
    only file this run touches outside its own run directory, and it is the
    run's whole `likely_paths`.

# Canonical Impact

Not applicable — no canonical registers declared (no `docs/CLAUDE.md`, no
`arc`/`dom` register in this repository).

# Data Model and Contracts

- `CTR-1 — Workflow trigger contract of continuous-integration.yaml`
  - `Current contract:` runs on a push to `master`, a push of any tag, and any
    `pull_request`.
  - `Proposed contract:` the same, plus manual dispatch on any ref. A
    dispatch on a branch runs `Build` only. A dispatch on a tag runs nothing.
  - `Affected files:` `.github/workflows/continuous-integration.yaml`.
  - `Migration or compatibility notes:` additive. Not visible in the Actions
    tab until the change is on `master` (`ASM-3`).
  - `Linked PRD IDs:` `WR-1`, `WR-4`.

No data, schema or API contract changes.

# Interfaces and Behavior

- `IF-1 — Manual trigger`: the "Run workflow" button on the Actions tab, or
  `gh workflow run "Continuous Integration" --ref <branch>`. No inputs.
- `IF-2 — Concurrency under dispatch` (unchanged block, new event value). The
  group becomes `Continuous Integration-workflow_dispatch-<ref>`. This group is
  distinct from the `push` and `pull_request` groups, so a dispatch never
  cancels, and is never cancelled by, a push or pull-request run. A second
  dispatch on the same branch cancels the first, because
  `cancel-in-progress` is true for branch refs.

# Flows and Processing Logic

- `FLOW-1 — Dispatch on a branch`
  - `Trigger:` `workflow_dispatch`, `github.ref = refs/heads/<b>`.
  - `Steps:` the `Build` guard evaluates to `true`. `Build` runs the same
    steps as for a push. The publish jobs' `if:` is `false`, so they are
    skipped.
  - `Branches / failure paths:` a failing `Build` step fails the run as it
    does today.
  - `Final output / rendered result:` the `artifacts` upload of
    `tmorin-plantuml-libs.zip`. Nothing is published.
  - `Linked PRD IDs:` `WR-1`, `WR-5`.

- `FLOW-2 — Gating truth table` (B = `Build` runs, P = publish jobs run)

  | Event | Ref | `Build` guard | B | P (trigger, no guard) | P (this design) |
  |---|---|---|---|---|---|
  | `push` | `refs/heads/master` | true | yes | no | no |
  | `push` | `refs/tags/vX` | true | yes | **yes** | **yes** |
  | `pull_request` | `refs/pull/N/merge` | true | yes | no | no |
  | `workflow_dispatch` | `refs/heads/<b>` | true | yes | no | no |
  | `workflow_dispatch` | `refs/tags/vX` | **false** | skipped | **yes (the hazard)** | **no** (skipped via `needs`) |

  The rows for existing events are unchanged. Only a tag push still
  publishes. "P (trigger, no guard)" is the counterfactual that justifies
  `DEC-2`. "Re-run jobs" on a tag-push run keeps `event_name == 'push'`, so
  re-releasing still works (Non-Goals).

# Reliability, Performance, and Scalability

No effect on existing runs. A dispatch costs one `Build` run, the same as a
push.

# Security and Privacy

A manual dispatch requires write access to the repository, the same people
who can already push a tag and publish. The guard is about preventing an
accident, not about separating privileges. No new secrets and no permission
changes: `Build` declares no `permissions`, as before.

# Observability and Verification

All checks are static (`CON-2`):

1. YAML parses (`python3` + PyYAML). The `on:` keys are exactly
   `push`, `pull_request` and `workflow_dispatch`. PyYAML is YAML 1.1 and
   loads the key `on` as boolean `True`, so it is looked up as `doc[True]`.
2. Structural comparison against the `ca546685e9` baseline. `on.push`,
   `on.pull_request`, `concurrency` and the three publish jobs are deep-equal.
   `Build` equals the baseline except for the added `if`.
3. `git diff -- .github/workflows/continuous-integration.yaml` removes no
   content lines. There is no `-` line apart from the `---` header.
4. Truth table (`FLOW-2`): the `Build` guard and the publish `if:` are
   modelled in Python and evaluated for each event/ref row. The model reads
   the expression strings from the parsed file and asserts they match the
   modelled text, so the model cannot drift from the file silently.
5. Negative test: the checker is run against mutated copies (guard removed,
   a publish `if:` altered, a `push` filter altered). It must fail.
6. `npm run lint` and `npm test` (wave P1 gate). These run on the shared
   working tree and do not read `.github/`, so they evidence the wave gate,
   not this change.

# Deployment and Rollout

Config-only change, delivered through the human's normal commit → PR → merge
flow. This document does not authorise a push. First real observation (`WR-5`):
after merge, dispatch on a non-`master` branch and confirm `Build` runs and
the publish jobs show as skipped. Optionally, also:

- dispatch on a tag created after the change and confirm every job is skipped;
- dispatch on a branch that predates the change and confirm it is refused
  (`ASM-5`).

Rollback: revert the commit.

# Risks and Tradeoffs

- `RISK-1`: an edit to this file could change the release path. Mitigated by
  `DEC-3` (additions only) and verification checks 2–5.
- `RISK-2`: the static truth table models GitHub's evaluator rather than
  running it. If `ASM-2` were wrong (a skipped `Build` not skipping its
  dependents), a tag dispatch would still publish. Mitigated by `ASM-2`'s
  documentary verification. The residual is GitHub's runtime disagreeing
  with its own documentation. The optional post-merge tag-dispatch
  observation in Deployment and Rollout retires that residual.
- `RISK-3`: a future publish job added without `needs: [ Build ]` would not
  inherit the guard. The guard's YAML comment states this rule.

# Open Questions

None open. The former `Q-1`, whether `ASM-1`..`ASM-4` hold, was resolved in
Stage 6 against docs.github.com (events-that-trigger-workflows,
workflow-syntax, expressions). All four hold. See Assumptions and the prg's
Findings.

# Deferred Work

- `DEF-1`: a workflow linter (`actionlint`) in the repository or in CI.
  Carried over from wav-001 run-0002's `DEF-5`. It is not needed for this
  change.

# File Placement and Frontmatter

Saved at
`docs/wav/wav-002-pipeline-hardening-distribution-sync/run/run-0010-ci-manual-dispatch-trigger/tdd-0010-ci-manual-dispatch-trigger.md`,
following wav-001's run-document naming (`type-NNNN-slug.md`). The frontmatter
carries `title`, `status`, `owner`, `date`, `type: tdd`, `run`, `wave` and
`related`.
