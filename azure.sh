#!/usr/bin/env bash

. lib.v1.sh

iconsRelease="2019_09_11"
iconsUrl="https://download.microsoft.com/download/1/7/1/171DA19A-5477-4F50-B354-4ABAF28502A6/Microsoft_Cloud_AI_Azure_Service_Icon_Set_${iconsRelease}.zip"

downloadPlantUML
downloadIcons azure ${iconsUrl}
generateIcons azure tmp/azure/azure-icons
generateElements azure
generateSprites azure
generateGroups azure
