#!/usr/bin/env bash

libBranch=${LIB_BRANCH:="master"}
tmpDir=${TMP_DIR:="tmp"}
libName=${LIB_NAME:=""}
smSize=10
mdSize=14
lgSize=20

POSITIONAL=()
while [[ $# -gt 0 ]]; do
  key="$1"
  case ${key} in
    --lib-name=*)
    libName="${key#*=}"
    ;;
    --git-branch=*)
    libBranch="${key#*=}"
    ;;
    --tmp-dir=*)
    tmpDir="${key#*=}"
    ;;
    *)
    POSITIONAL+=("$1")
    ;;
  esac
  shift
done
set -- "${POSITIONAL[@]}"

log() {
  local name=$1
  shift
  echo "[$name] $@"
}

if [[ -z ${libName} ]]; then
  log error "the library name is required (--lib-name=... or LIB_NAME=...)"
  exit 1
fi

downloadPlantUML() {
  local url=http://sourceforge.net/projects/plantuml/files/plantuml.jar/download
  local jar="${tmpDir}/plantuml.jar"
  mkdir -p ${tmpDir}
  if [[ ! -f "${jar}" ]]; then
    log main "download PlantUML"
    wget ${url} -O ${jar}
  fi
}

downloadIcons() {
  local pkgName=${1}
  local iconsUrl=${2}
  local originalIconsDir=${3}
  local pkgTmpDir="${tmpDir}/${libName}/${pkgName}"
  local zipFile="${pkgTmpDir}/icons.zip"

  mkdir -p ${pkgTmpDir}
  if [[ ! -f ${zipFile} ]]; then
    log ${pkgName} "download icons"
    wget ${iconsUrl} -O ${zipFile}
  fi

  unzip -q -o ${zipFile} -d ${pkgTmpDir}

  if [[ -n ${originalIconsDir}} ]]; then
    local  originalIconsDir="${pkgTmpDir}/${originalIconsDir}"
    if [[ -d "${originalIconsDir}" ]]; then
      rm -Rf ${pkgTmpDir}/icons
      mv "${originalIconsDir}" ${pkgTmpDir}/icons
    fi
  fi
}

