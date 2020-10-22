# Vibration

```text
material-4.0/Notification/Vibration
```

```text
include('material-4.0/Notification/Vibration')
```

|icon|element|
|---|---|
|![](Vibration.png)|![](Vibration.element.png)|



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
' loads the Vibration element
include('material-4.0/Notification/Vibration')
Vibration('vibration', 'Vibration', 'an optional tech field')
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
' loads the Vibration element
include('material-4.0/Notification/Vibration')
Vibration('vibration', 'Vibration', 'an optional tech field')
@enduml
```

