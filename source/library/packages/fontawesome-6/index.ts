import P from "path"
import glob from "glob"
import { promisify } from "util"
import {
  PackageContext,
  PackageFactory,
} from "../../../generator/workdir/factories"
import { Item, Package } from "../../../generator/workdir/manifest"
import { fetchArchive } from "../../../generator/workdir/archive"
import { getAbsoluteImagePath } from "../../../generator/workdir/paths"
import { toCamelCase } from "../../../generator/workdir/naming"
import { unifyItems } from "../../../generator/workdir/discovery"

const ICONS_VERSION = "6.3.0"
const ICONS_URL = `https://github.com/FortAwesome/Font-Awesome/releases/download/${ICONS_VERSION}/fontawesome-free-${ICONS_VERSION}-web.zip`

type ItemsByModules = { [key: string]: Array<Item> }

export class Fontawesome6Factory implements PackageFactory {
  getUrn(): string {
    return "fontawesome-6"
  }

  private getItemUrn(imageSrcPath: string) {
    const parts = imageSrcPath
      .split(P.sep)
      .slice(2)
      .map((part) => part.replace(/^svgs$/g, "").replace(/\.svg$/g, ""))
      .map(toCamelCase)
      .filter((part) => !!part)
    const name = parts[parts.length - 1].replace(/^[0-9]/, (s) => `_${s}`)
    return `${this.getUrn()}/${parts.slice(0, -1).join("/")}/${name}`
  }

  private async discover(
    context: PackageContext,
    cwd: string,
    globPattern: string
  ): Promise<ItemsByModules> {
    const discoveredSvg = await promisify(glob)(globPattern, {
      cwd,
      nodir: true,
    })
    context.info(
      "discovered %s pictures file from %s",
      discoveredSvg.length,
      cwd
    )

    return discoveredSvg.reduce((map, relativeImagePathToGlob) => {
      const absoluteImagePath = getAbsoluteImagePath(
        context,
        cwd,
        relativeImagePathToGlob
      )
      const imageSrcPath = P.relative(
        context.absoluteDstYamlDirPath,
        absoluteImagePath
      )
      const itemUrn = this.getItemUrn(relativeImagePathToGlob)
      const itemFamily = itemUrn.split("/").slice(-1).join("")[0]
      const moduleUrn = itemUrn.split("/").slice(0, 2).join("/")
      if (!map[moduleUrn]) {
        map[moduleUrn] = []
      }
      map[moduleUrn].push({
        urn: itemUrn,
        family: itemFamily,
        icon: {
          type: "Source",
          source: imageSrcPath,
        },
        elements: [
          {
            shape: {
              type: "Icon",
            },
          },
        ],
      })
      return map
    }, {} as ItemsByModules)
  }

  async create(context: PackageContext): Promise<Package> {
    const iconsZipPath = P.join(context.pkgTmpDirPath, "icons.zip")
    const iconsZipDst = P.join(context.pkgTmpDirPath, "icons")
    await fetchArchive(context, ICONS_URL, iconsZipPath, iconsZipDst)

    const itemsByModules = await this.discover(
      context,
      iconsZipDst,
      "*/svgs/**/*.svg"
    )
    context.info("found (%s) modules", Object.keys(itemsByModules).length)

    return {
      urn: this.getUrn(),
      templates: {
        bootstrap: `${this.getUrn()}/bootstrap.tera`,
        documentation: `${this.getUrn()}/documentation.tera`,
      },
      rendering: {
        skip_embedded: true,
      },
      modules: Object.keys(itemsByModules).map((moduleUrn) => ({
        urn: moduleUrn,
        items: unifyItems(itemsByModules[moduleUrn]),
      })),
      examples: [],
    }
  }
}
