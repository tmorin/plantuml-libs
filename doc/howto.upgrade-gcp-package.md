# How to upgrade the GCP package

This guide provides concrete, step-by-step instructions to upgrade the GCP package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and assumes you have already installed the required tools.

## Prerequisites
- [gh](https://cli.github.com/) (GitHub CLI) is installed and authenticated
- [Node.js](https://nodejs.org/) is installed

## Notes

- Ignore the following directories as they are generated and should not be modified directly:
  - `./.workdir`
  - `./distribution`
  - `./public`

## Steps

### 1. Check the Google Cloud Icons source
- Visit [Google Cloud Icons](https://cloud.google.com/icons/) to check if new icons are available.
- The GCP package uses a fixed URL: `https://cloud.google.com/icons/files/google-cloud-icons.zip`
- Verify if Google has released a new version by downloading and comparing the archive.

### 2. Identify the TypeScript class
- Locate the GCP package source: `source/library/packages/gcp`.
- The main entry point is `index.ts` in that folder.

### 3. Create a new branch
```bash
git checkout master
git pull
git checkout -b feat/upgrade-gcp-icons
```

### 4. Update the GCP package factory (if needed)
- Review `source/library/packages/gcp/index.ts` to ensure the `ICONS_URL` is still correct.
- If Google has updated the URL or structure, update the URL constant:
  ```typescript
  const ICONS_URL = "https://cloud.google.com/icons/files/google-cloud-icons.zip"
  ```
- If the icon directory structure has changed, update the `discover()` method's glob pattern or the `getItemUrn()` method's path parsing logic.

### 5. Update the GCP groups (if needed)
- Review `source/library/packages/gcp/groups.csv` to check if any custom groups need to be added or modified.
- This file defines custom groupings and styling for GCP concepts (e.g., Zone, Kubernetes cluster, Pod).
- Add new rows for new group concepts if applicable, following the existing format:
  ```csv
  name,front_color,background_color,border_thick,border_style,border_color,icon_reference
  ```

### 6. Update templates in `source/templates/gcp` (if needed)
- Review `source/templates/gcp/bootstrap.tera` to ensure it's compatible with the current GCP icons.
- Check `source/templates/gcp/examples/` for any example templates that reference outdated icons or concepts.
- If the icon paths or category structure has changed significantly, update the example templates accordingly.
- **Important**: Example templates are located in `source/templates/gcp/examples/`. Ensure they render correctly with the new icons, as missing or broken references will cause the pipeline to fail.

### 7. Replace all references to the old GCP version (if applicable)
- If you made changes to the package factory class or structure, perform a global search and replace:
  - All files and subfolders under `./doc`
  - All files and subfolders under `./source`
  - All files and subfolders under `./test`
  - The file `./README.md`
- **Note**: The GCP package does not use versioning like AWS packages (e.g., `aws-q1-2024`). If you do rename the class (e.g., `GcpFactory` → `GcpFactoryV2`), update `source/library/index.ts` accordingly.

### 8. Generate the work directory
```bash
npm run generate:workdir -- -p gcp
```

### 9. Validate the work directory
- Check `.workdir/library.yaml` and ensure the GCP package appears with correct modules and examples.
- Inspect `.workdir/.cache/gcp` to ensure all expected elements are present.
- Verify the number of items in the `gcp/Item` module against the previous version (changes indicate new/updated icons).

### 10. Commit and push the branch
```bash
git add .
git commit -m "feat(gcp): update icons from Google Cloud Icons

Updated GCP package with latest available icons from Google Cloud's official icon library."
git push --set-upstream origin feat/upgrade-gcp-icons
```

### 11. Trigger the Package Builder pipeline
- Use the GitHub CLI to trigger the workflow on your branch:
```bash
gh workflow run package-builder.yaml -f pkgName=gcp -f pkgVersion=latest --ref <your-branch>
```
- The pipeline will:
  1. Generate the work directory
  2. Render all PlantUML diagrams and examples
  3. Push generated distribution files back to the branch

### 12. Review the pipeline output and logs
- Ensure the pipeline completes without errors.
- Check the generated manifests and ensure the item count makes sense.
- If the pipeline fails or does not produce the expected outcome, fix the issues locally and use `git push --force` to update the branch (the pipeline may create a commit).

### 13. Pull the branch locally
```bash
git pull origin feat/upgrade-gcp-icons
```
If the pull fails due to conflicts, perform a rebase and resolve any conflicts.

### 14. Check the samples have been properly rendered
- Inspect the generated files in `distribution/gcp`.
- Open the images and PlantUML files to verify correct rendering.
- Verify that all items in `distribution/gcp/Item/` render correctly.
- Check that all groups in `distribution/gcp/Group/` are properly styled.

### 15. Adapt `README.md`
- Update `distribution/gcp/README.md` to reflect any changes:
  - Update the item count in the modules section if the number of items has changed
  - Update the examples list if new examples have been added
  - Add any notes about breaking changes or new features

### 16. Create a pull request
- If not already done, open a PR from your branch to `master`.
- Request review and address any feedback.

---

## Troubleshooting

### Pipeline fails with "unable to render" error
- **Cause**: Missing or incorrectly referenced example templates, or invalid icon paths in templates.
- **Solution**: 
  - Ensure `source/templates/gcp/examples/` folder exists with all required `.tera` files
  - Verify all icon references in templates match the discovered icon paths
  - Check that the glob pattern in the factory correctly discovers all SVG files

### Icon count is significantly different
- **Cause**: Google has changed the icon structure, added/removed categories, or the glob pattern is not matching correctly.
- **Solution**:
  - Manually verify the icons.zip contents: extract it and check the directory structure
  - Update the glob pattern in `discover()` method if the structure has changed
  - Verify the icon path parsing in `getItemUrn()` matches the new structure

### TypeScript compilation errors
- **Cause**: Changes to the factory class or interface not properly updated.
- **Solution**: 
  - Verify the `GcpFactory` class still implements the `PackageFactory` interface
  - Update `source/library/index.ts` if you renamed the factory class
  - Ensure all imports are correct

### Pipeline creates a commit
- If the Package Builder pipeline creates a commit, you may need to use `git pull` to sync or `git push --force` if you want to override.

### General issues
- For more details on the build process, see [doc/howto.build-package.md](./howto.build-package.md) and [doc/explanation.package.md](./explanation.package.md).
- If `.workdir/library.yaml` or `.workdir/.cache` do not match expectations, review your changes to sources and templates.

---

This guide is intended to keep maintenance changes small, reviewable, and well-tested. For further details, consult the repository documentation.
