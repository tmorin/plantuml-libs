---
type: wave
wave: 002
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/wbc-002-pipeline-hardening-distribution-sync.md
  - docs/wav/wav-001-dependency-ci-refresh/prg-001-dependency-ci-refresh.md
---

# Wave 002 — Pipeline Hardening & Distribution Sync

## Purpose

When this wave is done, AWS's two declared examples render without
aborting the pipeline, any package's archive fetch fails loudly on a bad
HTTP response instead of silently shipping an empty package, a push to any
branch can trigger CI on demand even without an open pull request, the AWS
upgrade how-to matches the repository's actual single-folder architecture,
and `distribution/aws`, `distribution/fontawesome`, and `distribution/
simpleicons` each match their already-pinned upstream version in real
content, not only in the version constant.

## Non-Goals

- Does not re-upgrade any package's pinned version. AWS, Font Awesome, and
  Simple Icons are already pinned to the versions wav-001 set
  (`07312026`/Q3 2026, `7.3.1`, `16.34.0`); this wave only catches their
  `distribution/` content up to that existing pin.
- Does not touch Azure or GCP — wav-001 already completed full real builds
  for both and committed current `distribution/` content.
- Does not touch EIP or Material — both confirmed current in wav-001.
- Does not decide whether to add Google's newly redesigned, smaller icon
  set as a separate module. This is a genuine open product question
  wav-001's W-6 surfaced; it is left to a human decision (or a future ADR),
  not guessed at here.
- Does not change the release/versioning strategy (`standard-version`) or
  the publishing destinations (npm, GitHub Pages, GitHub Releases).
- Does not establish a `docs/bkg/` or `docs/ana/` register for this
  repository. That is an infrastructure-adoption decision nobody has asked
  for; this wave's own sourcing gap is handled the same way wav-001's was —
  cited directly from wav-001's own prg in the business case Context.

## Wave Manifest

```yaml
wave_manifest:
  wave: 002
  slug: pipeline-hardening-distribution-sync
  status: completed
  sources: []
  phases:
    - id: P1
      name: Pipeline & Content Fixes
      gate:
        criteria:
          - 'npm run lint passes'
          - 'npm test passes'
          - 'source/templates/aws/examples/ contains a .tera template for each of the two examples declared in source/library/packages/aws/index.ts'
          - "source/generator/workdir/archive.ts's fetchArchive rejects a non-2xx or empty fetch response before extraction, verified by inspection or a targeted test"
          - '.github/workflows/continuous-integration.yaml declares a workflow_dispatch trigger alongside its existing push/tags/pull_request triggers, with push/tag/pull_request behavior unchanged'
    - id: P2
      name: Distribution Sync
      gate:
        criteria: []
  runs:
    - id: W-1
      slug: aws-example-templates-fix
      phase: P1
      depends_on: []
      run: 8
      delegation: standard
      likely_paths:
        - 'source/library/packages/aws/index.ts'
        - 'source/templates/aws/examples/**'
        - 'doc/howto.upgrade-aws-package.md'
      focus: 'make AWS''s two declared examples ("Chef Automate Architecture on AWS", "Git to S3 Webhooks") render instead of aborting the pipeline''s Other-templates phase, and bring the AWS upgrade how-to back in line with the current single-folder aws/ + FOLDER_DATE architecture'
    - id: W-2
      slug: generator-pipeline-robustness
      phase: P1
      depends_on: []
      run: 9
      delegation: standard
      likely_paths:
        - 'source/generator/workdir/archive.ts'
        - 'source/generator/workdir/**'
        - 'scripts/generate-package.sh'
      focus: 'make a bad archive fetch (non-2xx or empty body) fail loudly for every package, generalizing the guard wav-001 added only for GCP, and make a failed generate:workdir step actually abort scripts/generate-package.sh instead of continuing into a build against stale/missing input'
    - id: W-3
      slug: ci-manual-dispatch-trigger
      phase: P1
      depends_on: []
      run: 10
      delegation: hard_judgment
      delegation_reason: 'edits the live CI/release workflow file (continuous-integration.yaml) whose push/tag/pull_request triggers gate real npm/GitHub Pages/GitHub Release publishing — an edit here risks altering those triggers even when the stated change is purely additive'
      likely_paths:
        - '.github/workflows/continuous-integration.yaml'
      focus: 'let an un-PR''d branch push still be built on demand, by adding a workflow_dispatch trigger alongside the existing push/pull_request triggers, without altering their current behavior'
    - id: W-4
      slug: distribution-regen-aws
      phase: P2
      depends_on: [W-1, W-2]
      run: 11
      delegation: standard
      likely_paths:
        - 'distribution/aws/**'
        - 'distribution/bootstrap.puml'
        - 'distribution/README.md'
      focus: 'use package-builder.yaml (workflow_dispatch on CI, not local Podman) to regenerate distribution/aws against the already-pinned Q3 2026 snapshot now that W-1''s template fix lets the Other-templates phase complete, and commit the result'
    - id: W-5
      slug: distribution-regen-fontawesome
      phase: P2
      depends_on: [W-2]
      run: 12
      delegation: standard
      likely_paths:
        - 'distribution/fontawesome/**'
        - 'distribution/bootstrap.puml'
        - 'distribution/README.md'
      focus: 'use package-builder.yaml (workflow_dispatch on CI, not local Podman) to regenerate distribution/fontawesome against the already-pinned 7.3.1 release, and commit the result'
    - id: W-6
      slug: distribution-regen-simpleicons
      phase: P2
      depends_on: [W-2]
      run: 13
      delegation: standard
      likely_paths:
        - 'distribution/simpleicons/**'
        - 'distribution/bootstrap.puml'
        - 'distribution/README.md'
      focus: 'use package-builder.yaml (workflow_dispatch on CI, not local Podman) to regenerate distribution/simpleicons against the already-pinned 16.34.0 release, and commit the result'
```

