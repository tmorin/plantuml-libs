import {PackageContext, PackageFactory} from "../../../../workdir-generator/factories";
import {Item, Package} from "../../../../workdir-generator/manifest";
import P from "path";
import {fetchArchive} from "../../../../workdir-generator/archive";
import glob from "glob";
import {promisify} from "util";
import {getAbsoluteImagePath} from "../../../../workdir-generator/paths";
import {toCamelCase} from "../../../../workdir-generator/naming";
import {unifyItems} from "../../../../workdir-generator/discovery";

const ICONS_VERSION = "4.0.0"
const ICONS_URL = `https://github.com/google/material-design-icons/archive/${ICONS_VERSION}.zip`

type ItemsByModules = { [key: string]: Array<Item> };

export class Material4Factory implements PackageFactory {

    getUrn(): string {
        return "material-4";
    }

    private getItemUrn(imageSrcPath: string) {
        const parts = imageSrcPath.split(P.sep)
            .slice(2, -1)
            .map(part => part
                .replace(/^materialicons$/g, '')
                .replace(/^.x$/g, '')
                .replace(/48dp/g, '')
                .replace(/_black/g, '')
                .replace(/.png$/g, '')
            )
            .map(toCamelCase)
            .filter(part => !!part);
        const name = parts[parts.length - 1].replace(/^[0-9]/, (s) => `_${s}`)
        return `${this.getUrn()}/${parts.slice(0, -1).join("/")}/${name}`;
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
            const itemUrn = this.getItemUrn(relativeImagePathToGlob);
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
                }]
            });
            return map;
        }, {} as ItemsByModules);
    }

    async create(context: PackageContext): Promise<Package> {
        const iconsZipPath = P.join(context.pkgTmpDirPath, "icons.zip");
        const iconsZipDst = P.join(context.pkgTmpDirPath, "icons");
        await fetchArchive(context, ICONS_URL, iconsZipPath, iconsZipDst)

        const itemsByModules = await this.discover(
            context,
            iconsZipDst,
            "*/png/**/materialicons/48dp/2x/*.png",
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
            examples: []
        }
    }
}