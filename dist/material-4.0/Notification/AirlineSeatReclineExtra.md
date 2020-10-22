# Airline Seat Recline Extra

```text
material-4.0/Notification/AirlineSeatReclineExtra
```

```text
include('material-4.0/Notification/AirlineSeatReclineExtra')
```

|icon|element|
|---|---|
|![](AirlineSeatReclineExtra.png)|![](AirlineSeatReclineExtra.element.png)|



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
' loads the AirlineSeatReclineExtra element
include('material-4.0/Notification/AirlineSeatReclineExtra')
AirlineSeatReclineExtra('airline_seat_recline_extra', 'Airline Seat Recline Extra', 'an optional tech field')
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
' loads the AirlineSeatReclineExtra element
include('material-4.0/Notification/AirlineSeatReclineExtra')
AirlineSeatReclineExtra('airline_seat_recline_extra', 'Airline Seat Recline Extra', 'an optional tech field')
@enduml
```

