# AirlineSeatLegroomExtra


```text
material/Notification/AirlineSeatLegroomExtra
```

```text
include('material/Notification/AirlineSeatLegroomExtra')
```



| Illustration | AirlineSeatLegroomExtra |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/AirlineSeatLegroomExtra.png) | ![illustration for AirlineSeatLegroomExtra](../../material/Notification/AirlineSeatLegroomExtra.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirlineSeatLegroomExtraXs>`
- `<$AirlineSeatLegroomExtraSm>`
- `<$AirlineSeatLegroomExtraMd>`
- `<$AirlineSeatLegroomExtraLg>`





## AirlineSeatLegroomExtra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AirlineSeatLegroomExtra
include('material/Notification/AirlineSeatLegroomExtra')

' renders the element
AirlineSeatLegroomExtra('AirlineSeatLegroomExtra', 'Airline Seat Legroom Extra', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AirlineSeatLegroomExtra
include('material/Notification/AirlineSeatLegroomExtra')

' renders the element
AirlineSeatLegroomExtra('AirlineSeatLegroomExtra', 'Airline Seat Legroom Extra', 'an optional tech label', 'an optional description')
@enduml
```

