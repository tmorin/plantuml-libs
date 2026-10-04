---
type: prg
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0005-fontawesome-icons-refresh/tdd-0005-fontawesome-icons-refresh.md
  - docs/wav/wav-001-dependency-ci-refresh/run/run-0005-fontawesome-icons-refresh/pln-0005-fontawesome-icons-refresh.md
run: 0005
wave: 001
---

# Progress Log: Font Awesome icons refresh

## Log

- 2026-10-04: Run started via `complete-run` under `complete-wave` batch
  dispatch (wave 001, W-5). Document profile settled as `TDD+pln` (infra-only
  work, scope already settled by the wave manifest), matching sibling run
  0001's precedent. Confirmed via GitHub API
  (`api.github.com/repos/FortAwesome/Font-Awesome/releases/latest`) that
  `tag_name: "7.3.1"` is the current latest release, with the
  `fontawesome-free-7.3.1-web.zip` asset present — the exact asset shape
  `source/library/packages/fontawesome/index.ts` downloads. Confirmed
  Podman is available and working in this environment (`podman info`
  succeeds; `docker.io/thibaultmorin/plantuml-generator:1` image already
  present locally), so `npm run generate:package -- -p fontawesome` is
  expected to be runnable here, unlike a sibling run that reported it
  unavailable.
- 2026-10-04: Captured the pre-change 7.2.0 baseline via
  `npm run generate:workdir -- -p fontawesome`: 2860 SVGs discovered across
  3 modules (`fontawesome/Brands`, `fontawesome/Regular`,
  `fontawesome/Solid`). Hit `EACCES` on `.workdir/**` because a prior
  Podman `-v ...:/workdir:z,U` volume mount (from this wave's own build
  tooling, possibly triggered by a concurrently-dispatched sibling Phase-P2
  run) had left the directory owned by a rootless-Podman subuid range.
  Fixed non-destructively via `podman unshare chown -R 0:0 .workdir`
  (reclaims ownership without deleting any sibling run's in-flight scratch
  content — confirmed via `git status` that `source/library/packages/azure/index.ts`
  was mid-edit by another run at the same time, so a destructive
  `rm -rf .workdir` was avoided deliberately). Drafted
  `tdd-0005-fontawesome-icons-refresh.md` (TDD+pln profile, no PRD).
- 2026-10-04: Dispatched Stage 5 KDMLLC review of the TDD to a
  `general-purpose` subagent (standard tier). The dispatching turn was
  force-closed before the result returned; reported mid-flight status to
  the orchestrator via `SubagentHandback` rather than fabricating a result.
  On resumption, retrieved the review directly from the still-running
  subagent (re-contacted via `SendMessage` rather than redispatching).
  Verdict: Acceptable (KISS 4/5, DRY 3/5, MECE 3/5, LEAN 4/5, LUCID 4/5,
  C 5/5). Three findings, all S1/S2: F1 (S2, MECE-OVERLAP) — frontmatter
  said `status: active` but the "File Placement and Frontmatter" section
  restated `status: draft`, a self-contradiction; F2 (S1, LEAN) — that
  section re-listed frontmatter fields already stated at the top of the
  file, pure restatement that drifted; F3 (S1, DRY) — Technical Goals
  (TG-2/TG-3/TG-4) and Observability and Verification stated the same
  acceptance criteria twice. All three applied: collapsed the section to
  "File Placement" (one sentence, no field re-listing, no status claim),
  and Observability and Verification now cross-references TG-2/TG-3/TG-4
  by ID instead of restating them, keeping only the net-new visual
  spot-check item. No consistency (C) issues or coverage gaps found — the
  review independently verified the traceability sources, the
  fontawesome-package-upgrading skill/howto split, and the sibling
  run-0001 no-PRD precedent.
- 2026-10-04: Re-confirmed the TDD's Open Questions section ("None") is
  still accurate after the review — none of F1/F2/F3 touched scope,
  assumptions, or decisions; the review found no coverage gaps that would
  surface a new question.
- 2026-10-04: Drafted `pln-0005-fontawesome-icons-refresh.md` (5 sequential
  tasks). Ran Stage 9's C scan inline. Updated run status to `in-progress`.
  Implemented task-001: edited `ICONS_VERSION` `"7.2.0"` -> `"7.3.1"`.
  Implemented task-002: `npm run generate:workdir -- -p fontawesome`
  against 7.3.1 (after re-applying `podman unshare chown -R 0:0 .workdir`,
  since the ownership hazard had recurred as expected) — **2883 SVGs
  across 3 modules** (`Brands`/`Regular`/`Solid`, unchanged names), vs. the
  2860/3 baseline: +23 items, 0 module changes, plausible for a point
  release. `ASM-2` holds; `TG-2` met.
