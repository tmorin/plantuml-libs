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

### 5. Rename the sources in `source/library/templates`
- If there are AWS-specific templates in `source/templates/aws-<version>`, rename them for the new version.
- Update references inside the renamed templates to match the new version.

### 6. Replace all references to the old AWS version
- Perform a global search and replace: change all occurrences of `aws-<old-version>` to `aws-<new-version>` in the following locations:
  - All files and subfolders under `./doc`
  - All files and subfolders under `./source`
  - All files and subfolders under `./test`
  - The file `./README.md`

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
- Trigger the Package Builder pipeline on the working branch.

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

## Troubleshooting
- If the Package Builder pipeline creates a commit, you may need to use `git push --force` to update your branch.
- For more details on the build process, see [doc/howto.build-package.md](./howto.build-package.md) and [doc/explanation.package.md](./explanation.package.md).
- If `.workdir/library.yaml` or `.workdir/.cache` do not match expectations, review your changes to sources and templates.

---

This guide is intended to keep maintenance changes small, reviewable, and well-tested. For further details, consult the repository documentation.
