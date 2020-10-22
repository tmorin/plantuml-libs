# Signal Wifi4 Bar Lock

```text
material-4.0/Device/SignalWifi4BarLock
```

```text
include('material-4.0/Device/SignalWifi4BarLock')
```

|icon|element|
|---|---|
|![](SignalWifi4BarLock.png)|![](SignalWifi4BarLock.element.png)|



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
' loads the SignalWifi4BarLock element
include('material-4.0/Device/SignalWifi4BarLock')
SignalWifi4BarLock('signal_wifi_4_bar_lock', 'Signal Wifi4 Bar Lock', 'an optional tech field')
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
' loads the SignalWifi4BarLock element
include('material-4.0/Device/SignalWifi4BarLock')
SignalWifi4BarLock('signal_wifi_4_bar_lock', 'Signal Wifi4 Bar Lock', 'an optional tech field')
@enduml
```

