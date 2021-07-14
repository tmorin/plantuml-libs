# WorkspacesFilled


```text
material-4/File/WorkspacesFilled
```

```text
include('material-4/File/WorkspacesFilled')
```



| Illustration | WorkspacesFilled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/WorkspacesFilled.png) | ![illustration for WorkspacesFilled](../../material-4/File/WorkspacesFilled.Local.png) |




## WorkspacesFilled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WorkspacesFilled
include('material-4/File/WorkspacesFilled')

' renders the element
WorkspacesFilled('WorkspacesFilled', 'Workspaces Filled', 'an optional tech label')
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

' loads the Item which embeds the element WorkspacesFilled
include('material-4/File/WorkspacesFilled')

' renders the element
WorkspacesFilled('WorkspacesFilled', 'Workspaces Filled', 'an optional tech label')
@enduml
```

