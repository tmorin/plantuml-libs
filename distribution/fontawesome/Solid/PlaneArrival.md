# PlaneArrival


```text
fontawesome/Solid/PlaneArrival
```

```text
include('fontawesome/Solid/PlaneArrival')
```



| Illustration | PlaneArrival |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlaneArrival.png) | ![illustration for PlaneArrival](../../fontawesome/Solid/PlaneArrival.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaneArrivalXs>`
- `<$PlaneArrivalSm>`
- `<$PlaneArrivalMd>`
- `<$PlaneArrivalLg>`





## PlaneArrival

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlaneArrival
include('fontawesome/Solid/PlaneArrival')

' renders the element
PlaneArrival('PlaneArrival', 'Plane Arrival', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlaneArrival
include('fontawesome/Solid/PlaneArrival')

' renders the element
PlaneArrival('PlaneArrival', 'Plane Arrival', 'an optional tech label', 'an optional description')
@enduml
```

