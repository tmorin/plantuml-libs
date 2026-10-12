---
type: run
run: 0011
status: completed
wave: 002
---

# Run 0011: Distribution regen: AWS

Profile: `single-document` (scope arrives settled from wave 002's W-4; the
work is one CI dispatch plus one scoped commit, no design alternative worth a
tdd). Scope, decisions, verification, canonical impact and findings are
answered in this body.

## Scope

Regenerate `distribution/aws/**` against the already-pinned Q3 2026 snapshot
(`FOLDER_DATE` 07312026) using `.github/workflows/package-builder.yaml`
(`workflow_dispatch`, `pkgName=aws`, `--ref wave-002`), now that W-1 (restored
example templates) and W-2 (fetch validation) are in the branch. Commit only
`distribution/aws/**`.

Done means: CI's `generate-distribution` job for `aws` completes, including
the "Render Atomic Templates (Other)" phase with the two example templates;
`distribution/aws/**` is committed and pushed on `wave-002`;
`distribution/bootstrap.puml` and `distribution/README.md` are unchanged
from baseline.

## Decisions

- **D2 - Let the workflow's own `push-distribution` job commit.** Per the
  coordinator protocol, push nothing from this run while a regen run is in
  flight; after the run, compare the pushed tip with the artifact and only
  land a corrective commit if they differ (they did not).

- **D1 - Take only `distribution/aws/**` from the artifact.** Per the
  dispatch authority: stage explicit paths only, never `git add -A`; the
  two shared files are never taken from the artifact.

## Canonical impact

None. The repository declares no `arc`/`dom` registers; the run commits
generated distribution content. No analysis was fulfilled.

## Tasks

| ID | Task | Status |
|----|------|--------|
| T1 | Confirm branch and that origin/wave-002 carries W-1/W-2 | done |
| T2 | Dispatch package-builder.yaml pkgName=aws on wave-002 and watch | done (first attempt 38171235194 failed on a stale groups.csv reference, fixed in 6c7fdc873c; second attempt 38177248104 succeeded) |
| T3 | Download artifact to scratch, diff against pushed tip | done |
| T4 | Copy distribution/aws/** only, stage explicit paths, commit | done, not needed: the workflow's push-distribution commit 023c9bff15 is this run's commit |
| T5 | Rebase on origin/wave-002, push, verify with ls-remote | done (023c9bff15 is the remote tip; this run's doc commit follows) |

## Verification

- Attempt 1, CI run 38171235194 (built 90dffcc146): failed in the Other
  phase, see F1. Nothing pushed.
- Attempt 2, CI run 38177248104 (built db350f6dac, includes the groups.csv
  fix 6c7fdc873c): all three jobs succeeded. Log phases: Cleanup, Create
  Resources (~9 min), Snippets, **Other (completed, no error)**, Composed
  Templates, Sources. First end-to-end render of the two restored example
  templates: `distribution/aws/chef_automate_architecture_on_aws.{puml,png}`
  and `distribution/aws/git_to_s3_webhooks.{puml,png}` now exist (absent
  before).
- `push-distribution` pushed `023c9bff15 feat(aws): refresh the package`
  (package_builder). `git ls-remote origin wave-002` = 023c9bff15.
- Artifact (distribution.tar, extracted to a scratch dir) vs pushed tip:
  `distribution/aws`, `distribution/fontawesome`, `distribution/simpleicons`
  identical (`diff -rq` empty). No corrective commit needed.
- `distribution/fontawesome` and `distribution/simpleicons` on the tip: no
  diff against 9ea73d9963. `distribution/bootstrap.puml` and
  `distribution/README.md`: no diff against 90dffcc146. The artifact's
  versions of the two shared files were also identical to the tip.
- distribution/aws file count: 10019 (db350f6dac) -> 9851 (023c9bff15),
  -168. 5458 files changed (703 added, 871 deleted, 2643 modified, rest
  renames); consistent with a renamed-category snapshot (AppIntegration
  -> ApplicationIntegration, etc.). Nothing outside `distribution/aws/`
  changed in 023c9bff15.

## Findings

- **F1 (blocker) - stale icon reference in `source/library/packages/aws/
  groups.csv`.** CI log: `Render Atomic Templates (Other)` phase failed,
  work unit `render_atomic_other_task_3680`: "unable to read the cached
  sprite file .cache/aws/Architecture/AppIntegration/AwsStepFunctionsXs.puml".
  Cause: `groups.csv` line 16 (group "AWS Step Functions workflow") has
  `icon_reference` `aws/Architecture/AppIntegration/AwsStepFunctions`, but the
  Q3 2026 snapshot's category is `ApplicationIntegration`
  (`aws/Architecture/ApplicationIntegration/AwsStepFunctions`, library.yaml
  line 389 of the CI workdir). Every other `icon_reference` in groups.csv
  resolves. The row dates from the `aws-q3-2025` -> `aws` rename
  (66f2b51d85) and was never exercised because no full render of the new
  snapshot had completed. Not transient; a re-dispatch would fail
  identically. Fix is a one-token edit in `groups.csv`, outside this run's
  likely_paths and authority, so it is escalated, not applied.
- **F2 - further failures may sit behind F1.** The pool aborts on the first
  failing unit; Create Resources took ~12 min, so each CI iteration is
  ~14 min. The Q3 2026 snapshot also renamed other categories
  (`Databases`, `ManagementTools`, `SecurityIdentity`); `families.csv` has
  colors for older spellings only. Unknown whether that matters downstream.
- **F3 - resolved.** F1 was fixed by run 0008 (6c7fdc873c); F2's category
  renames did not break the render. Attempt 2 completed cleanly.
- **F4 - `push-distribution` works as the commit mechanism** when only one
  regen run is in flight; with several concurrent runs it can revert
  siblings (see the coordinator's race note). It replaced the planned manual
  commit in T4.
