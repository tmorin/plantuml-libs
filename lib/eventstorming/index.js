const parse = require('csv-parse/lib/sync');
const P = require('path');
const F = require('fs');
const {generateExamples} = require('../package-common/inventory');
const {getConfig} = require('../glib/config');
const {render} = require('../glib/render');
const {parserElementsCsv} = require('./inventory');

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
    const element = await parserElementsCsv();
    return {element};
}

async function createExamples(inventory) {
    const examplesDir = P.join(getConfig().pkgDir, 'examples');
    const relativeRepoLibDir = P.relative(examplesDir, getConfig().libDir);
    const examples = ['all_elements', 'book_flow', 'causality_chain', 'hoozbuzzing'];
    return generateExamples(tplDir, examples, {relativeRepoLibDir, inventory});
}

module.exports = {createInventory, createBootstrap, createStyle, createExamples, createPresentation};
