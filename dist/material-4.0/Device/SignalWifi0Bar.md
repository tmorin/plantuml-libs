# Signal Wifi0 Bar

```text
material-4.0/Device/SignalWifi0Bar
```

```text
include('material-4.0/Device/SignalWifi0Bar')
```

|icon|element|
|---|---|
|![](SignalWifi0Bar.png)|![](SignalWifi0Bar.element.png)|



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
' loads the SignalWifi0Bar element
include('material-4.0/Device/SignalWifi0Bar')
SignalWifi0Bar('signal_wifi_0_bar', 'Signal Wifi0 Bar', 'an optional tech field')
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
' loads the SignalWifi0Bar element
include('material-4.0/Device/SignalWifi0Bar')
SignalWifi0Bar('signal_wifi_0_bar', 'Signal Wifi0 Bar', 'an optional tech field')
@enduml
```

