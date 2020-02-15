#!/usr/bin/env bash

gitBranch=master

downloadPlantUML() {
    local tmpDir="tmp"
    local url=http://sourceforge.net/projects/plantuml/files/plantuml.jar/download
    local jar="${tmpDir}/plantuml.jar"
    if [[ ! -f "${jar}" ]]; then
        wget ${url} -O ${jar}
    fi
}

downloadIcons() {
    local libName=${1}
    local iconsUrl=${2}
    local tmpDir="tmp/${libName}"
    local zipFile="${tmpDir}/icons.zip"
    mkdir -p ${tmpDir}
    if [[ ! -f ${zipFile} ]]; then
        wget ${iconsUrl} -O ${zipFile}
    fi
    unzip -q -o ${zipFile} -d ${tmpDir}
}

generateIcons() {
    local libName=${1}
    local srcDir=${2}
    local dstDir="${libName}/icons-x50"
    local srcFormat=svg
    local dstFormat=png
    echo "generateIcons $srcDir $dstDir $srcFormat $dstFormat"

    find ${srcDir} -type f -name "*.${srcFormat}" -print0 |
    while IFS= read -r -d '' picturePathSrc; do
        # clean name
        local picturePath=$(sed -r "s:${srcDir}/::;s/^_//;s/( |,|_|\+|\. )/-/gi;s/(\(|\))//g;s/-+/-/g"  <<< ${picturePathSrc%.*})
        # from `snake-case` to `CamelCase`
        local picturePath=$(echo ${picturePath,,} | sed -r 's/(^|-|_|\.)([a-z,0-9])/\U\2/gi' | sed -r 's/(\/.)/\U\1/gi')
        # add extension
        local picturePath="${picturePath}.${dstFormat}"
        # prefix with the destination
        local picturePathDst=${dstDir}/${picturePath}
        # prepare expected directory
        mkdir -p $(dirname ${picturePathDst})
        # convert when required
        if [[ ! -f ${picturePathDst} ]]; then
            inkscape "${picturePathSrc}" --export-png="${picturePathDst}" -h50 --export-area-drawing
        fi
    done
}

parsePackage() {
    local libName=${1}
    local iconsDir=${2}
    local pkgPath=${3}
    local dstDir=${4}
    local iconsFormat=${5}
    local sumFile=${6}
    local pkgName=$(sed -r "s:${iconsDir}/::;" <<< ${pkgPath})
    local relativePkgPath=$(sed -r "s:[^/]*/:../:g;s:/[^/]*$:/:" <<< "${pkgPath}")
    local pkgDoc="${dstDir}/${pkgName}.md"
    local pkgSrc="${dstDir}/${pkgName}.puml"
    local pkgExp="${dstDir}/${pkgName}.exp.puml"
    echo "parse pkg ${pkgName}"

    local h=$(sed -r "s/\//#/gi;s/\w*//gi;" <<< ${pkgName})
    echo "##${h} ${pkgName}" >> ${sumFile}

    mkdir -p $(dirname ${pkgDoc})
    # documentation
    echo "# ${pkgName}" > ${pkgDoc}
    # source
    echo "' the content of this file has been automatically generated" > ${pkgSrc}
    # example
    echo "@startuml" >> ${pkgSrc}
    echo "' the content of this file has been automatically generated" > ${pkgExp}

    local index=0
    # parse package
    find ${pkgPath} -mindepth 1 -maxdepth 1 -type f -name "*.${iconsFormat}" -print | sort |
    while read -r iconPath; do
        local elFullName=$(sed -r "s:${iconsDir}/::;" <<< ${iconPath%.*})
        local elDir=$(dirname ${elFullName})
        local elName=$(basename ${elFullName})
        # summary
        echo '* ['${elName}']('${pkgName}'.md#'${elName}')' >> ${sumFile}
        # source
        echo '!function '${elName}'($id, $name="", $tech="")' >> ${pkgSrc}
        echo '  card $id <<'${libName^}'Element>> [' >> ${pkgSrc}
        echo '    <img:getIcon("'${pkgName}'/'${elName}'")>' >> ${pkgSrc}
        echo '    !if ($name)' >> ${pkgSrc}
        echo '      $name' >> ${pkgSrc}
        echo '    !endif' >> ${pkgSrc}
        echo '    !if ($tech)' >> ${pkgSrc}
        echo '      <size:11>[$tech]</size>' >> ${pkgSrc}
        echo '    !endif' >> ${pkgSrc}
        echo '  ]' >> ${pkgSrc}
        echo '!endfunction' >> ${pkgSrc}
        # documentation
        echo '## '${elName} >> ${pkgDoc}
        echo '!['${elName}']('${relativePkgPath}${iconPath}')' >> ${pkgDoc}
        echo "\`\`\`plantuml" >> ${pkgDoc}
        echo '!global $'${libName^^}'_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/'${gitBranch}'/'${libName}'"' >> ${pkgDoc}
        echo '!includeurl $'${libName^^}'_LIB_BASE_URL/library.puml' >> ${pkgDoc}
        echo 'includeSubLibrary("elements/'${pkgName}'")' >> ${pkgDoc}
        echo ${elName}'("element'${index}'", "an optional name")' >> ${pkgDoc}
        echo "\`\`\`" >> ${pkgDoc}
        echo '<a target="_blank" href="http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/'${gitBranch}'/'${libName}'/elements/'${pkgName}'.exp.puml&idx='${index}'&'${elName}'">Render the snippet with PlantUML server</a>' >> ${pkgDoc}
        # example
        echo "@startuml(id=${elName})" >> ${pkgExp}
        echo '!global $'${libName^^}'_LIB_BRANCH="'${gitBranch}'"' >> ${pkgExp}
        echo '!global $'${libName^^}'_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $'${libName^^}'_LIB_BRANCH + "/'${libName}'"' >> ${pkgExp}
        echo '!includeurl $'${libName^^}'_LIB_BASE_URL/library.puml' >> ${pkgExp}
        echo 'includeSubLibrary("elements/'${pkgName}'")' >> ${pkgExp}
        echo ${elName}'("element'${index}'", "an optional name", "an optional technology")' >> ${pkgExp}
        echo "@enduml" >> ${pkgExp}
        index=$((index+1))
    done

    # parse icons
    find ${pkgPath} -mindepth 1 -maxdepth 1 -type d -print | sort |
    while read -r subPgkPath; do
        parsePackage ${libName} ${iconsDir} ${subPgkPath} ${dstDir} ${iconsFormat} ${sumFile}
    done

    echo "@enduml" >> ${pkgSrc}
}