## Phase P1 — Pipeline & Content Fixes

| # | Run | Slug | Depends on | Focus | Scope | Exit evidence |
|---|-----|------|------------|-------|-------|---------------|
| W-1 | — | `aws-example-templates-fix` | — | Fix AWS's two broken example templates and its stale upgrade how-to | Add the missing `.tera` templates under `source/templates/aws/examples/` for "Chef Automate Architecture on AWS" and "Git to S3 Webhooks" (or remove the declared examples if a faithful template can't be authored — a judgment call for the run to make and record), and rewrite `doc/howto.upgrade-aws-package.md`'s renamed-folder steps to match the current single `aws/` + `FOLDER_DATE` pattern | A full AWS Podman render no longer aborts in the "Render Atomic Templates (Other)" phase on these two examples; the how-to's steps match `source/library/packages/aws/index.ts`'s actual structure |
| W-2 | — | `generator-pipeline-robustness` | — | Generalize the archive-fetch validation and fix the swallowed exit code | `archive.ts`'s `download()` rejects (throws) on a non-ok HTTP status or an empty body, before piping to disk; trace why `scripts/generate-package.sh`'s `npm run generate:workdir` step doesn't abort the script on failure (an uncaught rejection not setting a non-zero exit code) and fix it at the source — plus add `--user "$(id -u):$(id -g)"` to the `podman run` invocation alongside the existing `--userns=keep-id` | A deliberately broken/404'd fetch URL raises an error instead of producing a 0-icon package; a deliberately failing `generate:workdir` step stops `scripts/generate-package.sh` before it reaches `podman run` |
| W-3 | — | `ci-manual-dispatch-trigger` | — | Add a manual CI trigger for un-PR'd branches | Add `workflow_dispatch:` to `continuous-integration.yaml`'s `on:` block; verify the `Build` job's own conditions (none currently gate on event name) still run correctly for a manual dispatch | A `workflow_dispatch` run of `continuous-integration.yaml` completes `Build` successfully; existing `push`/`tags`/`pull_request` triggers and the `GithubRelease`/`GithubPages`/`NpmPublication` jobs' tag-gating are byte-identical to before |

**Gate:** `npm run lint` and `npm test` pass; `source/templates/aws/examples/`
contains a `.tera` template for each of AWS's two declared examples (or
those examples are removed and `source/library/packages/aws/index.ts` no
longer declares them); `archive.ts`'s `fetchArchive` rejects a bad fetch
response before extraction; `continuous-integration.yaml` declares
`workflow_dispatch` with `push`/`tags`/`pull_request` behavior unchanged.

## Phase P2 — Distribution Sync

| # | Run | Slug | Depends on | Focus | Scope | Exit evidence |
|---|-----|------|------------|-------|-------|---------------|
| W-4 | — | `distribution-regen-aws` | W-1, W-2 | Regenerate and commit `distribution/aws` against the pinned Q3 2026 snapshot | Trigger `package-builder.yaml` via `workflow_dispatch` with `pkgName=aws`; download the `distribution` artifact; restore `distribution/bootstrap.puml`/`distribution/README.md` to their committed baseline via `git checkout --` before staging; commit only `distribution/aws/**` explicitly (never `git add -A`) | CI's `generate-distribution` job for `aws` completes without the "Other" phase aborting; `distribution/aws/**` content reflects the Q3 2026 snapshot; `distribution/bootstrap.puml`/`README.md` unchanged |
| W-5 | — | `distribution-regen-fontawesome` | W-2 | Regenerate and commit `distribution/fontawesome` against the pinned 7.3.1 release | Same procedure as W-4, with `pkgName=fontawesome` | CI's `generate-distribution` job for `fontawesome` completes; `distribution/fontawesome/**` content reflects 7.3.1; `distribution/bootstrap.puml`/`README.md` unchanged |
| W-6 | — | `distribution-regen-simpleicons` | W-2 | Regenerate and commit `distribution/simpleicons` against the pinned 16.34.0 release | Same procedure as W-4, with `pkgName=simpleicons` | CI's `generate-distribution` job for `simpleicons` completes; `distribution/simpleicons/**` content reflects 16.34.0; `distribution/bootstrap.puml`/`README.md` unchanged |

