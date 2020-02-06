#!/usr/bin/env bash
input_icons_type="svg"
input_icons_flavor="Light"

case ${input_icons_type} in
    svg)
        icons_url="https://d1.awsstatic.com/webteam/architecture-icons/AWS-Architecture-Icons_SVG_20200131.abfc4fb34450d2294f8c65d2dcc9ea1602b6a449.zip"
    ;;
    png)
        icons_url="https://d1.awsstatic.com/webteam/architecture-icons/AWS-Architecture-Icons_PNG_20200131.361768486d709f4d0ffca86995b4bf8a7cf5b5ac.zip"
    ;;
    *)
        echo "icons type not manged"
    ;;
esac

current_dir=$(pwd)
lib_dir="${current_dir}/aws-v2"
tmp_dir="${lib_dir}/tmp"
input_icons_zip="${tmp_dir}/icons_${input_icons_type}.zip"
input_icons_dir="${tmp_dir}/AWS-Architecture-Icons-${input_icons_type}"
input_icons_light_dir="${input_icons_dir}/*Light"

output_icons_type="png"
output_icons_x50_dir="${lib_dir}/icons-50x50"
output_dir_elements="${lib_dir}/elements"
git_branch="master"

shopt -s globstar
mkdir -p ${tmp_dir}

if [[ ! -f ${input_icons_zip} ]]; then
    wget ${icons_url} -O ${input_icons_zip}
fi

if [[ ! -d "${input_icons_dir}" ]]; then
    unzip -q -o ${input_icons_zip} -d ${tmp_dir}
    mv ${tmp_dir}/AWS-Architecture-Icons_* ${input_icons_dir}
    rm -Rf ${tmp_dir}/__*
fi

#
# CONVERT AWS ICONS
#
mkdir -p ${output_icons_x50_dir}
cd ${input_icons_light_dir}
for input_file in **/*.${input_icons_type}; do
    new_file=$(echo ${input_file} | sed -r 's/ *(&|,| ) */-/gi' | sed -r 's/--/-/gi' | sed -r 's/\/_Instance//gi')
    # skip extension
    new_file="${new_file%.*}"
    # skip suffix _light-bg
    new_file=${new_file/_light-bg/}
    # from `snake-case` to `CamelCase`
    new_file=$(echo ${new_file,,} | sed -r 's/(^|-|_|\.)([a-z,0-9])/\U\2/gi' | sed -r 's/(\/.)/\U\1/gi')
    # add extension
    new_file="${new_file}.${output_icons_type}"
    echo "convert $input_file -> $new_file"
    icons_x50="${output_icons_x50_dir}/${new_file}"
    mkdir -p $(dirname ${icons_x50})
    if [[ ! -f ${icons_x50} ]]; then
        convert -quality 100 -density 1200 -background none -resize 50x50 "$input_file" ${icons_x50}
    fi
done

sync

#
# CONVERT ICONS TO ELEMENTS
#
cd ${output_icons_x50_dir}

mkdir -p ${output_dir_elements}

# initialize the README
elements_readme_file="${output_dir_elements}/README.md"
echo "# Elements" > ${elements_readme_file}
echo "" >> ${elements_readme_file}

for package_name in */; do
    package_name=${package_name%*/}

    echo "- [${package_name}](${package_name}.md)" >> ${elements_readme_file}

    # initialize the package file
    package_file="${output_dir_elements}/${package_name}.puml"
    echo "' the content of this file has been automatically generated" > ${package_file}
    echo "@startuml" >> ${package_file}

    # initialize the example file
    example_file="${output_dir_elements}/${package_name}.example.puml"
    echo "' the content of this file has been automatically generated" > ${example_file}

    # initialize the documentation file
    documentation_file="${output_dir_elements}/${package_name}.md"
    echo "# ${package_name}" > ${documentation_file}
    echo "" >> ${documentation_file}

    # iterate over all elements of the package
    index=0
    for element_file in ${package_name}/*.${output_icons_type}; do
        element_name=$(basename ${element_file%.*})

        echo "  - [${element_name}](${package_name}.md#${element_name})" >> ${elements_readme_file}

        # library
        echo '!function '${element_name}'($id, $name="", $tech="")' >> ${package_file}
        echo '  card $id <<AwsElement>> [' >> ${package_file}
        echo '    <img:getIcon("'${package_name}'/'${element_name}'")>' >> ${package_file}
        echo '    !if ($name)' >> ${package_file}
        echo '      $name' >> ${package_file}
        echo '    !endif' >> ${package_file}
        echo '    !if ($tech)' >> ${package_file}
        echo '      <size:11>[$tech]</size>' >> ${package_file}
        echo '    !endif' >> ${package_file}
        echo '  ]' >> ${package_file}
        echo '!endfunction' >> ${package_file}

        # example
        echo "@startuml(id=${element_name})" >> ${example_file}
        echo '!global $AWS_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/'${git_branch}'/aws-v2"' >> ${example_file}
        echo '!includeurl $AWS_LIB_BASE_URL/library.puml' >> ${example_file}
        echo 'includeSubLibrary("elements/'${package_name}'")' >> ${example_file}
        echo ${element_name}'("element'${index}'", "an optional name", "an optional technology")' >> ${example_file}
        echo "@enduml" >> ${example_file}

        # documentation
        echo "## ${element_name}" >> ${documentation_file}
        echo '!['${element_name}'](../icons-50x50/'${element_file}')' >> ${documentation_file}
        echo "\`\`\`plantuml" >> ${documentation_file}
        echo '!global $AWS_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/'${git_branch}'/aws-v2"' >> ${documentation_file}
        echo '!includeurl $AWS_LIB_BASE_URL/library.puml' >> ${documentation_file}
        echo 'includeSubLibrary("elements/'${package_name}'")' >> ${documentation_file}
        echo ${element_name}'("element'${index}'", "an optional name")' >> ${documentation_file}
        echo "\`\`\`" >> ${documentation_file}
        echo '<a target="_blank" href="http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/'${git_branch}'/aws-v2/elements/'${package_name}'.example.puml&idx='${index}'&'${element_name}'">render the snippet with PlantUML server</a>' >> ${documentation_file}
        echo "" >> ${documentation_file}
        #echo '!['${element_name}'](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/'${git_branch}'/aws-v2/elements/'${package_name}'.example.puml&idx='${index}'&'${element_name}')' >> ${documentation_file}
        #echo "" >> ${documentation_file}

        index=$((index+1))
    done

    echo "@enduml" >> ${package_file}
done
