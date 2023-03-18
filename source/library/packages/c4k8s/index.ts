import {
  PackageContext,
  PackageFactory,
} from "../../../generator/workdir/factories"
import { Item, Package } from "../../../generator/workdir/manifest"
import { parse } from "csv-parse/sync"
import F from "fs"
import P from "path"
import { toSnakeCase } from "../../../generator/workdir/naming"

type K8sItemCsvRow = {
  name: string
}

function createElementItems(path: string, urn: string): Array<Item> {
  const itemAsCsv: Array<K8sItemCsvRow> = parse(
    F.readFileSync(path, { encoding: "utf-8" }),
    { columns: true }
  )
  return itemAsCsv.map(({ name }) => {
    const tech = `K8s/${name}`
    return {
      urn: `${urn}/Element/${name}`,
      templates: {
        source: "c4k8s/item_element_source.tera",
        snippet: "c4k8s/item_element_snippet.tera",
      },
      elements: [
        {
          shape: {
            type: "Custom",
            properties: { tech },
          },
        },
      ],
    }
  })
}

function createBoundaryItems(path: string, urn: string): Array<Item> {
  const itemAsCsv: Array<K8sItemCsvRow> = parse(
    F.readFileSync(path, { encoding: "utf-8" }),
    { columns: true }
  )
  return itemAsCsv.map(({ name }) => {
    const tech = `K8s/${name}`
    return {
      urn: `${urn}/Boundary/${name}Boundary`,
      templates: {
        source: "c4k8s/item_boundary_source.tera",
        snippet: "c4k8s/item_boundary_snippet.tera",
      },
      elements: [
        {
          shape: {
            type: "Custom",
            properties: { tech },
          },
        },
      ],
    }
  })
}

export class C4K8sFactory implements PackageFactory {
  getUrn(): string {
    return "c4k8s"
  }

  async create(context: PackageContext): Promise<Package> {
    return {
      urn: this.getUrn(),
      modules: [
        {
          urn: `${this.getUrn()}/Element`,
          items: createElementItems(
            P.join(__dirname, "k8s.csv"),
            this.getUrn()
          ),
        },
        {
          urn: `${this.getUrn()}/Boundary`,
          items: createBoundaryItems(
            P.join(__dirname, "k8s.csv"),
            this.getUrn()
          ),
        },
      ],
      examples: ["Deployment diagram"].map((name) => ({
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
