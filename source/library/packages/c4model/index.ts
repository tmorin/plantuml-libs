import {
  PackageContext,
  PackageFactory,
} from "../../../generator/workdir/factories"
import { Item, Package } from "../../../generator/workdir/manifest"
import { parse } from "csv-parse/sync"
import F from "fs"
import P from "path"
import { toSnakeCase } from "../../../generator/workdir/naming"

type ElementItemCsvRow = {
  name: string
  shape: string
  stereotype: string
  type: string
}

type BoundaryItemCsvRow = {
  name: string
  type: string
  stereotype: string
}

function createElementItems(path: string, urn: string): Array<Item> {
  const element_items_as_csv: Array<ElementItemCsvRow> = parse(
    F.readFileSync(path, { encoding: "utf-8" }),
    { columns: true }
  )
  return element_items_as_csv.map(({ name, shape, stereotype, type }) => {
    return {
      urn: `${urn}/Element/${name}`,
      templates: {
        source: "c4model/item_element_source.tera",
        snippet: "c4model/item_element_snippet.tera",
      },
      elements: [
        {
          shape: {
            type: "Custom",
            properties: { shape, stereotype, type },
          },
        },
      ],
    }
  })
}

function createBoundaryItems(path: string, urn: string): Array<Item> {
  const boundary_items_as_csv: Array<BoundaryItemCsvRow> = parse(
    F.readFileSync(path, { encoding: "utf-8" }),
    { columns: true }
  )
  return boundary_items_as_csv.map(({ name, type, stereotype }) => {
    return {
      urn: `${urn}/Boundary/${name}Boundary`,
      templates: {
        source: "c4model/item_boundary_source.tera",
        snippet: "c4model/item_boundary_snippet.tera",
      },
      elements: [
        {
          shape: {
            type: "Custom",
            properties: { type, stereotype },
          },
        },
      ],
    }
  })
}

export class C4modelFactory implements PackageFactory {
  getUrn(): string {
    return "c4model"
  }

  async create(context: PackageContext): Promise<Package> {
    return {
      urn: this.getUrn(),
      modules: [
        {
          urn: `${this.getUrn()}/Element`,
          items: createElementItems(
            P.join(__dirname, "elements.csv"),
            this.getUrn()
          ),
        },
        {
          urn: `${this.getUrn()}/Boundary`,
          items: createBoundaryItems(
            P.join(__dirname, "boundaries.csv"),
            this.getUrn()
          ),
        },
      ],
      examples: [
        "Deployment diagram",
        "Deployment diagram AWS",
        "Dynamic diagram",
        "Level 1 System Context",
        "Level 2 Container",
        "Level 3 Component",
        "System Landscape diagram",
        "Main Artifacts",
      ].map((name) => ({
        name,
        template: `${this.getUrn()}/examples/${toSnakeCase(name)}.tera`,
      })),
      templates: {
        bootstrap: `${this.getUrn()}/bootstrap.tera`,
        documentation: `${this.getUrn()}/documentation.tera`,
      },
    }
  }
}
