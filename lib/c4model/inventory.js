const P = require('path');
const F = require('fs');
const parse = require('csv-parse/lib/sync');
const {getConfig} = require('../glib/config');

const tplDir = P.join(__dirname, 'template')

function parserBoundariesCsv() {
    const csvPath = P.join(__dirname, 'boundaries.csv');
    return parse(F.readFileSync(csvPath), {columns: true})
        .map(line => {
            const elementName = `${line.name}Boundary`;
            const elementLabel = line.name.replace(/[A-Z]/g, (substring) => ` ${substring}`).trim();
            const elementFamily = '';
            const elementUrn = `${getConfig().pkgName}/Boundary/${elementName}`;
            const elementDestination = `${elementUrn}.puml`;

            const documentationDestination = `${elementUrn}.md`;

            const snippets = ['local', 'remote'].map(location => ['element'].map(type => ({
                type, location,
                template: {
                    directory: tplDir,
                    name: 'c4.boundary.snippet.puml',
                },
                source: `${elementUrn}.${type}.${location}.puml`,
                destination: `${elementUrn}.${type}.${location}.png`,
            }))).reduce((all, array, currentValue) => [...all, ...array], [])

            const sprites = [];

            return {
                c4: line,
                template: {
                    directory: tplDir,
                    name: 'c4.boundary.puml'
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

function parserElementsCsv() {
    const csvPath = P.join(__dirname, 'elements.csv');
    return parse(F.readFileSync(csvPath), {columns: true})
        .map(line => {
            const elementName = line.name;
            const elementLabel = line.name.replace(/[A-Z]/g, (substring) => ` ${substring}`).trim();
            const elementFamily = '';
            const elementUrn = `${getConfig().pkgName}/Element/${elementName}`;
            const elementDestination = `${elementUrn}.puml`;

            const documentationDestination = `${elementUrn}.md`;

            const snippets = ['local', 'remote'].map(location => ['element'].map(type => ({
                type,
                location,
                template: {
                    directory: tplDir,
                    name: 'c4.element.snippet.puml',
                },
                source: `${elementUrn}.${type}.${location}.puml`,
                destination: `${elementUrn}.${type}.${location}.png`,
            }))).reduce((all, array, currentValue) => [...all, ...array], [])

            const sprites = [];

            return {
                c4: line,
                template: {
                    directory: tplDir,
                    name: 'c4.element.puml'
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

module.exports = {parserBoundariesCsv, parserElementsCsv}