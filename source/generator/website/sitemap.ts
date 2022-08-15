import P from "path"
import { InputResource } from "./resource"

export interface LinkEntry {
  label: string
  href: string
}

export interface ItemEntry {
  urn: string
  readme: LinkEntry
}

export interface ModuleEntry {
  urn: string
  readme: LinkEntry
  items: Array<ItemEntry>
}

export interface PackageEntry {
  urn: string
  readme: LinkEntry
  modules: Array<ModuleEntry>
  modulesByUrn: { [x: string]: ModuleEntry }
}

export interface LibraryEntry {
  readme: LinkEntry
  changelog: LinkEntry
  security: LinkEntry
  packages: Array<PackageEntry>
  packageByUrns: { [x: string]: PackageEntry }
}

export class Sitemap {
  constructor(readonly library: LibraryEntry) {}

  static create(resources: Array<InputResource>): Sitemap {
    const library: LibraryEntry = resources
      .filter(
        (resource) =>
          resource.relInputPath.endsWith(".md") &&
          !resource.relInputPath.endsWith("README.md") &&
          !resource.relInputPath.endsWith("CHANGELOG.md") &&
          !resource.relInputPath.endsWith("SECURITY.md")
      )
      .reduce(
        (library, { relInputPath }) => {
          const itemUrn = relInputPath.replace(/.md$/, "")
          const itemUrnParts = itemUrn.split("/")

          const packageUrn = itemUrnParts[0]
          if (!library.packageByUrns[packageUrn]) {
            library.packageByUrns[packageUrn] = {
              urn: packageUrn,
              readme: {
                label: "Presentation",
                href: `${packageUrn}/index.html`,
              },
              modules: [],
              modulesByUrn: {},
            }
            library.packages.push(library.packageByUrns[packageUrn])
          }
          const packageEntry = library.packageByUrns[packageUrn]

          const moduleUrn = `${packageUrn}/${itemUrnParts[1]}`
          const moduleName = itemUrnParts[1]
          if (!packageEntry.modulesByUrn[moduleUrn]) {
            packageEntry.modulesByUrn[moduleUrn] = {
              urn: moduleUrn,
              readme: {
                label: moduleName,
                href: `${moduleUrn}/index.html`,
              },
              items: [],
            }
            packageEntry.modules.push(packageEntry.modulesByUrn[moduleUrn])
          }
          const itemName = itemUrnParts.slice(2).join("/")
          const moduleEntry = packageEntry.modulesByUrn[moduleUrn]
          moduleEntry.items.push({
            urn: itemUrn,
            readme: {
              label: itemName,
              href: `${itemUrn}.html`,
            },
          })

          return library
        },
        {
          readme: { label: "Presentation", href: "index.html" },
          changelog: { label: "Changelog", href: "CHANGELOG.html" },
          security: { label: "Security", href: "SECURITY.html" },
          packages: [],
          packageByUrns: {},
        }
      )
    return new Sitemap(library)
  }

  contextualize(relPath: string): Sitemap {
    const contextualizeLink = (link: LinkEntry): LinkEntry => {
      const absEntryPath = P.dirname(P.join("/", relPath))
      const absHrefPath = P.dirname(P.join("/", link.href))
      const newHref = `${
        P.relative(absEntryPath, absHrefPath) || "."
      }/${P.basename(link.href)}`
      return {
        ...link,
        href: newHref,
      }
    }

    const packages: Array<PackageEntry> = this.library.packages.map((p) => {
      const modules = p.modules.map((m) => {
        return {
          ...m,
          readme: contextualizeLink(m.readme),
          items: m.items.map((i) => ({
            ...i,
            readme: contextualizeLink(i.readme),
          })),
        }
      })
      return {
        ...p,
        readme: contextualizeLink(p.readme),
        modules,
        modulesByUrn: modules.reduce(
          (all, m) => () => {
            all[m.urn] = all
            return all
          },
          {}
        ),
      }
    })

    return new Sitemap({
      readme: contextualizeLink(this.library.readme),
      changelog: contextualizeLink(this.library.changelog),
      security: contextualizeLink(this.library.security),
      packages: packages,
      packageByUrns: packages.reduce(
        (all, p) => () => {
          all[p.urn] = all
          return all
        },
        {}
      ),
    })
  }
}
