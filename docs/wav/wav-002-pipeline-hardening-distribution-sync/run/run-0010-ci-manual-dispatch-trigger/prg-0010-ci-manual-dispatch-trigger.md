---
type: prg
status: completed
date: 2026-10-11
related:
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/run/run-0010-ci-manual-dispatch-trigger/tdd-0010-ci-manual-dispatch-trigger.md
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/run/run-0010-ci-manual-dispatch-trigger/pln-0010-ci-manual-dispatch-trigger.md
run: 0010
wave: 002
---

# Progress Log: ci-manual-dispatch-trigger

## Log

- 2026-10-11: Stage 0 — run directory and status file already created by the
  dispatching wave orchestrator; used as given (no number re-derivation).
  Document profile settled as **`TDD+pln`**. Scope arrives settled from the
  wave manifest's W-3 focus and exit evidence, so a prd would only transcribe
  it. The design has a live fork, which the TDD records: `workflow_dispatch`
  sets `github.ref` to whatever ref the dispatcher picks, tags included, and
  the three publish jobs gate only on `startsWith(github.ref, 'refs/tags/')`.
  A dispatch from a tag would therefore publish. Closing that hole without
  touching the publish jobs' frozen `if:` lines is a design choice with real
  alternatives. A pln is thin for one edit, but the profile rule says "go up,
  not down" when ambiguous, and the wave orchestrator reads a pln
  `execution_manifest.status`. Baseline: `HEAD` `ca546685e9`;
  `continuous-integration.yaml` clean against `HEAD` and snapshotted to the
  session scratchpad for later byte comparison. The working tree also holds
  sibling runs 0008/0009's uncommitted edits (`scripts/generate-package.sh`,
  `source/generator/workdir/*`, `source/templates/aws/`,
  `test/archive.spec.js`). Those belong to other runs and are not touched here.
- 2026-10-11: Stage 0 — this repository has no `docs/bkg/`, no
  `tooling/docs/check-backlog.py` and no canonical-impact registers. wav-001's
  runs hit the same gap and handled it the same way. Backlog admission,
  parked-expiry sweep and `check-backlog.py` therefore have nothing to
  discharge, and these steps are skipped deliberately, not faked. `TaskCreate`
  is not available in this session, so stage tracking lives in this Log alone.
- 2026-10-11: Stages 1-3 skipped by profile (`TDD+pln` has no prd). Stage 4:
  drafted `tdd-0010`, with requirements labelled `WR-1`..`WR-5` and sourced
  from the wave manifest and dispatch brief. Run status moved
  `proposed → designing`.
- 2026-10-11: Stage 6, run ahead of Stage 5 because the research was already
  in flight. `ASM-1`..`ASM-4` were dispatched as one `cheap`-tier lookup
  (`Explore`/haiku) against docs.github.com. The two load-bearing answers
  (`ASM-1` tag dispatch, `ASM-2` needs-skip propagation) were then re-fetched
  inline before relying on them. All four hold, and the former `Q-1` is
  closed (see Findings). Stage 5: the KDMLLC review of the TDD was dispatched
  at `standard` tier, after the Stage 6 edits so that it reviews the resolved
  text.
- 2026-10-11: Stage 8 drafted `pln-0010` (4 tasks, 1 parallel group, 1 gate)
  while the Stage 5 review was still running. Stage 9 reconciles the pln
  against the post-review TDD. Run status moved `designing → planned`. During
  drafting, `task-004` was changed from "local commit" to "hand-off without
  commit". The working tree is on `master` (the default branch) and shared
  with sibling runs 0008/0009. A branch switch would move `HEAD` under them,
  committing on `master` is not authorised, and the dispatch brief makes
  committing optional.

- 2026-10-11: Interruption. The harness forced a hand-back before Stage 5's
  review had returned, so a first report went to the orchestrator with the
  run at `planned` and nothing implemented. The orchestrator then resumed
  the run, accepted `DEC-2` as a run-level decision, and confirmed: no
  commit, no push.
