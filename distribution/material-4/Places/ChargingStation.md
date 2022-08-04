# ChargingStation


```text
material-4/Places/ChargingStation
```

```text
include('material-4/Places/ChargingStation')
```



| Illustration | ChargingStation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/ChargingStation.png) | ![illustration for ChargingStation](../../material-4/Places/ChargingStation.Local.png) |




## ChargingStation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ChargingStation
include('material-4/Places/ChargingStation')

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
include('material-4/bootstrap')

' loads the Item which embeds the element ChargingStation
include('material-4/Places/ChargingStation')

' renders the element
ChargingStation('ChargingStation', 'Charging Station', 'an optional tech label', 'an optional description')
@enduml
```

