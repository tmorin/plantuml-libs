# WifiTethering


```text
material-4/Device/WifiTethering
```

```text
include('material-4/Device/WifiTethering')
```



| Illustration | WifiTethering |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/WifiTethering.png) | ![illustration for WifiTethering](../../material-4/Device/WifiTethering.Local.png) |




## WifiTethering

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WifiTethering
include('material-4/Device/WifiTethering')

' renders the element
WifiTethering('WifiTethering', 'Wifi Tethering', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WifiTethering
include('material-4/Device/WifiTethering')

' renders the element
WifiTethering('WifiTethering', 'Wifi Tethering', 'an optional tech label', 'an optional description')
@enduml
```

