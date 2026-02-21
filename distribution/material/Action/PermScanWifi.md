# PermScanWifi


```text
material/Action/PermScanWifi
```

```text
include('material/Action/PermScanWifi')
```



| Illustration | PermScanWifi |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/PermScanWifi.png) | ![illustration for PermScanWifi](../../material/Action/PermScanWifi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PermScanWifiXs>`
- `<$PermScanWifiSm>`
- `<$PermScanWifiMd>`
- `<$PermScanWifiLg>`





## PermScanWifi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PermScanWifi
include('material/Action/PermScanWifi')

' renders the element
PermScanWifi('PermScanWifi', 'Perm Scan Wifi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PermScanWifi
include('material/Action/PermScanWifi')

' renders the element
PermScanWifi('PermScanWifi', 'Perm Scan Wifi', 'an optional tech label', 'an optional description')
@enduml
```

