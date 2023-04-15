import {
  PackageContext,
  PackageFactory,
} from "../../../generator/workdir/factories"
import { Item, Package } from "../../../generator/workdir/manifest"
import P from "path"
import Fe from "fs-extra"
import glob from "glob"
import { getAbsoluteImagePath } from "../../../generator/workdir/paths"
import { toCamelCase, toSnakeCase } from "../../../generator/workdir/naming"
import { unifyItems } from "../../../generator/workdir/discovery"

type ItemsByModules = { [key: string]: Array<Item> }

export class Homecloud2Factory implements PackageFactory {
  getUrn(): string {
    return "homecloud-2"
  }

  private getItemUrn(imageSrcPath: string) {
    return `${this.getUrn()}/${imageSrcPath
      .split(P.sep)
      .slice(3)
      .map((value) => value.replace(/\.svg$/g, ""))
      .map(toCamelCase)
      .filter((part) => !!part)
      .join("/")}`
  }

  private async discover(
    context: PackageContext,
    cwd: string,
    globPattern: string
  ): Promise<ItemsByModules> {
    const discoveredSvg = (
      await glob(globPattern, {
        cwd,
        nodir: true,
      })
    ).sort()
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
      const itemUrn = this.getItemUrn(imageSrcPath)
      const moduleUrn = itemUrn.split("/").slice(0, 2).join("/")
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
          {
            shape: {
              type: "IconCard",
            },
          },
          {
            shape: {
              type: "IconGroup",
            },
          },
        ],
      })
      return map
    }, {} as ItemsByModules)
  }

  async create(context: PackageContext): Promise<Package> {
    const iconsDst = P.join(context.pkgTmpDirPath, "icons")

    await Fe.copy(P.join(__dirname, "icons"), iconsDst, {
      overwrite: true,
    })
    const itemsByModules = await this.discover(context, iconsDst, "**/*.svg")
    context.info("found (%s) modules", Object.keys(itemsByModules).length)

    return {
      urn: this.getUrn(),
      templates: {
        bootstrap: `${this.getUrn()}/bootstrap.tera`,
        documentation: `${this.getUrn()}/documentation.tera`,
      },
      modules: Object.keys(itemsByModules).map((moduleUrn) => ({
        urn: moduleUrn,
        items: unifyItems(itemsByModules[moduleUrn]),
      })),
      examples: ["Simple"].map((name) => ({
        name,
        template: `${this.getUrn()}/examples/${toSnakeCase(name)}.tera`,
      })),
    }
  }
}