- 2026-10-11: Stage 5 result applied. The KDMLLC review (`standard` tier)
  scored the TDD Acceptable and judged both `DEC-2` and the `FLOW-2` truth
  table correct. Its findings:
  - Two S2 findings. F1 was applied: the trigger and the guard must ship in
    one change, because GitHub runs the file at the dispatched ref, and
    `TG-1` was narrowed to branches that contain the change. F2 (the prg's
    Findings section was empty) had already been fixed by the time the
    review landed.
  - S1/S0 findings applied: F3 (`git diff` alone does not prove `CON-1`),
    F4 (the real worst case is an old-tag Pages rollback), F5 ("only
    placement" became "cheapest placement"), F6 (the guard comment now
    states the rule for future publish jobs), F7 (PyYAML `on` → `True`), F8
    (the diff check is worded mechanically), F9 (`FLOW-2` gains the
    counterfactual "trigger, no guard" column), F12 (new `ASM-5`, partly
    verified, plus a post-merge observation), F13 (full doc quote).
  - Two findings declined, with reasons:
    - F10, an allowlist guard (`startsWith(github.ref, 'refs/heads/')`).
      Today it is equivalent, and the orchestrator accepted `DEC-2` as
      written.
    - F11, slimming the verification. This is a `hard_judgment` run on the
      release workflow, and wav-001's lesson was that the mutation test is
      what turns a passing checker into evidence.
- 2026-10-11: Stage 7, the C scan of the TDD against its referents (no PRD;
  the wave W-3 entry and the dispatch brief):
  - Every `WR-1`..`WR-5` maps to a `DEC`/`IMP`/`FLOW`. `WR-5` is explicitly
    marked as not verifiable inside the run.
  - No assumption contradicts a requirement, and no open question remains.
  - One `C-ENV` item stays on the wave side and is reported, not edited:
    the wave text says `Build` has no event-name condition, and after
    `DEC-2` it has one. The wave files are not this run's to write.
- 2026-10-11: Stage 9, the pln C scan against the revised TDD and the
  repository:
  - `task-001` gained the single-change requirement (F1/`ASM-5`) and the
    extended comment (F6).
  - The diff criteria were reworded to match F8.
  - `task-004`'s verification no longer assumes `HEAD` stays at
    `ca546685e9`. Sibling runs committed `3a1424b4e9` and `40ad066a12`
    meanwhile, and neither touches the workflow file
    (`git diff ca546685e9 HEAD -- .github/workflows/continuous-integration.yaml`
    is empty, so the baseline stands).
  - No blocking gaps.
- 2026-10-11: Stage 10. Run status moved `planned → in-progress` and the pln
  moved to `in_progress` before `task-001`. Task routing:
  - `task-001`, `task-002` and `task-004` were done inline (`hard_judgment`).
  - `task-003` (tiered `cheap`) was also run inline rather than dispatched.
    That deviates from the Delegation Policy. It was two commands whose logs
    had to be read here anyway, and a dispatch would only have added a
    round-trip.
  - Results are in the pln's Execution Results.
- 2026-10-11: Stage 11. Every pln criterion was re-checked and holds (see
  the Verification Record), so pln `execution_manifest.status` is `done`
  and the run is `completed`.
  - Close-out steps that depend on registers this repository lacks
    (`docs/bkg/parked/` sweep, `check-backlog.py`) had nothing to discharge.
    Canonical impact: not applicable (TDD). No analysis was consumed.
  - Nothing was committed or pushed, on the orchestrator's instruction. The
    change is left uncommitted in the working tree.

## Verification Record

All checks were run against the post-change working tree on 2026-10-11.

| Check | Command | Result |
|---|---|---|
| Diff containment | `git diff -- .github/workflows/continuous-integration.yaml` | 7 lines added, 0 content lines removed. 2 hunks: `on:` and `Build` only |
| Byte-level containment | strip the 7 added lines, then compare to the `ca546685e9` copy | identical (`True`). The `HEAD` copy equals the baseline snapshot (`cmp`) |
| YAML validity + structure + gating | `python3 -I verify_ci.py ci.baseline.yaml .github/workflows/continuous-integration.yaml` (session scratchpad, not committed) | 28 checks, **0 failures**, exit 0 |
| Harness negative test | same script against the unchanged baseline and 7 mutated copies | baseline: 3 failures, exit 1. Guard removed: 1 failure. Guard inverted to `refs/heads/`: 1. Publish `if` widened: 2. Release `needs` removed: 2. Push `tags` filter changed: 2. Dispatch `inputs` added: 1. `cancel-in-progress` changed: 1. Every mutation exits 1 |
| Lint | `npm run lint` | exit **0** (also 0 before the change) |
| Tests | `npm test` | exit **0**, **11 passing** (8s) |
| Scope | `git status --porcelain` | this run changed only `.github/workflows/continuous-integration.yaml` and its own run directory. The other untracked entries are the orchestrator's wave files |

