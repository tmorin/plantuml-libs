# AirlineSeatFlat


```text
material-4/Notification/AirlineSeatFlat
```

```text
include('material-4/Notification/AirlineSeatFlat')
```



| Illustration | AirlineSeatFlat |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/AirlineSeatFlat.png) | ![illustration for AirlineSeatFlat](../../material-4/Notification/AirlineSeatFlat.Local.png) |




## AirlineSeatFlat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AirlineSeatFlat
include('material-4/Notification/AirlineSeatFlat')

' renders the element
AirlineSeatFlat('AirlineSeatFlat', 'Airline Seat Flat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AirlineSeatFlat
include('material-4/Notification/AirlineSeatFlat')

' renders the element
AirlineSeatFlat('AirlineSeatFlat', 'Airline Seat Flat', 'an optional tech label', 'an optional description')
@enduml
```

