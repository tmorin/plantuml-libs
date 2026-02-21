# BusAlert


```text
material/Maps/BusAlert
```

```text
include('material/Maps/BusAlert')
```



| Illustration | BusAlert |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/BusAlert.png) | ![illustration for BusAlert](../../material/Maps/BusAlert.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BusAlertXs>`
- `<$BusAlertSm>`
- `<$BusAlertMd>`
- `<$BusAlertLg>`





## BusAlert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BusAlert
include('material/Maps/BusAlert')

' renders the element
BusAlert('BusAlert', 'Bus Alert', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BusAlert
include('material/Maps/BusAlert')

' renders the element
BusAlert('BusAlert', 'Bus Alert', 'an optional tech label', 'an optional description')
@enduml
```