## Dependency View

```
W-1 aws-example-templates-fix ──────┐
                                     ├──> W-4 distribution-regen-aws
W-2 generator-pipeline-robustness ──┼──> W-4 distribution-regen-aws
                                     ├──> W-5 distribution-regen-fontawesome
                                     └──> W-6 distribution-regen-simpleicons

W-3 ci-manual-dispatch-trigger   (no dependency edges — proceeds independently)
```

## Risks

- **Dependency rationale for W-4/5/6 on W-2 (re-phase, not a preference):**
  without W-2's fetch validation, a regen run has no reliable way to tell a
  genuine successful render apart from the silent-empty-package failure
  mode wav-001's W-6 already hit once for GCP — the dependency exists so
  each regen run can trust its own CI job's success/failure signal.
  W-4 additionally depends on W-1 because AWS's Other-templates phase
  currently aborts the render outright without it.
- **Same-batch overlap, P2 (W-4/W-5/W-6): corrected per wav-001's own
  Lessons Learnt, not re-litigated from scratch.** Each run's generation
  step happens on its own ephemeral GitHub-hosted CI runner via
  `package-builder.yaml`'s `workflow_dispatch` — not a shared local
  `.workdir`, so the exact collision wav-001 hit three times (azure,
  fontawesome, eip-via-simpleicons sharing one local Podman-mounted tree)
  does not apply here. The remaining local collision surface is each run's
  own download-artifact-and-commit step touching the shared,
  tracked `distribution/bootstrap.puml` and `distribution/README.md`.
  **Verdict: concurrent-safe**, on the explicit condition that each of
  W-4/W-5/W-6 restores those two files to their pre-wave committed baseline
  via `git checkout --` and commits only its own explicitly-listed
  `distribution/<pkg>/**` paths — never `git add -A` — so no run's commit
  can actually carry a content change to either shared file. If
  `complete-wave` cannot confirm this discipline for a given run, serialize
  that run instead rather than trust the default.
- **No same-batch path overlap in P1.** W-1 (`source/library/packages/
  aws/**`, `source/templates/aws/**`, the how-to doc), W-2
  (`source/generator/workdir/**`, `scripts/generate-package.sh`), and W-3
  (`.github/workflows/continuous-integration.yaml`) touch entirely disjoint
  paths — **concurrent-safe**.
- **W-1 may conclude the examples should be removed rather than templated.**
  If a faithful `.tera` template can't be authored from the example names
  alone (no source diagram data is referenced anywhere else in the repo),
  removing the two declared examples is an acceptable alternative outcome —
  the gate only requires the Other-templates phase to stop aborting, not
  that these exact two examples survive.
- **W-3 touches the same file wav-001's W-2 already carried
  `hard_judgment` for.** The change itself is additive
  (`workflow_dispatch:` alongside existing triggers), but any edit to
  `continuous-integration.yaml` risks the triggers that gate real
  `npm publish`/GitHub Pages/GitHub Release — hence `hard_judgment` here
  too, not because this specific change is expected to be risky.
- **package-builder.yaml's `generate-distribution` job runs as `--user
  root` inside the container**, unlike the local script's rootless
  `--userns=keep-id`. W-2's `--user` fix targets `scripts/generate-
  package.sh` (the local path) specifically; it does not apply to
  `package-builder.yaml`, which already runs unfiltered as root and has
  not been observed to hit the collateral-deletion defect locally-run
  builds did. If a regen run (W-4/5/6) observes the same collateral
  deletion on CI, that is a new finding for this wave's own progress log,
  not a silent repeat of an already-fixed bug.

## Completion Criteria

- All of Phase P1's gate criteria hold on the final merged state.
- `distribution/aws/**`, `distribution/fontawesome/**`, and
  `distribution/simpleicons/**` each reflect their already-pinned upstream
  version's real content, confirmed via each regen run's own CI job result
  and a plausible count comparison against the pre-wave baseline.
- `distribution/bootstrap.puml` and `distribution/README.md` are present
  and byte-identical to their pre-wave committed state once all of Phase
  P2 lands.
- `npm run lint` and `npm test` pass on the final merged state of both
  phases.
- The Google-redesigned-icon-set question is still open and undecided at
  close-out — explicitly named in the close-out report, not silently
  dropped.