copySrcIcons() {
  local pkgName=${1}
  local pkgTmpDir="${tmpDir}/${libName}/${pkgName}/icons"
  local srcDir="${libName}/src/${pkgName}"
  log ${pkgName} "copy icons from (${srcDir}) to (${pkgTmpDir})"
  mkdir -p ${pkgTmpDir}
  cp -fR ${srcDir}/* ${pkgTmpDir}
}

generateIcons() {
  local pkgName=${1}
  local srcDir="${tmpDir}/${libName}/${pkgName}/icons"
  local dstDir="${libName}/icons/${pkgName}"
  local srcFormat=svg
  local dstFormat=png
  local picturePathSed=""
  local pictureNameSed=""
  local picW=50
  local picH=50

  local POSITIONAL=()
  while [[ $# -gt 0 ]]; do
      key="$1"
      case ${key} in
        -pps=*|--picture-path-sed=*)
        picturePathSed="${key#*=}"
        ;;
        -pns=*|--picture-name-sed=*)
        pictureNameSed="${key#*=}"
        ;;
        -w=*|--picture-width=*)
        picW="${key#*=}"
        ;;
        -h=*|--picture-height=*)
        picH="${key#*=}"
        ;;
        *)
        POSITIONAL+=("$1")
        ;;
      esac
      shift
    done
    set -- "${POSITIONAL[@]}"

    log ${pkgName} "generate icons from ($srcDir) to ($dstDir)"

    find ${srcDir} -type f -name "*.${srcFormat}" -print0 |
    while IFS= read -r -d '' picturePathSrc; do
      # clean name
      local picturePath=$(sed -r "s:${srcDir}/::;s/^_//;s/( |,|_|\+|\.|'|\&| )/-/gi;s/(\(|\))//g;s/-+/-/g"  <<< ${picturePathSrc%.*})
      # apply custom sed expression for picturePath
      if [[ -n ${picturePathSed} ]]; then
        picturePath=$(sed -r "${picturePathSed}" <<< ${picturePath})
      fi
      # prefix with the package name
      local pictureDir=$(dirname ${picturePath})
      local pictureName=$(basename ${picturePath})
      # apply custom sed expression for pictureNameSed
      if [[ -n ${pictureNameSed} ]]; then
        pictureName=$(sed -r "${pictureNameSed}" <<< ${pictureName})
      fi
      pictureName="${pkgName}-${pictureName}"
      picturePath="${pictureDir}/${pictureName}"
      # from `snake-case` to `CamelCase`
      picturePath=$(echo ${picturePath,,} | sed -r 's/ //g;;s/-+/-/g;' | sed -r 's/(^|-|_|\.)([a-z,0-9])/\U\2/gi' | sed -r 's/(\/.)/\U\1/gi')
      # add extension
      picturePath="${picturePath}.${dstFormat}"
      # prefix with the destination
      picturePathDst=${dstDir}/${picturePath}
      # prepare expected directory
      mkdir -p $(dirname ${picturePathDst})
      # convert when required
      if [[ ! -f ${picturePathDst} ]]; then
        inkscape "${picturePathSrc}" --export-png="${picturePathDst}" -h${picH} $@
      fi
    done
}

generateElementSprite() {
  local iconPath=$1
  local tmpSpt=$2
  local height=$3
  local elName=$(basename ${tmpSpt%.*})

  local tmpSptIcon="${tmpSpt%.*}.png"
  mkdir -p $(dirname ${tmpSptIcon})
  if [[ ! -f ${tmpSptIcon} ]]; then
    convert -quality 100 -background white -flatten -resize x${height} ${iconPath} ${tmpSptIcon}
  fi
  if [[ ! -f ${tmpSpt} ]] || [[ $(cat ${tmpSpt} | wc -l) == "0" ]]; then
    java -jar tmp/plantuml.jar -encodesprite 16z ${tmpSptIcon} > ${tmpSpt}
  fi
}

generateElementFunctions() {
  local iconPath=$1
  local elSrc=$2
  local elName=$(basename ${elSrc%.*})
  local hName=$(sed -e 's/\([A-Z]\)/ \1/g;s/^ //;s/[^ ]*//;s/^ //;' <<< ${elName})

  local icon=$(sed -r 's:([^/]*/){2}::' <<< ${iconPath%.*})
  cat <<EOF >> ${elSrc}
!function ${elName}(\$id, \$name="${hName}", \$tech="")
  ${libName^}Element(\$id, '${icon}', \$name, \$tech)
!endfunction
EOF

  local sptName="${elName}Md"
  cat <<EOF >> ${elSrc}
!function ${elName}Card(\$id, \$funcName="", \$content="")
  ${libName^}Card(\$id, '<\$${sptName}>', '${hName}', \$funcName, \$content)
!endfunction
EOF
}

