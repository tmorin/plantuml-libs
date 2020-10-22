# Signal Cellular Null

```text
material-4.0/Device/SignalCellularNull
```

```text
include('material-4.0/Device/SignalCellularNull')
```

|icon|element|
|---|---|
|![](SignalCellularNull.png)|![](SignalCellularNull.element.png)|



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
' loads the SignalCellularNull element
include('material-4.0/Device/SignalCellularNull')
SignalCellularNull('signal_cellular_null', 'Signal Cellular Null', 'an optional tech field')
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
' loads the SignalCellularNull element
include('material-4.0/Device/SignalCellularNull')
SignalCellularNull('signal_cellular_null', 'Signal Cellular Null', 'an optional tech field')
@enduml
```

