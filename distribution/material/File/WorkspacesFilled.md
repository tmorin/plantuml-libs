# WorkspacesFilled


```text
material/File/WorkspacesFilled
```

```text
include('material/File/WorkspacesFilled')
```



| Illustration | WorkspacesFilled |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/WorkspacesFilled.png) | ![illustration for WorkspacesFilled](../../material/File/WorkspacesFilled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WorkspacesFilledXs>`
- `<$WorkspacesFilledSm>`
- `<$WorkspacesFilledMd>`
- `<$WorkspacesFilledLg>`





## WorkspacesFilled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WorkspacesFilled
include('material/File/WorkspacesFilled')

' renders the element
WorkspacesFilled('WorkspacesFilled', 'Workspaces Filled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WorkspacesFilled
include('material/File/WorkspacesFilled')

' renders the element
WorkspacesFilled('WorkspacesFilled', 'Workspaces Filled', 'an optional tech label', 'an optional description')
@enduml
```

