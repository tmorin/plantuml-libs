const P = require('path');
const glob = require('glob');
const {unifyEntries} = require('../utilities');
const {download, extract, toKebabCase, toCamelCase, inspectDirectory} = require('../utilities');
const {log} = require('../logger');
const {getConfig} = require('../glib/config');
const {createGroupModuleFromCsv, resolveDestinationPath, createSnippets, createSprites} = require('../package-common/inventory');

const iconsUrl = "https://d1.awsstatic.com/webteam/architecture-icons/Q32020/AWS-Architecture-Assets-For-Light-and-Dark-BG_20200911.478ff05b80f909792f7853b1a28de8e28eac67f4.zip"

function sanitizeIconsParts(parts) {
    return parts.map(part => part
        .replace(/ /g, '-')
        .replace(/--/g, '-')
        .replace(/__/g, '_')
        .replace(/Res_Amazon-/, '')
        .replace(/Res_/, '')
        .replace(/Arch_/, '')
        .replace(/Arch_Amazon-/, '')
        .replace(/_48/, '')
        .replace(/_Light/, '')
        .replace(/_Dark/, '')
    );
}

function resolveIconDestination(src) {
    const parts = src.split(P.sep);
    const sanitizedParts = sanitizeIconsParts([
        ...parts.slice(0, 1).map(e => e.split('-')[2]),
        ...parts.slice(1, 2),
        ...parts.slice(3).map(e => e.replace(P.extname(src), '.png')),
    ]);
    return [
        [getConfig().pkgName],
        ...sanitizedParts.slice(0, -1).map(toKebabCase).map(toCamelCase),
        ...sanitizedParts.slice(sanitizedParts.length - 1)
            .map(value => {
                let basename = P.basename(value, P.extname(value));
                let camelName = toCamelCase(basename);
                return `${camelName}${P.extname(value)}`;
            })
    ].join(P.sep);
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
    const iconsZipDst = P.join(getConfig().pkgtechDir, 'icons');

    await download(iconsUrl, iconsZipPath)
    await extract(iconsZipPath, iconsZipDst)
    const workMainLibDir = (await inspectDirectory(iconsZipDst)).directories[0] + '/'

    const resource = unifyEntries(glob.sync(
        '**/*_Light/**/*.svg',
        {cwd: workMainLibDir, nodir: true}
    ).map(path => processIconPath(workMainLibDir, path)));
    log.info('found (%s) icons for resources', resource.length)

    const service = unifyEntries(glob.sync(
        '**/?(Arch_)48/**/*.svg',
        {cwd: workMainLibDir, nodir: true}
    ).map(path => processIconPath(workMainLibDir, path)));
    log.info('found (%s) icons for services', service.length)

    const group = await createGroupModuleFromCsv(P.join(__dirname, 'groups.csv'));
    log.info('found (%s) entries for groups', group.length)

    // console.debug('service[0] (%o)', service[0])
    // console.debug('resource[0] (%o)', resource[0])
    // process.exit()

    return {resource, service, group};
}

module.exports = {createInventory};
