# AirlineSeatReclineExtra


```text
material-4/Notification/AirlineSeatReclineExtra
```

```text
include('material-4/Notification/AirlineSeatReclineExtra')
```



| Illustration | AirlineSeatReclineExtra |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/AirlineSeatReclineExtra.png) | ![illustration for AirlineSeatReclineExtra](../../material-4/Notification/AirlineSeatReclineExtra.Local.png) |




## AirlineSeatReclineExtra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AirlineSeatReclineExtra
include('material-4/Notification/AirlineSeatReclineExtra')

' renders the element
AirlineSeatReclineExtra('AirlineSeatReclineExtra', 'Airline Seat Recline Extra', 'an optional tech label')
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

' loads the Item which embeds the element AirlineSeatReclineExtra
include('material-4/Notification/AirlineSeatReclineExtra')

' renders the element
AirlineSeatReclineExtra('AirlineSeatReclineExtra', 'Airline Seat Recline Extra', 'an optional tech label')
@enduml
```

