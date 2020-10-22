# Signal Cellular4 Bar

```text
material-4.0/Device/SignalCellular4Bar
```

```text
include('material-4.0/Device/SignalCellular4Bar')
```

|icon|element|
|---|---|
|![](SignalCellular4Bar.png)|![](SignalCellular4Bar.element.png)|



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
' loads the SignalCellular4Bar element
include('material-4.0/Device/SignalCellular4Bar')
SignalCellular4Bar('signal_cellular_4_bar', 'Signal Cellular4 Bar', 'an optional tech field')
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
' loads the SignalCellular4Bar element
include('material-4.0/Device/SignalCellular4Bar')
SignalCellular4Bar('signal_cellular_4_bar', 'Signal Cellular4 Bar', 'an optional tech field')
@enduml
```

