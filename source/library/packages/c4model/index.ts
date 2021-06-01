import {PackageContext, PackageFactory} from "../../../../workdir-generator/factories";
import {Item, Package} from "../../../../workdir-generator/manifest";
import parse from "csv-parse/lib/sync";
import F from "fs";
import P from "path";
import {toSnakeCase} from "../../../../workdir-generator/naming";

type ElementItemCsvRow = {
    name: string,
    shape: string,
    stereotype: string,
    type: string,
}

type BoundaryItemCsvRow = {
    name: string,
    type: string,
}

export class C4modelFactory implements PackageFactory {

    getUrn(): string {
        return "c4model";
    }

    async create(context: PackageContext): Promise<Package> {

        const element_items_as_csv: Array<ElementItemCsvRow> = parse(F.readFileSync(
            P.join(__dirname, "elements.csv"),
            {encoding: "utf-8"}
        ), {
            columns: true
        });
        const element_items: Array<Item> = element_items_as_csv
            .map(({
                      name,
                      shape,
                      stereotype,
                      type
                  }) => {
                return {
                    urn: `c4model/Element/${name}`,
                    templates: {
                        source: "c4model/item_element_source.tera",
                        snippet: "c4model/item_element_snippet.tera",
                    },
                    elements: [{
                        shape: {
                            type: "Custom",
                            properties: {shape, stereotype, type,}
                        }
                    }]
                }
            });


        const boundary_items_as_csv: Array<BoundaryItemCsvRow> = parse(F.readFileSync(
            P.join(__dirname, "boundaries.csv"),
            {encoding: "utf-8"}
        ), {
            columns: true
        });
        const boundary_items: Array<Item> = boundary_items_as_csv
            .map(({name, type}) => {
                return {
                    urn: `c4model/Boundary/${name}Boundary`,
                    templates: {
                        source: "c4model/item_boundary_source.tera",
                        snippet: "c4model/item_boundary_snippet.tera",
                    },
                    elements: [{
                        shape: {
                            type: "Custom",
                            properties: {type,}
                        }
                    }]
                }
            });

        return {
            urn: this.getUrn(),
            modules: [{
                urn: `${this.getUrn()}/Element`,
                items: element_items
            }, {
                urn: `${this.getUrn()}/Boundary`,
                items: boundary_items
            }],
            examples: [
                "Deployment diagram",
                "Dynamic diagram",
                "Level 1 System Context",
                "Level 2 Container",
                "Level 3 Component",
                "System Landscape diagram",
            ].map(name => ({
                name,
                template: `${this.getUrn()}/examples/${toSnakeCase(name)}.tera`
            })),
            templates: {
                bootstrap: `${this.getUrn()}/bootstrap.tera`,
                documentation: `${this.getUrn()}/documentation.tera`
            }
        }
    }
}