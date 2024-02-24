import P from "path"
import { glob } from "glob"
import Fe from "fs-extra"
import { parse } from "csv-parse/sync"
import F from "fs"
import {
  PackageContext,
  PackageFactory,
} from "../../../generator/workdir/factories"
import { Item, Package } from "../../../generator/workdir/manifest"
import { fetchArchive } from "../../../generator/workdir/archive"
import { getAbsoluteImagePath, render } from "../../../generator/workdir/paths"
import { toCamelCase, toSnakeCase } from "../../../generator/workdir/naming"
import {
  csvToCustomGroups,
  unifyItems,
} from "../../../generator/workdir/discovery"

const FOLDER_DATE = "01312024"
const ICONS_URL = `https://d1.awsstatic.com/webteam/architecture-icons/q1-2024/Asset-Package_02062024.c893ec2a2df5a0b881da3ad9a3213e5f6c8664d4.zip`

type FamiliesCsvRow = {
  name: string
  color: string
}

export class AwsQ12024Factory implements PackageFactory {
  getUrn(): string {
    return "aws-q1-2024"
  }

  private getItemUrn(imageSrcPath: string) {
    const parts = imageSrcPath
      .split(P.sep)
      .map((part) =>
        part
          .replace(/^48$/g, "")
          .replace(/_32\.svg$/g, "")
          .replace(/^Arch_48$/g, "")
          .replace(/^Arch-Category_48$/g, "")
          .replace(/^Res_48_Light$/g, "")
          .replace(/_48\.svg$/g, "")
          .replace(/_48_Light\.svg$/g, "")
          .replace(/\.svg$/g, "")
          .replace(/_48$/g, "")
          .replace(/^Arch-/g, "")
          .replace(/^Arch_/g, "")
          .replace(/^Category_/g, "")
          .replace(/^Res_/g, ""),
      )
      .map(toCamelCase)
      .filter((part) => !!part)
    return `${this.getUrn()}/${parts.join(P.sep)}`
  }

  private async discover(
    context: PackageContext,
    cwd: string,
    globPattern: string,
  ): Promise<Array<Item>> {
    const discoveredSvg = (
      await glob(globPattern, {
        cwd,
        nodir: true,
      })
    ).sort()
    context.info(
      "discovered %s pictures file from %s",
      discoveredSvg.length,
      cwd,
    )

    const discoveredItems: Array<Item> = discoveredSvg.map(
      (relativeImagePathToGlob) => {
        const absoluteImagePath = getAbsoluteImagePath(
          context,
          cwd,
          relativeImagePathToGlob,
        )
        const imageSrcPath = P.relative(
          context.absoluteDstYamlDirPath,
          absoluteImagePath,
        )
        const itemUrn = this.getItemUrn(relativeImagePathToGlob)
        const itemFamily = itemUrn.split(P.sep).slice(-2, -1).join()
        const elementIconGroupStereotype = `${itemFamily}Family`
        return {
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
            {
              shape: {
                type: "IconCard",
              },
            },
            {
              shape: {
                type: "IconGroup",
                stereotype_name: elementIconGroupStereotype,
              },
            },
          ],
        }
      },
    )
    context.info("discovered %s items from %s", discoveredItems.length, cwd)

