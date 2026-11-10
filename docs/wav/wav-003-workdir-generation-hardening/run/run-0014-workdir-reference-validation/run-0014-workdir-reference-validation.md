---
type: run
run: 0014
status: completed
profile: TDD+pln
wave: 003
---

# Run 0014 - workdir-reference-validation

Run of wave 003 (workdir-generation-hardening), manifest id W-1.

## Verification

Stage 11, 2026-11-10: `npm test` 16 passing, `npm run lint` exit 0, prettier clean on the three changed files, `validation.ts` has no import of `./index`, `create()` has one import and one call of `validatePackage`. `generate:workdir` on all packages exits 0 (WR-5, 5m17s); the negative check on `eip` (one example template renamed, then restored) exits 1 with `invalid package "eip"` naming the template.

Review pass: inline (not independent), the Stage 11 agent re-read the code paths against each criterion; each task was independently verified earlier.
