# SignalWifiOff


```text
material-4/Device/SignalWifiOff
```

```text
include('material-4/Device/SignalWifiOff')
```



| Illustration | SignalWifiOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SignalWifiOff.png) | ![illustration for SignalWifiOff](../../material-4/Device/SignalWifiOff.Local.png) |




## SignalWifiOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SignalWifiOff
include('material-4/Device/SignalWifiOff')

' renders the element
SignalWifiOff('SignalWifiOff', 'Signal Wifi Off', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SignalWifiOff
include('material-4/Device/SignalWifiOff')

' renders the element
SignalWifiOff('SignalWifiOff', 'Signal Wifi Off', 'an optional tech label')
@enduml
```

