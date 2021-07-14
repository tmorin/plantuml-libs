# NetworkWifi


```text
material-4/Device/NetworkWifi
```

```text
include('material-4/Device/NetworkWifi')
```



| Illustration | NetworkWifi |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/NetworkWifi.png) | ![illustration for NetworkWifi](../../material-4/Device/NetworkWifi.Local.png) |




## NetworkWifi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NetworkWifi
include('material-4/Device/NetworkWifi')

' renders the element
NetworkWifi('NetworkWifi', 'Network Wifi', 'an optional tech label')
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

' loads the Item which embeds the element NetworkWifi
include('material-4/Device/NetworkWifi')

' renders the element
NetworkWifi('NetworkWifi', 'Network Wifi', 'an optional tech label')
@enduml
```

