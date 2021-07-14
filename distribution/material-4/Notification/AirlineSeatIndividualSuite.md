# AirlineSeatIndividualSuite


```text
material-4/Notification/AirlineSeatIndividualSuite
```

```text
include('material-4/Notification/AirlineSeatIndividualSuite')
```



| Illustration | AirlineSeatIndividualSuite |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/AirlineSeatIndividualSuite.png) | ![illustration for AirlineSeatIndividualSuite](../../material-4/Notification/AirlineSeatIndividualSuite.Local.png) |




## AirlineSeatIndividualSuite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AirlineSeatIndividualSuite
include('material-4/Notification/AirlineSeatIndividualSuite')

' renders the element
AirlineSeatIndividualSuite('AirlineSeatIndividualSuite', 'Airline Seat Individual Suite', 'an optional tech label')
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

' loads the Item which embeds the element AirlineSeatIndividualSuite
include('material-4/Notification/AirlineSeatIndividualSuite')

' renders the element
AirlineSeatIndividualSuite('AirlineSeatIndividualSuite', 'Airline Seat Individual Suite', 'an optional tech label')
@enduml
```

