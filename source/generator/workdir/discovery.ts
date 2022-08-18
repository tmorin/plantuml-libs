import {Item} from "./manifest";
import {parse} from 'csv-parse/sync';
import Fe from "fs-extra";
import P from "path";
import {toCamelCase, toCapitalize} from "./naming";
import {PackageFactory} from "./factories";

export function unifyItems(items: Array<Item>) {
    const newItems = {};
    return items.filter(item => {
        if (newItems[item.urn]) {
            return false;
        }
        return newItems[item.urn] = true;
    })
}

export type CustomGroupsCsvRow = {
    name: string,
    front_color: string,
    background_color: string,
    border_thick: string,
    border_style: string,
    border_color: string,
    icon_reference: string
}

export async function csvToCustomGroups(
    factory: PackageFactory,
    csvPath: string
): Promise<Array<Item>> {
    const content = await Fe.readFile(csvPath, {encoding: "utf-8"});
    const rows: Array<CustomGroupsCsvRow> = parse(content, {columns: true});
    return rows.map(properties => {
        return {
            urn: `${factory.getUrn()}/Group/Group${toCamelCase(properties.name)}`,
            icon: properties.icon_reference ? {
                type: "Reference",
                urn: properties.icon_reference
            } : undefined,
            templates: {
                source: "item_custom_group_source.tera",
                snippet: "item_custom_group_snippet.tera",
            },
            elements: [{
                shape: {
                    type: "Custom",
                    properties: {
                        sprite_name: properties.icon_reference ? `${P.parse(properties.icon_reference).name}Lg` : undefined,
                        label: toCapitalize(properties.name),
                        front_color: properties.front_color,
                        background_color: properties.background_color,
                        border_thick: properties.border_thick,
                        border_style: properties.border_style,
                        border_color: properties.border_color,
                    }
                }
            }]
        }
    });
}