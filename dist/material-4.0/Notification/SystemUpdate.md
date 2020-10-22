# System Update

```text
material-4.0/Notification/SystemUpdate
```

```text
include('material-4.0/Notification/SystemUpdate')
```

|icon|element|
|---|---|
|![](SystemUpdate.png)|![](SystemUpdate.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the SystemUpdate element
include('material-4.0/Notification/SystemUpdate')
SystemUpdate('system_update', 'System Update', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the SystemUpdate element
include('material-4.0/Notification/SystemUpdate')
SystemUpdate('system_update', 'System Update', 'an optional tech field')
@enduml
```

