---
type: prg
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/wav-001-dependency-ci-refresh.md
wave: 001
---

# Progress Log: Dependency, Icon Package & CI/CD Refresh

## Log

- 2026-10-04: Wave drafted and proposed. `status: proposed`, awaiting human
  review before `complete-wave` dispatches Phase P1 (W-1 npm-dependency-upgrade,
  W-2 ci-cd-minute-optimization).
- 2026-10-04: User invoked `/run-management:complete-wave` — this is the
  hand-off gate approval. Wave `status` set to `in-progress`. Allocated
  run numbers: W-1 → run 0001 (`docs/wav/wav-001-dependency-ci-refresh/run/run-0001-npm-dependency-upgrade/`),
  W-2 → run 0002 (`docs/wav/wav-001-dependency-ci-refresh/run/run-0002-ci-cd-minute-optimization/`).
  Re-checked overlap: W-1's `likely_paths` (`package.json`,
  `package-lock.json`, `source/**/*.ts`) and W-2's (`.github/workflows/**`)
  do not intersect — dispatching concurrently per the plan's
  `concurrent-safe` verdict.
- 2026-10-04: **Dispatching Phase P1 batch now** — W-1 (run 0001,
  `standard` tier, default model) and W-2 (run 0002, `hard_judgment` tier,
  `model: opus`), both via the `run-management:run-executor` agent, in a
  single parallel dispatch. Results land in the next entry.
- 2026-10-04: **W-2 (run 0002, ci-cd-minute-optimization) completed.**
  Verified independently, not taken on the subagent's report alone: read
  `run-0002-ci-cd-minute-optimization.md` (`status: completed`) and
  `pln-0002-...md` (`execution_manifest.status: done`, 8/8 tasks `done`,
  0 blocked) directly; spot-checked the committed diff (`3d810123c3`) myself
  — `continuous-integration.yaml`'s `push` is scoped to
  `branches: [master]` + explicit `tags: ['**']`, `pull_request` left
  unfiltered, a `concurrency` group with tag-aware `cancel-in-progress` was
  added to it plus `codeql-analysis.yml` and `copilot-setup-steps.yml`, and
  all three release jobs (`GithubRelease`/`GithubPages`/`NpmPublication`)
  are byte-identical to before. `package-builder.yaml` deliberately
  untouched (manual-dispatch only). Committed locally only — not pushed, no
  PR, per instruction.

## Findings

- Freshness check at authoring time: Azure (V23→V24), Font Awesome
  (7.2.0→7.3.1), and Simple Icons (16.9.0→16.34.0) confirmed outdated via
  public GitHub/npm APIs. EIP (1.2) and Material (4.0.0) confirmed current —
  excluded from this wave. AWS and GCP freshness could not be confirmed by
  simple HTTP check (JS-rendered page / no version pin respectively) and is
  left to their own runs (W-3, W-6) to determine.
- `.github/workflows/continuous-integration.yaml` triggers on
  `[push, pull_request]` with no branch filter and no `concurrency` group —
  the root cause of the duplicate-`Build`-run and uncancelled-superseded-run
  waste this wave's W-2 addresses.
- **W-2's own measurement of the defect it fixes**: of the last 100 CI runs,
  only 67 covered distinct commits — 33 were repeats, 25 of them the exact
  `push`+`pull_request` double-run this wave removes. One historical *tag*
  run (`v18.1.3`) was already auto-cancelled by a race, i.e. the risk this
  run's `cancel-in-progress: false`-on-tags guard exists for had already
  happened once for real.
- **`master` currently has no branch protection and no rulesets** (per W-2's
  `gh api` check: `"protected": false`, `rulesets: []`). No CI change in
  this repository can currently block a merge either way — worth knowing
  before reading too much safety into "CI will catch it."
