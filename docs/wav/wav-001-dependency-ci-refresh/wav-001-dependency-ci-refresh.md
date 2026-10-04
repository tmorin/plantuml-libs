---
type: wave
wave: 001
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/wbc-001-dependency-ci-refresh.md
---

# Wave 001 — Dependency, Icon Package & CI/CD Refresh

## Purpose

When this wave is done, the project's npm dependencies and its AWS, Azure,
Font Awesome, GCP, and Simple Icons packages track the latest version each
dedicated upgrade skill can detect (or record why not), and the GitHub
Actions CI/CD workflows trigger automatically on every push and pull request
while running only the minimum work needed per commit — no duplicate `Build`
run on the same commit, and no CI minutes wasted on a superseded run.

## Non-Goals

- Does not upgrade EIP or Material — both confirmed already at their latest
  upstream version as of 2026-10-04.
- Does not change the website/documentation generator's ETL architecture.
- Does not change the release/versioning strategy (`standard-version`) or
  the publishing destinations (npm, GitHub Pages, GitHub Releases).
- Does not add new CI capabilities — no new test matrices, deployment
  targets, or scanning tools. Scope is trigger conditions and minute economy
  on the existing jobs only.
- Does not force every npm major version bump through if it would break the
  build; the dependency run may hold a package back and record why.

## Wave Manifest

```yaml
wave_manifest:
  wave: 001
  slug: dependency-ci-refresh
  status: completed
  sources: []
  phases:
    - id: P1
      name: Dependency Foundation & CI Optimization
      gate:
        criteria:
          - 'npm ci installs cleanly against the upgraded lockfile'
          - 'npm run lint passes on the upgraded dependency set'
          - 'npm test passes on the upgraded dependency set'
    - id: P2
      name: Icon Package Refresh
      gate:
        criteria: []
  runs:
    - id: W-1
      slug: npm-dependency-upgrade
      phase: P1
      depends_on: []
      run: 1
      delegation: standard
      likely_paths:
        - 'package.json'
        - 'package-lock.json'
        - 'source/**/*.ts'
      focus: 'bring npm dependencies current, including the 4 pending majors (@types/node, csv-parse, mocha, typescript), without breaking the build'
    - id: W-2
      slug: ci-cd-minute-optimization
      phase: P1
      depends_on: []
      run: 2
      delegation: hard_judgment
      delegation_reason: 'modifies GitHub Actions workflows that control production publishing (npm publish, GitHub Pages, GitHub Release on tag push) — a misconfigured trigger could break or duplicate a live release'
      likely_paths:
        - '.github/workflows/**'
      focus: 'make CI trigger automatically on every push and pull request while eliminating duplicate Build runs on the same commit and cancelling superseded runs'
    - id: W-3
      slug: aws-icons-refresh
      phase: P2
      depends_on: [W-1]
      run: 3
      delegation: standard
      likely_paths:
        - 'source/library/packages/aws/**'
        - 'test/resolve-aws-icons.spec.mjs'
      focus: 'use aws-package-upgrading to pull the current AWS architecture icons asset package, or confirm the pinned snapshot is still current'
    - id: W-4
      slug: azure-icons-refresh
      phase: P2
      depends_on: [W-1]
      run: 4
      delegation: standard
      likely_paths:
        - 'source/library/packages/azure/**'
        - 'test/resolve-azure-icons.spec.mjs'
      focus: 'use azure-package-upgrading to move the Azure icon set from V23 to the confirmed-available V24'
    - id: W-5
      slug: fontawesome-icons-refresh
      phase: P2
      depends_on: [W-1]
      run: 5
      delegation: standard
      likely_paths:
        - 'source/library/packages/fontawesome/**'
      focus: 'use fontawesome-package-upgrading to move Font Awesome from 7.2.0 to the confirmed-available 7.3.1'
    - id: W-6
      slug: gcp-icons-refresh
      phase: P2
      depends_on: [W-1]
      run: 6
      delegation: standard
      likely_paths:
        - 'source/library/packages/gcp/**'
      focus: 'use gcp-package-upgrading to refresh the GCP icon set, whose content was last substantively touched in 2023'
    - id: W-7
      slug: simpleicons-refresh
      phase: P2
      depends_on: [W-1]
      run: 7
      delegation: standard
      likely_paths:
        - 'source/library/packages/simpleicons/**'
      focus: 'use simpleicons-package-upgrading to move Simple Icons from 16.9.0 to the confirmed-available 16.34.0'
```

