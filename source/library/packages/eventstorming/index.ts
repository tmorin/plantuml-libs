import {PackageContext, PackageFactory} from "../../../../workdir-generator/factories";
import {Item, Package} from "../../../../workdir-generator/manifest";
import parse from "csv-parse/lib/sync";
import F from "fs";
import P from "path";
import {toSnakeCase} from "../../../../workdir-generator/naming";
import {render} from "../../../../workdir-generator/paths";

type ElementItemCsvRow = {
    family: string,
    name: string,
    description: string,
    shape: string,
    bg_color: string,
    fg_color: string,
    st_font_size: string
}

async function writeAllElementTemplates(context: PackageContext, element_items: Array<Item>) {
    const includeClauses = element_items.map(item => `include('${item.urn}')`);
    const procedureClauses = element_items
        .map(item => item.elements[0])
        .filter(element => element.shape.type === "Custom")
        .map(element => `${element.shape['properties'].name}('${element.shape['properties'].name}')`);
    await render(
        P.join(__dirname, "templates", "examples", "all_elements.tera"),
        P.join(context.tplDirPath, "eventstorming", "examples", "all_elements.tera"),
        {includeClauses, procedureClauses}
    );
}

export class EventstormingFactory implements PackageFactory {
    getUrn(): string {
        return "eventstorming";
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
                      family,
                      name,
                      description,
                      shape,
                      bg_color,
                      fg_color,
                      st_font_size
                  }) => {
                return {
                    urn: `eventstorming/Element/${name}`,
                    family: family,
                    templates: {
                        source: "eventstorming/item_element_source.tera",
                        snippet: "eventstorming/item_element_snippet.tera",
                    },
                    elements: [{
                        shape: {
                            type: "Custom",
                            properties: {name, shape, description, bg_color, fg_color, st_font_size}
                        }
                    }]
                }
            });

        await writeAllElementTemplates(context, element_items);

        return {
            urn: this.getUrn(),
            templates: {
                bootstrap: `${this.getUrn()}/bootstrap.tera`,
                documentation: `${this.getUrn()}/documentation.tera`,
            },
            modules: [{
                urn: `${this.getUrn()}/Element`,
                items: element_items
            }],
            examples: [
                "All elements",
                "Book flow",
                "Causality chain",
                "Hoozbuzzing"
            ].map(name => ({
                name,
                template: `${this.getUrn()}/examples/${toSnakeCase(name)}.tera`
            }))
        }
    }
}