generateElementSnippets() {
  local elSrc=$1
  local pkgStlFile=$2
  local pkgStlRes=$(sed -r 's:([^/]*/){1}::' <<< ${pkgStlFile%.*})
  local elName=$(basename ${elSrc%.*})
  local hName=$(sed -e 's/\([A-Z]\)/ \1/g;s/^ //;s/[^ ]*//;s/^ //;' <<< ${elName})
  local baseElSnp=$(sed -r 's:/elements/:/snippets/:' <<< ${elSrc%.*})
  local elSnpElLocal="${baseElSnp}.element.local.puml"
  local elSnpElRemote="${baseElSnp}.element.remote.puml"
  local elSnpCdLocal="${baseElSnp}.card.local.puml"
  local elSnpCdRemote="${baseElSnp}.card.remote.puml"
  local elFullName=$(sed -r 's:([^/]*/){1}::' <<< ${elSrc%.*})
  local relativeRootLib=$(sed -r "s:[^/]*/:../:g;s:/[^/]*$:/:" <<< "${elFullName}")
  mkdir -p $(dirname ${elSnpElLocal})
  local pkgStlResSmt=""
  if [[ -f ${pkgStlFile} ]]; then
    pkgStlResSmt=$(echo -e "\n\n' loads the style\ninclude('${pkgStlRes}')")
  fi
  cat <<EOF > ${elSnpElLocal}
@startuml
' configures the library
!global \$INCLUSION_MODE="local"
!global \$LIB_BASE_LOCATION="${relativeRootLib}"

' loads the library
!include ${relativeRootLib}library.puml${pkgStlResSmt}

' loads the ${elName} element
include('${elFullName}')
${elName}('element', '${hName}', 'an optional tech field')
@enduml
EOF
  cat <<EOF > ${elSnpElRemote}
@startuml
' configures the library
!global \$LIB_BRANCH="${libBranch}"
!global \$LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + \$LIB_BRANCH + "/${libName}"

' loads the library
!includeurl \$LIB_BASE_LOCATION/library.puml${pkgStlResSmt}

' loads the ${elName} element
include('${elFullName}')
${elName}('element', '${hName}', 'an optional tech field')
@enduml
EOF
  cat <<EOF > ${elSnpCdLocal}
@startuml
' configures the library
!global \$INCLUSION_MODE="local"
!global \$LIB_BASE_LOCATION="${relativeRootLib}"

' loads the library
!include ${relativeRootLib}library.puml${pkgStlResSmt}

' loads the ${elName} card
include('${elFullName}')
${elName}Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
EOF
  cat <<EOF > ${elSnpCdRemote}
@startuml
' configures the library
!global \$LIB_BRANCH="${libBranch}"
!global \$LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + \$LIB_BRANCH + "/${libName}"

' loads the library
!includeurl \$LIB_BASE_LOCATION/library.puml${pkgStlResSmt}

' loads the ${elName} card
include('${elFullName}')
${elName}Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
EOF
}