- 2026-10-04: Task-003 (Podman build) attempt 1: ran
  `npm run generate:package -- -p fontawesome` (copied verbatim from
  `CLAUDE.md`'s own documented example). It silently built the wrong
  package: `scripts/generate-package.sh` already prepends `-p` internally
  and takes the bare package name as `$1`; passing `-p fontawesome` makes
  `$1="-p"`, so the script built `--urn=-p` (matching no real package) —
  verified directly (`bash -c 'f() { echo "1=[$1] 2=[$2]"; }; f -p
  fontawesome'` → `1=[-p] 2=[fontawesome]`). A second latent bug
  compounded it: `generate:workdir`'s own failure on an unrelated package
  (`material`, `EACCES`) during that run did not propagate a nonzero exit,
  so the shell script's `set -e` never stopped it before the bogus-urn
  Podman step ran anyway. No lasting damage (`git status --short
  distribution/fontawesome` showed zero changes from that run; no stray
  `distribution/-p` directory was created). **Real finding, reported to
  and independently verified by the orchestrator**, who fixed `CLAUDE.md`
  and the wave manifest's exit-evidence text for W-3..W-7 to the corrected
  invocation (`npm run generate:package -- <pkg>`, no `-p`).
- 2026-10-04: Task-003 attempt 2 (corrected invocation,
  `npm run generate:package -- fontawesome`): failed with `EXIT=2`,
  `unable to open /distribution/fontawesome/Solid/FilePen.png: NotFound`,
  after the `.workdir` ownership hazard recurred again (traced to an
  earlier attempt's own `timeout 300`-wrapped process possibly leaving an
  orphaned Podman container running past the wrapper's kill). Fixed
  ownership, cleared `.workdir/.cache/fontawesome` (package-scoped only),
  regenerated cleanly.
- 2026-10-04: Task-003 attempt 3: failed again with `EXIT=2`, a different
  file (`unable to open /distribution/fontawesome/Brands/BlackTie.png:
  NotFound`), immediately after a clean ownership-fix + cache-clear +
  regenerate — ruling out stale state as the cause. Formed a race-condition
  hypothesis: the generator's "Create Resources" phase uses 8 threads by
  default (`PLANTUML_GENERATOR_THREADS`, confirmed configurable from the
  log), and this host had multiple sibling Phase-P2 Podman builds
  (gcp/simpleicons/azure) competing for the same 8 CPU cores at the time,
  plausibly widening a narrow directory-creation-vs-write race.
- 2026-10-04: Task-003 attempt 4: re-ran with `-e
  PLANTUML_GENERATOR_THREADS=1` to test the race hypothesis directly (no
  source change — invocation-time env var only). Ran clean past the point
  where both prior attempts had failed (confirmed via live `ps aux` at
  multiple checkpoints: real `java`/`inkscape` processes actively
  rendering, not stuck), but was ultimately killed with `EXIT=137`
  (`SIGKILL`) after ~7 minutes. Host `free -h` at the time showed
  **1.9Gi/1.9Gi swap used, 11Gi/31Gi RAM used** — strong corroborating
  evidence this was an OOM kill from cumulative multi-process memory
  pressure (several concurrent sibling Java/Inkscape render processes),
  not a renderer bug. This is consistent with, not contradicting, the
  race-condition hypothesis for attempts 2-3: single-threaded rendering
  removed the write race but made the run slow enough to fall victim to a
  different resource constraint (memory) under the same concurrent-batch
  conditions.
- 2026-10-04: User, via the orchestrator, directed: stop attempting the
  full containerized build entirely for this run (do not relaunch, now or
  later in this session); rely on `generate:workdir`'s already-captured
  result as sufficient structural verification; optionally try the small
  `eip` package as a pipeline sanity substitute. Found a live
  `.git/index.lock` from a concurrent sibling run's own commit while
  cleaning up collateral — waited ~10s for it to clear rather than forcing
  it, then proceeded. Restored all collateral from the killed build
  (`distribution/README.md`, `distribution/bootstrap.puml`, the entire
  `distribution/fontawesome/**` tree — the Cleanup phase had deleted it
  before the kill prevented regeneration) via `git checkout --`, plus
  `git clean -f distribution/fontawesome/` for ~22 stray new-icon PNGs
  partially rendered by an earlier interrupted attempt before they could
  be integrated. Attempted the optional `eip` sanity build once; it was
  interrupted by an external `timeout` wrapper I added, its small
  collateral (`distribution/eip/**` plus the same two aggregate files)
  restored the same way; not retried, per the user's own framing of it as
  optional and the diminishing returns of repeating contention-prone work
  that wasn't required.
- 2026-10-04: Verification on the reduced basis: `npm run lint` — 0
  problems. `npm test` — **5 passing** (gdiag x3, AWS icon package fetch,
  Azure icon package fetch; none of the pre-existing "Error line 4" output
  in the gdiag tests is new — those are the fixtures' own intentional
  error-detection cases). Confirmed via `git status` that only
  `source/library/packages/fontawesome/index.ts` and this run's own docs
  directory are modified/untracked within this run's scope — `CLAUDE.md`,
  `docs/wav/wav-001-dependency-ci-refresh/run/run-0001-.../prg-...md`,
  `source/library/packages/aws/index.ts`, and
  `source/library/packages/simpleicons/index.ts` are other
  agents'/sibling runs' own concurrent changes, not touched. Amended the
  TDD (`TG-3` note, new "Deliberate Scope Reduction" section, `RISK-4`,
  `DEF-2`, Observability and Verification) and the pln (task-003 ->
  `blocked` with an explicit `blocked_reason`, execution_manifest -> `done`
  with per-criterion MET/NOT MET annotations) to reflect the real,
  user-directed outcome rather than silently rewriting history to look
  like the original plan succeeded in full.

## Findings

- The shared, gitignored `.workdir/`/tracked `distribution/` directories
  are genuinely being read/written concurrently by this wave's
  Phase-P2 batch (W-3..W-7) in the same working tree — observed `git
  status` showing `source/library/packages/azure/index.ts` and
  `distribution/azure/**` mid-change from another run while this run was
  still drafting its TDD, and a rootless-Podman `:U`-mount ownership
  hazard on `.workdir/` recurred between Stage 0 and Stage 6 (first fixed,
  then found re-chowned to `101000:101000` again by a later sibling-run
  Podman invocation). This is a real, reproducible wave-level process gap,
  not a one-off: a shared mutable scratch directory plus a shared tracked
  output directory under concurrent batch dispatch. Re-applying
  `podman unshare chown -R 0:0 .workdir` before each of this run's own
  generation calls is the working mitigation; no `docs/bkg/` register
  exists in this repository to file it against formally.
- `CLAUDE.md`'s documented single-package build command
  (`npm run generate:package -- -p <pkg>`) is wrong for the current
  `scripts/generate-package.sh`, which already prepends `-p` internally
  and expects the bare package name as `$1`. The wave manifest's own
  Phase P2 exit-evidence text repeated the same wrong syntax for every
  icon-refresh run (W-3..W-7). Reported to and independently verified by
  the orchestrator, who corrected both documents — not this run's own
  files to fix, since neither is inside `source/library/packages/fontawesome/**`.
- The shared-scratch-directory contention (`RISK-1`/`RISK-2`) understated
  its own severity: realized impact included repeated collateral deletion
  of tracked repo-wide files (`distribution/README.md`,
  `distribution/bootstrap.puml`) and of this package's entire
  `distribution/fontawesome/**` tree on every filtered
  `--clean-urn=fontawesome` build, a `.git/index.lock` collision from a
  concurrent sibling commit, and a likely host OOM kill
  (`EXIT=137`) of a single-threaded render attempt (host swap was
  1.9Gi/1.9Gi used, RAM 11Gi/31Gi used, at the time). All of it was
  recoverable (`git checkout --`/`git clean`, since every affected path
  was either gitignored scratch or tracked-but-regeneratable output), but
  it made every full containerized build attempt for this package
  unreliable on this host while the wave's Phase-P2 batch ran
  concurrently. See `RISK-4`/`DEF-2` in the TDD.
- Full containerized Podman builds of a large icon package (thousands of
  SVGs, e.g. this package's 2883) are expensive and fragile to run
  concurrently with several sibling packages' own full builds on one
  host — per explicit user direction mid-run, this class of work should
  rely on a smaller package (e.g. `eip`, ~69 icons) for pipeline sanity
  checks instead of a full build of the package actually being changed,
  and/or defer the full build to CI (`.github/workflows/package-builder.yaml`,
  `workflow_dispatch`) rather than a contended local host.

## Lessons Learnt

- When a dispatching turn is force-closed before a background subagent's
  result returns, re-contacting that same agent by its id via `SendMessage`
  recovers the result without wasting a redispatch — the agent kept
  running and its work was not lost.
- A command that "exits 0" is not proof it did what was asked — both the
  wrong-urn `-p fontawesome` misfire and the EACCES-then-continue sequence
  in `scripts/generate-package.sh`'s underlying tools showed that a
  non-propagating failure inside a shell pipeline can make a genuinely
  broken step look successful at the top level. Always check for the
  actual expected output (here: the right urn in the log, the right file
  counts), not just the process exit code.
- When a user says to stop retrying something, that instruction extends to
  "not even as an optional secondary check" unless they explicitly say
  otherwise — this run correctly treated the `eip` substitute as truly
  optional and did not keep pushing it after one interruption.
