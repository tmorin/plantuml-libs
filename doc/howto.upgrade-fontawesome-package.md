# How to upgrade the Font Awesome package

This guide provides concrete, step-by-step instructions to upgrade the Font Awesome package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and is designed for AI agents to execute autonomously.

## Prerequisites

- [Node.js 22+](https://nodejs.org/) installed
- Git and GitHub CLI (`gh`) installed
- Write access to the repository

## Notes

Do not modify these directories directly—they are generated:
- `./.workdir`
- `./distribution`
- `./public`

## Steps

### 1. Create a feature branch

```bash
git checkout master
git pull
git checkout -b feat/upgrade-fontawesome-icons
```

### 2. Check for new Font Awesome releases

Font Awesome is published on [GitHub Releases](https://github.com/FortAwesome/Font-Awesome/releases). Check if a new release is available.

The package fetches from: `https://github.com/FortAwesome/Font-Awesome/releases/download/{VERSION}/fontawesome-free-{VERSION}-web.zip`

Proceed to Step 3. If new icons have been released, the workdir generation in Step 4 will detect the changes.

### 3. Update the Font Awesome package source

Edit `source/library/packages/fontawesome/index.ts`:

1. Update line 13 with the new version number from the GitHub release:
   ```typescript
   const ICONS_VERSION = "<new-version>"
   ```

2. Line 14 automatically uses the new version:
   ```typescript
   const ICONS_URL = `https://github.com/FortAwesome/Font-Awesome/releases/download/${ICONS_VERSION}/fontawesome-free-${ICONS_VERSION}-web.zip`
   ```

3. If the icon directory structure has changed:
   - Update the `discover()` method's glob pattern if SVG paths have changed
   - Update the `getItemUrn()` method's path parsing if folder names differ

4. Review templates in `source/templates/fontawesome/`:
   - `source/templates/fontawesome/bootstrap.tera` - main template definitions
   - `source/templates/fontawesome/documentation.tera` - documentation template
   - Ensure all `.tera` files reference icon paths that match the new structure

### 4. Generate the work directory

Validate your changes by generating the work directory:

```bash
npm run generate:workdir -- -p fontawesome
```

Check the output:
- `.workdir/library.yaml` should list the `fontawesome` package with correct modules
- `.workdir/.cache/fontawesome` should contain all expected icon modules
- Verify the number of items against the previous version (changes indicate new/updated icons)

### 5. Commit and push the branch

```bash
git add .
git commit -m "feat(fontawesome): update icons from Font Awesome

Updated Font Awesome package with latest available icons from the official repository.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

git push -u origin feat/upgrade-fontawesome-icons
```

### 6. Trigger the Package Builder pipeline

Run the pipeline to generate distribution files:

```bash
gh workflow run package-builder.yaml \
  -f pkgName=fontawesome \
  -f pkgVersion=latest \
  --ref feat/upgrade-fontawesome-icons
```

The pipeline will:
1. Generate the work directory
2. Render all PlantUML diagrams
3. Push generated distribution files back to the branch

Processing typically takes several minutes. Monitor the run at the GitHub Actions tab.

### 7. Pull the generated changes

Once the pipeline completes, pull the generated files:

```bash
git pull origin feat/upgrade-fontawesome-icons
```

### 8. Verify the outputs

Inspect the generated files:

```bash
ls -la distribution/fontawesome/
```

Verify:
- All icon modules render correctly as PlantUML files
- `distribution/fontawesome/README.md` - auto-generated with updated icon counts

### 9. Create a pull request

```bash
gh pr create \
  --title "feat(fontawesome): update icons" \
  --body "Updated Font Awesome package with latest available icons from the official repository." \
  --base master
```

---

## Troubleshooting

### Pipeline fails with "unable to render" error

**Cause**: Invalid PlantUML syntax or mismatched sprite/manifest files.

**Solution**:
- Review pipeline logs to identify which package is failing
- Check `source/library/packages/fontawesome/index.ts` for valid TypeScript syntax
- Verify icon sprite files are correctly generated in `.workdir/.cache/fontawesome`
- Ensure the manifest matches the generated sprite files

### Icon discovery fails or icon count is zero

**Cause**: GitHub release structure changed, archive URL is invalid, or glob pattern doesn't match new structure.

**Solution**:
- Verify the release exists on [GitHub Releases](https://github.com/FortAwesome/Font-Awesome/releases)
- Check that `ICONS_VERSION` (line 13) is correctly set
- Verify the glob pattern in the `discover()` method matches the new archive structure
- Extract the archive locally and inspect the directory layout if needed

### Icon count changes unexpectedly

**Cause**: Font Awesome repository regularly adds/updates icons, or the icon structure has changed.

**Solution**:
- This is normal behavior as Font Awesome releases new icons regularly
- Verify changes on the [Font Awesome GitHub repository](https://github.com/FortAwesome/Font-Awesome)
- Check `.workdir/library.yaml` to see which modules changed

### Pipeline creates a commit but you want to override it

If you need to force-push your changes:

```bash
git push -f origin feat/upgrade-fontawesome-icons
```

Then re-run the pipeline.

### General debugging

- Review the full build output in GitHub Actions for specific error messages
- Check `.workdir/library.yaml` structure matches expectations
- Verify TypeScript compilation: `npm run lint` should pass
- For detailed build process information, see [doc/howto.build-package.md](./howto.build-package.md)

---

This guide keeps maintenance changes small, reviewable, and focused. Always validate locally before pushing to remote.
