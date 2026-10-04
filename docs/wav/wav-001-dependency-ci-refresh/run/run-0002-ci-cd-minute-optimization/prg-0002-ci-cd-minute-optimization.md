---
type: prg
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0002-ci-cd-minute-optimization/tdd-0002-ci-cd-minute-optimization.md
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0002-ci-cd-minute-optimization/pln-0002-ci-cd-minute-optimization.md
run: 0002
wave: 001
---

# Progress Log: ci-cd-minute-optimization

## Log

- 2026-10-04: Stage 0 — run directory and status file were already created by
  the dispatching wave skill; used as given (no number re-derivation).
  Settled the document profile as **`TDD+pln`**: scope arrives settled from
  the wave manifest's W-2 focus and exit evidence (so a prd would only
  transcribe it), while the design carries a live fork (how to remove the
  duplicate `Build` run — trigger-level avoidance vs. concurrency-level
  cancellation) and the work is more than one sequence (edit, then several
  independent verification angles). Created this prg.
- 2026-10-04: Stage 0 — recorded that this repository has no `docs/bkg/`, no
  `docs/CLAUDE.md` register declaration and no `tooling/docs/check-backlog.py`.
  The `manage-runs`/`complete-run` steps that depend on them (backlog
  admission test, `docs/bkg/parked/` expiry sweep, `check-backlog.py` exit-0
  check, canonical impact registers) therefore have nothing to discharge in
  this run and were skipped deliberately rather than faked. Deferred ideas are
  recorded in this prg and in the TDD instead of in a register that does not
  exist.

- 2026-10-04: Stages 1-3 skipped by profile (`TDD+pln` has no prd). Stage 4 —
  drafted `tdd-0002-ci-cd-minute-optimization.md`; run status advanced
  `proposed → designing`. Stage 5 — dispatched the KDMLLC review of the TDD to
  a `standard`-tier `general-purpose` subagent (per the Delegation Policy),
  asking for the structured findings only.
- 2026-10-04: Stage 6 — resolved the TDD's `Q-2` (required status checks)
  against the live repository with the authenticated `gh` CLI rather than
  leaving it as an assumption, and recorded a pre-change baseline at
  `5ec73b75a6` with a clean working tree: `npm run lint` exit 0, `npm test`
  exit 0 (5 passing, 38s). `Q-1` was resolved during drafting from the wave's
  own exit evidence. `actionlint` was initially carried as an open question and
  was demoted to `DEF-5` instead: it is a standing-tooling decision for the
  repository, not a question this run needs answered to proceed.

- 2026-10-04: Stage 5 result applied. The KDMLLC review returned 22 findings
  (two S3, nine S2, eleven S1/S0). All S2-and-above were applied, plus most
  S1s, in a full rewrite of the TDD: a per-file verification assertion table
  replacing a single list that only held for `continuous-integration.yaml`
  (S3); literal `concurrency` YAML for the other two files, which had been
  left to the executing agent to invent (S3); a present-tense fix to `RISK-1`,
  which claimed the edit had already happened; collapsing four repeated rules
  to one owner each (`CON-3` for registers, `CON-4` for "no push", `DEC-1` for
  the "every push" narrowing, `DEF-5` for `actionlint`); deleting `TG-4` as a
  constraint masquerading as a goal; and repairing nested-backtick labels that
  broke the Markdown of every `DEC`/`RISK`/`Q`/`DEF` heading. Two findings
  were declined with reasons: the post-diagram reviewer note was tightened
  rather than deleted (`write-technical-design-document`'s diagram policy
  requires a 2-4 line note under each diagram), and `IMP-4` was folded into
  the Repository Impact preamble rather than dropped, because "this run writes
  outside its wave `likely_paths`" is load-bearing for the wave's
  concurrency-safety reasoning.
