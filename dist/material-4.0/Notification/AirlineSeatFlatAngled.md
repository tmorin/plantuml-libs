# Airline Seat Flat Angled

```text
material-4.0/Notification/AirlineSeatFlatAngled
```

```text
include('material-4.0/Notification/AirlineSeatFlatAngled')
```

|icon|element|
|---|---|
|![](AirlineSeatFlatAngled.png)|![](AirlineSeatFlatAngled.element.png)|



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
' loads the AirlineSeatFlatAngled element
include('material-4.0/Notification/AirlineSeatFlatAngled')
AirlineSeatFlatAngled('airline_seat_flat_angled', 'Airline Seat Flat Angled', 'an optional tech field')
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
' loads the AirlineSeatFlatAngled element
include('material-4.0/Notification/AirlineSeatFlatAngled')
AirlineSeatFlatAngled('airline_seat_flat_angled', 'Airline Seat Flat Angled', 'an optional tech field')
@enduml
```

