# PermScanWifi


```text
material-4/Action/PermScanWifi
```

```text
include('material-4/Action/PermScanWifi')
```



| Illustration | PermScanWifi |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PermScanWifi.png) | ![illustration for PermScanWifi](../../material-4/Action/PermScanWifi.Local.png) |




## PermScanWifi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PermScanWifi
include('material-4/Action/PermScanWifi')

' renders the element
PermScanWifi('PermScanWifi', 'Perm Scan Wifi', 'an optional tech label')
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

' loads the Item which embeds the element PermScanWifi
include('material-4/Action/PermScanWifi')

' renders the element
PermScanWifi('PermScanWifi', 'Perm Scan Wifi', 'an optional tech label')
@enduml
```

