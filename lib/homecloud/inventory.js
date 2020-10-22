const P = require('path');
const glob = require('glob');
const {unifyEntries} = require('../utilities');
const {toCamelCase} = require('../utilities');
const {log} = require('../logger');
const {getConfig} = require('../glib/config');
const {createGroupModuleFromCsv, resolveDestinationPath, createSnippets, createSprites} = require('../package-common/inventory');

function resolveIconDestination(src) {
    const parts = src.split(P.sep);
    return [
        [getConfig().pkgName],
        ...parts.slice(0, -1).map(toCamelCase),
        ...parts.slice(-1).map(e => {
            let basename = P.basename(e, P.extname(e));
            let camelName = toCamelCase(basename);
            return `${camelName}.png`;
        }),
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
    const workMainLibDir = P.join(__dirname, 'icon')

    const element = unifyEntries(glob.sync(
        'element/**/*.svg',
        {cwd: workMainLibDir, nodir: true}
    ).map(path => processIconPath(workMainLibDir, path)));
    log.info('found (%s) icons for resources', element.length)

    const brand = unifyEntries(glob.sync(
        'brand/**/*.svg',
        {cwd: workMainLibDir, nodir: true}
    ).map(path => processIconPath(workMainLibDir, path)));
    log.info('found (%s) icons for resources', brand.length)

    const group = await createGroupModuleFromCsv(P.join(__dirname, 'groups.csv'));
    log.info('found (%s) entries for groups', group.length)

    // console.debug('service[0] (%o)', service[0])
    // console.debug('resource[0] (%o)', resource[0])
    // process.exit()

    return {element, brand, group};
}

module.exports = {createInventory};