## Phase P1 — Dependency Foundation & CI Optimization

| # | Run | Slug | Depends on | Focus | Scope | Exit evidence |
|---|-----|------|------------|-------|-------|---------------|
| W-1 | — | `npm-dependency-upgrade` | — | Bring npm dependencies current without breaking the build | Follow `npm-dependency-management`; upgrade all 17 outdated packages where safe, including the 4 majors (`@types/node`, `csv-parse`, `mocha`, `typescript`), holding back and documenting any that break lint/test | `npm outdated` shows nothing actionable (or a documented hold-back); `npm run lint` and `npm test` pass |
| W-2 | — | `ci-cd-minute-optimization` | — | Trigger CI automatically on push and PR with the minimum work per commit | Audit `.github/workflows/*.yml(aml)`; fix the duplicate `Build` run on open-PR commits (branch-filter `push`, keep `pull_request` unfiltered or mirrored) and add `concurrency` groups to cancel superseded runs; keep tag-triggered release/publish jobs intact | A push to a feature branch with an open PR runs `Build` exactly once for that commit; a second rapid push cancels the first run in progress; tag pushes still trigger `GithubRelease`/`GithubPages`/`NpmPublication` |

**Gate:** `npm ci` installs cleanly against the upgraded lockfile, and `npm run lint` and `npm test` both pass on the upgraded dependency set.

## Phase P2 — Icon Package Refresh

| # | Run | Slug | Depends on | Focus | Scope | Exit evidence |
|---|-----|------|------------|-------|-------|---------------|
| W-3 | — | `aws-icons-refresh` | W-1 | Pull the current AWS architecture icons, or confirm currency | Follow `aws-package-upgrading` | `generate:workdir -p aws` shows plausible counts against the new snapshot; pinned snapshot matches latest upstream or the run records why not; full `distribution/aws/**` render deferred to CI (see note below) |
| W-4 | — | `azure-icons-refresh` | W-1 | Move Azure icons from V23 to V24 | Follow `azure-package-upgrading` | Package rebuilds via `npm run generate:package -- azure`; pinned version is V24 |
| W-5 | — | `fontawesome-icons-refresh` | W-1 | Move Font Awesome from 7.2.0 to 7.3.1 | Follow `fontawesome-package-upgrading` | `generate:workdir -p fontawesome` shows plausible counts (2883/3 modules) against 7.3.1; pinned version is 7.3.1; full `distribution/fontawesome/**` render deferred to CI (see note below) |
| W-6 | — | `gcp-icons-refresh` | W-1 | Refresh the GCP icon set | Follow `gcp-package-upgrading` | Package rebuilds via `npm run generate:package -- gcp`; run records what changed since the 2023 baseline or confirms no change |
| W-7 | — | `simpleicons-refresh` | W-1 | Move Simple Icons from 16.9.0 to 16.34.0 | Follow `simpleicons-package-upgrading` | `generate:workdir -p simpleicons` shows plausible counts against 16.34.0; pinned version is 16.34.0; full `distribution/simpleicons/**` render deferred to CI (see note below) |

