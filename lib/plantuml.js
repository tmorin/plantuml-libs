const P = require('path');
const util = require('util');
const CP = require('child_process');
const {log} = require('./logger');
const {download} = require('./utilities');
const {getConfig} = require('./config');

const exec = util.promisify(CP.exec);

function getPlantumlJarPath() {
    return P.join(getConfig().techDir, `plantuml-${getConfig().plantumlVersion}.jar`);
}

async function downloadPlantUML() {
    // https://sourceforge.net/projects/plantuml/files
    const url = `https://sourceforge.net/projects/plantuml/files/${getConfig().plantumlVersion}/plantuml.${getConfig().plantumlVersion}.jar/download`;
    await download(url, getPlantumlJarPath());
}

async function renderPuml(source) {
    const plantumlJarPath = getPlantumlJarPath();
    await exec(`${getConfig().javaCmd} -jar ${plantumlJarPath} ${source}`, {
        stdio: process.stdout,
        stderr: process.stdout
    }).catch(error => log.warn(error.message));
}

async function encodeSprite(source, destination) {
    const plantumlJarPath = getPlantumlJarPath();
    // java -jar tmp/plantuml.jar -encodesprite 16z "${tmpSptIcon}" > "${tmpSpt}"
    await exec(`${getConfig().javaCmd} -jar ${plantumlJarPath} -encodesprite 16z ${source} > ${destination}`, {
        stdio: process.stdout
    }).catch(error => log.warn(error.message));
}

module.exports = {downloadPlantUML, renderPuml, encodeSprite};
