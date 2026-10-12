---
type: run
run: 0013
status: completed
wave: 002
profile: single-document
---

# Run 0013: Distribution regen: Simple Icons

## Scope

Wave 002 W-6. Regenerate `distribution/simpleicons/**` against the
already-pinned Simple Icons 16.34.0 (pinned by W-2/wav-001, commit
3a1424b4e9) using `.github/workflows/package-builder.yaml`
(`workflow_dispatch`, `pkgName=simpleicons`, `--ref wave-002`) on GitHub CI.
No local Podman render. Commit only `distribution/simpleicons/**`.

## Decisions

- Profile `single-document`: the work is a bounded CI dispatch plus a
  copy/commit; no PRD/TDD/pln drafted.
- Branch `wave-002` is the authorized branch; no master, tags, PRs.
- `distribution/bootstrap.puml` and `distribution/README.md` stay at their
  committed baseline; only `distribution/simpleicons/**` is taken from the
  artifact.
- Risk noted before dispatch (KDMLLC/C review of the workflow): the
  workflow's own `push-distribution` job runs `git add -A`, commits and
  pushes to the dispatched ref on success. It is part of the authorized
  workflow, but it can carry changes outside `distribution/simpleicons/**`
  (e.g. bootstrap.puml/README.md). Handling: after the run, compare the
  pushed state against the baseline and restore the two shared files with a
  follow-up commit if they differ. Never force-push.
- Second risk (sibling interaction): `push-distribution` does a fresh
  checkout, `rm -Rf distribution`, then replaces it wholesale with its own
  artifact. With three runs (aws, fontawesome, simpleicons) finishing at
  different times, the last to push reverts the others' regenerated
  directories (its artifact holds the pre-wave version of them). Handling:
  after my run, diff the branch against my artifact for
  `distribution/simpleicons` and re-commit it if a sibling push reverted it;
  report any clobber of aws/fontawesome rather than touching them.

## Canonical impact

None: content-only regeneration of a generated distribution directory; no
architecture or domain invariants change.

## Tasks

- [x] Baseline counts of `distribution/simpleicons` (tracked files: 20411, HEAD 90dffcc146)
- [x] Dispatch workflow (run 38171487545, 2026-10-11T20:16Z; siblings: aws 38171235194, fontawesome 38171216203)
- [x] Watch; record generate-distribution result
- [x] Download artifact into scratch dir (via the artifacts zip API; `gh run download` refused with a path-traversal error); extract; compare to the branch tip (no copy needed, see Findings)
- [x] Verify counts, bootstrap.puml/README.md unchanged
- [x] No own commit needed: the workflow's push-distribution commit 86889ca04e is the run's commit (matches the artifact exactly)

## Verification

- Run 38171487545 (workflow_dispatch, ref wave-002, pkgName=simpleicons):
  conclusion success; jobs Generate the workdir, Generate the distribution
  and Push the distribution all success.
- Per the coordinator protocol (no own push while any of the three runs was
  in progress), I waited for all three: aws 38171235194 failed in
  generate-distribution (Other templates phase, push skipped), fontawesome
  38171216203 generated fine but its push-distribution failed
  (non-fast-forward after the simpleicons push), simpleicons succeeded.
- Pushed tip origin/wave-002 = 86889ca04e `feat(simpleicons): refresh the
  package` (author package_builder), parent 90dffcc146. It touches only
  `distribution/simpleicons/**`: 402 added, 13715 modified, 0 deleted
  (14117 files changed, 49097 insertions, 37017 deletions). Tracked files in
  distribution/simpleicons: 20411 before, 20813 after.
- `distribution/simpleicons/**` on the tip is byte-identical (diff -r) to the
  artifact's `distribution/simpleicons` (20813 files).
- `distribution/bootstrap.puml` and `distribution/README.md`: identical in the
  artifact, on the tip and at the baseline 90dffcc146 (cmp). No corrective
  commit needed.
- Sanity: sample file `_9Gag.puml` carries regenerated sprites; ICONS_VERSION
  in source is 16.34.0.

## Findings

- `push-distribution` (wipe distribution, replace with its own artifact,
  `git add -A`, commit, push) makes concurrent package-builder runs racy.
  Here the simpleicons push won and the fontawesome push was rejected as
  non-fast-forward; no revert occurred. The aws run failed before pushing.
- `gh run download` failed with a path-traversal error on the artifact; the
  zip was fetched via `gh api .../actions/artifacts/<id>/zip` instead.
- Simple Icons generate-distribution took about 78 minutes on CI.
- Canonical impact: none.
