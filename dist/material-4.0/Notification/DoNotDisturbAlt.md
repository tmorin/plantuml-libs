# Do Not Disturb Alt

```text
material-4.0/Notification/DoNotDisturbAlt
```

```text
include('material-4.0/Notification/DoNotDisturbAlt')
```

|icon|element|
|---|---|
|![](DoNotDisturbAlt.png)|![](DoNotDisturbAlt.element.png)|



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
' loads the DoNotDisturbAlt element
include('material-4.0/Notification/DoNotDisturbAlt')
DoNotDisturbAlt('do_not_disturb_alt', 'Do Not Disturb Alt', 'an optional tech field')
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
' loads the DoNotDisturbAlt element
include('material-4.0/Notification/DoNotDisturbAlt')
DoNotDisturbAlt('do_not_disturb_alt', 'Do Not Disturb Alt', 'an optional tech field')
@enduml
```