**Not established by this run:**

- That GitHub's evaluator agrees with the documented `needs`/`success()`
  rule (TDD `RISK-2`).
- That a real `workflow_dispatch` run completes `Build` (`WR-5`, the wave's
  W-3 exit evidence). GitHub only offers the event for a workflow file on
  the default branch, so this can **only be observed after the change
  reaches `master`**. The TDD's Deployment and Rollout section lists the
  post-merge observations.

`eslint` lints only JS/TS and mocha never reads `.github/`. The green
lint/test results therefore evidence the wave P1 gate on the current tree,
not this change.

## Findings

- **The hazard this run exists to close is real, and documented.** GitHub's
  events reference says that once a workflow has run at least once, "you can
  dispatch it against any branch or tag via the GitHub API or GitHub CLI".
  It defines `GITHUB_REF` for `workflow_dispatch` as the "Branch or tag that
  received dispatch"
  (<https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>).
  The three publish jobs gate only on `startsWith(github.ref, 'refs/tags/')`.
  So a bare `workflow_dispatch:` added with nothing else would have let
  `gh workflow run "Continuous Integration" --ref v18.2.0` re-run
  `GithubRelease` (with `allowUpdates: true`), `GithubPages` and
  `NpmPublication`. The UI how-to mentions only a branch dropdown, but API
  and CLI are enough.
- **Skip propagation (`ASM-2`), verified inline.** The workflow-syntax
  reference for `jobs.<job_id>.needs` says that if a job fails or is skipped,
  all jobs that need it are skipped "unless the jobs use a conditional
  expression that causes the job to continue". The expressions reference
  states the default `success()` status check. The publish jobs' `if:` has
  no status function, so a skipped `Build` skips all three.
- **Default-branch requirement (`ASM-3`).** "This event will only trigger a
  workflow run if the workflow file exists on the default branch." So the
  wave's W-3 exit evidence ("A `workflow_dispatch` run … completes `Build`")
  cannot be produced before merge to `master`. That bears on the wave gate,
  not only on this run.
- **No ref filter for `workflow_dispatch` (`ASM-4`).** Only `inputs` and the
  dispatched `ref` are documented, so restricting dispatch to branches at
  trigger level is not an option. This is why `DEC-2` puts the guard on a
  job.

- **The KDMLLC review caught a constraint the first draft missed: the
  trigger and the guard must ship in one commit (F1).** A dispatch runs
  whatever copy of the workflow file sits at the dispatched ref. A copy with
  `workflow_dispatch` but no `Build` guard would be a standing publish
  hazard for every tag later created from it. The same mechanism means tags
  created before this change cannot be dispatched at all. That narrows the
  real hazard to tags created after it, and makes the realistic worst case a
  rollback of GitHub Pages to an older release (F4), not merely npm going
  red.
- **Wave-level: W-3's exit evidence is post-merge only.** "A
  `workflow_dispatch` run of `continuous-integration.yaml` completes
  `Build`" cannot be produced by any run that does not merge to `master`.
  The P1 gate's own criterion (the trigger is declared, existing behaviour
  unchanged) is static and holds.
- **Wave-level: the wave text's description of `Build` is now stale.** The
  wave said `Build` has no event-name condition. After `DEC-2` it has one,
  by design and accepted by the orchestrator.

## Lessons Learnt

- A trigger that is "purely additive" in the `on:` block is not additive in
  effect when existing jobs gate on `github.ref` alone. An event that lets a
  human choose the ref widens every ref-gated job to that event. Before
  adding any trigger to a workflow with publish jobs, check which of those
  jobs' conditions the new event can satisfy, and where they gate, not only
  whether the triggers diff cleanly.
- When a release-gating line is frozen, guard the shared upstream job
  instead. `needs` propagates a skip to every dependent, so one condition
  on `Build` covers all publish jobs without touching any of them.

