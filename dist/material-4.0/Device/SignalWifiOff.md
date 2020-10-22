# Signal Wifi Off

```text
material-4.0/Device/SignalWifiOff
```

```text
include('material-4.0/Device/SignalWifiOff')
```

|icon|element|
|---|---|
|![](SignalWifiOff.png)|![](SignalWifiOff.element.png)|



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
' loads the SignalWifiOff element
include('material-4.0/Device/SignalWifiOff')
SignalWifiOff('signal_wifi_off', 'Signal Wifi Off', 'an optional tech field')
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
' loads the SignalWifiOff element
include('material-4.0/Device/SignalWifiOff')
SignalWifiOff('signal_wifi_off', 'Signal Wifi Off', 'an optional tech field')
@enduml
```

