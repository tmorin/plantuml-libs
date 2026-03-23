# How to upgrade the Azure package

This guide provides concrete, step-by-step instructions to upgrade the Azure package in the plantuml-libs repository. It follows the [Diátaxis How-to Guide](https://diataxis.fr/how-to-guides/) style and is designed for AI agents to execute autonomously.

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

### 1. Discover the latest Azure icons version

Run the resolution script to fetch the latest available version:

```bash
node scripts/resolve-azure-icons.mjs
```

This returns output like:
```json
{
  "newVersion": "azure-23",
  "downloadUrl": "https://...",
  "version": "23"
}
```

If the version is newer than the current `ICONS_VERSION` in `source/library/packages/azure/index.ts`, proceed to the next step.

### 2. Create a feature branch

```bash
git checkout master
git pull
git checkout -b feat/upgrade-azure-icons
```

### 3. Update the Azure package source

Edit `source/library/packages/azure/index.ts`:

1. Update line 16 with the new version number:
   ```typescript
   const ICONS_VERSION = "<new-version>"
   ```

2. Update line 17 to use the new version in the URL:
   ```typescript
   const ICONS_URL = `https://arch-center.azureedge.net/icons/Azure_Public_Service_Icons_V${ICONS_VERSION}.zip`
   ```

3. If the icon directory structure has changed:
   - Review and update `source/library/packages/azure/groups.csv` (custom groupings and styling)
   - Review and update templates in `source/templates/azure/` if needed:
     - `source/templates/azure/bootstrap.tera` - main template definitions
     - `source/templates/azure/examples/` - example templates used in documentation
   - Ensure all `.tera` files reference icon paths that match the new structure

### 4. Generate the work directory

Validate your changes by generating the work directory:

```bash
npm run generate:workdir -- -p azure
```

Check the output:
- `.workdir/library.yaml` should list the `azure` package with correct modules and examples
- `.workdir/.cache/azure` should contain all expected elements
- If icon count changed significantly, verify this matches the new Azure release (check the Azure Icons page for what's new/changed)

### 5. Commit and push the branch

```bash
git add .
git commit -m "feat(azure): update icons to v<version>

Updated Azure package with latest icons from Microsoft Azure Icons.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

git push -u origin feat/upgrade-azure-icons
```

### 6. Trigger the Package Builder pipeline

Run the pipeline to generate distribution files:

```bash
gh workflow run package-builder.yaml \
  -f pkgName=azure \
  -f pkgVersion=<version> \
  --ref feat/upgrade-azure-icons
```

The pipeline will:
1. Generate the work directory
2. Render all PlantUML diagrams and examples
3. Push generated distribution files back to the branch

Processing typically takes several minutes. Monitor the run at the GitHub Actions tab.

### 7. Pull the generated changes

Once the pipeline completes, pull the generated files:

```bash
git pull origin feat/upgrade-azure-icons
```

### 8. Verify the outputs

Inspect the generated files:

```bash
ls -la distribution/azure/
```

Verify:
- `distribution/azure/Item/` - all icons render correctly as PlantUML files
- `distribution/azure/Group/` - all groups are properly styled
- `distribution/azure/README.md` - updated with new icons and modules

### 9. Create a pull request

```bash
gh pr create \
  --title "feat(azure): update icons to v<version>" \
  --body "Updated Azure package with latest icons from Microsoft Azure Icons." \
  --base master
```

---

## Troubleshooting

### Pipeline fails with "unable to render" error

**Cause**: Template references outdated icon paths or incorrect structure.

**Solution**:
- Check `source/templates/azure/bootstrap.tera` and `source/templates/azure/examples/` for hardcoded icon references
- Verify all icon paths match the new Azure archive structure
- Extract the Azure icons ZIP locally and inspect the directory structure to understand changes

### Icon count differs significantly from previous version

**Cause**: Microsoft has changed the icon structure or categories.

**Solution**:
- Verify the change on the [Microsoft Azure Icons page](https://learn.microsoft.com/en-us/azure/architecture/icons/)
- If the glob pattern in `source/library/packages/azure/index.ts` `discover()` method needs updating, do so to match the new structure
- Check that `getItemUrn()` path parsing still matches the new icon organization

### Pipeline creates a commit but you want to override it

If you need to force-push your changes:

```bash
git push -f origin feat/upgrade-azure-icons
```

Then re-run the pipeline.

### General debugging

- Review the full build output in GitHub Actions for specific error messages
- Check `.workdir/library.yaml` structure matches expectations
- Verify TypeScript compilation: `npm run lint` should pass
- For detailed build process information, see [doc/howto.build-package.md](./howto.build-package.md)

---

This guide keeps maintenance changes small, reviewable, and focused. Always validate locally before pushing to remote.
