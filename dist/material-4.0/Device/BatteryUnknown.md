# Battery Unknown

```text
material-4.0/Device/BatteryUnknown
```

```text
include('material-4.0/Device/BatteryUnknown')
```

|icon|element|
|---|---|
|![](BatteryUnknown.png)|![](BatteryUnknown.element.png)|



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
' loads the BatteryUnknown element
include('material-4.0/Device/BatteryUnknown')
BatteryUnknown('battery_unknown', 'Battery Unknown', 'an optional tech field')
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
' loads the BatteryUnknown element
include('material-4.0/Device/BatteryUnknown')
BatteryUnknown('battery_unknown', 'Battery Unknown', 'an optional tech field')
@enduml
```

