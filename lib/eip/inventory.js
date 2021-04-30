const P = require('path');
const glob = require('glob');
const {download, extract, toKebabCase, toCamelCase, unifyEntries} = require('../utilities');
const {log} = require('../logger');
const {getConfig} = require('../glib/config');
const {resolveDestinationPath, createSnippets, createSprites} = require('../package-common/inventory');
const iconsVersion = '1.1';
const iconsUrl = `https://github.com/codeclou/enterprise-integration-pattern-shapes-for-gliffy/archive/refs/tags/${iconsVersion}.zip`

function resolveIconDestination(src) {
    const parts = src.split(P.sep).pop().split('__');
    return [
        [getConfig().pkgName],
        ...parts.slice(0, -1).map(toKebabCase).map(toCamelCase),
        ...parts.slice(-1).map(e => e.replace(P.extname(src), '.png')).map(value => {
            let basename = P.basename(value, P.extname(value));
            let camelName = toCamelCase(basename);
            return `${camelName}${P.extname(value)}`;
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

    const cwd = P.join(
        iconsZipDst,
        `enterprise-integration-pattern-shapes-for-gliffy-${iconsVersion}`
    );

    const entries = unifyEntries(glob.sync(
        'eip-svg-shapes/**/*.svg',
        {cwd, nodir: true}
    ).map(path => processIconPath(cwd, path)));

    const additionalIconsDir = P.join(__dirname, 'icons')
    const additionalEntries = unifyEntries(glob.sync(
        '**/*.svg',
        {cwd: additionalIconsDir, nodir: true}
    ).map(path => processIconPath(additionalIconsDir, path)));

    log.info('found (%s) entries', entries.length);

    const modules = [...entries, ...additionalEntries].reduce((all, entry) => {
        const module = entry.element.urn.split(P.sep)[1];
        if (!all[module]) {
            all[module] = [];
        }
        all[module].push(entry)
        return all;
    }, {});

    //console.log(entries.filter(entry => entry.element.urn.indexOf('Message') > -1))
    //log.info('found modules (%s)', Object.keys(modules));
    //process.exit()

    return {...modules};
}

module.exports = {createInventory};