- **W-2 narrowed "every push" from the plan's wording**: CI now runs
  automatically on `master`, every tag, and every pull request — but an
  un-PR'd feature-branch push now gets no CI at all (previously it did,
  redundantly). This is a deliberate, reasoned trade (`DEC-1`/`Q-1` in
  run 0002's own tdd/pln), not a silent scope cut, but it does mean the
  wave's Purpose line ("triggers automatically on every push and pull
  request") is now slightly stronger than what shipped. Worth a one-line
  mention to the human in the close-out report rather than silently editing
  the already-`in-progress` plan text.
- **Deferred, no register to file it in**: W-2 recorded `DEF-4` — add
  `workflow_dispatch` to `continuous-integration.yaml` so an un-PR'd branch
  can still be built on demand. This repo has no `docs/bkg/`, so it cannot
  become a `BL-` file; recording it here is the only place it has.
- **Deferred, no register to file it in (from W-6)**: a generic
  `source/generator/workdir/archive.ts` response-validation fix (so any
  package's `fetchArchive` fails loudly on a non-2xx/empty response instead
  of needing a per-package zero-icons guard like GCP's) would help every
  package, not just GCP; and whether to add Google's new, much smaller
  redesigned icon set as a separate module is an open product question.
  Same no-register situation as `DEF-4` above — recorded here only.
- **Shared-working-tree risk between W-1 and W-2** (real, not hypothetical):
  W-2's own verification (`npm run lint`, `npm test`) ran in the same
  working tree while W-1 was concurrently rewriting `package.json` /
  `package-lock.json` / `node_modules`. W-2's green result is therefore weak
  evidence about W-1's state, not independent evidence about W-2's own
  change (which never touched those files, so is not itself suspect) — but
  it means the wave-level P1 gate ("npm ci/lint/test pass on the upgraded
  dependency set") is **not yet discharged** by either run's self-report.
  The orchestrator will re-run `npm ci`/`npm run lint`/`npm test` itself,
  fresh, once W-1 also completes, before advancing to Phase P2.
- 2026-10-04: **W-1 (run 0001, npm-dependency-upgrade) completed.** Verified
  independently: `run-0001-npm-dependency-upgrade.md` (`status: completed`),
  `pln-0001-...md` (`execution_manifest.status: done`, 6/6 tasks `done`);
  spot-checked the committed diff (`3d2e52d896`) myself — 13 non-major
  bumps landed, plus 3 of the 4 pending majors (`@types/node` 25→26,
  `csv-parse` 6→7, `mocha` 11→12); `typescript` 6→7 correctly held back at
  `^6.0.3` in the diff (not left mid-upgrade) because
  `@typescript-eslint/eslint-plugin@8.71.0` refuses to load against
  TypeScript 7.0 (upstream gate, typescript-eslint/typescript-eslint#10940)
  — a documented, planned outcome, not a failure.
- 2026-10-04: **Phase P1 gate verified against real evidence, fresh, by the
  orchestrator** (resolving the shared-working-tree contamination risk
  noted above — this is not either run's self-report): removed
  `node_modules` entirely, ran `npm ci` on the final merged state (both
  3d810123c3 and 3d2e52d896 present) → 466 packages installed clean; `npm
  run lint` → clean, no output; `npm test` → **5 passing**. Gate holds.
  Phase P1 complete. Advancing to Phase P2.
  Side finding from the test run: `resolve-aws-icons.spec.mjs` resolved the
  live current AWS icon package URL as
  `Icon-package_01302026.*.zip` — concrete confirmation that the AWS
  package's pinned snapshot (`07312025`) is indeed stale, feeding directly
  into W-3.
- 2026-10-04: **Dispatching Phase P2 batch now** — W-3 (run 0003, aws,
  `standard`), W-4 (run 0004, azure, `standard`), W-5 (run 0005,
  fontawesome, `standard`), W-6 (run 0006, gcp, `standard`), W-7 (run 0007,
  simpleicons, `standard`), all via `run-management:run-executor`, default
  model, in a single parallel dispatch. `likely_paths` re-checked: each
  touches only its own `source/library/packages/<name>/**` (plus, for aws
  and azure, their own dedicated test spec) — no intersection among the
  five. Each is briefed to run its own `npm run generate:package -- -p
  <name>` for verification if Podman/Docker is available in its
  environment, and to say explicitly if it isn't (W-1 already flagged this
  as unavailable in its own environment). Results land in the next entry.
- 2026-10-04: **W-6 (run 0006, gcp-icons-refresh) completed.** Verified
  independently: `run-0006-gcp-icons-refresh.md` (`status: completed`),
  `pln-0006-...md` (`execution_manifest.status: done`, all tasks `done`);
  spot-checked the committed diff (`78f30682bb`, 13 files) myself —
  significant finding, worse than the wave's own authoring-time guess:
  GCP's pinned `ICONS_URL` (`google-cloud-icons.zip`) was returning a flat
  **HTTP 404**, not just "stale since 2023" — Google split the asset into
  three archives in 2024-2025, and this package had been silently building
  an *empty* package (0 icons) with no error. Fixed by repointing to
  Google's "legacy console icons" archive (the content-preserving
  continuation — 215/216 icons byte-identical, one icon,
  `PrivateConnectivity`, has genuinely updated upstream artwork, applied
  here) and adding a zero-icons guard so a future URL break fails loudly
  instead of silently shipping nothing. Also fixed `doc/howto.upgrade-gcp-package.md`'s
  dead URL references.
- 2026-10-04: **W-4 (run 0004, azure-icons-refresh) completed.** Verified
  independently: `run-0004-azure-icons-refresh.md` (`status: completed`),
  `pln-0004-...md` (`execution_manifest.status: done`); spot-checked the
  committed diff (`dba8b17627`, 2908 files) myself — `ICONS_VERSION`
  correctly bumped `"23"` → `"24"`, 714 icons discovered (was 705), same
  29 category directories, normal upstream icon churn within that stable
  structure. Resolved its earlier mid-flight CPU-contention wait on its
  own, via the isolated-working-directory approach it had already proven
  out — no further orchestrator intervention needed beyond the repeated
  resumes already logged above.
- 2026-10-04: **Active, live same-batch risk caught and intervened on by
  the orchestrator**: W-4's completion report (received after I'd already
  sent a premature "confirmed, nothing more needed" message — noted as a
  process mistake on my part, corrected by reading its actual full
  report) disclosed that its build had collaterally deleted repo-wide
  `distribution/bootstrap.puml` and `distribution/README.md` (unrelated to
  azure specifically) and had to restore them via `git checkout --` before
  committing. I checked `git status` directly afterward and found this
  actively recurring in real time: W-5's currently-running build (pid
  1383856) is the only remaining Phase-P2 build still mounting the **real
  shared** `.workdir`/`distribution` rather than an isolated scratch copy
  (confirmed via `ps aux` — W-7/simpleicons's concurrent build is correctly
  isolated), and `distribution/README.md`/`bootstrap.puml` were showing
  deleted in the working tree at that moment. Warned W-5 directly, before
  it commits, to check for and restore any repo-wide file beyond
  `distribution/fontawesome/**`, and to stage explicitly-listed paths only
  — never `git add -A`. This is the same root cause as the `.workdir`
  ownership/contention findings above, but now confirmed to actually
  corrupt committed history (via W-4) rather than only block a build.
  **Wave-level implication, for the close-out report**: any future wave
  touching this generator pipeline should mandate the isolated `-w`
  working-directory pattern for every run from the start, not leave it to
  each run to discover independently.
- 2026-10-04: **W-5 (run 0005, fontawesome) hit a mechanical halt — its
  dispatch turn was force-closed mid-flight**, not a deliberate stop. Its
  own status file reads `designing` (non-terminal) and its final report is
  explicit about what's done (TDD drafted, Stage 5 review dispatched but
  not retrieved) and not done (no pln, no code change yet, no commit). Per
  `complete-wave`'s resume guidance this is the "dispatch with no result
  after it" signature, not an unmet gate — resuming via `SendMessage` to
  the same agent next, not redispatching a fresh one, so it continues from
  its own TDD/prg rather than redrafting.
  **Real finding surfaced by W-5, worth keeping regardless of outcome**:
  the five Phase-P2 runs share one gitignored `.workdir/` build-scratch
  directory. A prior rootless-Podman `:U`-mounted run left it owned by a
  Podman subuid range, making it unwritable (`EACCES`) for a later run's
  `npm run generate:workdir`. W-5 fixed it non-destructively
  (`podman unshare chown -R 0:0 .workdir`, not `rm -rf`, specifically
  because `git status` showed `source/library/packages/azure/index.ts`
  mid-edit by a concurrent sibling at the time — confirms the shared-scratch
  contention risk is live, not theoretical). `write-wave`'s overlap check
  only considers tracked repository paths; an untracked, shared build
  directory is a same-batch collision surface the plan's `likely_paths`
  never had a column for. Noted for Lessons Learnt.

