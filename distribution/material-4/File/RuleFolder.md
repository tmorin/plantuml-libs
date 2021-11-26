# RuleFolder


```text
material-4/File/RuleFolder
```

```text
include('material-4/File/RuleFolder')
```



| Illustration | RuleFolder |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/RuleFolder.png) | ![illustration for RuleFolder](../../material-4/File/RuleFolder.Local.png) |




## RuleFolder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RuleFolder
include('material-4/File/RuleFolder')

' renders the element
RuleFolder('RuleFolder', 'Rule Folder', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element RuleFolder
include('material-4/File/RuleFolder')

' renders the element
RuleFolder('RuleFolder', 'Rule Folder', 'an optional tech label')
@enduml
```

