# SignalWifi0Bar


```text
material-4/Device/SignalWifi0Bar
```

```text
include('material-4/Device/SignalWifi0Bar')
```



| Illustration | SignalWifi0Bar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SignalWifi0Bar.png) | ![illustration for SignalWifi0Bar](../../material-4/Device/SignalWifi0Bar.Local.png) |




## SignalWifi0Bar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SignalWifi0Bar
include('material-4/Device/SignalWifi0Bar')

' renders the element
SignalWifi0Bar('SignalWifi0Bar', 'Signal Wifi0 Bar', 'an optional tech label')
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

' loads the Item which embeds the element SignalWifi0Bar
include('material-4/Device/SignalWifi0Bar')

' renders the element
SignalWifi0Bar('SignalWifi0Bar', 'Signal Wifi0 Bar', 'an optional tech label')
@enduml
```

