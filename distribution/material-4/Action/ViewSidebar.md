# ViewSidebar


```text
material-4/Action/ViewSidebar
```

```text
include('material-4/Action/ViewSidebar')
```



| Illustration | ViewSidebar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ViewSidebar.png) | ![illustration for ViewSidebar](../../material-4/Action/ViewSidebar.Local.png) |




## ViewSidebar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewSidebar
include('material-4/Action/ViewSidebar')

' renders the element
ViewSidebar('ViewSidebar', 'View Sidebar', 'an optional tech label')
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

' loads the Item which embeds the element ViewSidebar
include('material-4/Action/ViewSidebar')

' renders the element
ViewSidebar('ViewSidebar', 'View Sidebar', 'an optional tech label')
@enduml
```