- 2026-10-04: Stage 7 — own consistency pass over the TDD against the wave and
  the repository, run before the pln. It caught a design error the review had
  not: the draft mirrored `tags: [ '**' ]` onto `copilot-setup-steps.yml`,
  which would have made a setup-validation job run on **every release tag** —
  the exact opposite of this run's purpose. Fixed by `DEC-6`: a `tags:` filter
  belongs only to the one workflow that has release jobs. The review had
  independently flagged the same lines as unjustified (its F13/F15) and
  proposed keeping `tags:` for behaviour preservation; `DEC-6` resolves it the
  other way and says why.
- 2026-10-04: Stage 8 — drafted `pln-0002-ci-cd-minute-optimization.md`
  (8 tasks, 2 parallel groups, 2 gates) and advanced the run status
  `designing → planned`. Stage 9 — re-checked the pln against the revised TDD
  and the repository; corrected three task acceptance criteria that still
  assumed the pre-`DEC-6` design, and extended the verification script to
  assert the new per-file expectations.

- 2026-10-04: Stage 10 — executed. `task-001`
  (`continuous-integration.yaml`, the publishing workflow) was implemented
  **inline**, never delegated, per the Delegation Policy's safety rule for a
  `hard_judgment` / `risk: critical` task. `task-002` and `task-003` were
  dispatched concurrently as `parallel-group-001` to two `standard`-tier
  `general-purpose` subagents, one file each, and their output was verified
  from `git diff` directly rather than from their reports. `task-006` was
  dispatched at `cheap` tier (`haiku`) with its logs written to files, and the
  logs — not the subagent's summary — were read back here. `task-004` and
  `task-005` stayed inline: they look mechanical, but they are the only
  evidence standing in for an end-to-end test of a release trigger.
- 2026-10-04: Stage 11 — verification complete, with results recorded below.
  The `manage-runs` close-out steps that depend on registers this repository
  does not have (the `docs/bkg/parked/` expiry sweep and
  `python3 tooling/docs/check-backlog.py` exiting 0) had nothing to
  discharge and were skipped, as flagged in the Stage 0 entry. Canonical
  impact was answered in the TDD — `CI-arc-1` and `CI-dom-1` are both
  **None**, with `CON-3` as the reason — so there is no register edit to
  make. No analysis document was consumed by this run; `docs/` contains no
  `ana-*` file.

- 2026-10-04: Run closed. `task-008` committed the three workflow files and
  this run's four documents as `c345a1bd8f` on
  `chore/upgrade-deps-and-ci-wave`, staging explicit paths only —
  `package.json` and `package-lock.json` were left unstaged because they
  belong to wave run W-1, and the wave-level `wav`/`wbc`/`prg-001` files and
  run-0001's directory were left untouched because they are
  orchestrator-owned. The branch was **not** pushed and no pull request was
  opened: `gate-002` is the human's, and `complete-run`'s autonomy override
  does not cover an explicit dispatch instruction. Document `status`
  frontmatter was set to `implemented` (tdd) and `completed` (pln, prg, run);
  this repository declares no document lifecycle, so the authoritative
  statuses are this run's status file and the pln's
  `execution_manifest.status`, both of which now read done/completed.

## Verification Record

Every check below was run against the post-change tree. Commands and real
results, including what each one cannot establish:

| Check | Command | Result |
|---|---|---|
| YAML validity | `python3 -c "import yaml …"` over all four workflow files | All four parse; each exposes `name`, `True` (the YAML 1.1 spelling of `on`), `concurrency` where expected, `jobs` |
| Trigger semantics | `python3 verify-workflows.py` (scratchpad, not committed) | **38 checks, 0 failures**, exit 0 |
| Harness negative test | same script against two mutated copies | tags filter removed → **3 failures**, exit 1; `GithubPages` `needs`/`if` tampered → **2 failures**, exit 1 |
| Diff containment | `git diff -- .github/workflows/` read in full | `continuous-integration.yaml`: 1 line removed, 13 added, **all above `jobs:`**; `codeql-analysis.yml`: +4; `copilot-setup-steps.yml`: +5. No release-job line changed |
| Lint | `npm run lint` | exit **0** (baseline: 0) |
| Tests | `npm test` | exit **0**, **5 passing** (57s); baseline 5 passing (38s) |
| Scope | `git status --porcelain` | the three workflow files, this run's `docs/` directory — plus `package.json` / `package-lock.json`, which belong to wave run W-1 and were deliberately not staged |