generateElements() {
    local libName=${1}
    local iconsDir="${libName}/icons-x50"
    local dstDir="${libName}/elements"
    local iconsFormat=png
    local sumFile=${dstDir}/README.md

    mkdir -p ${dstDir}
    echo "# Elements" > ${sumFile}
    find ${iconsDir} -mindepth 1 -maxdepth 1 -type d -print | sort |
    while read -r subPgkPath; do
        parsePackage ${libName} ${iconsDir} ${subPgkPath} ${dstDir} ${iconsFormat} ${sumFile}
    done
}

generateSprites() {
    local libName=${1}
    local tmpDir="tmp/${libName}/sprites"
    local iconsDir="${libName}/icons-x50"
    local iconsFormat=png
    local sptCsv="${libName}/sprites.csv"
    local sptSrc="${libName}/sprites.puml"
    local sptExp="${libName}/sprites.exp.puml"
    local sptDoc="${libName}/sprites.md"
    mkdir -p ${tmpDir}
    # source
    echo "' the content of this file has been automatically generated" > ${sptSrc}
    echo "@startuml" >> ${sptSrc}
    # example
    echo "' the content of this file has been automatically generated" > ${sptExp}
    # documentation
    echo "# Sprites" > ${sptDoc}
    # iterate over CSV entries
    index=0
    tail -n +2 ${sptCsv} | while IFS=, read -r Name Element; do
        local iconFile="${iconsDir}/${Element}.${iconsFormat}"
        local iconFile="${iconsDir}/${Element}.${iconsFormat}"
        local sptName="Sprite${Name}"
        # source
        convert -quality 100 -background white -flatten -resize x20 ${iconFile} ${tmpDir}/${sptName}
        java -jar tmp/plantuml.jar -encodesprite 16z ${tmpDir}/${sptName} >> ${sptSrc}
        # example
        echo "@startuml(id=${sptName})" >> ${sptExp}
        echo '!global $'${libName^^}'_LIB_BRANCH="'${gitBranch}'"' >> ${sptExp}
        echo '!global $'${libName^^}'_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $'${libName^^}'_LIB_BRANCH + "/'${libName}'"' >> ${sptExp}
        echo '!includeurl $'${libName^^}'_LIB_BASE_URL/library.puml' >> ${sptExp}
        #echo '!global $INCLUSION_MODE="local"' >> ${sptExp}
        #echo '!include library.puml' >> ${sptExp}
        echo 'rectangle aSprite as "<$'${sptName}'>"' >> ${sptExp}
        echo "@enduml" >> ${sptExp}
        # documentation
        echo "## ${sptName}" >> ${sptDoc}
        echo "\`\`\`plantuml" >> ${sptDoc}
        echo '!global $'${libName^^}'_LIB_BRANCH="'${gitBranch}'"' >> ${sptDoc}
        echo '!global $'${libName^^}'_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $'${libName^^}'_LIB_BRANCH + "/'${libName}'"' >> ${sptDoc}
        echo '!includeurl $'${libName^^}'_LIB_BASE_URL/library.puml' >> ${sptDoc}
        echo 'rectangle aSprite as "<$'${sptName}'>"' >> ${sptDoc}
        echo "\`\`\`" >> ${sptDoc}
        echo '!['${sptName}'](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/'${gitBranch}'/'${libName}'/sprites.exp.puml&idx='${index}'&'${sptName}')' >> ${sptDoc}
        index=$((index+1))
    done
    echo "@enduml" >> ${sptSrc}
}

