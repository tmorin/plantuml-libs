---
type: run
run: 0008
status: completed
wave: 002
---

# Run 0008: AWS example templates fix

Profile: `single-document` (scope arrives settled from wave 002's W-1, the
design has no live alternative worth a tdd, one agent carries one sequence).
Scope, decisions, verification, canonical impact and findings are answered in
this body; progress is in `prg-0008-aws-example-templates-fix.md`.

## Scope

1. Make AWS's two declared examples ("Chef Automate Architecture on AWS",
   "Git to S3 Webhooks") stop aborting the renderer's "Render Atomic
   Templates (Other)" phase: `source/library/packages/aws/index.ts` declares
   `aws/examples/chef_automate_architecture_on_aws.tera` and
   `aws/examples/git_to_s_3_webhooks.tera`, but `source/templates/aws/` did
   not exist.
2. Bring `doc/howto.upgrade-aws-package.md` back in line with the single
   `aws/` folder + `FOLDER_DATE`/`ICONS_URL` architecture.

Done means: both `.tera` templates exist under `source/templates/aws/examples/`
(or the examples are no longer declared), every URN they `include` resolves
in the current catalog, `npm run lint` and `npm test` pass, and the how-to
contains no versioned-folder-rename step.

## Decisions

- **D1 - Restore the templates rather than remove the examples.** The wave
  plan assumed a faithful template could not be authored "from the example
  names alone". That premise was wrong: both templates exist in git history
  (`66f2b51d85^:source/templates/aws-q3-2025/examples/*.tera`, added by
  `30cc46e53f`) and were dropped in the `aws-q3-2025` -> `aws` rename
  commit, which consolidated them into a folder that was never committed
  under the new name. Restoring the original diagrams is faithful by
  construction, so removal was rejected.
- **D2 - Re-target the include URNs.** `aws-q3-2025/` prefix became `aws/`.
  The Q3 2026 catalog no longer has `SecurityIdentityCompliance`
  (`AwsIdentityAccessManagementAddOn`, used for the "AWS KMS key" node); it
  was replaced by `aws/Architecture/SecurityIdentity/AwsKeyManagementService`
  (macro `AwsKeyManagementService`), the actual KMS icon, which keeps the
  node's label and meaning. All other 10 includes resolve unchanged.
- **D3 - No change to `source/library/packages/aws/index.ts`.** The example
  declarations and the `toSnakeCase` template naming were already correct.
- **D5 - Follow-up: fix the stale `groups.csv` icon reference.** The first
  real CI render (run 38171235194, branch `wave-002`) failed in "Render
  Atomic Templates (Other)" on `render_atomic_other_task_3680` ("unable to
  read the cached sprite file .cache/aws/Architecture/AppIntegration/
  AwsStepFunctionsXs.puml"). Root cause, found by run 0011: `groups.csv`
  line 16 referenced `aws/Architecture/AppIntegration/AwsStepFunctions`,
  which the Q3 2026 catalog names `ApplicationIntegration`. One-token fix
  in `source/library/packages/aws/groups.csv`.
- **D6 - `families.csv` gaps reported, not fixed.** See Findings.
- **D4 - How-to rewritten around the real architecture.** Versioned-folder
  rename, factory class rename, global search/replace, nested-folder
  flattening, `BREAKING CHANGE` commit text, and `pkgName=aws-<version>` are
  replaced by: re-pin `ICONS_URL` + `FOLDER_DATE`, check zip layout and
  `families.csv`/`groups.csv`, keep example templates in sync with declared
  examples and their includes resolvable, `pkgName=aws`, and an explicit
  "no full local Podman render" note. Node prerequisite corrected from 22 to
  24 (matches `engines`).

## Canonical impact

None. This repository declares no `arc`/`dom` registers (no `docs/CLAUDE.md`
register declaration, no `docs/bkg/`, `docs/ana/`); the change restores two
source templates and edits one how-to. No analysis was fulfilled.

## Tasks

