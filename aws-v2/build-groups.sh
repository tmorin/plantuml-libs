#!/usr/bin/env bash
current_dir=$(pwd)
lib_dir="${current_dir}/aws-v2"
tmp_dir="${lib_dir}/tmp"
git_branch="master"

plantuml_url=http://sourceforge.net/projects/plantuml/files/plantuml.jar/download
plantuml_jar="${tmp_dir}/plantuml.jar"

if [[ ! -f "${plantuml_jar}" ]]; then
    wget ${plantuml_url} -O ${plantuml_jar}
fi

# initialize the package file
groups_file="${lib_dir}/groups.puml"
echo "' the content of this file has been automatically generated" > ${groups_file}

# initialize the example file
example_file="${lib_dir}/groups.example.puml"
echo "' the content of this file has been automatically generated" > ${example_file}

# initialize the documentation file
documentation_file="${lib_dir}/groups.md"
echo "# Groups" > ${documentation_file}
echo "" >> ${documentation_file}

group_icons_dir="${lib_dir}/icons-50x50/GroupIcons"
output_sprites="${lib_dir}/sprites.puml"
if [[ ! -f ${output_sprites} ]]; then
    echo "' the content of this file has been automatically generated" > ${output_sprites}
    echo "@startuml(id=sprites)" >> ${output_sprites}
    cd ${group_icons_dir}
    for icon in *.png; do
        echo "sprititfy ${icon}"
        convert -quality 100 -resize 20x20 ${icon} ${tmp_dir}/SpriteGroup${icon}
        java -jar ${plantuml_jar} -encodesprite 16z ${tmp_dir}/SpriteGroup${icon} >> ${output_sprites}
    done
    echo "@enduml" >> ${output_sprites}
fi

echo "@startuml(id=groups)" >> ${groups_file}
csv_file="${current_dir}/aws-v2/groups.csv"
index=0
tail -n +2 ${csv_file} | while IFS=, read -r Name FrontColor BackgroundColor BorderThick BorderStyle BorderColor Sprite; do
    Stereotype="Group"$(echo ${Name,,} | sed -r 's/(^|-|_|\.| )([a-z,0-9])/\U\2/gi' | sed -r 's/(\/.)/\U\1/gi')
    echo "process: $Stereotype $Name $FrontColor $BackgroundColor $BorderThick $BorderStyle $BorderColor $Sprite"
    spriteValue=""
    if [[ ! -z "$Sprite" ]]; then
        spriteValue='<$SpriteGroup'${Sprite}'> '
    fi
    # library
    echo '!function '${Stereotype}'($id, $name="'${Name}'", $tech="")' >> ${groups_file}
    echo '  !if ($tech)' >> ${groups_file}
    echo '    Rectangle $id <<'${Stereotype}'>> as "'${spriteValue}'<size:18>$name</size> <size:11><color:$COLOR_GREY>[$tech]</color></size>"' >> ${groups_file}
    echo '  !else' >> ${groups_file}
    echo '    Rectangle $id <<'${Stereotype}'>> as "'${spriteValue}'<size:18>$name</size>"' >> ${groups_file}
    echo '  !endif' >> ${groups_file}
    echo '!endfunction' >> ${groups_file}
    echo 'skinparam Rectangle<<'${Stereotype}'>> {' >> ${groups_file}
    echo '    StereotypeFontColor '${FrontColor} >> ${groups_file}
    echo '    BorderThickness '${BorderThick} >> ${groups_file}
    echo '    BorderColor '${BorderColor} >> ${groups_file}
    if [[ ! -z "$BorderStyle" ]]; then
        echo '    BorderStyle '${BorderStyle} >> ${groups_file}
    fi
    echo '    FontStyle none' >> ${groups_file}
    echo '    FontColor '${FrontColor} >> ${groups_file}
    echo '    FontSize 20' >> ${groups_file}
    echo '    BackgroundColor '${BackgroundColor} >> ${groups_file}
    echo '    shadowing false' >> ${groups_file}
    echo '}' >> ${groups_file}

    # example
    echo "@startuml(id=${Stereotype})" >> ${example_file}
    echo '!global $AWS_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/'${git_branch}'/aws-v2"' >> ${example_file}
    echo '!includeurl $AWS_LIB_BASE_URL/library.puml' >> ${example_file}
    #echo '!global $INCLUSION_MODE="local"' >> ${example_file}
    #echo '!include library.puml' >> ${example_file}
    echo 'includeSubLibrary("groups")' >> ${example_file}
    echo ${Stereotype}'("group", "an optional name") {' >> ${example_file}
    echo '    note "the group area of '${Stereotype}'" as '${Stereotype}'Note' >> ${example_file}
    echo '}' >> ${example_file}
    echo "@enduml" >> ${example_file}

    # documentation
    echo "## ${Stereotype}" >> ${documentation_file}
    echo "\`\`\`plantuml" >> ${documentation_file}
    echo '!global $AWS_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/'${git_branch}'/aws-v2"' >> ${documentation_file}
    echo '!includeurl $AWS_LIB_BASE_URL/library.puml' >> ${documentation_file}
    echo 'includeSubLibrary("groups")' >> ${documentation_file}
    echo ${Stereotype}'("element'${index}'", "an optional name")' >> ${documentation_file}
    echo "\`\`\`" >> ${documentation_file}
    #echo '<a target="_blank" href="http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/'${git_branch}'/aws-v2/groups.example.puml&idx='${index}'&'${Stereotype}'">'${Stereotype}'</a>' >> ${documentation_file}
    echo "" >> ${documentation_file}
    echo '!['${Stereotype}'](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/aws-v2/groups.example.puml&idx='${index}'&'${Stereotype}')' >> ${documentation_file}
    echo "" >> ${documentation_file}

    index=$((index+1))
done

echo "@enduml" >> ${groups_file}