generateElementDocumentation() {
  local iconPath=$1
  local elSrc=$2
  local elName=$(basename ${elSrc%.*})
  local hName=$(sed -e 's/\([A-Z]\)/ \1/g;s/^ //;s/[^ ]*//;s/^ //;' <<< ${elName})
  local elDoc="$(sed -r 's:/elements/:/documentation/:' <<< ${elSrc%.*}).md"
  local baseElSnp=$(sed -r 's:/elements/:/snippets/:' <<< ${elSrc%.*})
  local elSnpElLocal="${baseElSnp}.element.local.puml"
  local elSnpElLocalImgSrc="${baseElSnp}.element.local.png"
  local elSnpElLocalImgDst="${elDoc%.*}.element.png"
  local elSnpElRemote="${baseElSnp}.element.remote.puml"

  local elSnpCdLocal="${baseElSnp}.card.local.puml"
  local elSnpCdLocalImgSrc="${baseElSnp}.card.local.png"
  local elSnpCdLocalImgDst="${elDoc%.*}.card.png"
  local elSnpCdRemote="${baseElSnp}.card.remote.puml"

  local icon=$(sed -r 's:([^/]*/){1}::' <<< ${iconPath})
  local elFullName=$(sed -r 's:([^/]*/){1}::' <<< ${elSrc%.*})
  local relativeRootLib=$(sed -r "s:[^/]*/:../:g;s:/[^/]*$:/:" <<< "${elFullName}")
  mkdir -p $(dirname ${elDoc})

  local snpElLocal=$(cat < ${elSnpElLocal})
  local snpElRemote=$(cat < ${elSnpElRemote})
  if [[ ! -f ${elSnpElLocalImgDst} ]]; then
    java -jar tmp/plantuml.jar ${elSnpElLocal}
    mv ${elSnpElLocalImgSrc} ${elSnpElLocalImgDst}
  fi

  local SnpCdLocal=$(cat < ${elSnpCdLocal})
  local SnpCdRemote=$(cat < ${elSnpCdRemote})
  if [[ ! -f ${elSnpCdLocalImgDst} ]]; then
    java -jar tmp/plantuml.jar ${elSnpCdLocal}
    mv ${elSnpCdLocalImgSrc} ${elSnpCdLocalImgDst}
  fi

  cat <<EOF > ${elDoc}
# ${elName}
\`\`\`text
${elFullName}
\`\`\`
| Icon | Element | Card |
| :-: | :-: | --- |
| ![${elName} icon](${relativeRootLib}${icon}) | ![${elName} element]($(basename ${elSnpElLocalImgDst})) | ![${elName} card]($(basename ${elSnpCdLocalImgDst})) |
## Element
### Load remotely
\`\`\`plantuml
${snpElRemote}
\`\`\`
### Load locally
\`\`\`plantuml
${snpElLocal}
\`\`\`
## Card
### Load remotely
\`\`\`plantuml
${SnpCdRemote}
\`\`\`
### Load locally
\`\`\`plantuml
${SnpCdLocal}
\`\`\`
EOF
}

generateElement() {
  local pkgName=$1
  local iconPath=$2
  local elDir=$(sed -r 's:/icons/:/elements/:' <<< $(dirname ${iconPath}))
  local sptDir=$(sed -r 's:/elements/:/sprites/:' <<< ${elDir})
  local pkgStlFile="${libName}/styles/${pkgName}.puml"
  local elName=$(basename ${iconPath})
  elName=${elName%.*}
  local elSrc="${elDir}/${elName}.puml"

  log ${pkgName} "generate element from (${iconPath}) to (${elDir}/${elName})"

  mkdir -p ${elDir}

  echo '@startuml' > ${elSrc}

  local tmpSptLg="${tmpDir}/${sptDir}/${elName}Lg.puml"
  generateElementSprite ${iconPath} ${tmpSptLg} ${lgSize}
  cat ${tmpSptLg} >> ${elSrc}

  local tmpSptMd="${tmpDir}/${sptDir}/${elName}Md.puml"
  generateElementSprite ${iconPath} ${tmpSptMd} ${mdSize}
  cat ${tmpSptMd} >> ${elSrc}

  generateElementFunctions ${iconPath} ${elSrc}
  generateElementSnippets ${elSrc} ${pkgStlFile}
  generateElementDocumentation ${iconPath} ${elSrc}

  echo '@enduml' >> ${elSrc}
}

generateElements() {
  local pkgName=${1}
  local iconsDir="${libName}/icons/${pkgName}"
  local dstDir="${libName}/elements/${pkgName}"
  local iconsFormat=png
  local sumFile=${dstDir}/README.md
  log ${pkgName} "generate elements from ($iconsDir) to ($dstDir)"
  find ${iconsDir} -type f -name "*.${iconsFormat}" -print | sort |
  while read -r iconPath; do
    generateElement ${pkgName} ${iconPath}
  done
}

generateGroups() {
  local pkgName=${1}
  local grpCsv="${libName}/groups.csv"
  local iconsFormat=png
  local index=0
  tail -n +2 ${grpCsv} | while IFS=, read -r PkgName Label FrontColor BackgroundColor BorderThick BorderStyle BorderColor Icon; do
    if [[ "${pkgName}" == "${PkgName}" ]]; then
      local grpName="${PkgName^}Group"$(echo ${Label,,} | sed -r 's/(^|-|_|\.| )([a-z,0-9])/\U\2/gi' | sed -r 's/(\/.)/\U\1/gi')
      log ${PkgName} "generate group (${grpName}) - ${index}"
      local grpSrc="${libName}/groups/${PkgName}/${grpName}.puml"
      local grpDoc="${libName}/documentation/${PkgName}/${grpName}.md"
      local grpSnpGrpLocal="${libName}/snippets/${PkgName}/${grpName}.group.local.puml"
      local grpSnpGrpRemote="${libName}/snippets/${PkgName}/${grpName}.group.remote.puml"
      local grpFullName=$(sed -r 's:([^/]*/){1}::' <<< ${grpSrc%.*})
      local relativeRootLib=$(sed -r "s:[^/]*/:../:g;s:/[^/]*$:/:" <<< "${grpFullName}")
      local grpSnpLocalImgSrc="${grpSnpGrpLocal%.*}.png"
      local grpSnpLocalImgDst="${grpDoc%.*}.group.png"
      local pkgStlFile="${libName}/styles/${pkgName}.puml"
      local pkgStlRes="styles/${PkgName}"
      mkdir -p $(dirname ${grpSrc})
      mkdir -p $(dirname ${grpDoc})
      mkdir -p $(dirname ${grpSnpGrpLocal})
      echo '@startuml' > ${grpSrc}
      local pkgStlResSmt=""
      if [[ -f ${pkgStlFile} ]]; then
        pkgStlResSmt=$(echo -e "\n\n' loads the style\ninclude('${pkgStlRes}')")
      fi
      local spriteValue=""
      if [[ -n "$Icon" ]]; then
        local iconPath="${libName}/icons/${PkgName}/${Icon}.${iconsFormat}"
        local tmpSptLg="${tmpDir}/${libName}/sprites/${PkgName}/${grpName}Lg.puml"
        generateElementSprite ${iconPath} ${tmpSptLg} ${lgSize}
        cat ${tmpSptLg} >> ${grpSrc}
        spriteValue='<$'${grpName}'Lg>'
      fi
      cat <<EOF >> ${grpSrc}
!function ${grpName}(\$id, \$name="${Label}", \$tech="")
  ${libName^}Group(\$id, "${grpName}", "${spriteValue}", \$name, \$tech)
!endfunction
EOF
      cat <<EOF >> ${grpSrc}
skinparam Rectangle<<${grpName}>> {
  StereotypeFontColor ${FrontColor:=black}
  BorderThickness ${BorderThick:=1}
  BorderColor ${BorderColor:=black}
  BorderStyle ${BorderStyle:=solid}
  FontStyle none
  FontColor ${FrontColor:=black}
  FontSize \$FONT_SIZE_MD
  BackgroundColor ${BackgroundColor:=none}
  shadowing false
}
EOF
      echo '@enduml' >> ${grpSrc}
      cat <<EOF > ${grpSnpGrpRemote}
@startuml
' configures the library
!global \$LIB_BRANCH="${libBranch}"
!global \$LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + \$LIB_BRANCH + "/${libName}"

' loads the library
!includeurl \$LIB_BASE_LOCATION/library.puml${pkgStlResSmt}

' loads the ${grpName} group
include('${grpFullName}')
${grpName}('element', '${Label}', 'an optional tech field')
@enduml
EOF
      cat <<EOF > ${grpSnpGrpLocal}
@startuml
' configures the library
!global \$INCLUSION_MODE="local"
!global \$LIB_BASE_LOCATION="${relativeRootLib}"

' loads the library
!include ${relativeRootLib}library.puml${pkgStlResSmt}

' loads the ${grpName} group
include('${grpFullName}')
${grpName}('element', '${Label}', 'an optional tech field')
@enduml
EOF
      local snpLocal=$(cat < ${grpSnpGrpLocal})
      local snpRemote=$(cat < ${grpSnpGrpRemote})

      if [[ ! -f ${grpSnpLocalImgDst} ]]; then
        java -jar tmp/plantuml.jar ${grpSnpGrpLocal}
        mv ${grpSnpLocalImgSrc} ${grpSnpLocalImgDst}
      fi
      cat <<EOF > ${grpDoc}
# ${grpName}
| Example | Resource |
| :-: | --- |
| ![${grpName} group]($(basename ${grpSnpLocalImgDst})) | \`${grpFullName}\` |
## Load remotely
\`\`\`plantuml
${snpRemote}
\`\`\`
## Load locally
\`\`\`plantuml
${snpLocal}
\`\`\`
EOF
      index=$((index+1))
    fi
  done
}

generateDocumentation() {
  local pkgName=${1}
  local type=${2}
  local pkgDocDir="${libName}/documentation/${pkgName}"
  local tmpPkgDocDir="${tmpDir}/${libName}/documentation/${pkgName}"
  local pkgDoc="${pkgDocDir}/${type}s.md"
  local iconsFormat=png

  log ${pkgName} "generate documentation for (${type}s)"
  rm -Rf ${tmpPkgDocDir}
  mkdir -p ${tmpPkgDocDir}

  echo "# ${pkgName} - ${type^}s" > ${pkgDoc}

  find ${pkgDocDir} -type f -name "*.${type}.${iconsFormat}" -print | sort |
  while read -r iconPath; do
    local enDoc="$(sed  -r 's/(.*)\.\w*\.\w*$/\1/;s:([^/]*/){3}::' <<< ${iconPath}).md"
    local enIcon="$(sed  -r 's:([^/]*/){3}::' <<< ${iconPath})"
    local enMod="$(sed -r "s:([^/]*/){1}(.*)\.\w*\.\w*\$:\2:;s/documentation/${type}s/" <<< ${iconPath})"
    local ptMod="${enMod%/*}"
    local enName="${enMod##*/}"
    local tmpPtModDoc="${tmpPkgDocDir}/${ptMod}.md"
    if [[ ! -f ${tmpPtModDoc} ]]; then
      mkdir -p $(dirname ${tmpPtModDoc})
      cat <<EOF > ${tmpPtModDoc}
## ${ptMod}
| | Name |
| :-: | --- |
EOF
    fi
    echo "| ![${enName}](${enIcon}) | [${enName}](${enDoc})<br>\`${enMod}\` |" >> ${tmpPtModDoc}
  done

  find ${tmpPkgDocDir} -type f -name "*.md" -print | sort |
  while read -r ptModDoc; do
    cat ${ptModDoc} >> ${pkgDoc}
  done
}

generateExamples() {
  local expDir="${libName}/examples"
  local expMd="${expDir}.md"
  echo "# Examples" > ${expMd}
  find ${expDir} -type f -name "*puml" -print | sort |
  while read -r expSrc; do
    local expSrcName=${expSrc##*/}
    local expFullName=${expSrcName%.*}
    local exPic="${expSrc%.*}.png"
    local exPicRelative=$(sed  -r 's:([^/]*/){1}::' <<< ${exPic})
    local expPkg=${expFullName%-*}
    local expName=$(sed -r 's/(-|_)/ /g;' <<< ${expFullName#*-})
    local expSrcCnt=$(cat < ${expSrc})

    log exmaples "generate (${expSrc})"

    cat <<EOF >> ${expMd}
## ${expPkg} - ${expName}
![${expName}](${exPicRelative})
\`\`\`plantuml
${expSrcCnt}
\`\`\`
EOF

    if [[ ! -f ${exPic} ]]; then
      java -jar tmp/plantuml.jar ${expSrc}
    fi
  done
}

setConstants() {
  log main "set constants"
  sed -i -r "s/FONT_SIZE_SM=.*/FONT_SIZE_SM=${smSize}/;s/FONT_SIZE_MD=.*/FONT_SIZE_MD=${mdSize}/;s/FONT_SIZE_LG=.*/FONT_SIZE_LG=${lgSize}/" ${libName}/constants.puml
  sed -i -e "s:LIB_BRANCH=.*:LIB_BRANCH=\"${libBranch}\":g;" ${libName}/README.md
  sed -i -e "s:LIB_BRANCH=.*:LIB_BRANCH=\"${libBranch}\":g;" ${libName}/examples/*
}

cleanGeneratedResources() {
  log main "clean generated resources"
  rm -Rf ${libName}/documentation
  rm -Rf ${libName}/elements
  rm -Rf ${libName}/examples/*.png
  rm -Rf ${libName}/groups
  rm -Rf ${libName}/icons
  rm -Rf ${libName}/snippets
}