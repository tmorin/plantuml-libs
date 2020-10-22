# Signal Cellular Off

```text
material-4.0/Device/SignalCellularOff
```

```text
include('material-4.0/Device/SignalCellularOff')
```

|icon|element|
|---|---|
|![](SignalCellularOff.png)|![](SignalCellularOff.element.png)|



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
' loads the SignalCellularOff element
include('material-4.0/Device/SignalCellularOff')
SignalCellularOff('signal_cellular_off', 'Signal Cellular Off', 'an optional tech field')
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
' loads the SignalCellularOff element
include('material-4.0/Device/SignalCellularOff')
SignalCellularOff('signal_cellular_off', 'Signal Cellular Off', 'an optional tech field')
@enduml
```

