#!/usr/bin/env bash

export LIB_NAME="cloud"
export LIB_BRANCH="master"

. lib.v2.sh

cleanGeneratedResources

setConstants

downloadPlantUML

awsIconsUrl="https://d1.awsstatic.com/webteam/architecture-icons/AWS-Architecture-Icons_SVG_20200131.abfc4fb34450d2294f8c65d2dcc9ea1602b6a449.zip"
azureIconsUrl="https://download.microsoft.com/download/1/7/1/171DA19A-5477-4F50-B354-4ABAF28502A6/Microsoft_Cloud_AI_Azure_Service_Icon_Set_2019_09_11.zip"
gcpIconsUrl="https://cloud.google.com/icons/files/gcp-icons.zip"
materialsIconsUrl="https://github.com/google/material-design-icons/releases/download/3.0.1/material-design-icons-3.0.1.zip"

downloadIcons aws ${awsIconsUrl} "AWS-Architecture-Icons_SVG_20200131/SVG Light"
generateIcons aws -pps='s/-on-aws//i;s/-light-bg//i;' -pns='s/amazon//ig;s/aws//ig;'
generateElements aws
generateGroups aws
generateDocumentation aws element
generateDocumentation aws group

downloadIcons azure ${azureIconsUrl} "azure-icons"
generateIcons azure -pps='s/-on-azure//i;s/-non-azure/-external/i;' -pns='s/azure//ig;' --export-area-drawing
generateElements azure
generateGroups azure
generateDocumentation azure element
generateDocumentation azure group

downloadIcons gcp ${gcpIconsUrl} "GCP Icons/Products and services"
generateIcons gcp
generateElements gcp
generateGroups gcp
generateDocumentation gcp element
generateDocumentation gcp group

downloadIcons materials ${materialsIconsUrl}
if [[ ! -d "${tmpDir}/${libName}/materials/icons" ]]; then
  find "${tmpDir}/${libName}/materials/material-design-icons-3.0.1" -wholename "*/production/*48px.svg" -print0 |
  while IFS= read -r -d '' oPic; do
    picName=$(sed -e 's/ic_//;s/_48px//;' <<< $(basename ${oPic}))
    dPicDir=$(sed -e 's/material-design-icons-3\.0\.1/icons/;s:/svg/production::;' <<< $(dirname ${oPic}))
    dPic="${dPicDir}/${picName}"
    log "materials" "extract SVG pictures (${oPic}) to (${dPic})"
    mkdir -p ${dPicDir}
    mv ${oPic} ${dPic}
  done
fi
generateIcons materials
generateElements materials
generateDocumentation materials element

generateExamples
