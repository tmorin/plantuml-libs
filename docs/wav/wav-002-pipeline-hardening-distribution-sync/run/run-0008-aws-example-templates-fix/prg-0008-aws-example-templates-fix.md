---
type: prg
status: completed
date: 2026-10-11
related:
  - docs/wav/wav-002-pipeline-hardening-distribution-sync/run/run-0008-aws-example-templates-fix/run-0008-aws-example-templates-fix.md
run: 0008
wave: 002
---

# Progress Log: aws-example-templates-fix

## Log

- 2026-10-11: Run set up under `complete-run` (profile `single-document`;
  directory and number given by `complete-wave`). Confirmed
  `source/templates/aws/` absent and the two examples declared.
- 2026-10-11: Found both templates in git history (`30cc46e53f`, dropped by
  `66f2b51d85`); restored with `aws/` URNs. One include (IAM add-on) no
  longer exists in the Q3 2026 catalog; replaced by the KMS icon.
- 2026-10-11: Rewrote the AWS upgrade how-to; fixed Node prerequisite.
- 2026-10-11: Verified (workdir, include resolution, lint, tests). Trimmed
  Podman probes were inconclusive and are not claimed as evidence; real
  render confirmation falls to W-4.
- 2026-10-11: Reopened by the coordinator after the first CI render failed in
  the Other phase on a stale `groups.csv` icon reference. Fixed the token,
  audited every aws URN reference against a scratch-workdir library.yaml (all
  resolve), assessed `families.csv` (cosmetic only, reported), lint/tests
  green. Committed locally on `wave-002`, not pushed.

## Findings

- The wave plan's "can't author a template from names alone" premise was
  wrong; the templates were recoverable from history. Removal was not needed.
- The sibling runs rewrote the shared `.workdir/library.yaml` while this run
  was working (it flipped from `aws` to `eip` between two commands); anything
  needing a specific package's workdir should use `-w <scratch dir>`.

- `families.csv` lacks nine families of the Q3 2026 catalog; effect is default
  styling only (see run document).

## Lessons Learnt

- The rename commit `66f2b51d85` (`aws-q3-2025` -> `aws`) deleted the
  example templates without re-adding them under the new name, which broke
  the pipeline silently;
  `generate:workdir` does not check that declared example templates exist.
- Re-pinning a catalog needs a check that every URN referenced from package
  CSVs/templates still resolves; `generate:workdir` does not do it and the
  failure only surfaces deep in the container render.
