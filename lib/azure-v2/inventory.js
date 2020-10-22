const P = require('path');
const F = require('fs');
const glob = require('glob');
const {download, extract, toKebabCase, toCamelCase, unifyEntries} = require('../utilities');
const {log} = require('../logger');
const {getConfig} = require('../glib/config');
const {createGroupModuleFromCsv, resolveDestinationPath, createSnippets, createSprites} = require('../package-common/inventory');

const iconsUrl = "https://arch-center.azureedge.net/icons/Azure_Public_Service_Icons_V2.zip"

function sanitizeIconsParts(parts) {
    return parts.map(part => part
        .replace(/ /g, '-')
        .replace(/\+/g, '-')
        .replace(/^[0-9]*/g, '-')
        .replace(/^[0-9]*/g, '-')
        .replace(/[_-]icon/gi, '')
        .replace(/--/g, '-')
    );
}

function resolveIconDestination(src) {
    const parts = src.split(P.sep);
    const sanitizedParts = sanitizeIconsParts([
        ...parts.slice(0, -1),
        ...parts.slice(-1).map(e => e.replace(P.extname(src), '.png')),
    ]).join(P.sep).split(P.sep);
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
    const elementFamily = elementUrn.split(P.sep).slice(2, -1).join('/');

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
            destination: elementDestination
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
    const workMainLibDir = iconsZipDst
    if (F.existsSync(P.join(workMainLibDir, 'Azure_Public_Service_Icons'))) {
        F.renameSync(P.join(workMainLibDir, 'Azure_Public_Service_Icons'), P.join(workMainLibDir, 'Item'));
    }
    const item = unifyEntries(glob.sync('Item/**/*.svg', {cwd: workMainLibDir, nodir: true})
        .map(path => processIconPath(workMainLibDir, path)))
        .filter(entry => entry.element.urn !== 'azure-v2/Item/Security/ServiceKeys');
    log.info('found (%s) icons for resources', item.length)

    const group = await createGroupModuleFromCsv(P.join(__dirname, 'groups.csv'));
    log.info('found (%s) entries for groups', group.length)

    // item.forEach(entry => console.log('%s,%s', P.basename(entry.icon.source), entry.element.urn))
    // item.forEach(entry => console.log('%s', entry.element.urn))

    // console.debug('item[0] (%o)', item[0])
    // console.debug('group[0] (%o)', group[0])
    // process.exit()

    return {item, group};
}

module.exports = {createInventory};
