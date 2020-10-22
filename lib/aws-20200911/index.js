const P = require('path');
const F = require('fs');
const {getConfig} = require('../glib/config');
const {createInventory} = require('./inventory');
const {render} = require('../glib/render');
const parse = require('csv-parse/lib/sync');

const tplDir = P.join(__dirname, 'template')

async function createStyle() {
    const csvPath = P.join(__dirname, 'families.csv');
    const families = parse(F.readFileSync(csvPath), {columns: true});
    return render('style.puml', {families}, {tplDir});
}

async function createBootstrap() {
    return render('bootstrap.puml', {}, {tplDir});
}

async function createExamples() {
    const examplesDir = P.join(getConfig().pkgDir, 'examples');
    const relativeRepoLibDir = P.relative(examplesDir, getConfig().libDir);
    const examples = ['chef_automate_architecture_on_aws', 'git_to_s3_webhooks'];
    return examples.map(example => ({
        source: P.join(getConfig().pkgName, 'examples', `${example}.puml`),
        destination: P.join(getConfig().pkgName, 'examples', `${example}.png`),
        name: P.basename(example, P.extname(example)).replace(/_/g, ' '),
        content: render(`${example}.puml`, {relativeRepoLibDir}, {tplDir})
    }));
}

module.exports = {createInventory, createBootstrap, createStyle, createExamples};
