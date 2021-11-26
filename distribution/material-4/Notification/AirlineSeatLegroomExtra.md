# AirlineSeatLegroomExtra


```text
material-4/Notification/AirlineSeatLegroomExtra
```

```text
include('material-4/Notification/AirlineSeatLegroomExtra')
```



| Illustration | AirlineSeatLegroomExtra |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/AirlineSeatLegroomExtra.png) | ![illustration for AirlineSeatLegroomExtra](../../material-4/Notification/AirlineSeatLegroomExtra.Local.png) |




## AirlineSeatLegroomExtra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AirlineSeatLegroomExtra
include('material-4/Notification/AirlineSeatLegroomExtra')

' renders the element
AirlineSeatLegroomExtra('AirlineSeatLegroomExtra', 'Airline Seat Legroom Extra', 'an optional tech label')
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

' loads the Item which embeds the element AirlineSeatLegroomExtra
include('material-4/Notification/AirlineSeatLegroomExtra')

' renders the element
AirlineSeatLegroomExtra('AirlineSeatLegroomExtra', 'Airline Seat Legroom Extra', 'an optional tech label')
@enduml
```

