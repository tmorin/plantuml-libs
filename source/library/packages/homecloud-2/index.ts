import {PackageContext, PackageFactory} from "../../../../workdir-generator/factories";
import {Item, Package} from "../../../../workdir-generator/manifest";
import P from "path";
import Fe from "fs-extra";
import glob from "glob";
import {getAbsoluteImagePath} from "../../../../workdir-generator/paths";
import {toCamelCase, toSnakeCase} from "../../../../workdir-generator/naming";
import {promisify} from "util";
import {unifyItems} from "../../../../workdir-generator/discovery";

type ItemsByModules = { [key: string]: Array<Item> };

export class Homecloud1Factory implements PackageFactory {

    getUrn(): string {
        return "homecloud-2";
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

    async create(context: PackageContext): Promise<Package> {
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
            modules: Object.keys(itemsByModules).map(moduleUrn => ({
                urn: moduleUrn,
                items: unifyItems(itemsByModules[moduleUrn])
            })),
            examples: [
                "Simple",
            ].map(name => ({
                name,
                template: `${this.getUrn()}/examples/${toSnakeCase(name)}.tera`
            })),
        }
    }
}