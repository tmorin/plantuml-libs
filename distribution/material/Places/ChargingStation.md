# ChargingStation


```text
material/Places/ChargingStation
```

```text
include('material/Places/ChargingStation')
```



| Illustration | ChargingStation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/ChargingStation.png) | ![illustration for ChargingStation](../../material/Places/ChargingStation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChargingStationXs>`
- `<$ChargingStationSm>`
- `<$ChargingStationMd>`
- `<$ChargingStationLg>`





## ChargingStation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ChargingStation
include('material/Places/ChargingStation')

' renders the element
ChargingStation('ChargingStation', 'Charging Station', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChargingStation
include('material/Places/ChargingStation')

' renders the element
ChargingStation('ChargingStation', 'Charging Station', 'an optional tech label', 'an optional description')
@enduml
```

