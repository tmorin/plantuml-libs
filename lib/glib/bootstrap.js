const {getConfig} = require('./config');
const {log} = require('../logger');
const {render} = require('./render');
const P = require('path');
const F = require('fs');

async function generateBootstrap() {
    log.info('generate the bootstrap files');

    const libDir = getConfig().libDir;

    F.writeFileSync(
        P.join(libDir, 'bootstrap.puml'),
        render('bootstrap.puml')
    );

    F.writeFileSync(
        P.join(libDir, 'functions.puml'),
        render('functions.puml')
    );

    F.writeFileSync(
        P.join(libDir, 'constants.puml'),
        render('constants.puml')
    );

    F.writeFileSync(
        P.join(libDir, 'style.puml'),
        render('style.puml')
    );

    F.writeFileSync(
        P.join(libDir, 'README.md'),
        render('library.md')
    );
}

module.exports = {generateBootstrap};
