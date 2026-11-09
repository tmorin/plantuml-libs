---
type: prg
status: active
date: 2026-11-07
related:
  - docs/wav/wav-003-workdir-generation-hardening/wav-003-workdir-generation-hardening.md
wave: 003
---

# Progress Log: workdir-generation-hardening

## Log

- 2026-11-07: Wave drafted and proposed, following `write-wave`. No
  `docs/bkg/` or `docs/ana/` register exists, so scope is sourced from
  wav-002's `prg-002` "Left open" list, each item re-verified against the
  repository. Baseline measured before writing the gate: `npm run lint`
  clean; `npm test` 11 passing; `generate:workdir -w <scratch>` for all
  packages exits 0 (~1m49s); `generate:workdir -p aws` yields 27 families
  with 9 absent from `aws/families.csv`. `status: proposed`, awaiting human
  review before `complete-wave`.

- 2026-11-07: Plan amended on the human's instruction that a distribution
  render takes a long time and must be done by the associated GitHub Action.
  Added Phase P2 with W-4 (`distribution-regen-aws-on-ci`, `depends_on:
  [W-3]`), replacing the former open question; it dispatches
  `package-builder.yaml` once on branch `wave-003`, never a local render.
  Baseline for its gate measured on `e95e177e2b`: 0 of the 9 family
  stereotypes present in `distribution/aws/bootstrap.puml`. The plan records
  a Decision Prerequisite: the human's go to push `wave-003` and dispatch the
  workflow, to be copied here before `complete-wave` starts.
- 2026-11-07: **Standing authorisation recorded.** Asked in chat whether
  the wave may create and push branch `wave-003` and dispatch
  `package-builder.yaml` with `pkgName=aws` on it, at most twice, with
  nothing on `master`, no tag, no release and no other package. The human
  answered "Oui, dans ce périmètre". This covers exactly that scope and
  nothing wider. Plan gained an Autonomy Contract (branch first, local P1,
  single P2 dispatch, two-attempt failure policy, wave ends unmerged), so
  the wave can run end to end with no human step unless W-4 is blocked
  after its second attempt.
- 2026-11-07: On the human's "commit et push", branch `wave-003` was
  created from `master` (`e95e177e2b`) and the wave documents, the
  `.claude/run-management.yaml` repos map and a `CLAUDE.md` update were
  committed and pushed there, within the recorded authorisation (branch
  `wave-003` only, nothing on `master`). `complete-wave` resumes that branch.
- 2026-11-09: `.claude/run-management.yaml` set to `squash: none`. With
  `squash: run`, commit-run refuses a commit already on a remote
  (`start_point.py`, `on-remote`) and `segments` refuses a foreign author;
  there is no fallback, so the wave would stop `awaiting-commit` at W-4 (its
  interval holds the `package_builder` commit pushed by the Action) and at
  any P1 run reopened after `wave-003` is pushed. `none` keeps each run's
  commits in place, which keeps the wave unattended. Whether a refused squash
  should instead let the run finish is a plugin design question, raised with
  `claude-agents`, not decided.

## Findings

- The user's candidate list had a fifth item, correcting the stale text of
  wav-002's plan. Not made a run: see the plan's Non-Goals.

## Lessons Learnt

(none yet — execution has not started)
