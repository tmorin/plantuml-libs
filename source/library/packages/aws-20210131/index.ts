import P from "path";
import glob from "glob";
import Fe from "fs-extra";
import parse from "csv-parse/lib/sync";
import F from "fs";
import {promisify} from "util";
import {PackageContext, PackageFactory} from "../../../../workdir-generator/factories";
import {Item, Package} from "../../../../workdir-generator/manifest";
import {extractArchive, fetchArchive} from "../../../../workdir-generator/archive";
import {getAbsoluteImagePath, render} from "../../../../workdir-generator/paths";
import {toCamelCase, toSnakeCase} from "../../../../workdir-generator/naming";
import {csvToCustomGroups, unifyItems} from "../../../../workdir-generator/discovery";

const ICONS_URL = "https://d1.awsstatic.com/webteam/architecture-icons/q1-2021/AWS-Architecture_Asset-Package_20210131.a41ffeeec67743738315c2585f5fdb6f3c31238d.zip"

type FamiliesCsvRow = {
    name: string,
    color: string,
}

export class Aws20210131Factory implements PackageFactory {
    getUrn(): string {
        return "aws-20210131";
    }

    private getItemUrn(imageSrcPath: string) {
        const parts = imageSrcPath.split(P.sep)
            .map(part => part
                .replace(/^48$/g, '')
                .replace(/^Arch_48$/g, '')
                .replace(/^Arch-Category_48$/g, '')
                .replace(/^Res_48_Light$/g, '')
                .replace(/_48\.svg$/g, '')
                .replace(/_48_Light\.svg$/g, '')
                .replace(/\.svg$/g, '')
                .replace(/_48$/g, '')
                .replace(/^Arch-/g, '')
                .replace(/^Arch_/g, '')
                .replace(/^Category_/g, '')
                .replace(/^Res_/g, '')
            )
            .map(toCamelCase)
            .filter(part => !!part);
        return `${this.getUrn()}/${parts.join(P.sep)}`;
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
            const itemUrn = this.getItemUrn(relativeImagePathToGlob);
            const itemFamily = itemUrn.split(P.sep).slice(-2, -1).join();
            const elementIconGroupStereotype = `${itemFamily}Family`;
            return {
                urn: itemUrn,
                family: itemFamily,
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
                        type: "IconGroup",
                        stereotype_name: elementIconGroupStereotype
                    }
                }],
            }
        });
        context.info("discovered %s items from %s", discoveredItems.length, cwd);

        return discoveredItems.sort((a, b) => a.urn.localeCompare(b.urn));
    }

    private async renderBootstrap(context: PackageContext) {
        const families: Array<FamiliesCsvRow> = parse(F.readFileSync(
            P.join(__dirname, "families.csv"),
            {encoding: "utf-8"}
        ), {
            columns: true
        });
        await render(
            P.join(__dirname, "templates", "bootstrap.tera"),
            P.join(context.tplDirPath, this.getUrn(), "bootstrap.tera"),
            {families}
        );
    }

    async create(context: PackageContext): Promise<Package> {
        await this.renderBootstrap(context);

        const iconsZipPath = P.join(context.pkgTmpDirPath, "icons.zip");
        const iconsZipDst = P.join(context.pkgTmpDirPath, "temp_icons");
        await fetchArchive(context, ICONS_URL, iconsZipPath, iconsZipDst)

        const iconsDst = P.join(context.pkgTmpDirPath, "icons");

        await extractArchive(context, P.join(iconsZipDst, 'Asset-Package_20210131', 'Architecture-Service-Icons_01-31-2021.zip'), P.join(iconsDst, 'architecture'))
        await extractArchive(context, P.join(iconsZipDst, 'Asset-Package_20210131', 'Category-Icons_01-31-2021.zip'), P.join(iconsDst, 'category'))
        await extractArchive(context, P.join(iconsZipDst, 'Asset-Package_20210131', 'Resource-Icons_01-31-2021.zip'), P.join(iconsDst, 'resource'))

        await Fe.copy(P.join(__dirname, "icons"), iconsDst, {recursive: true, overwrite: true});

        const architectureItems = await this.discover(
            context,
            iconsDst,
            "architecture/**/+(Arch_48|48)/**/*.svg",
        );
        context.info('found (%s) icons for architecture', architectureItems.length)

        const categoryItems = (await this.discover(
            context,
            iconsDst,
            "category/**/Arch-Category_48/**/*.svg",
        ));
        categoryItems.forEach(item => {
            delete item.family;
            item.elements.forEach(element => {
                if (element.shape.type === 'IconGroup') {
                    element.shape.stereotype_name = P.basename(item.urn);
                }
            });
        });
        context.info('found (%s) icons for category', categoryItems.length)

        const resourcesItems = await this.discover(
            context,
            iconsDst,
            "resource/**/Res_48_Light/**/*.svg",
        );
        context.info('found (%s) icons for resource', resourcesItems.length)

        const group_items: Array<Item> = await csvToCustomGroups(this, P.join(__dirname, "groups.csv"));

        return {
            urn: this.getUrn(),
            templates: {
                bootstrap: `${this.getUrn()}/bootstrap.tera`
            },
            modules: [{
                urn: `${this.getUrn()}/Architecture`,
                items: unifyItems(architectureItems)
            }, {
                urn: `${this.getUrn()}/Category`,
                items: unifyItems(categoryItems)
            }, {
                urn: `${this.getUrn()}/Group`,
                items: unifyItems(group_items)
            }, {
                urn: `${this.getUrn()}/Resource`,
                items: unifyItems(resourcesItems)
            }],
            examples: [
                "Chef Automate Architecture on AWS",
                "Git to S3 Webhooks",
            ].map(name => ({
                name,
                template: `${this.getUrn()}/examples/${toSnakeCase(name)}.tera`
            })),
        }
    }
}