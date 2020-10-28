#!/usr/bin/env bash

export LIB_NAME="perso"
export LIB_BRANCH="v1.x"

. lib.sh

#cleanGeneratedResources

setConstants

downloadPlantUML

copySrcIcons brand
generateIcons brand
generateElements brand
generateGroups brand
generateDocumentation brand element
generateDocumentation brand group

copySrcIcons materials
generateIcons materials
generateElements materials
generateGroups materials
generateDocumentation materials element
generateDocumentation materials group

generateExamples
