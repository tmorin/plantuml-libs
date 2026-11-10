---
type: prg
status: completed
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
- 2026-11-09: `.claude/run-management.yaml` set to `squash:
  run-unless-pushed` (plugin 3.5.0), on the human's "Oui". A run whose
  commits are already on a remote (W-4 with the Action's commit, a P1 run
  reopened after the push) finishes with its commits left in place instead of
  stopping `awaiting-commit`; a never-pushed history is squashed to one commit
  per run. Replaces the interim `squash: none`.
- 2026-11-10: step 1 (phase P1) = W-1; cost profile low-cost; overrides of declared tiers: settings from .claude/run-management.yaml: repos=plantuml-libs:per-run; autonomy override: none; tiers: W-1 standard (sonnet, effort high); runs execute one after another in this worktree; one leaf agent per run (run-management:run-executor); written before dispatch by the generated workflow.
- 2026-11-10: step 1: W-1 NOT verified (W-1: implement workflow returned blocked: final check not clean {"run_status":"in-progress","pln_status":"blocked","check_run_exit":1,"named":"missing Verification: no Verification section (also: missing Review pass: no 'Review pass:' line; missing pln: execution_manifest.status is 'blocked', run is recorded completed)","unmet":[],"failure":{"command":"python3 /home/tibo/git-perso/claude-agents/plugins/run-management/skills/complete-run/scripts/check_run.py --as-completed docs/wav/wav-003-workdir-generation-hardening/run/run-0014-workdir-reference-validation","item":"missing Verification: no Verification section","file":"docs/wav/wav-003-workdir-generation-hardening/run/run-0014-workdir-reference-validation/run-0014-workdir-reference-validation.md","suggestion":"Add a Verification section and a 'Review pass:' line to the run document, set execution_manifest.status in the pln to a completed value, and mark the run completed."}}): [{"id":"W-1","verified":{"run":"0014","status":"in-progress","check_run_exit":1,"check_run_named":"missing Verification: no Verification section (also: missing Review pass line; missing pln: execution_manifest.status is 'blocked', run recorded completed)","manifest_run_ok":true,"note":"pln-0014 execution_manifest status: blocked. Run directory exists; manifest line 133 holds `run: 0014`."}}]; run commits: []
- 2026-11-10: workflow stopped, state blocked: run not verified completed ["W-1: implement workflow returned blocked: final check not clean {"run_status":"in-progress","pln_status":"blocked","check_run_exit":1,"named":"missing Verification: no Verification section (also: missing Review pass: no 'Review pass:' line; missing pln: execution_manifest.status is 'blocked', run is recorded completed)","unmet":[],"failure":{"command":"python3 /home/tibo/git-perso/claude-agents/plugins/run-management/skills/complete-run/scripts/check_run.py --as-completed docs/wav/wav-003-workdir-generation-hardening/run/run-0014-workdir-reference-validation","item":"missing Verification: no Verification section","file":"docs/wav/wav-003-workdir-generation-hardening/run/run-0014-workdir-reference-validation/run-0014-workdir-reference-validation.md","suggestion":"Add a Verification section and a 'Review pass:' line to the run document, set execution_manifest.status in the pln to a completed value, and mark the run completed."}}"]
- 2026-11-10: **Workflow 001 stopped `blocked` at W-1 (run 0014), Stage 11.**
  Code complete and verified: tasks 001-003 passed their independent checks,
  `npm test` 16 passing, `generate:workdir` on all packages exits 0 (3m26s).
  Unmet criterion: `npm run lint` exited 1 with 11 errors, all in the scripts
  the run workflows generate under `docs/wav/**/workflows/` (undefined
  `agent`/`parallel`/`workflow` globals), none in `source/` or `test/`. Cause
  is the environment, not W-1: those files did not exist at the baseline
  measurement. Fix, outside any run's scope: `eslint.config.mjs` now ignores
  `**/docs/**` (and `CLAUDE.md`'s lint line says so), committed on `wave-003`
  as its own commit. `npm run lint` exits 0. Reset run 0014's pln
  `execution_manifest.status` from `blocked` to `in_progress`, regenerated
  (`workflows/002-wave.js`) to rerun Stage 11 and the final check.
- 2026-11-10: step 1 (phase P1) = W-1; cost profile low-cost; overrides of declared tiers: settings from .claude/run-management.yaml: repos=plantuml-libs:per-run; autonomy override: none; tiers: W-1 standard (sonnet, effort high); runs execute one after another in this worktree; one leaf agent per run (run-management:run-executor); written before dispatch by the generated workflow.
- 2026-11-10: step 1 result for W-1: [{"id":"W-1","reported":"implement: done","verified":{"run":"0014","status":"completed","check_run_exit":0,"note":"pln-0014 execution_manifest status: done"}}]; run commits: [{"id":"W-1","exit":0,"action":"squashed","policy":"run-unless-pushed","commit":"5068a44f54","wip_ref":"refs/run-wip/0014","absorbed":[{"hash":"7071ec30bfece16d436f4c1b497c669f97163714","author":"tmorin <thibault@morin.io>","subject":"chore(lint): ignore docs, where the run workflows generate scripts"}],"repos":[{"name":"plantuml-libs","path":".","state":"squashed","commit":"5068a44f54","wip_ref":"refs/run-wip/0014"}]}]
- 2026-11-10: step 2 (phase P1) = W-2; cost profile low-cost; overrides of declared tiers: settings from .claude/run-management.yaml: repos=plantuml-libs:per-run; autonomy override: none; tiers: W-2 standard (sonnet, effort high); runs execute one after another in this worktree; one leaf agent per run (run-management:run-executor); written before dispatch by the generated workflow.
- 2026-11-10: step 2 result for W-2: [{"id":"W-2","reported":"design: done","verified":{"run":"0015","status":"completed","check_run_exit":0,"manifest_run_ok":true,"note":"check_run.py --as-completed printed OK for the run directory. Run directory exists, with the run doc, prg-0015 and a workflows/ dir. No pln-0015 file exists (single-document profile), so there is no execution_manifest status. The wave manifest has `run: 0015` on the W-2 archive-integrity entry."}}]; run commits: [{"id":"W-2","exit":0,"action":"squashed","policy":"run-unless-pushed","commit":"7e95eca445","wip_ref":"refs/run-wip/0015","repos":[{"name":"plantuml-libs","path":".","state":"squashed","commit":"7e95eca445","wip_ref":"refs/run-wip/0015"}]}]
- 2026-11-10: step 3 (phase P1) = W-3; cost profile low-cost; overrides of declared tiers: settings from .claude/run-management.yaml: repos=plantuml-libs:per-run; autonomy override: none; tiers: W-3 standard (sonnet, effort high); runs execute one after another in this worktree; one leaf agent per run (run-management:run-executor); written before dispatch by the generated workflow.
- 2026-11-10: step 3 result for W-3: [{"id":"W-3","reported":"design: done","verified":{"run":"0016","status":"completed","check_run_exit":0,"manifest_run_ok":true,"note":"check_run.py --as-completed printed OK, exit 0. The run directory exists and holds the run file, a prg file and a workflows directory. The manifest has `run: 0016` on the W-3 (aws-families-and-resolver) entry. The run has no pln-0016 file, so there is no execution_manifest status to report."}}]; run commits: [{"id":"W-3","exit":0,"action":"squashed","policy":"run-unless-pushed","commit":"ef922b1791","wip_ref":"refs/run-wip/0016","repos":[{"name":"plantuml-libs","path":".","state":"squashed","commit":"ef922b1791","wip_ref":"refs/run-wip/0016"}]}]
- 2026-11-10: gate P1 verified by a fresh agent: {"criteria":[{"index":1,"text":"npm run lint exits 0 and npm test passes with no failing test (baseline 11 passing)","held":true,"evidence":"Ran npm run lint myself: exit 0. Ran npm test twice: 33 passing, 0 failing (28-30s), above the 11 baseline. The recorded W-3 full-suite line (tree a9e9d04d..., pass) also matches the current tree, but I reran anyway because the AWS/Azure specs are networked."},{"index":2,"text":"npm run generate:workdir -- -w <empty scratch dir> (all packages, no Podman) exits 0","held":true,"evidence":"Ran it against the empty scratch dir /tmp/claude-1000/-home-tibo-git-perso-plantuml-libs/58a60d69-4383-4673-a4f2-53236417f844/scratchpad/all. It exited 0 in 5m04s wall time, ending with 'generation done'. It took longer than the 'about 2 minutes' baseline, but the criterion is that it exits 0 and no package is rejected, which holds. The W-3 prg line (tree a9e9d04d..., pass, 330s) shows a similar duration. validatePackage is wired in at source/library/index.ts:62 and rejected no package."},{"index":3,"text":"tests for a missing example template and an unresolvable icon_reference, both run in npm test","held":true,"evidence":"Read test/workdir-validation.spec.js. 'should throw naming the package and the missing template' builds a package with a missing.tera example and asserts the error contains 'invalid package \"test/pkg\"' and the template name. 'should throw naming the package and the dangling reference' asserts the same for an icon reference to \"nope/x\". Both tests appeared as passing in the npm test output. They call validatePackage directly, the function the generator invokes at source/library/index.ts:62. The criterion is met on that reading rather than by building a full package."},{"index":4,"text":"tests that download()/fetchArchive() rejects a non-zip body before caching, and extractArchive() does not treat an interrupted extraction as complete","held":true,"evidence":"Read test/archive.spec.js. The download tests include 'should reject a 200 response whose body is not a zip and leave no file behind' and 'should reject ... empty zip'. The extractArchive tests include 'should leave no directory when the extraction fails, then extract a good archive' (truncated zip), 'should clear a stale part directory left by a killed run' (a destination left by interruption is extracted again), and 'should not extract again when the directory is complete'. All are listed as passing in npm test."},{"index":5,"text":"in the aws-only library.yaml every distinct item family has a row in families.csv (target 0 without a row)","held":true,"evidence":"Ran npm run generate:workdir -- -p aws -w <scratch>/aws, which exited 0. I parsed the produced library.yaml with js-yaml, collected every distinct 'family' value (27) and compared them to the name column of source/library/packages/aws/families.csv. Families missing a row: [] (0). The nine families named in the baseline (ArtificialIntelligence, CloudFinancialManagement, Databases, Games, GroupIcons, IoT, ManagementTools, MigrationModernization, SecurityIdentity) are all covered. test/aws-families.spec.js also passes."},{"index":6,"text":"field names printed by scripts/resolve-aws-icons.mjs match doc/howto.upgrade-aws-package.md, and test/resolve-aws-icons.spec.mjs asserts them","held":true,"evidence":"Ran node scripts/resolve-aws-icons.mjs live. It printed newVersion, downloadUrl, publishedDate and folderDate. doc/howto.upgrade-aws-package.md (lines 25-29, 53-54) names exactly these four fields and says 'only these four'. test/resolve-aws-icons.spec.mjs defines FIELDS = [downloadUrl, folderDate, newVersion, publishedDate]. It asserts the result keys equal FIELDS in two tests, and a third test checks that the how-to names each field. All three pass."}],"canonical_discharge":{"held":true,"evidence":"Read the canonical-impact answer of each W-1, W-2 and W-3 run. W-1 (run-0014): the TDD's Canonical Impact section says not applicable, no arc or dom register exists in this repository (docs/ holds only wav/), and its prg says no CI-arc/CI-dom items. W-2 (run-0015, single document): the run body's 'Canonical impact' section says none to update, no arc/dom register, and gives a reason for leaving the how-to line out. W-3 (run-0016, single document): its 'Canonical impact' section says none to update, no register, and names the how-to as edited under AC-5/AC-6 and the skill SKILL.md as needing no edit. I confirmed with ls that docs/ contains only wav/. Each answer is a reasoned 'none', not silence or a bare 'none'."}}
- 2026-11-10: step 4 (phase P2) = W-4; cost profile low-cost; overrides of declared tiers: settings from .claude/run-management.yaml: repos=plantuml-libs:per-run; autonomy override: none; tiers: W-4 standard (sonnet, effort high); runs execute one after another in this worktree; one leaf agent per run (run-management:run-executor); written before dispatch by the generated workflow.
- 2026-11-10: step 4: W-4 NOT verified (W-4: design workflow returned blocked: stage not done {"stage":10,"summary":"Stage 10 only partly done. T-1 (read-only pre-flight) passed. T-2 to T-6 were not started, so nothing was pushed or dispatched. The run is set to in-progress, T-1's outcomes and the blocker are written in the run document, and the Stage 10 line is appended to prg-0017. T-2 is the first outward-facing action (push wave-003, then dispatch the Action). The only consent on record is a line in prg-003 from an earlier session, not a confirmation in this conversation. The workflow brief carries no user authority, so I did not act on it.","blocker":"The human must confirm in chat that pushing wave-003 and dispatching package-builder.yaml with pkgName=aws (at most twice) is approved. Until then, T-2 to T-6 are not started."}): [{"id":"W-4","verified":{"run":"0017","status":"in-progress","check_run_exit":1,"check_run_named":"missing Verification: no Verification section","manifest_run_ok":true,"note":"Run directory exists (prg and run docs plus workflows/). No pln-0017-*.md exists, so there is no execution_manifest status. Manifest line 156 holds `run: 0017`. The run frontmatter status is in-progress."}}]; run commits: []
- 2026-11-10: workflow stopped, state blocked: run not verified completed ["W-4: design workflow returned blocked: stage not done {"stage":10,"summary":"Stage 10 only partly done. T-1 (read-only pre-flight) passed. T-2 to T-6 were not started, so nothing was pushed or dispatched. The run is set to in-progress, T-1's results and the blocker are written in the run document, and the Stage 10 line is appended to prg-0017. T-2 is the first outward-facing action (push wave-003, then dispatch the Action). The only consent on record is a line in prg-003 from an earlier session, not a confirmation in this conversation. The workflow brief carries no user authority, so I did not act on it.","blocker":"The human must confirm in chat that pushing wave-003 and dispatching package-builder.yaml with pkgName=aws (at most twice) is approved. Until then, T-2 to T-6 are not started."}"]

## Findings

- The user's candidate list had a fifth item, correcting the stale text of
  wav-002's plan. Not made a run: see the plan's Non-Goals.
- 2026-11-11: step 4 resumed by the orchestrating session under the user's in-chat authorisation (the child agent could not see it, so it had stopped before any outward action): pushed wave-003 (45b06467f0..ef922b1791), dispatched package-builder.yaml pkgName=aws once (run 42918587841, headSha ef922b1791, success, three jobs success), `git pull --ff-only` to 4756804a88 (package_builder, "feat(aws): refresh the package"). W-4 (run 0017) verified completed, `check_run.py --as-completed` exit 0.
- 2026-11-11: gate P2 verified by the orchestrator: (1) latest package-builder run on wave-003 success; (2) `git diff --name-only e95e177e2b wave-003 -- distribution` has no path outside distribution/aws/; (3) nine family stereotypes present (9 of 9, baseline 0), 45 blocks; (4) four example outputs present. Also lint exit 0, 33 tests passing, distribution/aws 9851 files. Wave completed, unmerged: merge to master, `npm run release` and tags stay human actions. Lesson: a workflow child agent cannot see in-chat authorisation; outward-facing steps need the orchestrator to run them or the authorisation to be restated in the run brief.

## Lessons Learnt

A workflow child agent cannot see in-chat authorisation: the first W-4 attempt stopped before any outward action. Either the orchestrator runs the authorised steps or the brief restates the authorisation.
