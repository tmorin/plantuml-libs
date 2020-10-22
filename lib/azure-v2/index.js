const P = require('path');
const {getConfig} = require('../glib/config');
const {createInventory} = require('./inventory');
const {render} = require('../glib/render');

const tplDir = P.join(__dirname, 'template')

async function createStyle() {
    return render('style.puml', {}, {tplDir});
}

async function createBootstrap() {
    return render('bootstrap.puml', {}, {tplDir});
}

async function createExamples() {
    const examplesDir = P.join(getConfig().pkgDir, 'examples');
    const relativeRepoLibDir = P.relative(examplesDir, getConfig().libDir);
    const examples = ['scikit_learn_and_deep_learning'];
    return examples.map(example => ({
        source: P.join(getConfig().pkgName, 'examples', `${example}.puml`),
        destination: P.join(getConfig().pkgName, 'examples', `${example}.png`),
        name: P.basename(example, P.extname(example)).replace(/_/g, ' '),
        content: render(`${example}.puml`, {relativeRepoLibDir}, {tplDir})
    }));
}

module.exports = {createInventory, createBootstrap, createStyle, createExamples};