    return discoveredItems.sort((a, b) => a.urn.localeCompare(b.urn))
  }

  private async renderBootstrap(context: PackageContext) {
    const families: Array<FamiliesCsvRow> = parse(
      F.readFileSync(P.join(__dirname, "families.csv"), { encoding: "utf-8" }),
      {
        columns: true,
      },
    )
    await render(
      P.join(__dirname, "templates", "bootstrap.tera"),
      P.join(context.tplDirPath, this.getUrn(), "bootstrap.tera"),
      { families },
    )
  }

  async create(context: PackageContext): Promise<Package> {
    await this.renderBootstrap(context)

    const iconsZipPath = P.join(context.pkgTmpDirPath, "icons.zip")
    const iconsZipDst = P.join(context.pkgTmpDirPath, "temp_icons")
    await fetchArchive(context, ICONS_URL, iconsZipPath, iconsZipDst)

    const iconsDst = P.join(context.pkgTmpDirPath, "icons")

    await Fe.mkdir(P.join(iconsDst, "architecture"), { recursive: true })
    await Fe.copy(
      P.join(iconsZipDst, `Architecture-Service-Icons_${FOLDER_DATE}`),
      P.join(iconsDst, "architecture"),
      { overwrite: false },
    )
    await Fe.mkdir(P.join(iconsDst, "resource/Res_Group-Icons"), {
      recursive: true,
    })
    await Fe.copy(
      P.join(iconsZipDst, `Architecture-Group-Icons_${FOLDER_DATE}`),
      P.join(iconsDst, "resource/Res_Group-Icons"),
      { overwrite: false },
    )
    await Fe.mkdir(P.join(iconsDst, "category"), { recursive: true })
    await Fe.copy(
      P.join(iconsZipDst, `Category-Icons_${FOLDER_DATE}`),
      P.join(iconsDst, "category"),
      { overwrite: false },
    )
    await Fe.mkdir(P.join(iconsDst, "resource"), { recursive: true })
    await Fe.copy(
      P.join(iconsZipDst, `Resource-Icons_${FOLDER_DATE}`),
      P.join(iconsDst, "resource"),
      { overwrite: false },
    )

    await Fe.copy(P.join(__dirname, "icons"), iconsDst, {
      overwrite: true,
    })

    const architectureItems = await this.discover(
      context,
      iconsDst,
      "architecture/**/+(Arch_48|48)/**/*.svg",
    )
    context.info("found (%s) icons for architecture", architectureItems.length)

    const categoryItems = await this.discover(
      context,
      iconsDst,
      "category/**/Arch-Category_48/**/*.svg",
    )
    categoryItems.forEach((item) => {
      delete item.family
      item.elements.forEach((element) => {
        if (element.shape.type === "IconGroup") {
          element.shape.stereotype_name = P.basename(item.urn)
        }
      })
    })
    context.info("found (%s) icons for category", categoryItems.length)

    const resourcesItems = await this.discover(
      context,
      iconsDst,
      "resource/**/*+(_48|_48_Light|_32).svg",
    )
    context.info("found (%s) icons for resource", resourcesItems.length)

    const groupItemsFromCsv: Array<Item> = await csvToCustomGroups(
      this,
      P.join(__dirname, "groups.csv"),
    )
    const groupItemsFromPackage = await this.discover(
      context,
      iconsDst,
      "group/**/*_32.svg",
    )
    groupItemsFromPackage.forEach((item) => {
      delete item.family
      item.urn = item.urn.replace(/32$/, "")
    })
    const groupItems = [...groupItemsFromCsv, ...groupItemsFromPackage]
    context.info("found (%s) icons for group", groupItems.length)

    return {
      urn: this.getUrn(),
      templates: {
        bootstrap: `${this.getUrn()}/bootstrap.tera`,
      },
      rendering: {
        skip_embedded: true,
      },
      modules: [
        {
          urn: `${this.getUrn()}/Architecture`,
          items: unifyItems(architectureItems),
        },
        {
          urn: `${this.getUrn()}/Category`,
          items: unifyItems(categoryItems),
        },
        {
          urn: `${this.getUrn()}/Group`,
          items: unifyItems(groupItems),
        },
        {
          urn: `${this.getUrn()}/Resource`,
          items: unifyItems(resourcesItems),
        },
      ],
      examples: ["Chef Automate Architecture on AWS", "Git to S3 Webhooks"].map(
        (name) => ({
          name,
          template: `${this.getUrn()}/examples/${toSnakeCase(name)}.tera`,
        }),
      ),
    }
  }
}
