# Airline Seat Individual Suite

```text
material-4.0/Notification/AirlineSeatIndividualSuite
```

```text
include('material-4.0/Notification/AirlineSeatIndividualSuite')
```

|icon|element|
|---|---|
|![](AirlineSeatIndividualSuite.png)|![](AirlineSeatIndividualSuite.element.png)|



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
' loads the AirlineSeatIndividualSuite element
include('material-4.0/Notification/AirlineSeatIndividualSuite')
AirlineSeatIndividualSuite('airline_seat_individual_suite', 'Airline Seat Individual Suite', 'an optional tech field')
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
' loads the AirlineSeatIndividualSuite element
include('material-4.0/Notification/AirlineSeatIndividualSuite')
AirlineSeatIndividualSuite('airline_seat_individual_suite', 'Airline Seat Individual Suite', 'an optional tech field')
@enduml
```

