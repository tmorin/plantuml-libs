# ChargingStation


```text
fontawesome-5/Solid/ChargingStation
```

```text
include('fontawesome-5/Solid/ChargingStation')
```



| Illustration | ChargingStation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChargingStation.png) | ![illustration for ChargingStation](../../fontawesome-5/Solid/ChargingStation.Local.png) |




## ChargingStation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChargingStation
include('fontawesome-5/Solid/ChargingStation')

' renders the element
ChargingStation('ChargingStation', 'Charging Station', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChargingStation
include('fontawesome-5/Solid/ChargingStation')

' renders the element
ChargingStation('ChargingStation', 'Charging Station', 'an optional tech label')
@enduml
```