generateGroups() {
    local libName=${1}
    local grpCsv="${libName}/groups.csv"
    local grpSrc="${libName}/groups.puml"
    local grpExp="${libName}/groups.exp.puml"
    local grpDoc="${libName}/groups.md"
    # source
    echo "' the content of this file has been automatically generated" > ${grpSrc}
    echo "@startuml" >> ${grpSrc}
    # examples
    echo "' the content of this file has been automatically generated" > ${grpExp}
    # documentation
    echo "# Groups" > ${grpDoc}
    # iterate over CSV entries
    index=0
    tail -n +2 ${grpCsv} | while IFS=, read -r Name FrontColor FontColorTech BackgroundColor BorderThick BorderStyle BorderColor Sprite; do
        Stereotype="Group"$(echo ${Name,,} | sed -r 's/(^|-|_|\.| )([a-z,0-9])/\U\2/gi' | sed -r 's/(\/.)/\U\1/gi')
        spriteValue=""
        if [[ ! -z "$Sprite" ]]; then
            spriteValue='<$Sprite'${Sprite}'> '
        fi
        # source
        echo '!function '${Stereotype}'($id, $name="'${Name}'", $tech="")' >> ${grpSrc}
        echo '  !if ($name != "") && ($tech)' >> ${grpSrc}
        echo '    Rectangle $id <<'${Stereotype}'>> as "'${spriteValue}'$name\n<size:$FONT_SIZE_SM><color:'${FontColorTech}'>[$tech]</color></size>"' >> ${grpSrc}
        echo '  !elseif ($tech)' >> ${grpSrc}
        echo '    Rectangle $id <<'${Stereotype}'>> as "'${spriteValue}'<size:$FONT_SIZE_SM><color:'${FontColorTech}'>[$tech]</color></size>"' >> ${grpSrc}
        echo '  !else' >> ${grpSrc}
        echo '    Rectangle $id <<'${Stereotype}'>> as "'${spriteValue}'$name"' >> ${grpSrc}
        echo '  !endif' >> ${grpSrc}
        echo '!endfunction' >> ${grpSrc}
        echo 'skinparam Rectangle<<'${Stereotype}'>> {' >> ${grpSrc}
        echo '  StereotypeFontColor '${FrontColor} >> ${grpSrc}
        echo '  BorderThickness '${BorderThick} >> ${grpSrc}
        echo '  BorderColor '${BorderColor} >> ${grpSrc}
        echo '  BorderStyle '${BorderStyle} >> ${grpSrc}
        echo '  FontStyle none' >> ${grpSrc}
        echo '  FontColor '${FrontColor} >> ${grpSrc}
        echo '  FontSize $FONT_SIZE_LG' >> ${grpSrc}
        echo '  BackgroundColor '${BackgroundColor} >> ${grpSrc}
        echo '  shadowing false' >> ${grpSrc}
        echo '}' >> ${grpSrc}
        # example
        echo "@startuml(id=${Stereotype})" >> ${grpExp}
        echo '!global $'${libName^^}'_LIB_BRANCH="'${gitBranch}'"' >> ${grpExp}
        echo '!global $'${libName^^}'_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $'${libName^^}'_LIB_BRANCH + "/'${libName}'"' >> ${grpExp}
        echo '!includeurl $'${libName^^}'_LIB_BASE_URL/library.puml' >> ${grpExp}
        #echo '!global $INCLUSION_MODE="local"' >> ${grpExp}
        #echo '!include library.puml' >> ${grpExp}
        echo 'includeSubLibrary("groups")' >> ${grpExp}
        echo ${Stereotype}'("group", "an optional name", "an optional tech") {' >> ${grpExp}
        echo '    note "the group area of '${Stereotype}'" as '${Stereotype}'Note' >> ${grpExp}
        echo '}' >> ${grpExp}
        echo "@enduml" >> ${grpExp}
        # documentation
        echo "## ${Stereotype}" >> ${grpDoc}
        echo "\`\`\`plantuml" >> ${grpDoc}
        echo '!global $'${libName^^}'_LIB_BRANCH="'${gitBranch}'"' >> ${grpDoc}
        echo '!global $'${libName^^}'_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $'${libName^^}'_LIB_BRANCH + "/'${libName}'"' >> ${grpDoc}
        echo '!includeurl $'${libName^^}'_LIB_BASE_URL/library.puml' >> ${grpDoc}
        echo 'includeSubLibrary("groups")' >> ${grpDoc}
        echo ${Stereotype}'("element'${index}'", "an optional name")' >> ${grpDoc}
        echo "\`\`\`" >> ${grpDoc}
        echo "" >> ${grpDoc}
        echo '!['${Stereotype}'](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/'${gitBranch}'/'${libName}'/groups.exp.puml&idx='${index}'&'${Stereotype}')' >> ${grpDoc}
        echo "" >> ${grpDoc}
        index=$((index+1))
    done
    # source
    echo "@enduml" >> ${grpSrc}
}
