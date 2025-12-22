# How to upgrade the Azure package

This guide provides concrete, step-by-step instructions to upgrade the Azure package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and assumes you have already installed the required tools.

## Prerequisites
- [gh](https://cli.github.com/) (GitHub CLI) is installed and authenticated
- [Node.js](https://nodejs.org/) is installed

## Notes

- Ignore the following directories as they are generated and should not be modified directly:
  - `./.workdir`
  - `./distribution`
  - `./public`

## Steps

### 1. Discover the latest published Azure icons
- Run [resolve-azure-icons.mjs](../scripts/resolve-azure-icons.mjs) to get the latest Azure icons version and URL.
- The script fetches the Microsoft Azure Icons page and extracts the latest version number and download URL.
- Compare the returned version with the current `ICONS_VERSION` in `source/library/packages/azure-{VERSION}/index.ts` to determine if an upgrade is needed.

### 2. Identify the TypeScript class
- Locate the Azure package source: `source/library/packages/azure-{VERSION}` (e.g., `azure-20`).
- The main entry point is `index.ts` in that folder.
- The factory class is named `AzureV{VERSION}Factory` (e.g., `AzureV20Factory`).

### 3. Create a new branch
```bash
git checkout master
git pull
git checkout -b feat/upgrade-azure-<new-version>
```

### 4. Create a new Azure package version folder
- If upgrading to a new version, create a new folder: `source/library/packages/azure-{NEW_VERSION}` (e.g., `azure-21`).
- Rename the contents from the previous version folder (e.g., `azure-20`) as a starting point.
- Update the `ICONS_VERSION` constant in the new folder's `index.ts` to match the new version number.
- Update the factory class name from `AzureV{OLD_VERSION}Factory` to `AzureV{NEW_VERSION}Factory` (e.g., `AzureV20Factory` → `AzureV21Factory`).

### 5. Update the Azure groups (if needed)
- Review `source/library/packages/azure-{NEW_VERSION}/groups.csv` to check if any custom groups need to be added or modified.
- This file defines custom groupings and styling for Azure concepts.
- Add new rows for new group concepts if applicable, following the existing format:
  ```csv
  name,front_color,background_color,border_thick,border_style,border_color,icon_reference
  ```

### 6. Update templates in `source/templates/azure-{NEW_VERSION}` (if needed)
- Rename the templates folder from the old version: `source/templates/azure-{OLD_VERSION}` → `source/templates/azure-{NEW_VERSION}`.
- Review `source/templates/azure-{NEW_VERSION}/bootstrap.tera` to ensure it's compatible with the current Azure icons.
- Check `source/templates/azure-{NEW_VERSION}/examples/` for any example templates that reference outdated icons or concepts.
- If the icon paths or category structure has changed significantly, update the example templates accordingly.
- **Important**: Example templates are located in `source/templates/azure-{NEW_VERSION}/examples/`. Ensure they render correctly with the new icons, as missing or broken references will cause the pipeline to fail.

### 7. Replace all references to the old Azure version
- Perform a global search and replace: change all occurrences of `azure-{OLD_VERSION}` to `azure-{NEW_VERSION}` in the following locations:
  - All files and subfolders under `./doc`
  - All files and subfolders under `./source` (including the library index)
  - All files and subfolders under `./test`
  - The file `./README.md`
- **Note**: Update the factory class name (e.g., `AzureV20Factory` → `AzureV21Factory`) and the corresponding import in `source/library/index.ts`.

### 8. Generate the work directory
```bash
npm run generate:workdir -- -p azure-<new-version>
```

### 9. Validate the work directory
- Check `.workdir/library.yaml` and ensure the Azure package appears with correct modules and examples.
- Inspect `.workdir/.cache/azure-<new-version>` to ensure all expected elements are present.
- Verify the number of items in the `azure-<new-version>/Item` module against the previous version (changes indicate new/updated icons).

### 10. Commit and push the branch
```bash
git add .
git commit -m "feat(azure): upgrade to <new-version> icons

BREAKING CHANGE: azure-<old-version> is replaced by azure-<new-version>"
git push --set-upstream origin feat/upgrade-azure-<new-version>
```

### 11. Trigger the Package Builder pipeline
- Use the GitHub CLI to trigger the workflow on your branch:
```bash
gh workflow run package-builder.yaml -f pkgName=azure-<new-version> -f pkgVersion=<new-version> --ref <your-branch>
```
- The pipeline will:
  1. Generate the work directory
  2. Render all PlantUML diagrams and examples
  3. Push generated distribution files back to the branch
- The processing can take several minutes, a looping status check is recommended.

### 12. Review the pipeline output and logs
- Ensure the pipeline completes without errors.
- Check the generated manifests and ensure the item count makes sense.
- If the pipeline fails or does not produce the expected outcome, fix the issues locally and use `git push --force` to update the branch (the pipeline may create a commit).

### 13. Pull the branch locally
```bash
git pull origin feat/upgrade-azure-<new-version>
```
If the pull fails due to conflicts, perform a rebase and resolve any conflicts.

### 14. Check the samples have been properly rendered
- Inspect the generated files in `distribution/azure-<new-version>`.
- Open the images and PlantUML files to verify correct rendering.
- Verify that all items in `distribution/azure-<new-version>/Item/` render correctly.
- Check that all groups in `distribution/azure-<new-version>/Group/` are properly styled.

### 15. Adapt `README.md`
- Update `distribution/azure-<new-version>/README.md` to reflect new icons, modules, and examples.

### 16. Create a pull request
- If not already done, open a PR from your branch to `master`.
- Request review and address any feedback.

---

## Lessons Learned

### Workflow Design and Idempotency
- The package upgrade workflow is designed to be **idempotent** - running it multiple times produces the same result.
- The process is structured to be **small and reviewable**: each step builds on the previous one with clear validation points.
- **Key validation point**: Workdir generation (`npm run generate:workdir`) is the most critical step as it validates icon discovery, factory logic, and template rendering before the pipeline executes.

### Azure-Specific: Versioned Icon Updates
- Azure uses a **versioned URL pattern** for icons: `Azure_Public_Service_Icons_V{VERSION}.zip`
- Each new version requires creating a new package folder (e.g., `azure-20`, `azure-21`) with a corresponding factory class.
- The factory class name must match the pattern `AzureV{VERSION}Factory` (e.g., `AzureV20Factory`, `AzureV21Factory`).
- This versioning approach is similar to AWS packages and allows maintaining multiple icon versions simultaneously.

### Key Insights
- Check the [Microsoft Azure Icons page](https://learn.microsoft.com/en-us/azure/architecture/icons/) for version updates - the download link indicates the latest version number.
- If the pipeline fails due to "nothing to commit", the package is successfully up-to-date; no further action is required.
- The upgrade workflow is designed to safely handle both scenarios: new icons available and no changes since last upgrade.

### Cross-Package Lessons
- For comparison on versioned package upgrades (like AWS), see [howto.upgrade-aws-package.md](./howto.upgrade-aws-package.md).
- For comparison on unversioned package upgrades (like GCP), see [howto.upgrade-gcp-package.md](./howto.upgrade-gcp-package.md).
- All three guides share common troubleshooting patterns for template errors, factory class updates, and pipeline lifecycle management.

---

## Troubleshooting

### Pipeline fails with "unable to render" error
- **Cause**: Missing or incorrectly referenced example templates, or invalid icon paths in templates.
- **Solution**: 
  - Ensure `source/templates/azure-<new-version>/examples/` folder exists with all required `.tera` files
  - Verify all icon references in templates match the discovered icon paths
  - Check that the glob pattern in the factory correctly discovers all SVG files

### Icon count is significantly different
- **Cause**: Microsoft has changed the icon structure, added/removed categories, or the glob pattern is not matching correctly.
- **Solution**:
  - Manually verify the icons archive contents: extract it and check the directory structure
  - Update the glob pattern in `discover()` method if the structure has changed
  - Verify the icon path parsing in `getItemUrn()` matches the new structure

### TypeScript compilation errors
- **Cause**: Changes to the factory class or interface not properly updated.
- **Solution**: 
  - Verify the `AzureV{VERSION}Factory` class still implements the `PackageFactory` interface
  - Update `source/library/index.ts` with the correct import and factory instantiation
  - Ensure all imports are correct

### Pipeline creates a commit
- If the Package Builder pipeline creates a commit, you may need to use `git pull` to sync or `git push --force` if you want to override.

### General issues
- For more details on the build process, see [doc/howto.build-package.md](./howto.build-package.md) and [doc/explanation.package.md](./explanation.package.md).
- If `.workdir/library.yaml` or `.workdir/.cache` do not match expectations, review your changes to sources and templates.

---

This guide is intended to keep maintenance changes small, reviewable, and well-tested. For further details, consult the repository documentation.
