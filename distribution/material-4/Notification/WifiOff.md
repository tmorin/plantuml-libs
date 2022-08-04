# WifiOff


```text
material-4/Notification/WifiOff
```

```text
include('material-4/Notification/WifiOff')
```



| Illustration | WifiOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/WifiOff.png) | ![illustration for WifiOff](../../material-4/Notification/WifiOff.Local.png) |




## WifiOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WifiOff
include('material-4/Notification/WifiOff')

' renders the element
WifiOff('WifiOff', 'Wifi Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WifiOff
include('material-4/Notification/WifiOff')

' renders the element
WifiOff('WifiOff', 'Wifi Off', 'an optional tech label', 'an optional description')
@enduml
```