What the verification does **not** establish (`RISK-5`): that GitHub's trigger
evaluator agrees with the documented rules these assertions encode. No
end-to-end check is possible inside this run (`CON-4`), so `FLOW-1`/`FLOW-2`
are first observed on the human's pull request — which, per the merge-commit
finding below, will run under the *new* triggers — and `FLOW-3` at the next
real release.

One nuance on the lint/test result: `node_modules/.package-lock.json` and
`package-lock.json` share a timestamp of 14:54:17, i.e. W-1 had already
installed its upgraded dependency set before these commands ran at
14:57-14:58. So the green suite was measured on W-1's dependencies, not on
`5ec73b75a6`'s. That makes it *weak positive* evidence for W-1 and **no**
evidence about this run's change in isolation — the isolation argument for
this run is instead that its entire diff lies in `.github/workflows/`, which
neither `eslint .` nor mocha reads.

## Findings

- GitHub's own documentation states the rule that makes this run risky: "If
  you define only `tags`/`tags-ignore` or only `branches`/`branches-ignore`,
  the workflow won't run for the undefined ref type." Adding a `branches:`
  filter to the `push` trigger of `continuous-integration.yaml` without also
  adding a `tags:` filter would have silently stopped every release — the
  exact failure mode the wave flagged as W-2's reason for `hard_judgment`.
  Verified at
  <https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows>.
- `concurrency.cancel-in-progress` accepts an expression, and concurrency
  expressions may use only the `github`, `inputs` and `vars` contexts
  (GitHub workflow-syntax reference). This is what makes it possible to
  cancel superseded branch/PR runs while never cancelling a tag run.
- All 81 existing tags are flat and `v`-prefixed (`git tag --list | wc -l` →
  81, `grep -cv '^v'` → 0, `grep -c '/'` → 0), so `tags: [ 'v*' ]` would have
  covered today's releases — but `tags: [ '**' ]` was chosen instead because it is a
  strict superset of the current "every tag triggers" behaviour and therefore
  cannot miss a release tag shaped differently in the future.
- **The defect is measured, not inferred.** The last 100 `Continuous
  Integration` runs (`gh api
  repos/tmorin/plantuml-libs/actions/workflows/7129769/runs?per_page=100`)
  cover only **67 distinct commits**: 33 of the 100 runs were a repeat run of
  a commit already being built, and for **25 commits** the repeat was exactly
  the `push` + `pull_request` pair this change eliminates. Event breakdown of
  the sample: 70 `push`, 29 `pull_request`, 1 `workflow_dispatch`. That is the
  size of the win, from the repository's own history rather than from an
  estimate.
- The same sample confirms the release path's shape empirically: tag runs
  appear as `event: push` with `head_branch` set to the tag (`v18.2.0`,
  `v18.1.4`, `v18.1.3`, …), so releases really do arrive through the `push`
  trigger on a tag ref — which is what makes `DEC-3`'s explicit `tags:` filter
  the single load-bearing line of this run.
- One historical tag run (`d2c8c703`, `v18.1.3`) has conclusion `cancelled`,
  and two others `failure`. A cancelled *release* run is precisely the
  `RISK-2` failure mode, and it has already happened once in this repository
  without any `concurrency` block being involved. It is the strongest
  argument for `DEC-4`: now that cancellation becomes automatic for branch
  refs, excluding tag refs from it is not hypothetical caution.
- A `pull_request` run uses the workflow file **from the merge commit**, not
  from the default branch. Verified from GitHub's `pull_request_target`
  reference, which states that event "runs in the context of the default
  branch of the base repository, rather than in the context of the merge
  commit, as the `pull_request` event does." The draft TDD had asserted the
  opposite; the KDMLLC review challenged it and was right. This materially
  improves the rollout: the human's own pull request will exercise the new
  triggers and `concurrency` on itself, so `FLOW-1`/`FLOW-2` get a real
  observation before anything merges.
