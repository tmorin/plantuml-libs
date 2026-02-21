# Flightaware


```text
simpleicons/F/Flightaware
```

```text
include('simpleicons/F/Flightaware')
```



| Illustration | Flightaware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Flightaware.png) | ![illustration for Flightaware](../../simpleicons/F/Flightaware.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlightawareXs>`
- `<$FlightawareSm>`
- `<$FlightawareMd>`
- `<$FlightawareLg>`





## Flightaware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flightaware
include('simpleicons/F/Flightaware')

' renders the element
Flightaware('Flightaware', 'Flightaware', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flightaware
include('simpleicons/F/Flightaware')

' renders the element
Flightaware('Flightaware', 'Flightaware', 'an optional tech label', 'an optional description')
@enduml
```

