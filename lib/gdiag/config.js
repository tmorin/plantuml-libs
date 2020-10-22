const P = require('path');
const assert = require('assert');
const root = require('../config');

root.mergeConfig({
    workDir: '.',
    techDir: '.gdiag',
    libDir: P.join(__dirname, '../../'),
    latestRunFile: P.join('.gdiag', 'LATEST_RUN'),
    clean: true
});

function computeMissingConfig() {
    root.mutateConfig(config => {
        assert(config.techDir, 'techDir is missing');
        config.latestRunFile = P.join(getConfig().techDir, 'LATEST_RUN');
    })
}

function getConfig() {
    return root.getConfig();
}

module.exports = {getConfig, computeMissingConfig};
