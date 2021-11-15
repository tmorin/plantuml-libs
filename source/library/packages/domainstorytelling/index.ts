import P from "path";
import {promisify} from "util";
import glob from "glob";
import Fe from "fs-extra";
import {capitalize} from "lodash";
import {PackageContext, PackageFactory} from "../../../../workdir-generator/factories";
import {Item, Package} from "../../../../workdir-generator/manifest";
import {toCamelCase, toSnakeCase} from "../../../../workdir-generator/naming";
import {getAbsoluteImagePath, render} from "../../../../workdir-generator/paths";
import {unifyItems} from "../../../../workdir-generator/discovery";
import parse from "csv-parse/lib/sync";
import F from "fs";

type ItemsByModules = { [key: string]: Array<Item> };

type GroupsCsvRow = {
    name: string,
    color: string,
    borderStyle: string,
}

export function createGroupItems(path: string, urn: string): Array<Item> {
    const group_items_as_csv: Array<GroupsCsvRow> = parse(F.readFileSync(
        path,
        {encoding: "utf-8"}
    ), {columns: true});
    return group_items_as_csv
        .map(({name}) => {
            return {
                urn: `${urn}/Group/${name}Group`,
                templates: {
                    source: "domainstorytelling/item_group_source.tera",
                    snippet: "domainstorytelling/item_group_snippet.tera",
                },
                elements: [{
                    shape: {
                        type: "Custom",
                        properties: {}
                    }
                }]
            }
        });
}

export class DomainstorytellingFactory implements PackageFactory {
    getUrn(): string {
        return "domainstorytelling";
    }

    private getItemUrn(imageSrcPath: string) {
        return `${this.getUrn()}/${imageSrcPath.split(P.sep).slice(3)
            .map(value => value.replace(/\.svg$/g, ''))
            .map(toCamelCase)
            .filter(part => !!part)
            .join("/")}`;
    }

    private async discover(
        context: PackageContext,
        cwd: string,
        globPattern: string
    ): Promise<ItemsByModules> {
        const discoveredSvg = await promisify(glob)(globPattern, {cwd, nodir: true});
        context.info("discovered %s pictures file from %s", discoveredSvg.length, cwd);
        return discoveredSvg.reduce((map, relativeImagePathToGlob) => {
            const absoluteImagePath = getAbsoluteImagePath(context, cwd, relativeImagePathToGlob);
            const imageSrcPath = P.relative(context.absoluteDstYamlDirPath, absoluteImagePath);
            const itemUrn = this.getItemUrn(imageSrcPath);
            const moduleUrn = itemUrn.split("/").slice(0, 2).join("/");
            if (!map[moduleUrn]) {
                map[moduleUrn] = [];
            }
            map[moduleUrn].push({
                urn: itemUrn,
                icon: {
                    type: "Source",
                    source: imageSrcPath
                },
                elements: [{
                    shape: {
                        type: "Icon"
                    }
                }, {
                    shape: {
                        type: "IconCard"
                    }
                }, {
                    shape: {
                        type: "IconGroup"
                    }
                }]
            });
            return map;
        }, {} as ItemsByModules);
    }

    private async renderBootstrap(context: PackageContext) {
        const groups: Array<GroupsCsvRow> = parse(F.readFileSync(
            P.join(__dirname, "groups.csv"),
            {encoding: "utf-8"}
        ), {
            columns: true
        });
        await render(
            P.join(__dirname, "templates", "bootstrap.tera"),
            P.join(context.tplDirPath, this.getUrn(), "bootstrap.tera"),
            {groups}
        );
    }

    async create(context: PackageContext): Promise<Package> {
        await this.renderBootstrap(context);

        const iconsDst = P.join(context.pkgTmpDirPath, "icons");

        await Fe.copy(P.join(__dirname, "icons"), iconsDst, {recursive: true, overwrite: true});
        const itemsByModules = await this.discover(
            context,
            iconsDst,
            "**/*.svg"
        );
        context.info('found (%s) modules', Object.keys(itemsByModules).length)

        return {
            urn: this.getUrn(),
            templates: {
                bootstrap: `${this.getUrn()}/bootstrap.tera`,
                documentation: `${this.getUrn()}/documentation.tera`,
            },
            modules: [...Object.keys(itemsByModules).map(moduleUrn => ({
                urn: moduleUrn,
                items: unifyItems(itemsByModules[moduleUrn])
            })), {
                urn: `${this.getUrn()}/Group`,
                items: createGroupItems(P.join(__dirname, "groups.csv"), this.getUrn())
            }],
            examples: [
                "Introduction 1",
                "Introduction 2",
                "Groups",
            ].map(name => ({
                name,
                template: `${this.getUrn()}/examples/${toSnakeCase(name)}.tera`
            })),
        }
    }
}