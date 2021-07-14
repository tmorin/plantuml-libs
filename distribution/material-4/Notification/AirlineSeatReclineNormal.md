# AirlineSeatReclineNormal


```text
material-4/Notification/AirlineSeatReclineNormal
```

```text
include('material-4/Notification/AirlineSeatReclineNormal')
```



| Illustration | AirlineSeatReclineNormal |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/AirlineSeatReclineNormal.png) | ![illustration for AirlineSeatReclineNormal](../../material-4/Notification/AirlineSeatReclineNormal.Local.png) |




## AirlineSeatReclineNormal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AirlineSeatReclineNormal
include('material-4/Notification/AirlineSeatReclineNormal')

' renders the element
AirlineSeatReclineNormal('AirlineSeatReclineNormal', 'Airline Seat Recline Normal', 'an optional tech label')
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

' loads the Item which embeds the element AirlineSeatReclineNormal
include('material-4/Notification/AirlineSeatReclineNormal')

' renders the element
AirlineSeatReclineNormal('AirlineSeatReclineNormal', 'Airline Seat Recline Normal', 'an optional tech label')
@enduml
```

