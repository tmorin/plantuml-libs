---
type: wbc
wave: 002
status: completed
date: 2026-10-04
related:
  - docs/wav/wav-001-dependency-ci-refresh/prg-001-dependency-ci-refresh.md
  - docs/wav/wav-001-dependency-ci-refresh/wav-001-dependency-ci-refresh.md
---

# Wave 002 — Pipeline Hardening & Distribution Sync — Business Case

## Context

Wave 001 (closed 2026-10-04) upgraded npm dependencies, refreshed the CI
trigger/concurrency setup, and re-pinned AWS, Azure, Font Awesome, GCP, and
Simple Icons to current upstream versions. Its own progress log recorded
several things it found but deliberately did not fix, each written only
into `prg-001`'s Findings/Lessons Learnt because **this repository has no
`docs/bkg/` or `docs/ana/` register** — there is nothing to check beyond
that prior wave's own documents and the current repository state, which is
exactly what this wave's goal is sourced from (no tracked backlog item or
analysis exists to cite).

Re-verified directly against the repository today (2026-10-04), each item
still stands:

- **Distribution is stale relative to the versions wav-001 pinned.**
  `continuous-integration.yaml`'s `Build` job zips whatever is already
  committed under `distribution/` — it does not regenerate it. Wav-001's
  W-3/W-5/W-7 deliberately left `distribution/aws/**`,
  `distribution/fontawesome/**`, and `distribution/simpleicons/**` stale
  (by user direction, to avoid multi-hour local Podman renders) and named
  the existing `package-builder.yaml` `workflow_dispatch` workflow as the
  intended path to finish the job. Nobody has run it yet — the next tagged
  release would ship AWS/Font Awesome/Simple Icons content from before
  wav-001, despite the version constants already being current.
- **AWS's own content blocks a full AWS render.**
  `source/library/packages/aws/index.ts` declares two examples ("Chef
  Automate Architecture on AWS", "Git to S3 Webhooks") whose templates
  resolve to `source/templates/aws/examples/*.tera` — confirmed by direct
  search that no such directory exists anywhere in the repository. This is
  exactly the defect wav-001's W-3 hit and worked around by not committing
  a full render; it blocks `distribution/aws` regeneration regardless of
  who attempts it next.
- **The archive-fetch bug GCP hit is generic, not GCP-specific.**
  `source/generator/workdir/archive.ts`'s `fetchArchive()`/`download()`
  pipes the fetch response body straight to disk with no check of
  `response.ok` or status — confirmed by reading the file. Wav-001's W-6
  found this the hard way for GCP (a 404 silently became a 0-icon package)
  and patched only GCP's own zero-icons guard; every other package remains
  exposed to the same silent-corruption path.
- **No `workflow_dispatch` on CI.** `continuous-integration.yaml`'s `on:`
  block is still `push` (branch/tag-scoped) + `pull_request` only —
  confirmed by reading it. An un-PR'd branch push gets no CI signal at all,
  the gap wav-001's W-2 narrowed into and recorded as its own deferred
  `DEF-4` with no register to file it in.
- **The AWS upgrade how-to still describes an abandoned architecture.**
  `doc/howto.upgrade-aws-package.md` instructs renaming a versioned
  `source/library/packages/aws-<old>` folder to `aws-<new>` — confirmed by
  reading it against the actual current layout, a single `aws/` package
  folder with a `FOLDER_DATE` constant. Wav-001's W-3 had to work around
  this live; the next AWS upgrade will hit the same confusion.

## Problems / Opportunities

- Shipping stale distribution content on the next tag despite freshly
  re-pinned versions defeats the point of wav-001's icon-package refresh —
  consumers of the published package see no change.
- AWS's broken example templates block any full AWS render indefinitely,
  not just this wave's — the defect has to be fixed once, regardless of how
  many future waves touch AWS.
- An unvalidated archive fetch is a latent silent-corruption risk for every
  package's *next* upgrade, not only the GCP case that already happened.
- The missing `workflow_dispatch` trigger leaves every un-PR'd branch push
  with zero CI signal until a PR is opened.
- The stale AWS how-to will actively mislead the next person or agent who
  upgrades AWS, reproducing a confusion wav-001 already paid to resolve
  once.

## Options & Recommendation

**Option A (recommended):** Two phases. Phase 1 fixes the four concrete
defects (AWS example templates + its stale how-to, the generic archive-fetch
validation, the CI `workflow_dispatch` gap). Phase 2 uses the existing
`package-builder.yaml` `workflow_dispatch` workflow — not local Podman — to
regenerate and commit `distribution/aws`, `distribution/fontawesome`, and
`distribution/simpleicons`, each on its own ephemeral GitHub-hosted runner.
Running each package's build on CI rather than the local host sidesteps the
exact shared-`.workdir`/shared-tree collision wav-001's retrospective
documented happening three separate times (azure, fontawesome, eip-via-
simpleicons) when concurrent local Podman builds shared one working tree.

**Option B:** Regenerate the three stale `distribution/` directories
locally via `scripts/generate-package.sh`, same as wav-001 originally
attempted. Rejected — wav-001's own Lessons Learnt confirmed this approach
collaterally corrupted sibling packages' committed output three times, and
the user explicitly directed against further long local Podman renders
after the fontawesome and simpleicons builds ran 66+ minutes and 3h51m+ of
CPU respectively while competing for the same host.

**Option C:** Scope this wave to the four pipeline/CI fixes only, and leave
distribution regeneration for later. Rejected — it would leave the exact
stale-content-on-next-release gap wav-001 was supposed to close open
indefinitely, for no technical reason: `package-builder.yaml` already
exists for precisely this, unused.

## Vision

Every concrete defect wav-001 found but did not fix is closed: AWS's two
declared examples render without aborting the pipeline, any package's
archive fetch fails loudly on a bad response instead of silently shipping
an empty package, a branch can be built on demand from a push alone, the
AWS upgrade how-to matches the repository's actual architecture, and
`distribution/aws`, `distribution/fontawesome`, and `distribution/
simpleicons` each match their already-pinned version in real content, not
only in the version constant. The one genuine open question wav-001
surfaced — whether to add Google's newly redesigned, smaller icon set as a
separate module — remains explicitly undecided, left to a human or a
future ADR rather than guessed at here.
