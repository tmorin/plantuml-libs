# EvStation


```text
material-4/Maps/EvStation
```

```text
include('material-4/Maps/EvStation')
```



| Illustration | EvStation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/EvStation.png) | ![illustration for EvStation](../../material-4/Maps/EvStation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EvStationXs>`
- `<$EvStationSm>`
- `<$EvStationMd>`
- `<$EvStationLg>`





## EvStation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EvStation
include('material-4/Maps/EvStation')

' renders the element
EvStation('EvStation', 'Ev Station', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EvStation
include('material-4/Maps/EvStation')

' renders the element
EvStation('EvStation', 'Ev Station', 'an optional tech label', 'an optional description')
@enduml
```

