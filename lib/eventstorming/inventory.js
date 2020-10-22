const P = require('path');
const F = require('fs');
const parse = require('csv-parse/lib/sync');
const {getConfig} = require('../glib/config');
const {toCamelCase} = require('../utilities');

const tplDir = P.join(__dirname, 'template')

function parserElementsCsv() {
    const csvPath = P.join(__dirname, 'elements.csv');
    return parse(F.readFileSync(csvPath), {columns: true})
        .map(line => {
            const elementName = toCamelCase(line.name);
            const elementLabel = elementName;
            const elementFamily = '';
            const elementUrn = `${getConfig().pkgName}/Element/${elementName}`;
            const elementDestination = `${elementUrn}.puml`;

            const documentationDestination = `${elementUrn}.md`;

            const snippets = ['local', 'remote'].map(location => ['element'].map(type => ({
                type,
                location,
                template: {
                    directory: tplDir,
                    name: 'element.snippet.puml',
                },
                source: `${elementUrn}.${type}.${location}.puml`,
                destination: `${elementUrn}.${type}.${location}.png`,
            }))).reduce((all, array, currentValue) => [...all, ...array], [])

            const sprites = [];

            return {
                eventstorming: line,
                template: {
                    directory: tplDir,
                    name: 'element.puml'
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
            }
        });
}

module.exports = {parserElementsCsv}