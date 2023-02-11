import {
  PackageContext,
  PackageFactory,
} from "../../../generator/workdir/factories"
import { Item, Package } from "../../../generator/workdir/manifest"
import P from "path"
import { fetchArchive } from "../../../generator/workdir/archive"
import glob from "glob"
import { getAbsoluteImagePath } from "../../../generator/workdir/paths"
import { toCamelCase } from "../../../generator/workdir/naming"
import { promisify } from "util"
import { unifyItems } from "../../../generator/workdir/discovery"

const ICONS_VERSION = "8.4.0"
const ICONS_URL = `https://github.com/simple-icons/simple-icons/archive/${ICONS_VERSION}.zip`

type ItemsByModules = { [key: string]: Array<Item> }

export class Simpleicons8Factory implements PackageFactory {
  getUrn(): string {
    return "simpleicons-8"
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
      const itemName = toCamelCase(
        P.basename(imageSrcPath, P.extname(imageSrcPath))
      ).replace(/^[0-9]/, (s) => `_${s}`)
      const moduleUrn = `${this.getUrn()}/${itemName[0]}`
      const itemUrn = `${moduleUrn}/${itemName}`
      if (!map[moduleUrn]) {
        map[moduleUrn] = []
      }
      map[moduleUrn].push({
        urn: itemUrn,
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
      "*/icons/**/*.svg"
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
