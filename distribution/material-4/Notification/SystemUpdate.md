# SystemUpdate


```text
material-4/Notification/SystemUpdate
```

```text
include('material-4/Notification/SystemUpdate')
```



| Illustration | SystemUpdate |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/SystemUpdate.png) | ![illustration for SystemUpdate](../../material-4/Notification/SystemUpdate.Local.png) |




## SystemUpdate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SystemUpdate
include('material-4/Notification/SystemUpdate')

' renders the element
SystemUpdate('SystemUpdate', 'System Update', 'an optional tech label')
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

' loads the Item which embeds the element SystemUpdate
include('material-4/Notification/SystemUpdate')

' renders the element
SystemUpdate('SystemUpdate', 'System Update', 'an optional tech label')
@enduml
```

