const LOG_LEVEL = 'info';
const JAVA_CMD = 'java';
const PLANTUML_VERSION = '1.2021.3';

let config = {
    javaCmd: JAVA_CMD,
    plantumlVersion: PLANTUML_VERSION,
    logLevel: LOG_LEVEL
};

function mutateConfig(callback) {
    callback(config);
}

function mergeConfig(newConfig) {
    config = {...config, ...newConfig};
}

function getConfig() {
    return config;
}

module.exports = {getConfig, mergeConfig, mutateConfig};
