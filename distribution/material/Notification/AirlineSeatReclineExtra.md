# AirlineSeatReclineExtra


```text
material/Notification/AirlineSeatReclineExtra
```

```text
include('material/Notification/AirlineSeatReclineExtra')
```



| Illustration | AirlineSeatReclineExtra |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/AirlineSeatReclineExtra.png) | ![illustration for AirlineSeatReclineExtra](../../material/Notification/AirlineSeatReclineExtra.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirlineSeatReclineExtraXs>`
- `<$AirlineSeatReclineExtraSm>`
- `<$AirlineSeatReclineExtraMd>`
- `<$AirlineSeatReclineExtraLg>`





## AirlineSeatReclineExtra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AirlineSeatReclineExtra
include('material/Notification/AirlineSeatReclineExtra')

' renders the element
AirlineSeatReclineExtra('AirlineSeatReclineExtra', 'Airline Seat Recline Extra', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element AirlineSeatReclineExtra
include('material/Notification/AirlineSeatReclineExtra')

' renders the element
AirlineSeatReclineExtra('AirlineSeatReclineExtra', 'Airline Seat Recline Extra', 'an optional tech label', 'an optional description')
@enduml
```

