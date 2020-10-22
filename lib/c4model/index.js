const P = require('path');
const {getConfig} = require('../glib/config');
const {render} = require('../glib/render');
const {parserBoundariesCsv, parserElementsCsv} = require('./inventory');

const tplDir = P.join(__dirname, 'template')

async function createStyle() {
    return render('style.puml', {}, {tplDir});
}

async function createPresentation() {
    return render('presentation.md', {}, {tplDir});
}

async function createBootstrap() {
    return render('bootstrap.puml', {}, {tplDir});
}

async function createInventory() {
    const boundary = await parserBoundariesCsv();
    const element = await parserElementsCsv();
    return {boundary, element};
}

async function createExamples() {
    const examplesDir = P.join(getConfig().pkgDir, 'examples');
    const relativeRepoLibDir = P.relative(examplesDir, getConfig().libDir);
    const examples = [
        'Level_1_System_Context',
        'Level_2_Container',
        'Level_3_Component',
        'System_Landscape_diagram',
        'Dynamic_diagram',
        'Deployment_diagram'
    ];
    return examples.map(example => ({
        source: P.join(getConfig().pkgName, 'examples', `${example}.puml`),
        destination: P.join(getConfig().pkgName, 'examples', `${example}.png`),
        name: P.basename(example, P.extname(example)).replace(/_/g, ' '),
        content: render(`${example}.puml`, {relativeRepoLibDir}, {tplDir})
    }));
}

module.exports = {createInventory, createBootstrap, createStyle, createExamples, createPresentation};
