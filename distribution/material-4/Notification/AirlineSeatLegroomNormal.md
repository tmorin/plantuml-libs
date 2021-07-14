# AirlineSeatLegroomNormal


```text
material-4/Notification/AirlineSeatLegroomNormal
```

```text
include('material-4/Notification/AirlineSeatLegroomNormal')
```



| Illustration | AirlineSeatLegroomNormal |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/AirlineSeatLegroomNormal.png) | ![illustration for AirlineSeatLegroomNormal](../../material-4/Notification/AirlineSeatLegroomNormal.Local.png) |




## AirlineSeatLegroomNormal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AirlineSeatLegroomNormal
include('material-4/Notification/AirlineSeatLegroomNormal')

' renders the element
AirlineSeatLegroomNormal('AirlineSeatLegroomNormal', 'Airline Seat Legroom Normal', 'an optional tech label')
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

' loads the Item which embeds the element AirlineSeatLegroomNormal
include('material-4/Notification/AirlineSeatLegroomNormal')

' renders the element
AirlineSeatLegroomNormal('AirlineSeatLegroomNormal', 'Airline Seat Legroom Normal', 'an optional tech label')
@enduml
```

