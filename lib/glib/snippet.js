const P = require('path');
const F = require('fs');
const {log} = require('../logger');
const {renderPuml} = require('../plantuml');
const {toSnakeCase} = require('../utilities');
const {render} = require('./render');
const {getConfig} = require('./config');

async function generateSnippetSources(entry) {
    (entry.snippets || []).forEach(snippet => {
        const srcPath = P.join(getConfig().libDir, snippet.source)
        if (getConfig().override.snippetSrc || !F.existsSync(srcPath)) {
            log.debug('generate snippet (%s/%s) for element (%s)', snippet.type, snippet.location, entry.element.urn);

            F.mkdirSync(P.dirname(srcPath), {recursive: true})
            const relativeRepoLibDir = P.relative(P.join(getConfig().libDir, P.dirname(snippet.source)), getConfig().libDir);
            const data = {
                elementId: toSnakeCase(entry.element.name),
                hasStyle: getConfig().hasPkgStyle,
                hasBootstrap: getConfig().hasPkgBootstrap,
                text : {
                    description: 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.',
                    technical: 'an optional tech field',
                },
                relativeRepoLibDir, entry, snippet
            };

            if (entry.icon) {
                F.writeFileSync(srcPath, render('snippet.icon.puml', data, {trim: true}))
            }
            if (entry.group) {
                F.writeFileSync(srcPath, render('snippet.group.puml', data, {trim: true}))
            }
            if (snippet.template) {
                F.writeFileSync(srcPath, render(snippet.template.name, data, {trim: true, tplDir: snippet.template.directory}))
            }
        }
    });
}

async function generateSnippetDestination(entry) {
    log.debug('generatePackage local snippet for (%s)', entry.element.urn);
    const localSnippets = (entry.snippets || []).filter(snippet => snippet.location === 'local');
    for (const snippet of localSnippets) {
        const srcPath = P.join(getConfig().libDir, snippet.source);
        const pngPath = P.join(P.dirname(srcPath), P.basename(srcPath, P.extname(srcPath))) + '.png'
        const dstPath = P.join(getConfig().libDir, snippet.destination);
        if (getConfig().override.snippetDst || !F.existsSync(dstPath)) {
            await renderPuml(srcPath);
            F.renameSync(pngPath, dstPath);
        }
    }
}

module.exports = {generateSnippetSources, generateSnippetDestination};