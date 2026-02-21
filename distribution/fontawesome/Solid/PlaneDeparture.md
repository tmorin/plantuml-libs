# PlaneDeparture


```text
fontawesome/Solid/PlaneDeparture
```

```text
include('fontawesome/Solid/PlaneDeparture')
```



| Illustration | PlaneDeparture |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlaneDeparture.png) | ![illustration for PlaneDeparture](../../fontawesome/Solid/PlaneDeparture.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaneDepartureXs>`
- `<$PlaneDepartureSm>`
- `<$PlaneDepartureMd>`
- `<$PlaneDepartureLg>`





## PlaneDeparture

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlaneDeparture
include('fontawesome/Solid/PlaneDeparture')

' renders the element
PlaneDeparture('PlaneDeparture', 'Plane Departure', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlaneDeparture
include('fontawesome/Solid/PlaneDeparture')

' renders the element
PlaneDeparture('PlaneDeparture', 'Plane Departure', 'an optional tech label', 'an optional description')
@enduml
```

