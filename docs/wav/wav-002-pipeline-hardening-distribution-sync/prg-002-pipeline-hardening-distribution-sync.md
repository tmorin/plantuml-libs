---
type: prg
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/wav-002-pipeline-hardening-distribution-sync.md
wave: 002
---

# Progress Log: Pipeline Hardening & Distribution Sync

## Log

- 2026-10-04: Wave drafted and proposed, following `/run-management:write-wave`.
  Checked for a `docs/bkg/` and `docs/ana/` register per the skill's step 0 —
  neither exists in this repository. Sourced this wave's scope instead from
  wav-001's own `prg-001` Findings/Lessons Learnt, re-verifying each claim
  directly against the current repository state today rather than trusting
  the prior log: confirmed `source/templates/aws/examples/` does not exist
  (two declared AWS examples reference missing `.tera` templates),
  confirmed `archive.ts`'s `download()` has no response-status check,
  confirmed `continuous-integration.yaml` still has no `workflow_dispatch`
  trigger, confirmed `doc/howto.upgrade-aws-package.md` still describes the
  abandoned versioned-folder-rename architecture, and confirmed via the
  `Build` job's own steps that `distribution/` is zipped as committed, not
  regenerated, so wav-001's deliberately-stale `distribution/aws`,
  `distribution/fontawesome`, and `distribution/simpleicons` would ship
  as-is on the next tag. `status: proposed`, awaiting human review before
  `complete-wave` dispatches Phase P1.
- 2026-10-11: `complete-wave` started on the human's go. Read the plan and
  the runs' statuses: no run existed yet, so Batch 1 = every Phase P1 run
  (W-1, W-2, W-3; no `depends_on`). Created run directories under
  `docs/wav/wav-002-pipeline-hardening-distribution-sync/run/`: run-0008
  (W-1 `aws-example-templates-fix`), run-0009 (W-2
  `generator-pipeline-robustness`), run-0010 (W-3
  `ci-manual-dispatch-trigger`); numbers written back into the manifest and
  the plan set to `active`. Overlap re-check: `likely_paths` of the three
  are disjoint (aws package/templates/how-to vs `source/generator/workdir/**`
  + `scripts/generate-package.sh` vs `continuous-integration.yaml`), and the
  plan records **concurrent-safe** — dispatching concurrently.
- 2026-10-11: **Dispatching Batch 1** (written before dispatch): 3 runs,
  3 concurrent. W-1/run-0008 `standard` (run-executor, default model),
  W-2/run-0009 `standard` (run-executor, default model), W-3/run-0010
  `hard_judgment` (run-executor, `model: opus` — live CI/release workflow).
  Total wave: 6 runs, 1 `hard_judgment`.
- 2026-10-11: Batch 1 partial results, verified from disk (not from reports).
  **run-0009 (W-2)**: status file `completed`, commit `3a1424b4e9` matches the
  report (archive.ts guard + `.part` rename, `index.ts` sets
  `process.exitCode = 1`, `--user` in `generate-package.sh`, new
  `test/archive.spec.js`). **run-0008 (W-1)**: status file `completed`,
  commit `40ad066a12`; both `.tera` examples exist under
  `source/templates/aws/examples/` and all 11 `aws/...` includes were
  grep-resolved against the generated library. **run-0010 (W-3)** stopped
  mechanically twice at `planned` (TDD + pln drafted, workflow file still
  byte-identical); re-dispatched to the same `run-executor` (opus) to
  implement, and told not to commit or push.
- 2026-10-11: **Batch 1 closed.** run-0010 (W-3) re-dispatched and verified
  from disk: status file, prg and pln all `completed`/`done`; the workflow
  diff is 7 added lines, 0 removed, in two hunks (a `workflow_dispatch:`
  trigger, and an `if:` guard on `Build`); a YAML parse shows `on:` keys
  `push`, `pull_request`, `workflow_dispatch`. The change is **uncommitted**
  by design (see Findings). Collision check: no reported file outside any
  run's `likely_paths` falls inside another's, except run-0009's new
  `test/archive.spec.js` (declared by nobody, touched by nobody else), so
  the plan's **concurrent-safe** P1 verdict held. One caveat: run-0008
  reported that siblings rewrote the shared `.workdir/library.yaml` mid-run
  (aws→eip); I re-ran the aws discovery into a scratch dir myself and
  confirmed 11/11 `aws/...` includes of the two example templates resolve.
