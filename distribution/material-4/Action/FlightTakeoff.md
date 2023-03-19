# FlightTakeoff


```text
material-4/Action/FlightTakeoff
```

```text
include('material-4/Action/FlightTakeoff')
```



| Illustration | FlightTakeoff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/FlightTakeoff.png) | ![illustration for FlightTakeoff](../../material-4/Action/FlightTakeoff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlightTakeoffXs>`
- `<$FlightTakeoffSm>`
- `<$FlightTakeoffMd>`
- `<$FlightTakeoffLg>`





## FlightTakeoff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FlightTakeoff
include('material-4/Action/FlightTakeoff')

' renders the element
FlightTakeoff('FlightTakeoff', 'Flight Takeoff', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FlightTakeoff
include('material-4/Action/FlightTakeoff')

' renders the element
FlightTakeoff('FlightTakeoff', 'Flight Takeoff', 'an optional tech label', 'an optional description')
@enduml
```