- Whether GitHub evaluates a `paths:` filter for a **tag** push could not be
  settled from its documentation — the events reference describes `paths` in
  terms of changed files but states no rule for refs with no diff. Left open
  as the TDD's `Q-3` and deliberately removed from the critical path: `DEC-6`
  is argued to hold under either answer. Recorded because the first draft
  leaned on the unverified reading.
- `master` has **no branch protection and no rulesets**: `gh api
  repos/tmorin/plantuml-libs/branches/master` → `"protected": false`,
  `required_status_checks.enforcement_level: "off"`, empty `checks` and
  `contexts`; `gh api repos/tmorin/plantuml-libs/rulesets` → `[]`. This
  resolved the TDD's `Q-2`, retired `RISK-3`, and removed `DEF-1`'s blocker.
  Both calls were read-only; nothing in the repository's settings was
  touched. Worth knowing for the wave: no CI change in this repository can
  currently stall a merge, because no check is required.
- `origin/v1.x` (last commit 2020-11-05) and `origin/v3.x` (2021-05-11) are
  dormant; `origin/gh-pages` is machine-written. None of them justify being
  added to the `push` branch filter alongside `master`.
- Pushes made by `peaceiris/actions-gh-pages` and `ad-m/github-push-action`
  authenticate with `GITHUB_TOKEN`, and GitHub does not create workflow runs
  from `GITHUB_TOKEN`-authored pushes. So the `gh-pages` deploy push and the
  `package-builder` commit push do **not** trigger `Continuous Integration`
  today, and the branch filter removes no run there. Recorded explicitly
  because it is tempting to claim that saving.

- **Wave-level, for the orchestrator:** W-1 and W-2 were dispatched as one
  batch on the grounds of disjoint `likely_paths`, and they *are* disjoint —
  but they share one working tree (`git worktree list` shows a single
  checkout at `/home/tibo/git-perso/plantuml-libs`). Partway through this run,
  `git status` showed `package.json` and `package-lock.json` modified by W-1.
  Disjoint paths make the *edits* safe; they do not make *verification* safe,
  because this run's wave-gate checks (`npm run lint`, `npm test`) read
  exactly the files W-1 is rewriting. Every result this run reports for those
  two commands is therefore a measurement of the shared tree, not of this
  run's change in isolation. The isolation that would have fixed it already
  exists in the toolkit — `manage-worktrees` / `EnterWorktree` — and the
  concurrency-safety test in `write-wave` could usefully consider
  "do these runs share a verification surface?" alongside "do they share a
  path?".

## Lessons Learnt

- A `push` trigger that is tightened for minute economy and a `push` trigger
  that gates a release are the same trigger. The useful invariant is "the
  release path is a separate, explicitly named ref filter", not "be careful" —
  `tags: [ '**' ]` plus `cancel-in-progress` disabled on tag refs makes the
  release path independent of whatever the branch filter later becomes.
- When a run's only verification is static, the harness itself needs a
  negative test, or "38 checks, 0 failures" means nothing. Running the script
  against two deliberately broken copies of the workflows (tags filter
  removed → 3 failures; a release job's `needs`/`if` tampered → 2 failures)
  cost two minutes and is what makes the passing run evidence rather than
  decoration. Any future run that substitutes a self-written checker for a
  real test should budget for the mutation.
- Symmetry across config files is a cost, not a virtue, when the files differ
  in purpose. Mirroring `tags: [ '**' ]` onto every workflow "for
  consistency" would have added a job to every release; the right shape was
  to give the filter only to the one workflow whose jobs need it, and to say
  why in the file itself. The first draft made exactly this mistake and the
  Stage 7 consistency pass caught it — which is an argument for keeping that
  pass even when the diff is twelve lines.