- 2026-10-11: **P1 gate verified**, against real evidence: `npm run lint`
  exit 0; `npm test` 11 passing; `source/templates/aws/examples/` holds
  `chef_automate_architecture_on_aws.tera` and `git_to_s_3_webhooks.tera`,
  matching the two examples declared in `aws/index.ts` (read, includes
  resolved above); `archive.ts` `download()` rejects non-ok / missing / empty
  bodies (read in commit `3a1424b4e9`, plus 6 new tests in
  `test/archive.spec.js`); `continuous-integration.yaml` has
  `workflow_dispatch` with push/tags/pull_request/concurrency and the three
  publish jobs unchanged (diff read). Canonical discharge: runs 0008/0009 are
  `single-document` and answer "none, with reason" in their own bodies
  (no `docs/arc`/`docs/dom` registers exist); run-0010 (`TDD+pln`) records
  its Canonical Impact in its TDD. Not read by me: run-0010's TDD section
  itself, which I took from its status/pln and diff only.
- 2026-10-11: **Escalation — Phase P2 not started.** W-4/W-5/W-6 regenerate
  `distribution/` on CI through `package-builder.yaml`, which checks out and
  builds the *remote* ref. Everything P1 produced is local-only: run-0008 and
  run-0009 are two unpushed commits on `master`, run-0010's edit is
  uncommitted. Starting P2 needs outward-facing actions that no human has
  authorised in this session: commit run-0010's change, push, trigger
  `workflow_dispatch` three times, and commit the downloaded artifacts. Left
  for the human; the P2 batch (W-5, W-6 now runnable; W-4 too, since W-1 and
  W-2 are `completed`) is otherwise ready. See the final report.
- 2026-10-11: The human authorised the escalated actions ("crée la branche
  wave-002 et pousse", then "fini toute la vague, tu es autonome"). Created
  branch `wave-002` (commits `40ad066a12`, `3a1424b4e9`, `8a029a81a1`,
  `4c44a26aa3`), pushed it, and reset local `master` to `origin/master`.
  P1 is closed; the run-0010 change is now committed together with its
  guard. Authority granted covers branch `wave-002` only: no push to
  `master`, no tags. Batch 2 = every P2 run (W-4, W-5, W-6; W-1 and W-2
  are `completed`). Created run-0011 (W-4 `distribution-regen-aws`),
  run-0012 (W-5 `distribution-regen-fontawesome`), run-0013 (W-6
  `distribution-regen-simpleicons`). Overlap re-check: all three declare
  `distribution/bootstrap.puml` and `distribution/README.md`; the plan's
  verdict is **concurrent-safe** on the condition that each run restores those
  two files with `git checkout --` and commits only its own
  `distribution/<pkg>/**` paths. That condition is written into each brief,
  together with the extra shared-tree hazards (git index lock, non-fast-forward
  push) — each run retries a locked index and rebases before pushing.
- 2026-10-11: **Dispatching Batch 2** (written before dispatch): 3 runs,
  3 concurrent, all `standard` (run-executor, default model); the CI builds
  they trigger run on separate GitHub runners. Wave total after this batch:
  6 runs, 1 `hard_judgment`.
- 2026-10-11: **Phase P2 cancelled by the human.** After Batch 2 was
  dispatched, the human said "Stop", then "Ne rebuild pas les packages c'est
  un non sens". All three `run-executor`s were stopped; the three
  `package-builder.yaml` runs they had already dispatched on `wave-002`
  (GitHub run ids 38170752167, 38170761827, 38170765904) were cancelled
  (confirmed `cancelled`). Nothing from P2 was committed or pushed. run-0011,
  run-0012, run-0013 set to `cancelled` (terminal; nothing depends on them).
  The P2 gate was never reached. Wave closed `completed` **with exceptions**
  (Completion Criteria): the distribution content for AWS, Font Awesome and
  Simple Icons is still stale relative to their pins, by decision.
- 2026-10-11: **P2 reinstated by the human.** Clarified in chat: "Tant que
  ça build sur GH c'est ok" — rebuilding on GitHub CI is acceptable; what is
  still off the table is a local Podman rebuild. The cancellation entry above
  is superseded: run-0011/0012/0013 reset to `proposed`, wave plan, business
  case and progress log reset to their live statuses. The previous Batch 2
  attempt produced nothing (agents stopped, its three CI runs cancelled, no
  commit). **Re-dispatching Batch 2** (written before dispatch): same 3
  runs, 3 concurrent, all `standard`, same constraints as before (branch
  `wave-002` only, CI builds only, no local Podman, no `master`, no tags).
- 2026-10-11: **Batch 2 mid-flight finding (plan assumption wrong).** The
  plan's concurrent-safe verdict for W-4/5/6 assumed each run downloads the
  CI artifact and commits it itself. `package-builder.yaml` has a third job,
  `push-distribution`, that already does this: it deletes `distribution/`,
  restores the run's own artifact (which still holds the pre-wave content of
  the other two packages), `git add -A`, commits and pushes to the dispatched
  ref. Three concurrent dispatches on `wave-002` can therefore revert each
  other's directories (last push wins) or be rejected as non-fast-forward,
  and can carry `bootstrap.puml`/`README.md` changes. The three CI runs
  (38171216203 fontawesome, 38171235194 aws, 38171487545 simpleicons) were
  already in flight, so rather than cancel ~15 min of builds I issued one
  coordination protocol to the three executors: no manual push while any of
  the three CI runs is running; after all finish, each compares the pushed
  tip's `distribution/<pkg>` with its own artifact and commits a corrective
  restore only if they differ; `bootstrap.puml`/`README.md` are checked
  against baseline and fixed once, idempotently. Final state is verified on
  the pushed tip. The plan's Risks section is stale on this point and the
  fix (serialize, or drop the manual commit step from the briefs) belongs in
  a plan edit via `write-wave`.
