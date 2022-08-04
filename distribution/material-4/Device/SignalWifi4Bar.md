# SignalWifi4Bar


```text
material-4/Device/SignalWifi4Bar
```

```text
include('material-4/Device/SignalWifi4Bar')
```



| Illustration | SignalWifi4Bar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SignalWifi4Bar.png) | ![illustration for SignalWifi4Bar](../../material-4/Device/SignalWifi4Bar.Local.png) |




## SignalWifi4Bar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SignalWifi4Bar
include('material-4/Device/SignalWifi4Bar')

' renders the element
SignalWifi4Bar('SignalWifi4Bar', 'Signal Wifi4 Bar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignalWifi4Bar
include('material-4/Device/SignalWifi4Bar')

' renders the element
SignalWifi4Bar('SignalWifi4Bar', 'Signal Wifi4 Bar', 'an optional tech label', 'an optional description')
@enduml
```

