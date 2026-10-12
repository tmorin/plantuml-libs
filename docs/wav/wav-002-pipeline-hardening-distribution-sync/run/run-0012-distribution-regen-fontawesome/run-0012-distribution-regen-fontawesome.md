---
type: run
run: 0012
status: completed
wave: 002
profile: single-document
---

# Run 0012: Distribution regen: Font Awesome

Wave W-5 of wav-002 (Phase P2). Single-document profile: this body carries
scope, decisions, canonical impact, tasks, verification and findings.

## Scope

Regenerate `distribution/fontawesome/**` against the already-pinned Font
Awesome 7.3.1 release (`ICONS_VERSION` in
`source/library/packages/fontawesome/index.ts`, bumped by W-2/commit
`ad17b0e077`; archive fetch validation by `3a1424b4e9`) using GitHub CI
(`.github/workflows/package-builder.yaml`, `workflow_dispatch`,
`pkgName=fontawesome`), never local Podman. Commit only
`distribution/fontawesome/**` (explicit paths, `git rm` for deletions) and push
to `wave-002`. `distribution/bootstrap.puml` and `distribution/README.md` must
stay byte-identical to the committed baseline.

Out of scope: aws/simpleicons distributions, tags, master, PRs, workflow edits.

## Baseline (before)

- `HEAD` at start: `9927f2c4bb` on `wave-002`.
- `distribution/fontawesome`: 17165 files (Brands 3523, Regular 1639, Solid 12001,
  plus bootstrap/README/_0 files). Last regen: `bf1956dc53`.

## Decisions

- D1 (review pass, KDMLLC-equivalent): the task is mechanical and has no design
  space; no PRD/TDD/pln. Risk concentrated in git hygiene with two sibling runs
  on the same tree, handled by explicit-path staging.
- D2 (open question, resolved by reading the workflow): `package-builder.yaml`'s
  `push-distribution` job itself does `git add -A; git commit; push` to the
  dispatched ref. It is a workflow side effect of the authorised dispatch
  (same branch, `wave-002`). It is not suppressible by an input. Handling:
  proceed, then reconcile whatever it does (see Findings).

## Canonical impact

None: generated distribution output only; no architecture/domain packets.

## Tasks

- [x] T1 Dispatch `package-builder.yaml` on `wave-002` with `pkgName=fontawesome`.
- [x] T2 Watch to completion; confirm `generate-distribution` result.
- [x] T3 Download `distribution` artifact into scratch; extract; copy only
      `distribution/fontawesome/**`; record whether bootstrap/README differ.
- [x] T4 Stage explicit paths, commit, rebase, push.
- [x] T5 Verify (counts, bootstrap/README unchanged, ls-remote).

## Findings

- CI run 38171216203 (wave-002, pkgName=fontawesome, dispatched 20:12Z): `generate-workdir` success,
  `generate-distribution` success (about 1h10m), `push-distribution` FAILED: the workflow's own
  `git add -A; commit; push` was rejected because the simpleicons run (38171487545) had pushed
  first (non-fast-forward; CI commit 8ca5415e0 never landed). A first aws run (38171235194)
  failed in `generate-distribution`; that is run 0011's matter.
- Per the coordinator's protocol, waited for all three runs to finish, then fetched the tip
  (86889ca04e, only distribution/simpleicons changed vs 90dffcc146; bootstrap.puml and
  README.md identical to baseline). Tip's distribution/fontawesome was still the baseline, so
  the artifact's distribution/fontawesome/** was applied (rsync --delete) and committed by hand.
- Artifact's distribution/bootstrap.puml and distribution/README.md are byte-identical to the
  committed baseline (90dffcc146); not touched. Artifact also holds SUMMARY.md; ignored.
- Counts (files): before 17165, after 17303 (+138 added, 0 deleted, 5766 modified).
  Brands 3523 -> 3655 (+44 icons x 3 files), Regular 1639 -> 1639, Solid 12001 -> 12007 (+2 icons).
  Modified files are mostly the version/URL strings of the existing sprites.
- Wave-level finding: `push-distribution` in package-builder.yaml (wipe distribution/, `git add -A`,
  push to the dispatched ref) is unsafe for concurrent dispatches on one ref: whichever finishes
  first wins, the others fail non-fast-forward, and a later success would revert the others.
  Serial dispatch, or a push step that restricts itself to its own package and rebases, is needed.

