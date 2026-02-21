# WorkspacesOutline


```text
material/File/WorkspacesOutline
```

```text
include('material/File/WorkspacesOutline')
```



| Illustration | WorkspacesOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/WorkspacesOutline.png) | ![illustration for WorkspacesOutline](../../material/File/WorkspacesOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WorkspacesOutlineXs>`
- `<$WorkspacesOutlineSm>`
- `<$WorkspacesOutlineMd>`
- `<$WorkspacesOutlineLg>`





## WorkspacesOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WorkspacesOutline
include('material/File/WorkspacesOutline')

' renders the element
WorkspacesOutline('WorkspacesOutline', 'Workspaces Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WorkspacesOutline
include('material/File/WorkspacesOutline')

' renders the element
WorkspacesOutline('WorkspacesOutline', 'Workspaces Outline', 'an optional tech label', 'an optional description')
@enduml
```

