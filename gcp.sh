#!/usr/bin/env bash

. ./lib.sh

iconsUrl="https://cloud.google.com/icons/files/gcp-icons.zip"

downloadPlantUML
downloadIcons gcp ${iconsUrl}
originalIconsDir="tmp/gcp/GCP Icons/Products and services"
if [[ -d "${originalIconsDir}" ]]; then
    rm -Rf tmp/gcp/gcp-icons
    mv "${originalIconsDir}" tmp/gcp/gcp-icons
fi
generateIcons gcp tmp/gcp/gcp-icons
generateElements gcp
generateGroups gcp
