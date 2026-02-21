# RuleFolder


```text
material/File/RuleFolder
```

```text
include('material/File/RuleFolder')
```



| Illustration | RuleFolder |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/RuleFolder.png) | ![illustration for RuleFolder](../../material/File/RuleFolder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RuleFolderXs>`
- `<$RuleFolderSm>`
- `<$RuleFolderMd>`
- `<$RuleFolderLg>`





## RuleFolder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RuleFolder
include('material/File/RuleFolder')

' renders the element
RuleFolder('RuleFolder', 'Rule Folder', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RuleFolder
include('material/File/RuleFolder')

' renders the element
RuleFolder('RuleFolder', 'Rule Folder', 'an optional tech label', 'an optional description')
@enduml
```

