# AdminPanelSettings


```text
material-4/Action/AdminPanelSettings
```

```text
include('material-4/Action/AdminPanelSettings')
```



| Illustration | AdminPanelSettings |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AdminPanelSettings.png) | ![illustration for AdminPanelSettings](../../material-4/Action/AdminPanelSettings.Local.png) |




## AdminPanelSettings

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AdminPanelSettings
include('material-4/Action/AdminPanelSettings')

' renders the element
AdminPanelSettings('AdminPanelSettings', 'Admin Panel Settings', 'an optional tech label')
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

' loads the Item which embeds the element AdminPanelSettings
include('material-4/Action/AdminPanelSettings')

' renders the element
AdminPanelSettings('AdminPanelSettings', 'Admin Panel Settings', 'an optional tech label')
@enduml
```

