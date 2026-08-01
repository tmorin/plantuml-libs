# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

`@tmorin/plantuml-libs` — generates PlantUML sprite/icon libraries (AWS, Azure, C4, EIP, Font Awesome, GCP, Material, Simple Icons, etc.) and their documentation website. Node.js CLI entry point: `bin/gdiag.js`.

## Stack

- TypeScript, run via `ts-node`, `moduleResolution: Node`. Source uses ESM `import` syntax but the package has no `"type": "module"` and `bin/gdiag.js` uses `require()` — this is CommonJS, not ESM, despite the import syntax.
- Node.js >=24 <25 (see `engines` in package.json)
- Mocha + `assert.strict` for tests
- ESLint flat config (`eslint.config.mjs`) + Prettier (no semicolons, double quotes)

Check `package.json` for exact dependency versions rather than assuming.

## Architecture: Library vs Generator

- `source/library/` — one factory per technology package (`source/library/packages/{name}/index.ts`), each producing raw PlantUML sprite/icon resources. Packages are independent but follow shared patterns.
- `source/generator/workdir/` — orchestrates all library packages into a single `.workdir/library.yaml` manifest plus supporting assets. Run: `npm run generate:workdir`
- `source/generator/website/` — ETL pipeline (Extract → Transform → Load) that turns `.workdir/library.yaml` into the documentation site and `distribution/` output. Each stage implements the generic `Stage<I, O>` interface (`source/generator/website/stage.ts`).
- Full build: `scripts/generate-library.sh` chains workdir → website → distribution/. Requires Podman/Docker and the `plantuml-generator` image.
- Single-package build: `scripts/generate-package.sh <package>` (invoked via `npm run generate:package -- -p <package>`) regenerates the workdir then builds just that one package through Podman.

## Code Conventions

- Classes: private constructor + static factory, e.g. `static create(...): X`
- Import aliases for common modules: `import P from "path"`, `import Fe from "fs-extra"`, `import U from "util"`
- Import order: stdlib → external packages → local modules, no blank lines between groups
- `readonly` for immutable class properties; interfaces declared inline near their implementation
- async/await throughout, no callbacks or `.then()` chains

## Testing

- Files: `test/*.spec.js` / `test/*.spec.mjs`, run with `npm test`
- Run one file: `npm test -- test/gdiag.spec.js`
- Run by pattern: `npm test -- --grep "gdiag"`
- Test functions must be `async function` (not arrows) to access `this.timeout(...)`
- AWS/Azure spec files make real network requests — expect them to be slow
- Clean temp state in `beforeEach()`; use `.tmp/` for scratch output

## Commands

```bash
npm run generate:workdir            # library packages -> .workdir/library.yaml
npm run generate:website            # runs the website ETL stages
npm run generate:package -- -p aws  # regenerate + build a single package (needs Podman)
scripts/generate-library.sh         # full build: workdir -> website -> distribution/ (needs Podman/Docker)
npm test                            # mocha
npm run lint                        # eslint . (bin/**, test/**, .workdir/**, distribution/** ignored)
```

## Versioning & Commits

- Semantic Versioning via `standard-version` (`npm run release`)
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): description` — common types `feat`, `fix`, `refactor`, `chore`, `docs`, `test`
- Pre-releases: `npm run alpha` (`--prerelease alpha`)

## Package Upgrades

Upgrading an icon/shape package (AWS, Azure, EIP, Font Awesome, GCP, Material, Simple Icons) or npm dependencies has a dedicated skill under `.claude/skills/` for each package (e.g. `aws-package-upgrading`, `npm-dependency-management`) — use those rather than improvising the process.

## When in Doubt

Match existing patterns in the surrounding file over generic best practices — this codebase has consistent, if unconventional, house style (no semicolons, aliased imports, factory-pattern classes).
