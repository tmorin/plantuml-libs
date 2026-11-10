import P from "path"
import Fe from "fs-extra"
import { Package } from "./manifest"

/**
 * Check the references of a package: example templates must exist under
 * the template directory and icon references must target an item of the package.
 *
 * @param pkg the package to check
 * @param tplDirPath the template directory read by the pipeline
 * @throws Error listing every finding of the package
 */
export function validatePackage(pkg: Package, tplDirPath: string): void {
  const findings: Array<string> = []

  for (const example of pkg.examples ?? []) {
    const templatePath = P.join(tplDirPath, example.template)
    if (
      !Fe.pathExistsSync(templatePath) ||
      !Fe.statSync(templatePath).isFile()
    ) {
      findings.push(
        `example "${example.name}": template "${example.template}" not found in ${tplDirPath}`,
      )
    }
  }

  const itemUrns = new Set<string>()
  for (const module of pkg.modules ?? []) {
    for (const item of module.items ?? []) {
      itemUrns.add(item.urn)
    }
  }

  for (const module of pkg.modules ?? []) {
    for (const item of module.items ?? []) {
      if (item.icon?.type === "Reference" && !itemUrns.has(item.icon.urn)) {
        findings.push(
          `item "${item.urn}": icon reference "${item.icon.urn}" matches no item of the package`,
        )
      }
    }
  }

  if (findings.length > 0) {
    throw new Error([`invalid package "${pkg.urn}":`, ...findings].join("\n"))
  }
}
