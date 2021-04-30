const P = require('path');
const glob = require('glob');
const {unifyEntries} = require('../utilities');
const {download, extract, toKebabCase, toCamelCase} = require('../utilities');
const {log} = require('../logger');
const {getConfig} = require('../glib/config');
const {
    createGroupModuleFromCsv,
    resolveDestinationPath,
    createSnippets,
    createSprites
} = require('../package-common/inventory');

const iconsUrl = "https://d1.awsstatic.com/webteam/architecture-icons/q1-2021/AWS-Architecture_Asset-Package_20210131.a41ffeeec67743738315c2585f5fdb6f3c31238d.zip"

function resolveIconDestination(src) {
    const parts = src.split(P.sep)
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
        .map(toKebabCase)
        .map(toCamelCase)
        .filter(part => !!part);
    return `${getConfig().pkgName}/${parts.join(P.sep)}.png`;
}

function processIconPath(workMainLibDir, path) {
    const iconSource = P.join(workMainLibDir, path);
    const iconDestination = resolveIconDestination(path);
    const elementName = P.basename(iconDestination, P.extname(iconDestination));
    const elementLabel = elementName.replace(/[A-Z]/g, (substring) => ` ${substring}`).trim();
    const elementDestination = resolveDestinationPath(iconDestination, '.puml');
    const elementUrn = iconDestination.replace(P.extname(iconDestination), '')
    const elementFamily = elementUrn.split(P.sep).slice(-2, -1).join();
    const elementIconGroupStereotype = `${elementFamily}Family`;

    const documentationDestination = resolveDestinationPath(iconDestination, '.md');

    const sprites = createSprites(elementName, elementUrn)

    const snippets = createSnippets(['card', 'element', 'group'], iconDestination)

    return {
        icon: {
            height: 50,
            source: iconSource,
            destination: iconDestination,
        },
        element: {
            name: elementName,
            label: elementLabel,
            family: elementFamily,
            urn: elementUrn,
            destination: elementDestination,
            iconGroupStereotype: elementIconGroupStereotype
        },
        documentation: {
            destination: documentationDestination
        },
        snippets, sprites
    };
}

async function createInventory() {
    const iconsZipPath = P.join(getConfig().pkgtechDir, 'icons.zip');
    const iconsTempZipDst = P.join(getConfig().pkgtechDir, 'icons-temp');
    const workMainLibDir = P.join(getConfig().pkgtechDir, 'icons');
    const iconsArchitectureDst = P.join(workMainLibDir, 'architecture');
    const iconsCategoryDst = P.join(workMainLibDir, 'category');
    const iconsResourceDst = P.join(workMainLibDir, 'resource');

    await download(iconsUrl, iconsZipPath)
    await extract(iconsZipPath, iconsTempZipDst)
    await extract(P.join(iconsTempZipDst, 'Asset-Package_20210131', 'Architecture-Service-Icons_01-31-2021.zip'), iconsArchitectureDst)
    await extract(P.join(iconsTempZipDst, 'Asset-Package_20210131', 'Category-Icons_01-31-2021.zip'), iconsCategoryDst)
    await extract(P.join(iconsTempZipDst, 'Asset-Package_20210131', 'Resource-Icons_01-31-2021.zip'), iconsResourceDst)

    const architecture = unifyEntries(glob.sync(
        'architecture/**/+(Arch_48|48)/**/*.svg',
        {cwd: workMainLibDir, nodir: true}
    ).map(path => processIconPath(workMainLibDir, path)));
    log.info('found (%s) icons for architecture', architecture.length)

    const category = unifyEntries(glob.sync(
        'category/**/Arch-Category_48/**/*.svg',
        {cwd: workMainLibDir, nodir: true}
    ).map(path => processIconPath(workMainLibDir, path))).map(entry => {
        entry.element.family = entry.element.name;
        entry.element.iconGroupStereotype = `${entry.element.family}Family`;
        return entry;
    });
    log.info('found (%s) icons for category', category.length)

    const resource = unifyEntries(glob.sync(
        'resource/**/Res_48_Light/**/*.svg',
        {cwd: workMainLibDir, nodir: true}
    ).map(path => processIconPath(workMainLibDir, path)));
    log.info('found (%s) icons for resource', resource.length)

    const additionalIconsDir = P.join(__dirname, 'icons')
    const additionalEntries = unifyEntries(glob.sync(
        '**/*.svg',
        {cwd: additionalIconsDir, nodir: true}
    ).map(path => processIconPath(additionalIconsDir, path)));
    log.info('found (%s) icons for additional entries', additionalEntries.length)

    const group = await createGroupModuleFromCsv(P.join(__dirname, 'groups.csv'));
    log.info('found (%s) entries for groups', group.length)

    // const families = [...architecture, ...category, ...resource].map(e => e.element.family)
    //     .sort()
    //     .filter((value, index, self) => self.indexOf(value) === index)
    // console.log(families.join('\n'))
    // console.debug('architecture[0] (%o)', architecture[0])
    // console.debug('category[0] (%o)', category[0])
    // process.exit()

    return additionalEntries.reduce((all, entry) => {
        const module = entry.element.urn.split('/')[1].toLowerCase();
        all[module].push(entry);
        return all;
    }, {architecture, category, resource, group});

}

module.exports = {createInventory};
