# WifiProtectedSetup


```text
material-4/Action/WifiProtectedSetup
```

```text
include('material-4/Action/WifiProtectedSetup')
```



| Illustration | WifiProtectedSetup |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/WifiProtectedSetup.png) | ![illustration for WifiProtectedSetup](../../material-4/Action/WifiProtectedSetup.Local.png) |




## WifiProtectedSetup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WifiProtectedSetup
include('material-4/Action/WifiProtectedSetup')

' renders the element
WifiProtectedSetup('WifiProtectedSetup', 'Wifi Protected Setup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WifiProtectedSetup
include('material-4/Action/WifiProtectedSetup')

' renders the element
WifiProtectedSetup('WifiProtectedSetup', 'Wifi Protected Setup', 'an optional tech label', 'an optional description')
@enduml
```

