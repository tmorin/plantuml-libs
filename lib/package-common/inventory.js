const P = require('path');
const F = require('fs');
const parse = require('csv-parse/lib/sync');
const {toCamelCase} = require('../utilities');
const {getConfig} = require('../glib/config');
const {render} = require('../glib/render');

function resolveDestinationPath(iconDestination, ext) {
    return iconDestination.replace(P.extname(iconDestination), ext);
}

function generateExamples(tplDir, examples, data) {
    return examples.map(example => ({
        source: P.join(getConfig().pkgName, 'examples', `${example}.puml`),
        destination: P.join(getConfig().pkgName, 'examples', `${example}.png`),
        name: P.basename(example, P.extname(example)).replace(/_/g, ' '),
        content: render(`${example}.puml`, data, {tplDir})
    }));
}

function createSprites(elementName, elementUrn) {
    return ['md', 'lg'].map(size => {
        const spriteName = `${elementName}${toCamelCase(size)}`;
        const spriteUrn = P.join(P.dirname(elementUrn), spriteName);
        return ({
            size,
            source: P.join(getConfig().techDir, 'sprites', `${spriteUrn}.png`),
            destination: P.join(getConfig().techDir, 'sprites', `${spriteUrn}.sprite`),
        });
    });
}

function createSnippets(types, iconDestination) {
    return ['local', 'remote'].map(location => types.map(type => ({
        type, location,
        source: resolveDestinationPath(iconDestination, `.${type}.${location}.puml`),
        destination: resolveDestinationPath(iconDestination, `.${type}.png`),
    }))).reduce((all, array) => [...all, ...array], []);
}

async function createGroupModuleFromCsv(csvPath) {
    return parse(F.readFileSync(csvPath), {
        columns: true
    }).map(entry => {
        const elementName = `Group${toCamelCase(entry.name)}`;
        const elementLabel = elementName.replace(/[A-Z]/g, (substring) => ` ${substring}`).trim();
        const elementFamily = '';
        const elementUrn = `${getConfig().pkgName}/Group/${elementName}`;
        const elementDestination = `${elementUrn}.puml`;
        const iconName = entry.icon ? P.basename(entry.icon, P.extname(entry.icon)) : '';

        const documentationDestination = `${elementUrn}.md`;

        const snippets = ['local', 'remote'].map(location => ['group'].map(type => ({
            type, location,
            source: `${elementUrn}.${type}.${location}.puml`,
            destination: `${elementUrn}.${type}.${location}.png`,
        }))).reduce((all, array, currentValue) => [...all, ...array], [])

        let sprites = [];
        if (entry.icon) {
            sprites = ['md', 'lg'].map(size => {
                const spriteUrn = `${entry.icon}${toCamelCase(size)}`;
                return ({
                    size,
                    source: P.join(getConfig().techDir, 'sprites', `${spriteUrn}.png`),
                    destination: P.join(getConfig().techDir, 'sprites', `${spriteUrn}.sprite`),
                });
            });
        }

        return {
            group: {...entry, iconName},
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
    })
}

module.exports = {createGroupModuleFromCsv, createSprites, createSnippets, resolveDestinationPath, generateExamples};