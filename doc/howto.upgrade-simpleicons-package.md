# How to upgrade the Simple Icons package

This guide provides concrete, step-by-step instructions to upgrade the Simple Icons package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and assumes you have already installed the required tools.

## Prerequisites
- [gh](https://cli.github.com/) (GitHub CLI) is installed and authenticated
- [Node.js 22+](https://nodejs.org/) is installed

## Notes

- Ignore the following directories as they are generated and should not be modified directly:
  - `./.workdir`
  - `./distribution`
  - `./public`

## Steps

### 1. Check the Simple Icons source
- Visit [Simple Icons](https://github.com/simple-icons/simple-icons/releases) to check for the latest release.
- The Simple Icons package fetches from GitHub releases: `https://github.com/simple-icons/simple-icons/archive/{VERSION}.zip`
- Note the latest version number (e.g., `8.16.0`).

### 2. Identify the TypeScript class
- Locate the Simple Icons package source: `source/library/packages/simpleicons-14`.
- The main entry point is `index.ts` in that folder.

### 3. Create a new branch
```bash
git checkout master
git pull
git checkout -b feat/upgrade-simpleicons-<new-version>
```

### 4. Update the Simple Icons package factory
- Open `source/library/packages/simpleicons-14/index.ts`.
- Update the `ICONS_VERSION` constant to the new version:
  ```typescript
  const ICONS_VERSION = "<new-version>"
  ```
- The `ICONS_URL` will automatically use the new version from the constant.
- No other changes to the factory logic are typically needed unless the icon directory structure in the Simple Icons repository has changed.

### 5. Update templates in `source/templates/simpleicons-14` (if needed)
- Review `source/templates/simpleicons-14/bootstrap.tera` to ensure it's compatible with the current Simple Icons.
- The Simple Icons package does **not** use example templates (unlike some other packages such as AWS or GCP), so there is no `examples/` directory for this package.

### 6. Generate the work directory
```bash
npm run generate:workdir -- -p simpleicons-14
```

### 7. Validate the work directory
- Check `.workdir/library.yaml` and ensure the Simple Icons package appears with correct modules and items.
- Inspect `.workdir/.cache/simpleicons-14` to ensure all expected icons are present.
- Verify the number of items in the modules against the previous version (changes indicate new/updated icons).

### 8. Commit and push the branch
```bash
git add .
git commit -m "feat(simpleicons): upgrade to <new-version> icons

Updated Simple Icons package with latest icons from the official repository.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
git push --set-upstream origin feat/upgrade-simpleicons-<new-version>
```

### 9. Trigger the Package Builder pipeline
- Use the GitHub CLI to trigger the workflow on your branch:
```bash
gh workflow run package-builder.yaml -f pkgName=simpleicons-14 -f pkgVersion=<new-version> --ref <your-branch>
```
- The pipeline will:
  1. Generate the work directory
  2. Render all PlantUML diagrams and examples
  3. Push generated distribution files back to the branch
- The processing can take several minutes, a looping status check is recommended.

### 10. Review the pipeline output and logs
- Ensure the pipeline completes without errors.
- If the pipeline fails or does not produce the expected outcome, fix the issues locally and use `git push --force` to update the branch (the pipeline may create a commit).

### 11. Pull the branch locally
```bash
git pull origin feat/upgrade-simpleicons-<new-version>
```
If the pull fails due to conflicts, perform a rebase and resolve any conflicts.

### 12. Check the samples have been properly rendered
- Inspect the generated files in `distribution/simpleicons-14`.
- Open the images and PlantUML files to verify correct rendering.

### 13. Adapt `README.md`
- Update `distribution/simpleicons-14/README.md` to reflect any changes to the icon library.

### 14. Create a pull request
- If not already done, open a PR from your branch to `master`.
- Request review and address any feedback.

---

## Lessons Learned

### Workflow Design and Idempotency
- The package upgrade workflow is designed to be **idempotent** - running it multiple times produces the same result.
- The process is structured to be **small and reviewable**: each step builds on the previous one with clear validation points.
- **Key validation point**: Workdir generation (`npm run generate:workdir`) is the most critical step as it validates icon discovery, factory logic, and template rendering before the pipeline executes.

### Simple Icons Specifics
- Unlike versioned packages like AWS, the Simple Icons package does not require renaming or class changes.
- Only the version constant needs updating - the factory class name (`Simpleicons14Factory`) and URLs remain stable.
- The package organizes icons by their first character (e.g., `simpleicons-14/a`, `simpleicons-14/b`), which is handled automatically by the factory.

### Common Troubleshooting Patterns
- **Template-related failures** are common pipeline issues for some packages (missing files, broken references), but **do not apply to Simple Icons** as it does not use example templates.
- **URL validation**: Ensure the GitHub release archive exists before running the pipeline.
- **Icon count changes**: Small variations in icon count between versions are normal as Simple Icons adds/updates icons regularly.

### Pipeline Lifecycle
- The pipeline may create commits for generated distribution files. This is expected behavior when there are changes.
- Pipeline failures can be legitimate (errors to fix) or expected (e.g., no changes available).
- Always review pipeline logs carefully to distinguish between actionable errors and expected outcomes.

### Cross-Package Lessons
- For comparison on versioned packages (like AWS), see [howto.upgrade-aws-package.md](./howto.upgrade-aws-package.md).
- For comparison on non-versioned packages with custom structures (like GCP), see [howto.upgrade-gcp-package.md](./howto.upgrade-gcp-package.md).

---

## Troubleshooting

### Pipeline fails with "unable to render" error
- **Cause**: For the Simple Icons package, this error is usually **not** caused by example templates, because the factory returns `examples: []` and no example templates are used. The error may instead come from another package in the pipeline, or from invalid PlantUML generated for Simple Icons.
- **Solution**: First, inspect the pipeline logs to confirm which package is failing. If another package is failing, refer to that package's upgrade guide and its template directory. If the failure is within Simple Icons, look for issues such as invalid PlantUML syntax, corrupted or missing sprite files, or mismatches between generated resources and the manifest.

### Icon discovery fails or icon count is zero
- **Cause**: The GitHub release structure may have changed, or the archive URL is invalid.
- **Solution**: 
  - Verify the release exists on GitHub
  - Check that `ICONS_VERSION` is correctly set
  - Verify the glob pattern in the factory matches the archive structure

### TypeScript compilation errors
- **Cause**: Factory file syntax or imports are broken.
- **Solution**: 
  - Ensure the factory file `source/library/packages/simpleicons-14/index.ts` has valid TypeScript syntax
  - Verify all imports are correct

### Pipeline creates a commit
- If the Package Builder pipeline creates a commit, you may need to use `git pull` to sync or `git push --force` if you want to override.

### General issues
- For more details on the build process, see [doc/howto.build-package.md](./howto.build-package.md) and [doc/explanation.package.md](./explanation.package.md).
- If `.workdir/library.yaml` or `.workdir/.cache` do not match expectations, review your changes to sources and templates.

---

This guide is intended to keep maintenance changes small, reviewable, and well-tested. For further details, consult the repository documentation.
