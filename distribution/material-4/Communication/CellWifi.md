# CellWifi


```text
material-4/Communication/CellWifi
```

```text
include('material-4/Communication/CellWifi')
```



| Illustration | CellWifi |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/CellWifi.png) | ![illustration for CellWifi](../../material-4/Communication/CellWifi.Local.png) |




## CellWifi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CellWifi
include('material-4/Communication/CellWifi')

' renders the element
CellWifi('CellWifi', 'Cell Wifi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CellWifi
include('material-4/Communication/CellWifi')

' renders the element
CellWifi('CellWifi', 'Cell Wifi', 'an optional tech label', 'an optional description')
@enduml
```

