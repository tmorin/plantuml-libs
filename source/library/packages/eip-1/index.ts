import {PackageContext, PackageFactory} from "../../../../workdir-generator/factories";
import {Item, Package} from "../../../../workdir-generator/manifest";
import P from "path";
import glob from "glob";
import {fetchArchive} from "../../../../workdir-generator/archive";
import {toCamelCase, toSnakeCase} from "../../../../workdir-generator/naming";
import {unifyItems} from "../../../../workdir-generator/discovery";
import {getAbsoluteImagePath} from "../../../../workdir-generator/paths";
import Fe from "fs-extra";
import {promisify} from "util";

const iconsVersion = "1.1";
const iconsUrl = `https://github.com/codeclou/enterprise-integration-pattern-shapes-for-gliffy/archive/refs/tags/${iconsVersion}.zip`

export class Eip1Factory implements PackageFactory {

    getUrn(): string {
        return "eip-1";
    }

    private async discover(
        context: PackageContext,
        cwd: string,
        globPattern: string
    ): Promise<Array<Item>> {
        const discoveredSvg = await promisify(glob)(globPattern, {cwd, nodir: true});
        context.info("discovered %s pictures file from %s", discoveredSvg.length, cwd);

        const discoveredItems: Array<Item> = discoveredSvg.map(relativeImagePathToGlob => {
            const absoluteImagePath = getAbsoluteImagePath(context, cwd, relativeImagePathToGlob);
            const imageSrcPath = P.relative(context.absoluteDstYamlDirPath, absoluteImagePath);
            const imageName = P.basename(relativeImagePathToGlob);
            const parts = relativeImagePathToGlob.split(P.sep).pop().split("__");
            const imageDstPath = [
                [this.getUrn()],
                ...parts.slice(0, -1).map(toCamelCase),
                ...parts.slice(-1).map(e => e.replace(P.extname(imageName), ".png")).map(value => {
                    let basename = P.basename(value, P.extname(value));
                    let camelName = toCamelCase(basename);
                    return `${camelName}${P.extname(value)}`;
                }),
            ].join(P.sep);
            const urn = imageDstPath.replace(P.extname(imageDstPath), "")
            return {
                urn,
                icon: {
                    type: "Source",
                    source: imageSrcPath
                },
                elements: [{
                    shape: {
                        type: "Icon",
                    }
                }, {
                    shape: {
                        type: "IconGroup",
                    }
                }]
            }
        });
        context.info("discovered %s items from %s", discoveredItems.length, cwd);

        return discoveredItems;
    }

    async create(context: PackageContext): Promise<Package> {
        const iconsZipPath = P.join(context.pkgTmpDirPath, "icons.zip");
        const iconsZipDst = P.join(context.pkgTmpDirPath, "icons");
        await fetchArchive(context, iconsUrl, iconsZipPath, iconsZipDst)
        const originalItems = await this.discover(context, P.join(
            iconsZipDst,
            `enterprise-integration-pattern-shapes-for-gliffy-${iconsVersion}`
        ), "eip-svg-shapes/**/*.svg")

        const additionalIconsDst = P.join(context.pkgTmpDirPath, "additional_icons");

        await Fe.copy(P.join(__dirname, "icons"), additionalIconsDst, {recursive: true, overwrite: true});
        const additionalItems = await this.discover(
            context,
            additionalIconsDst,
            "**/*.svg"
        );

        const elementItems = unifyItems([...originalItems, ...additionalItems]);

        const itemsByModules = elementItems
            .sort((a, b) => a.urn.localeCompare(b.urn))
            .reduce((urns, item) => {
                const urn = item.urn.split(P.sep).slice(0, 2).join("/");
                if (!urns[urn]) {
                    urns[urn] = []
                }
                urns[urn].push(item)
                return urns;
            }, {});

        return {
            urn: this.getUrn(),
            modules: Object.keys(itemsByModules).map(urn => ({
                urn, items: itemsByModules[urn]
            })),
            examples: [
                "Message router",
                "Pipes and filters",
                "Simple",
            ].map(name => ({
                name,
                template: `${this.getUrn()}/examples/${toSnakeCase(name)}.tera`
            })),
            templates: {
                bootstrap: `${this.getUrn()}/bootstrap.tera`,
                documentation: `${this.getUrn()}/documentation.tera`,
            }
        }
    }

}
