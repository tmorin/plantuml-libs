# Do Not Disturb Off

```text
material-4.0/Notification/DoNotDisturbOff
```

```text
include('material-4.0/Notification/DoNotDisturbOff')
```

|icon|element|
|---|---|
|![](DoNotDisturbOff.png)|![](DoNotDisturbOff.element.png)|



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
' loads the DoNotDisturbOff element
include('material-4.0/Notification/DoNotDisturbOff')
DoNotDisturbOff('do_not_disturb_off', 'Do Not Disturb Off', 'an optional tech field')
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
' loads the DoNotDisturbOff element
include('material-4.0/Notification/DoNotDisturbOff')
DoNotDisturbOff('do_not_disturb_off', 'Do Not Disturb Off', 'an optional tech field')
@enduml
```