| ID | Task | Status |
|----|------|--------|
| T1 | Restore the two templates from git history under `source/templates/aws/examples/` with `aws/` URNs | done |
| T2 | Resolve every include against `.workdir/library.yaml`; replace the dead IAM add-on URN | done |
| T3 | Rewrite `doc/howto.upgrade-aws-package.md` | done |
| T4 | Verify (workdir, lint, tests, review of diff) | done |

## Verification

- `npm run generate:workdir -- -p aws`: ok; `.workdir/library.yaml` lists
  `aws/examples/chef_automate_architecture_on_aws.tera` and
  `aws/examples/git_to_s_3_webhooks.tera`; 305/26/482/17 items discovered.
- All 11 distinct `include("aws/...")` URNs grep-resolved in the generated
  `library.yaml` (10/11 initially, the 11th fixed per D2 and re-verified
  against `aws/Architecture/SecurityIdentity/AwsKeyManagementService`).
- `npm run lint`: exit 0. `npm test`: 11 passing.
- **Not verified:** the actual "Other" phase render of the two examples. A
  full AWS Podman render is prohibited by `CLAUDE.md`; several attempts at a
  trimmed-manifest probe against the `plantuml-generator` image failed for
  reasons unrelated to the templates (bootstrap/snippet templates and the
  sprite cache need the full module set), so they discriminate nothing and
  are not claimed as evidence. Confirmation is deferred to wave run W-4
  (`package-builder.yaml` dispatch for `aws`), whose gate is exactly this.

## Follow-up verification (D5)

A scratch workdir (`generate:workdir -p aws -w <scratch>`, shared `.workdir`
untouched) was checked for every `aws/...` URN referenced by the package.
Result: 0 unresolved of 834 catalog URNs.
- `groups.csv` `icon_reference`, the only URN-bearing column in the aws
  CSVs: 13 non-empty values, 13 resolve after the fix (12 under
  `aws/Resource/GroupIcons/*`, plus the Step Functions one). The generated
  manifest holds 13 `type: Reference` icons, i.e. exactly these.
- `families.csv` has only `name,color` (no URNs).
- `include("aws/...")` in `source/templates/aws/**`: 11 distinct URNs (12
  occurrences), all resolve.
- `source/library/packages/aws/index.ts`: no hard-coded `aws/...` URNs
  (they are derived); `templates/bootstrap.tera` holds none.
- Cached sprites are read in the Other phase for `Reference` icons only,
  which are the 13 above, so no further source of this failure class exists
  in the aws package. `npm run lint` clean, `npm test` 11 passing. The
  fix itself is not render-verified locally (Podman render prohibited).

## Findings

- `families.csv` is used only by `templates/bootstrap.tera`, which emits one
  `skinparam Rectangle<<{name}Family>>` colour block per row. A family with
  no row simply has no skinparam block, so those items' IconGroup frames fall
  back to PlantUML's default styling: no abort, a cosmetic regression. Nine
  families used by the Q3 2026 catalog have no row (items affected):
  `ArtificialIntelligence` 51, `CloudFinancialManagement` 7, `Databases` 50,
  `Games` 3, `GroupIcons` 15, `IoT` 75, `ManagementTools` 33,
  `MigrationModernization` 22, `SecurityIdentity` 56 (older spellings
  `Database`, `SecurityIdentityCompliance`, `MachineLearning`, `GameTech`,
  `AwsCostManagement`, `MigrationTransfer`, `LoT` are present). Not fixed
  here: not breaking, and picking colours is a judgment call. Fix is adding
  rows to `families.csv` aliasing the existing colours.

- The committed `distribution/aws/*.puml` examples still carry the old
  `SecurityIdentityCompliance` include (rendered from an older release);
  W-4's regeneration will replace them.
- `scripts/resolve-aws-icons.mjs` still returns `newVersion: aws-qN-YYYY`
  (a label from the abandoned versioned-folder scheme). Harmless; the how-to
  now says to use only `downloadUrl`.
- Its live result (`Icon-package_01302026`) differs from the pinned
  `07312026`; unrelated to this run, noted for the wave.
