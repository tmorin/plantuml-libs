# Airline Seat Legroom Normal

```text
material-4.0/Notification/AirlineSeatLegroomNormal
```

```text
include('material-4.0/Notification/AirlineSeatLegroomNormal')
```

|icon|element|
|---|---|
|![](AirlineSeatLegroomNormal.png)|![](AirlineSeatLegroomNormal.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the AirlineSeatLegroomNormal element
include('material-4.0/Notification/AirlineSeatLegroomNormal')
AirlineSeatLegroomNormal('airline_seat_legroom_normal', 'Airline Seat Legroom Normal', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the AirlineSeatLegroomNormal element
include('material-4.0/Notification/AirlineSeatLegroomNormal')
AirlineSeatLegroomNormal('airline_seat_legroom_normal', 'Airline Seat Legroom Normal', 'an optional tech field')
@enduml
```
