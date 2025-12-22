# How to upgrade the AWS package

This guide provides concrete, step-by-step instructions to upgrade the AWS package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and assumes you have already installed the required tools.

## Prerequisites
- [gh](https://cli.github.com/) (GitHub CLI) is installed and authenticated
- [Node.js](https://nodejs.org/) is installed

## Notes

- Ignore the following directories as they are generated and should not be modified directly:
  - `./.workdir`
  - `./distribution`
  - `./public`

## Steps

### 1. Discover the latest published AWS icons
- Run [resolve-aws-icons.mjs](../scripts/resolve-aws-icons.mjs) to get the latest AWS 
  icons version and URL.

### 2. Identify the TypeScript class
- Locate the AWS package source: `source/library/packages/aws-<old>` (e.g., `aws-q1-2024`).
- The main entry point is typically `index.ts` in that folder.

### 3. Create a new branch
```bash
git checkout master
git pull
git checkout -b feat/upgrade-aws-<new-version>
```

### 4. Rename the sources in `source/library/packages`
- Rename the existing AWS package folder to the new versioned folder (e.g., rename `aws-<old>` to `aws-<new>`).
- Update all references in the renamed folder from the old version to the new version (folder names, file names, and inside files).
- **Important**: If there are nested folders with the old version name (e.g., `aws-<new>/aws-<old>`), flatten the structure by moving contents up and removing empty directories.

### 5. Rename and update templates in `source/library/templates`
- Copy the AWS-specific templates folder from the old version: `source/templates/aws-<old>` → `source/templates/aws-<new>`.
- Update all references inside the renamed templates from `aws-<old>` to `aws-<new>`.
- **Critical**: Example templates are located here (e.g., `source/templates/aws-<version>/examples/`). Ensure they are copied and updated correctly, as missing examples will cause the pipeline to fail with template rendering errors.

### 6. Replace all references to the old AWS version
- Perform a global search and replace: change all occurrences of `aws-<old-version>` to `aws-<new-version>` in the following locations:
  - All files and subfolders under `./doc`
  - All files and subfolders under `./source` (including the library index)
  - All files and subfolders under `./test`
  - The file `./README.md`
- **Note**: Do not forget to update the class name in the factory (e.g., `AwsQ12024Factory` → `AwsQ32025Factory`) and the corresponding import in `source/library/index.ts`.

### 7. Ensure `FOLDER_DATE` and `ICONS_URL` are accurate
- In the new package's `index.ts`, update any constants or metadata for the release date and the official AWS icons URL.

### 8. Generate the work directory
```bash
npm run generate:workdir -- -p aws-<new-version>
```

### 9. Validate the work directory
- Check `.workdir/library.yaml` and ensure the new AWS package appears with correct modules and examples.
- Inspect `.workdir/.cache/aws-<new-version>` to ensure all expected elements are present.

### 10. Commit and push the branch
```bash
git add .
git commit -m "feat(aws): upgrade to <new-version> icons

BREAKING CHANGE: aws-<old-version> is replaced by aws-<new-version>"
git push --set-upstream origin feat/upgrade-aws-<new-version>
```

### 11. Trigger the Package Builder pipeline
- Use the GitHub CLI to trigger the workflow on your branch:
```bash
gh workflow run package-builder.yaml -f pkgName=aws-<new-version> -f pkgVersion=<new-version> --ref <your-branch>
```
- The pipeline will:
  1. Generate the work directory
  2. Render all PlantUML diagrams and examples
  3. Push generated distribution files back to the branch

### 12. Review the pipeline output and logs
- Ensure the pipeline completes without errors.
- If the pipeline fails or does not produce the expected outcome, fix the issues locally and use `git push --force` to update the branch (the pipeline may create a commit).

### 13. Pull the branch locally
```bash
git pull origin feat/upgrade-aws-<new-version>
```
If the pull fails due to conflicts, perform a rebase and resolve any conflicts.

### 14. Check the samples have been properly rendered
- Inspect the generated files in `distribution/aws-<new-version>`.
- Open the images and PlantUML files to verify correct rendering.

### 15. Adapt `README.md`
- Update `distribution/aws-<new-version>/README.md` to reflect new icons, modules, and examples.

### 16. Create a pull request
- If not already done, open a PR from your branch to `master`.
- Request review and address any feedback.

---

## Lessons Learned

### Workflow Design and Idempotency
- The package upgrade workflow is designed to be **idempotent** - running it multiple times produces the same result.
- The process is structured to be **small and reviewable**: each step builds on the previous one with clear validation points.
- **Key validation point**: Workdir generation (`npm run generate:workdir`) is the most critical step as it validates icon discovery, factory logic, and template rendering before the pipeline executes.

### Common Troubleshooting Patterns
- **Template-related failures are the most common** pipeline issues (missing files, broken references, or incorrect version strings).
- **Factory class updates** are critical when upgrading to new versions - the class name, imports, and exports must all be synchronized.
- **Search and replace operations** across the codebase are error-prone; use your editor's refactoring tools when possible.

### Pipeline Lifecycle
- The pipeline may create commits for generated distribution files. This is expected behavior when there are changes.
- Pipeline failures can be legitimate (errors to fix) or expected (e.g., no changes available).
- Always review pipeline logs carefully to distinguish between actionable errors and expected outcomes.

### Cross-Package Lessons
- For comparison on handling packages without versioning (like GCP), see [howto.upgrade-gcp-package.md](./howto.upgrade-gcp-package.md).
- That guide documents handling cases where pipeline fails due to "nothing to commit" - a scenario indicating the package is already up-to-date.

---

## Troubleshooting

### Pipeline fails with "unable to render" error
- **Cause**: Missing or incorrectly referenced example templates.
- **Solution**: Ensure `source/templates/aws-<new-version>/examples/` folder exists with all required `.tera` files, and that all references inside these files have been updated to use the new version string.

### Nested folder structure after renaming
- **Cause**: Package folder structure has nested folders with the old version name.
- **Solution**: Flatten the structure by moving all files from the nested folder to the parent and removing the empty nested directory.

### TypeScript compilation errors
- **Cause**: Factory class name or imports not updated correctly.
- **Solution**: 
  - Verify the factory class name matches the pattern (e.g., `AwsQ32025Factory`)
  - Update `source/library/index.ts` with the correct import and factory instantiation

### Pipeline creates a commit
- If the Package Builder pipeline creates a commit, you may need to use `git pull` to sync or `git push --force` if you want to override.

### General issues
- For more details on the build process, see [doc/howto.build-package.md](./howto.build-package.md) and [doc/explanation.package.md](./explanation.package.md).
- If `.workdir/library.yaml` or `.workdir/.cache` do not match expectations, review your changes to sources and templates.

---

This guide is intended to keep maintenance changes small, reviewable, and well-tested. For further details, consult the repository documentation.
