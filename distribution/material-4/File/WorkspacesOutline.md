# WorkspacesOutline


```text
material-4/File/WorkspacesOutline
```

```text
include('material-4/File/WorkspacesOutline')
```



| Illustration | WorkspacesOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/WorkspacesOutline.png) | ![illustration for WorkspacesOutline](../../material-4/File/WorkspacesOutline.Local.png) |




## WorkspacesOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WorkspacesOutline
include('material-4/File/WorkspacesOutline')

' renders the element
WorkspacesOutline('WorkspacesOutline', 'Workspaces Outline', 'an optional tech label')
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

' loads the Item which embeds the element WorkspacesOutline
include('material-4/File/WorkspacesOutline')

' renders the element
WorkspacesOutline('WorkspacesOutline', 'Workspaces Outline', 'an optional tech label')
@enduml
```

