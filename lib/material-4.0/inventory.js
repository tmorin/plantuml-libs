const P = require('path');
const glob = require('glob');
const {download, extract, toKebabCase, toCamelCase, unifyEntries} = require('../utilities');
const {log} = require('../logger');
const {getConfig} = require('../glib/config');
const {resolveDestinationPath, createSnippets, createSprites} = require('../package-common/inventory');

const iconsUrl = "https://github.com/google/material-design-icons/archive/4.0.0.zip"

function resolveIconDestination(src) {
    const parts = src.split(P.sep);
    const sanitizedParts = [
        ...parts.slice(1, 2),
        ...parts.slice(2, 3)
            .map(e => e.replace(/^([0-9])/, (s) => `a${s}`))
            .map(e => `${e}.png`)
    ];
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
    const elementFamily = '';
    const documentationDestination = resolveDestinationPath(iconDestination, '.md');

    const sprites = createSprites(elementName, elementUrn)

    const snippets = createSnippets(['element'], iconDestination)

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

    await download(iconsUrl, iconsZipPath);
    await extract(iconsZipPath, iconsZipDst);

    const cwd = P.join(iconsZipDst, 'material-design-icons-4.0.0');

    const entries = unifyEntries(glob.sync(
        'png/**/materialicons/48dp/2x/*.png',
        {cwd, nodir: true}
    ).map(path => processIconPath(cwd, path)));

    log.info('found (%s) entries', entries.length);

    const modules = entries.reduce((all, entry) => {
        const module = entry.element.urn.split(P.sep)[1];
        if (!all[module]) {
            all[module] = [];
        }
        all[module].push(entry)
        return all;
    }, {});

    log.info('found modules (%s)', Object.keys(modules));

    // item.forEach(entry => console.log('%s', entry.element.urn))
    // console.debug('item[0] (%o)', item[0])
    // process.exit()

    return {...modules};
}

module.exports = {createInventory};
