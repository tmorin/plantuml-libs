const P = require('path');
const F = require('fs');
const {log} = require('../logger');
const {toCamelCase} = require('../utilities');
const {getConfig} = require('./config');
const {render} = require('./render');

async function generateElementDocumentation(entry) {
    log.debug('generate documentation for (%s)', entry.element.urn);
    const docPath = P.join(getConfig().libDir, entry.documentation.destination)
    F.mkdirSync(P.dirname(docPath), {recursive: true});
    const snippets = entry.snippets.reduce((snippets, snippet) => {
        if (!snippets[snippet.type]) {
            snippets[snippet.type] = {}
        }
        snippets[snippet.type].image = `${entry.element.urn}.${snippet.type}.png`;
        snippets[snippet.type][snippet.location] = F.readFileSync(P.join(getConfig().libDir, snippet.source)).toString('utf-8');
        return snippets;
    }, {});
    const snippetTypes = entry.snippets.filter(({location}) => location === 'local').map(({type}) => type);
    const snippetImages = entry.snippets.filter(({location}) => location === 'local').map(({destination}) => P.basename(destination));
    const headers = [...snippetTypes];
    if (entry.icon) {
        headers.unshift('icon');
    }
    const mdTableHeader = `|${headers.join('|')}|`
    const mdTableHeaderLine = `|${headers.map(() => '---').join('|')}|`
    const images = [...snippetImages];
    if (entry.icon) {
        images.unshift(`${entry.element.name}.png`);
    }
    const mdImages = `|${images.map(image => `![](${image})`).join('|')}|`
    F.writeFileSync(docPath, render('element.md', {
        entry,
        snippetTypes,
        snippets,
        mdTableHeader,
        mdTableHeaderLine,
        mdImages
    }))
}

async function generatePackageDocumentation(presentation, inventory, examples) {
    log.info('generate package documentation');
    const docPath = P.join(getConfig().pkgDir, 'README.md')
    F.mkdirSync(P.dirname(docPath), {recursive: true});
    const hasBootstrap = getConfig().hasPkgBootstrap;
    const hasStyle = getConfig().hasPkgStyle;
    const modules = Object.keys(inventory).map(key => ({
        name: toCamelCase(key),
        destination: `${key}.md`,
        elements: inventory[key].length
    }))
    F.writeFileSync(docPath, render('package.md', {modules, presentation, examples, hasBootstrap, hasStyle}));
}

async function generateModuleDocumentation(moduleName, entries) {
    log.info('generate module documentation for (%s)', moduleName);
    const docPath = P.join(getConfig().pkgDir, `${moduleName}.md`)
    F.mkdirSync(P.dirname(docPath), {recursive: true});
    const entriesByFamily = entries.reduce((families, entry) => {
        const family = entry.element.family || '_';
        if (!families[family]) {
            families[family] = [];
        }
        const snippetByTypes = entry.snippets.filter(({location}) => location === 'local').reduce((result, snippet) => {
            result[snippet.type] = snippet;
            return result;
        }, {});

        let image;
        if (snippetByTypes.element) {
            image = snippetByTypes.element.destination
        } else if (snippetByTypes.group) {
            image = snippetByTypes.group.destination
        } else if (snippetByTypes.card) {
            image = snippetByTypes.card.destination
        }

        families[family].push({
            ...entry, image
        });
        return families;
    }, {});
    const pageName = toCamelCase(moduleName)
    F.writeFileSync(docPath, render('module.md', {pageName, entries, entriesByFamily}));
}

module.exports = {generateElementDocumentation, generatePackageDocumentation, generateModuleDocumentation};