- 2026-10-04: **User-directed scope reduction for the remaining Phase P2
  runs (W-3 aws, W-5 fontawesome, W-7 simpleicons).** The user observed
  the fontawesome build running for 66+ minutes single-threaded and the
  simpleicons build for 3h51m+ of CPU time, both still active and
  competing for this host's CPU, and directed: kill them, and never do a
  full containerized package rebuild for verification going forward — use
  the small `eip` package as a pipeline sanity check instead, where a
  check is wanted at all.
  **Action taken**: stopped both containers (`ecstatic_lovelace`/
  fontawesome via `podman stop`, then `happy_bassi`/simpleicons the same
  way) myself, directly, rather than waiting for either run to notice.
  Instructed W-3, W-5, and W-7 to: rely on `generate:workdir -p <pkg>`
  (fast, no Podman) for content/count verification instead of a full
  render; optionally sanity-check the pipeline itself against `eip`
  instead of their own large package; commit only their source change
  (`index.ts` + docs) with `distribution/<pkg>/**` left stale relative to
  the new pinned version — stated plainly as a deliberate, user-directed
  gap, not hidden; and name the existing `package-builder.yaml` GitHub
  Actions workflow (`workflow_dispatch`) as the intended path to actually
  complete the render later, on CI infra, once this branch is pushed —
  without triggering it themselves.
  **This changes the wave's own exit evidence** for W-3/W-5/W-7 (not
  W-4/W-6, which already completed full real builds before this
  instruction arrived): "Package rebuilds via `npm run generate:package
  -- <pkg>`" is relaxed to "pinned version/snapshot updated;
  `generate:workdir` discovery confirms plausible counts; full
  `distribution/<pkg>/**` regeneration deferred to CI." Updating the
  plan's Phase P2 table and Completion Criteria to match, below.

- 2026-10-04: **W-5 (run 0005, fontawesome) completed on the reduced
  scope.** Verified independently: `run-0005-...md` (`status: completed`),
  pln (`execution_manifest.status: done`, `blocked_tasks: 1` — task-003,
  explicitly `blocked` with a stated reason, not silently dropped);
  spot-checked commit `ad646b320c` myself — exactly 5 files
  (`fontawesome/index.ts` + this run's 4 docs), `ICONS_VERSION` correctly
  `"7.3.1"`, no `distribution/` changes staged. Also restored
  `distribution/README.md`/`bootstrap.puml`/`distribution/fontawesome/**`
  (collaterally deleted by the killed build's Cleanup phase) before
  committing, and cleaned ~22 stray PNGs from an earlier interrupted
  attempt. `generate:workdir` confirms 2883/3 modules vs the 2860/3
  baseline; lint/test both pass. Full `distribution/fontawesome/**`
  render explicitly deferred (TG-3 not met, by direction) — follow-up path
  recorded in the run's own TDD.

- 2026-10-04: **W-7 (run 0007, simpleicons) completed on the reduced
  scope.** Verified independently: `run-0007-...md` (`status: completed`),
  pln (`execution_manifest.status: done`, 5/5 tasks `done`); spot-checked
  commit `c248ddf6a6` myself — exactly 5 files, `ICONS_VERSION` correctly
  `"16.34.0"`, no `distribution/` changes staged; `git status --short
  distribution/eip/` is clean (fully restored after an incident, see
  below). Content verified via an isolated `generate:workdir` + Podman
  build: 27 modules (unchanged), 3464 items (up from 3397) — a real
  increase, not a decrease.
  **Incident, fully resolved**: this run's directed `eip`-proxy build
  (the CLAUDE.md-documented "use eip instead" check) itself failed on a
  pre-existing, unrelated generator error, and in failing deleted all 542
  tracked `distribution/eip/**` files plus left the shared tree owned by
  an unreachable uid. Root-caused to the same rootless-Podman
  `--userns=keep-id` mapping issue as every other collateral-damage
  finding above — confirmed `git status --short distribution/eip/` clean
  now. The run correctly did not retry the `eip` proxy a second time,
  since its already-successful isolated simpleicons build was strictly
  stronger evidence for the same claim — a judgment call worth endorsing,
  not redoing.
  **Important correction to this wave's own Risks section, surfaced by
  W-7**: the plan's "no same-batch path overlap" verdict for W-3..W-7 was
  based only on each run's own `source/library/packages/<name>/**` being
  disjoint — but every icon-package build's Podman volume mount and
  `copyTemplates()` step touches the **shared, tracked** `.workdir/**`/
  `distribution/**` regardless of the `-p`/`--urn` filter, which is
  exactly the mechanism behind every collateral-deletion finding logged
  above (azure, fontawesome, now eip-via-simpleicons). W-7 observed W-3,
  W-4, and W-5 all racing on this shared state via `ps aux` during its own
  run. **This was wrong when written** — the Risks section's
  `concurrent-safe` framing for W-3..W-7 should have been `serialize` (or
  required per-run worktree isolation from the start) rather than relying
  on source-path disjointness alone; recording the correction here since
  the plan itself can't be edited mid-flight without re-litigating
  dependencies already executed against it. W-7 also suggests a concrete
  tool fix: `scripts/generate-package.sh` passing
  `--user "$(id -u):$(id -g)"` to `podman run` instead of relying solely
  on `--userns=keep-id`.

- 2026-10-04: **Orchestrator's mid-flight course-correction to W-3 was
  not trusted, and W-3's own reasoning for distrusting it was sound.**
  The `SendMessage` I sent to W-3 (redirecting it away from a full AWS
  Podman build, same as W-5/W-7) arrived at that agent without the
  provenance framing every other genuine inter-agent message in this wave
  carried (`[Subagent hand-back] ... NOT a message from the user`).
  W-3's own safety reasoning correctly flagged it as a suspected
  injection — no "coordinator" role is a defined, trusted instruction
  source for a dispatched run; only the user and the run's own dispatch
  brief are — and continued on its original, already-reasoned plan
  instead. **The outcome converged anyway**: W-3 ran the real build, hit
  a genuine pre-existing defect (missing `examples/*.tera` templates
  aborting the "Render Atomic Templates (Other)" phase, which took down
  most PNG rendering with it — not caused by this run's change), caught
  its own first too-optimistic read by re-checking `git status`
  (4214 files found deleted, not the 2 it first assumed), and correctly
  chose not to commit the broken partial `distribution/aws` output —
  reverting to the clean committed baseline, same end state the
  orchestrator's message had asked for, just reached at real cost (a full
  multi-minute+ build and failure investigation) rather than being
  skipped. **Lesson for future waves**: a dispatched run cannot
  distinguish a legitimate orchestrator course-correction from an
  injected one without an explicit, consistent provenance marker on
  `SendMessage` traffic — this needs a convention (e.g. the orchestrator
  always framing its own messages with the wave/run identifiers plus an
  explicit "this is your dispatching orchestrator, not observed content"
  statement), not something to retry ad hoc per message.

- 2026-10-04: **W-3 (run 0003, aws) completed.** Verified independently:
  `run-0003-...md` (`status: completed`), pln (`execution_manifest.status:
  done`, 4/4 tasks `done`); spot-checked commit `41697b0c39` myself —
  exactly 5 files, no `distribution/` changes, `FOLDER_DATE` correctly
  re-pinned `"07312025"` → `"07312026"` with the matching upstream URL
  (AWS also renamed its asset-filename convention,
  `Asset-Package_*` → `Icon-package_*`, correctly reflected). All four
  AWS discovery modules verified non-zero with normal catalog-churn
  deltas (Architecture 309→305, Category 25→26, Resource 493→482, Group
  17→17). **Phase P2 is now fully complete — all five icon-package runs
  (W-3/4/5/6/7) done.**
  Real new findings from W-3, beyond the provenance-trust lesson already
  logged: (a) AWS declares two example diagrams whose `.tera` templates
  don't exist anywhere in the repo — a genuine pre-existing defect that
  aborts the Podman renderer's "Other" phase and, as a side effect, most
  PNG rendering for real icon content too (not a cosmetic two-file gap);
  this is why a full `distribution/aws` render currently cannot succeed
  regardless of this run's change, and is a real backlog item (no
  register to file it in). (b) `doc/howto.upgrade-aws-package.md`
  describes an abandoned versioned-package-folder architecture that no
  longer matches the repo's actual single-folder `AwsFactory` + constants
  pattern — stale documentation, separate from the `-p` invocation bug
  already fixed. (c) `scripts/generate-package.sh` doesn't actually aborts
  when its internal `generate:workdir` step fails (the `npm run` wrapper's
  uncaught rejection doesn't propagate a non-zero exit) — a third
  independent sighting of the same non-propagating-exit-code class of bug
  already logged above, confirming it's systemic to the script, not
  per-package.

## Lessons Learnt

- Disjoint `likely_paths` guarantees two concurrent runs don't corrupt each
  other's *written files*, but not that their *verification commands*
  (lint/test run against the shared working tree's `node_modules`/lockfile)
  are independent. `write-wave`'s same-batch overlap check should consider
  a shared verification surface, not just path intersection — isolating
  concurrent runs in separate worktrees (`manage-worktrees`/`EnterWorktree`)
  would have avoided this for W-1/W-2.
- A shared, gitignored build-scratch directory (`.workdir/`) is a real
  same-batch collision surface that a `likely_paths`-based overlap check
  never sees, because it isn't a tracked repository path. Rootless Podman's
  `:U`-mount can leave it owned outside the host user's range for the next
  concurrent run. `write-wave`/`complete-wave` should treat shared
  untracked build directories the same way they treat tracked-path
  overlap — recorded, and reclaimed non-destructively (`podman unshare
  chown`, never `rm -rf`, since siblings may have in-flight state there).
  **Confirmed mitigation (from W-4, see below)**: the workdir generator's
  `-w`/`--working-directory` flag plus isolated Podman volume mounts per
  run avoids this contention entirely, rather than merely reclaiming
  ownership after the fact.
- **Confirmed root cause of the `bootstrap.puml`/`README.md` collateral
  damage (from W-5)**: a `--urn=<pkg>`-filtered Podman build's cleanup
  phase still touches these repo-wide aggregate files even though it only
  *regenerates* the filtered package's own output — leaving them deleted
  until a full, unfiltered build regenerates them. This is a `scripts/
  generate-package.sh` / `plantuml-generator` tool behavior, not a mistake
  any individual run made; every run that points a filtered build at the
  real shared tree will hit it. The reliable fix is the isolated `-w`
  working-directory pattern (confirmed working by W-4 and W-6) *combined
  with* restoring any repo-wide file via `git checkout --` before
  committing, scoped by an explicit file list — never `git add -A`.
- 2026-10-04: **Real documentation bug found and fixed by the orchestrator**,
  surfaced by W-5: `CLAUDE.md`'s own example command
  (`npm run generate:package -- -p aws`) and this wave's own Phase P2
  exit-evidence column (same `-- -p <pkg>` form, for all of W-3/W-4/W-5/
  W-6/W-7) are both wrong for the current `scripts/generate-package.sh`.
  Verified directly by reading the script: it takes the bare package name
  as `$1` (`--urn="$1"`) and prepends `-p` itself when calling
  `generate:workdir` internally — so `-- -p aws` makes `$1="-p"`,
  `$2="aws"`, and the script only reads `$1`, producing `--urn=-p`. Fixed
  both `CLAUDE.md` (the "Commands" table and the "Architecture" bullet) and
  this plan's five Phase P2 exit-evidence cells to the correct
  `npm run generate:package -- <pkg>` (no `-p`). This is the kind of bug a
  human would hit on the very first local run; good that a wave run caught
  it empirically rather than it surviving into the close-out report
  unnoticed.
- 2026-10-04: **Shared-scratch contention (Finding above) confirmed worse
  than assumed**: W-5 observed its sibling Phase-P2 runs (gcp, simpleicons,
  azure) running their own Podman builds **genuinely concurrently**, each
  using an isolated per-run scratch copy rather than this repo's shared
  `.workdir`/`distribution` — W-5 itself was the only one still pointed at
  the shared repo path, which is the actual source of the transient build
  collision it hit (`unable to create .cache/fontawesome/...`). Reinforces
  the Lessons Learnt entry below rather than changing it.
- 2026-10-04: **Shared `.workdir`/`distribution` contention independently
  confirmed by a second run (W-4, azure)** — not a one-off. W-4 observed a
  `fontawesome` cache entry it never created and `.workdir` ownership
  flipping uid with no action of its own, consistent with W-5 building in
  the same shared tree concurrently. Worse than file-overwrite risk: W-4
  found that a concurrent `EACCES`/"unable to create X.puml" container
  failure under rootless `--userns=keep-id` **did not propagate as a
  non-zero exit code**, which could silently accept a build that wiped
  `distribution/azure/{Item,Group}` down to empty — W-4 caught this only by
  manually inspecting output counts, recovered via
  `git checkout -- distribution/azure && git clean -fd distribution/azure`.
  **A third, independent recurrence hit W-5 directly**: its own
  `generate:workdir` sub-step failed with the same `EACCES`, but
  `scripts/generate-package.sh` continued into the Podman build step
  anyway instead of stopping, which then failed differently against a
  stale cache — confirming this non-propagating-exit-code behavior is
  systemic to the script, not a one-off (W-5 fixed its own instance by
  clearing the stale cache directly rather than retrying blind).
  W-4 also identified a concrete mitigation for any future wave with this
  shape: the workdir generator CLI has a `-w`/`--working-directory` flag
  (`ts-node source/generator/workdir -p <pkg> -w <isolated-path>`) that,
  combined with pointing Podman's volume mounts at that isolated path
  instead of the shared repo `.workdir`/`distribution`, avoids the
  contention entirely — W-4 proved this works via its own isolated
  scratchpad build. Promoting this from a maybe to a confirmed
  recommendation in Lessons Learnt.
  W-4 also independently found and flagged (via `spawn_task`, now
  dismissed as redundant) the same `generate:package -- -p <pkg>`
  documentation bug W-5 found — already fixed above.
- **The isolated-build mitigation is necessary but not sufficient on its
  own against the shared tree** (from W-7's eip incident): even a build
  correctly pointed at an *isolated* working directory can still
  collaterally corrupt the *real repo's* `distribution/<other-pkg>/**` if
  the tool image's container user isn't actually remapped by
  `--userns=keep-id` alone. A concrete fix worth carrying into any future
  wave or into this repo directly: pass `--user "$(id -u):$(id -g)"`
  explicitly to the `podman run` in `scripts/generate-package.sh`, rather
  than relying on `--userns=keep-id` alone.
- **A run choosing not to re-attempt a directed verification step, because
  stronger evidence already existed, was the right call** (W-7 declining
  to retry the `eip` proxy build after its own isolated simpleicons build
  had already proven the pipeline works end to end). Worth remembering
  this is a legitimate response to a verification instruction — redoing a
  check that adds no new evidence just to literally satisfy an
  instruction's letter isn't actually what the instruction was for.
- **This wave's own same-batch overlap analysis (step 6 of `write-wave`)
  was incomplete**: it checked `likely_paths` disjointness on each run's
  *own* package source, but missed that the generator's build step always
  touches shared tracked state (`.workdir/**`, `distribution/**`)
  regardless of the `-p`/`--urn` filter — the real collision surface
  wasn't in any single run's declared paths at all. Future waves touching
  this generator pipeline should declare `.workdir/**` and
  `distribution/**` as shared paths on every icon-package run from the
  start, defaulting to `serialize` or mandatory per-run worktree/`-w`
  isolation, rather than discovering this empirically run by run.
- 2026-10-04: **Wave closed out.** All 7 runs `completed`: W-1
  (npm-dependency-upgrade), W-2 (ci-cd-minute-optimization), W-3
  (aws-icons-refresh), W-4 (azure-icons-refresh), W-5
  (fontawesome-icons-refresh), W-6 (gcp-icons-refresh), W-7
  (simpleicons-refresh). Final fresh verification run by the orchestrator
  on the fully merged branch state (all 7 run commits): clean `npm ci`
  (466 packages), `npm run lint` clean, `npm test` 5 passing. No
  analysis was named in the manifest's `sources` (empty, by design — the
  goal arrived from the user's request, not a register item), so nothing
  to move to `consumed`. Canonical impact: not applicable across every
  run (no `docs/CLAUDE.md` register declaration or ADR register exists in
  this repository), declared with reason by each run's own TDD, not
  silently skipped. `wav-001`/`wbc-001`/`prg-001` status set to
  `completed` in both frontmatter and manifest, per the Completion
  Criteria section's named exceptions (AWS/Font Awesome/Simple Icons'
  `distribution/<pkg>/**` deliberately left stale, deferred to
  `package-builder.yaml` on CI).