**Note on W-3/W-5/W-7's relaxed exit evidence**: mid-execution, the user
observed the fontawesome and simpleicons full containerized builds running
66+ minutes and 3h51m+ of CPU time respectively on this local host while
competing for CPU with each other, and directed that this wave never do a
full package rebuild for verification — `generate:workdir`'s fast,
Podman-free discovery step is sufficient, with the small `eip` package as
an optional pipeline sanity check. W-4 and W-6 already completed full real
builds before this instruction landed and are unaffected. For W-3/W-5/W-7,
`distribution/<pkg>/**` is left stale relative to the newly-pinned
version/snapshot; the repo's existing `package-builder.yaml` GitHub Actions
workflow (`workflow_dispatch`) is the intended path to actually regenerate
it, on CI infra, once this branch is pushed.

## Dependency View

```
W-1 npm-dependency-upgrade
 ├──> W-3 aws-icons-refresh
 ├──> W-4 azure-icons-refresh
 ├──> W-5 fontawesome-icons-refresh
 ├──> W-6 gcp-icons-refresh
 └──> W-7 simpleicons-refresh

W-2 ci-cd-minute-optimization   (no dependency edges — proceeds independently)
```

## Risks

- **Dependency rationale for W-3..W-7 on W-1 (re-phase, not a preference):**
  `csv-parse` is used directly by `aws`, `c4model`, `c4k8s`,
  `domainstorytelling`, `eventstorming`, and by the shared
  `source/generator/workdir/discovery.ts`. If W-1 lands a `csv-parse` major
  bump, any icon-package run editing the same files afterward must target
  the final, already-green API — not guess at it concurrently. This is why
  W-3..W-7 depend on W-1 rather than merely being phase-ordered after it.
- **No same-batch path overlap found.** W-1 (`package.json`,
  `package-lock.json`, `source/**/*.ts`) and W-2 (`.github/workflows/**`)
  share Phase P1 but touch disjoint paths — **concurrent-safe**, different
  files entirely. W-3..W-7 (Phase P2) each touch only their own
  `source/library/packages/<name>/**` — **concurrent-safe**, no shared
  package between them.
- **Major version bumps in W-1** (`typescript` 6→7, `mocha` 11→12,
  `csv-parse` 6→7, `@types/node` 25→26) may carry breaking changes. The run
  should hold back and document any major that fails lint/test rather than
  force it through.
- **AWS and GCP freshness is not fully confirmed at wave-authoring time.**
  AWS's upstream icons page is JS-rendered and could not be queried by a
  simple HTTP check; GCP's URL carries no version at all. Both W-3 and W-6
  may legitimately conclude "already current" at execution time — a valid
  outcome, not a planning error.
- **W-2 touches live publishing workflows.** `continuous-integration.yaml`'s
  tag-triggered jobs (`GithubRelease`, `GithubPages`, `NpmPublication`) must
  keep firing exactly as before; a branch-filter mistake on the `push`
  trigger could silently stop a real release from publishing. This is the
  reason W-2 carries `hard_judgment`.

## Completion Criteria

- `npm outdated` shows no further action needed — each previously-flagged
  package is either upgraded or held back with a recorded reason.
- Each of AWS, Azure, Font Awesome, GCP, and Simple Icons packages' pinned
  upstream version/date matches the latest available at the time its run
  executed, or the run recorded why not.
- `npm run lint` and `npm test` pass on the final state of both phases.
- For AWS, Font Awesome, and Simple Icons specifically (per the
  user-directed scope reduction above): the pinned version/snapshot is
  updated and `generate:workdir` confirms plausible counts, even though
  `distribution/<pkg>/**` itself is not regenerated in this wave — that
  regeneration is explicitly deferred to `package-builder.yaml` on CI,
  named as a follow-up in the close-out report, not silently dropped.
- CI runs automatically on every push and every pull request, no longer
  runs the `Build` job twice for the same commit on an open pull request,
  and cancels a run superseded by a newer push on the same ref — while tag
  pushes still trigger `GithubRelease`, `GithubPages`, and `NpmPublication`
  unchanged.
