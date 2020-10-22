# Signal Cellular0 Bar

```text
material-4.0/Device/SignalCellular0Bar
```

```text
include('material-4.0/Device/SignalCellular0Bar')
```

|icon|element|
|---|---|
|![](SignalCellular0Bar.png)|![](SignalCellular0Bar.element.png)|



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
' loads the SignalCellular0Bar element
include('material-4.0/Device/SignalCellular0Bar')
SignalCellular0Bar('signal_cellular_0_bar', 'Signal Cellular0 Bar', 'an optional tech field')
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
' loads the SignalCellular0Bar element
include('material-4.0/Device/SignalCellular0Bar')
SignalCellular0Bar('signal_cellular_0_bar', 'Signal Cellular0 Bar', 'an optional tech field')
@enduml
```

