# SignalWifi4BarLock


```text
material-4/Device/SignalWifi4BarLock
```

```text
include('material-4/Device/SignalWifi4BarLock')
```



| Illustration | SignalWifi4BarLock |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SignalWifi4BarLock.png) | ![illustration for SignalWifi4BarLock](../../material-4/Device/SignalWifi4BarLock.Local.png) |




## SignalWifi4BarLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SignalWifi4BarLock
include('material-4/Device/SignalWifi4BarLock')

' renders the element
SignalWifi4BarLock('SignalWifi4BarLock', 'Signal Wifi4 Bar Lock', 'an optional tech label')
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

' loads the Item which embeds the element SignalWifi4BarLock
include('material-4/Device/SignalWifi4BarLock')

' renders the element
SignalWifi4BarLock('SignalWifi4BarLock', 'Signal Wifi4 Bar Lock', 'an optional tech label')
@enduml
```