- 2026-10-11: **run-0011 (W-4, aws) blocked.** CI run 38171235194 failed
  in "Render Atomic Templates (Other)" (`render_atomic_other_task_3680`):
  `source/library/packages/aws/groups.csv` line 16 still references
  `aws/Architecture/AppIntegration/AwsStepFunctions`, which the Q3 2026
  snapshot renames `ApplicationIntegration`. A stale leftover of the
  `aws-q3-2025`→`aws` rename (66f2b51d85), the same family of defect W-1 was
  meant to close. `push-distribution` was skipped, nothing pushed, no
  artifact; the run's status stays `in-progress` with T2–T5 blocked. Not
  transient, so no re-dispatch. The two restored example templates are still
  unconfirmed (the pool aborted on the first failing unit). Decision, within
  the plan's own scope: W-1's focus is "AWS renders without aborting the
  Other-templates phase", so the fix is a reopening of run-0008, not a new
  run. Reopened run-0008 (`standard`, same `run-executor`): fix the reference,
  statically verify every `aws/...` URN used by the package's CSVs, templates
  and `index.ts` against a scratch-dir `generate:workdir`, assess the renamed
  categories vs `families.csv`, commit locally on `wave-002`, **no push**
  until the fontawesome/simpleicons CI pushes have settled (a push now would
  make their `push-distribution` jobs reject). Afterwards W-4 will be
  re-dispatched once (aws only). This is also a gap in P1's gate: it checked
  that the example templates exist, never a full render, which the repo's rules
  bar locally.
- 2026-10-12: **Batch 2 closed; P2 verified from the pushed tip.** All six
  runs read `completed` in their own status files. Pushed `origin/wave-002`
  (tip `f81ff0ae56` at verification): `distribution/aws` regenerated by CI
  commit `023c9bff15` (CI run 38177248104, second dispatch; 9851 files vs
  10019 before; the four new example outputs
  `chef_automate_architecture_on_aws.{puml,png}` and
  `git_to_s3_webhooks.{puml,png}` exist), `distribution/simpleicons` by CI
  commit `86889ca04e` (run 38171487545; 20411→20813 files),
  `distribution/fontawesome` by run-0012's manual commit `9ea73d9963` (CI
  run 38171216203 generated fine but its `push-distribution` was rejected
  non-fast-forward after simpleicons pushed first). `git diff --name-only
  90dffcc146 HEAD -- distribution` touches only `aws`, `fontawesome`,
  `simpleicons`; `distribution/bootstrap.puml` and `distribution/README.md`
  are unchanged against the pre-wave baseline. `npm run lint` clean and
  `npm test` 11 passing on the final tree. The P2 gate has no authored
  criteria; its canonical discharge: the three runs are `single-document`
  and record "none, with a reason" (no `docs/arc`/`docs/dom` registers).
