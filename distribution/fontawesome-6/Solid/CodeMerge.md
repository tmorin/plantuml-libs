# CodeMerge


```text
fontawesome-6/Solid/CodeMerge
```

```text
include('fontawesome-6/Solid/CodeMerge')
```



| Illustration | CodeMerge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CodeMerge.png) | ![illustration for CodeMerge](../../fontawesome-6/Solid/CodeMerge.Local.png) |




## CodeMerge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CodeMerge
include('fontawesome-6/Solid/CodeMerge')

' renders the element
CodeMerge('CodeMerge', 'Code Merge', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CodeMerge
include('fontawesome-6/Solid/CodeMerge')

' renders the element
CodeMerge('CodeMerge', 'Code Merge', 'an optional tech label', 'an optional description')
@enduml
```

