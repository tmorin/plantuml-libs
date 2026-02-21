# AirlineSeatLegroomReduced


```text
material/Notification/AirlineSeatLegroomReduced
```

```text
include('material/Notification/AirlineSeatLegroomReduced')
```



| Illustration | AirlineSeatLegroomReduced |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/AirlineSeatLegroomReduced.png) | ![illustration for AirlineSeatLegroomReduced](../../material/Notification/AirlineSeatLegroomReduced.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirlineSeatLegroomReducedXs>`
- `<$AirlineSeatLegroomReducedSm>`
- `<$AirlineSeatLegroomReducedMd>`
- `<$AirlineSeatLegroomReducedLg>`





## AirlineSeatLegroomReduced

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AirlineSeatLegroomReduced
include('material/Notification/AirlineSeatLegroomReduced')

' renders the element
AirlineSeatLegroomReduced('AirlineSeatLegroomReduced', 'Airline Seat Legroom Reduced', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AirlineSeatLegroomReduced
include('material/Notification/AirlineSeatLegroomReduced')

' renders the element
AirlineSeatLegroomReduced('AirlineSeatLegroomReduced', 'Airline Seat Legroom Reduced', 'an optional tech label', 'an optional description')
@enduml
```

