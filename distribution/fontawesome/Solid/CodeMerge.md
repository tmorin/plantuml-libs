# CodeMerge


```text
fontawesome/Solid/CodeMerge
```

```text
include('fontawesome/Solid/CodeMerge')
```



| Illustration | CodeMerge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CodeMerge.png) | ![illustration for CodeMerge](../../fontawesome/Solid/CodeMerge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodeMergeXs>`
- `<$CodeMergeSm>`
- `<$CodeMergeMd>`
- `<$CodeMergeLg>`





## CodeMerge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CodeMerge
include('fontawesome/Solid/CodeMerge')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CodeMerge
include('fontawesome/Solid/CodeMerge')

' renders the element
CodeMerge('CodeMerge', 'Code Merge', 'an optional tech label', 'an optional description')
@enduml
```