- 2026-10-12: **Batch collision check, Batch 2.** The plan's concurrent-safe
  verdict held for the files the runs declared (no run's local edit hit
  another's), but the *workflow's own* `push-distribution` job was a collision
  channel the plan did not model: simultaneous dispatches raced to push, one
  was rejected, no sibling directory was reverted, and the end state was
  checked on the pushed tip. Out-of-path touches reported: run-0008's reopening
  edited `source/library/packages/aws/groups.csv` (outside its original
  `likely_paths`; same package); run-0012's `git pull --rebase` + push also
  published sibling runs' unpushed local commits (docs and the `groups.csv`
  fix). Clean otherwise.
- 2026-10-12: **Wave closed.** Plan, business case and this log set to
  `completed`. Nothing was run locally under Podman; every package render
  happened on GitHub CI.

## Findings

- **Plan premise wrong (W-1):** the plan assumed the two AWS example
  templates could not be authored. Both were recoverable from git history
  (`30cc46e53f`) and had been deleted by the `aws-q3-2025`→`aws` rename
  commit `66f2b51d85`. run-0008 restored them. One include
  (`SecurityIdentityCompliance/AwsIdentityAccessManagementAddOn`) no longer
  exists in the Q3 2026 catalog and was swapped for `AwsKeyManagementService`.
  Whether the examples render end to end is unverified until W-4's CI run.
- **`workflow_dispatch` alone would have been a publishing hole (W-3):** the
  publish jobs gate only on `startsWith(github.ref, 'refs/tags/')`, and
  GitHub can dispatch a workflow against a tag. run-0010 added a guard on
  `Build` (`DEC-2`), so the plan's statement that `Build` has no event-name
  condition is now stale. The trigger and the guard must land in the same
  commit. W-3's exit evidence ("a dispatch completes `Build`") is only
  observable after the change is on `master`.
- **Gaps left by W-2:** `extractArchive` skips extraction when the dest dir
  exists, so a partial extraction is trusted next run; a 200 with a non-zip
  body is cached and fails only at extraction.
- **Gap found by W-1:** `generate:workdir` does not check that declared
  example templates exist — the check that would have caught the rename
  breakage. `scripts/resolve-aws-icons.mjs` still emits a
  `newVersion: aws-qN-YYYY` label from the abandoned versioned-folder scheme,
  and its live result (`Icon-package_01302026`) differs from the pinned
  `07312026`.
- **Shared `.workdir/library.yaml` is clobbered by concurrent runs**, again
  (wav-001 lesson): runs needing a particular package's workdir should pass
  `generate:workdir -w <scratch dir>`.
- **Decision (human):** regenerating the heavy icon packages is acceptable
  only on GitHub CI (`package-builder.yaml`), never as a local Podman
  rebuild.
- **Plan text now stale / wrong (fix via `write-wave`, not here):** (1) W-3
  gave `Build` a condition (DEC-2), contrary to the plan's "none"; (2) the
  P2 concurrent-safe verdict ignores `package-builder.yaml`'s own
  `push-distribution` job (`rm -Rf distribution`, restore its artifact,
  `git add -A`, push), so concurrent dispatches on one ref race — serialize
  the dispatches or limit that job to its own package and rebase; (3) W-1's
  risk note ("a template can't be authored") was wrong, templates came from
  git history.
- **P1's gate was too weak for AWS:** it checked the example templates
  existed, not a full render; a stale `groups.csv` reference
  (`AppIntegration`→`ApplicationIntegration`, a leftover of rename
  `66f2b51d85`) only surfaced on W-4's first CI render, fixed by reopening
  run-0008, confirmed by CI run 38177248104.
- **Left open:** nine AWS families of the Q3 2026 catalog have no colour row
  in `aws/families.csv` (cosmetic, default styling); `generate:workdir` still
  does not check that declared example templates / `icon_reference` URNs
  resolve (that check would have caught both AWS defects); the Google
  redesigned-icon-set question is undecided; the content of the regenerated
  fontawesome/simpleicons icons was checked by file counts and a
  diff against the CI artifact, not icon by icon.
- **Process:** `gh run download` refuses these artifacts with a path-traversal
  error; the artifacts zip API works.
- **Process:** run-0009 and run-0008 committed directly on `master`
  (local, unpushed); the repo's convention is to branch first. run-0010
  declined to and left its change uncommitted.

## Lessons Learnt

(none yet — execution has not started)
