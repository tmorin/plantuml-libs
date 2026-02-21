# WifiOff


```text
material/Notification/WifiOff
```

```text
include('material/Notification/WifiOff')
```



| Illustration | WifiOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/WifiOff.png) | ![illustration for WifiOff](../../material/Notification/WifiOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WifiOffXs>`
- `<$WifiOffSm>`
- `<$WifiOffMd>`
- `<$WifiOffLg>`





## WifiOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WifiOff
include('material/Notification/WifiOff')

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
include('material/bootstrap')

' loads the Item which embeds the element WifiOff
include('material/Notification/WifiOff')

' renders the element
WifiOff('WifiOff', 'Wifi Off', 'an optional tech label', 'an optional description')
@enduml
```

