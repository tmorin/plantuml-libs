#!/usr/bin/env bash

. lib.v1.sh

iconsUrl="https://d1.awsstatic.com/webteam/architecture-icons/AWS-Architecture-Icons_SVG_20200131.abfc4fb34450d2294f8c65d2dcc9ea1602b6a449.zip"

downloadPlantUML
downloadIcons aws-v3 ${iconsUrl}
originalIconsDir="tmp/aws-v3/AWS-Architecture-Icons_SVG_20200131/SVG Light"
if [[ -d "${originalIconsDir}" ]]; then
    rm -Rf tmp/aws-v3/aws-icons
    mv "${originalIconsDir}" tmp/aws-v3/aws-icons
fi
generateIcons aws-v3 tmp/aws-v3/aws-icons -es='s/-light-bg//i'
generateElements aws-v3
generateSprites aws-v3 -id="aws-v3/icons-x50/GroupIcons:Group"
generateGroups aws-v3
