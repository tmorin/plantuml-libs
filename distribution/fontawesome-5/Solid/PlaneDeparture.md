# PlaneDeparture


```text
fontawesome-5/Solid/PlaneDeparture
```

```text
include('fontawesome-5/Solid/PlaneDeparture')
```



| Illustration | PlaneDeparture |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PlaneDeparture.png) | ![illustration for PlaneDeparture](../../fontawesome-5/Solid/PlaneDeparture.Local.png) |




## PlaneDeparture

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PlaneDeparture
include('fontawesome-5/Solid/PlaneDeparture')

' renders the element
PlaneDeparture('PlaneDeparture', 'Plane Departure', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PlaneDeparture
include('fontawesome-5/Solid/PlaneDeparture')

' renders the element
PlaneDeparture('PlaneDeparture', 'Plane Departure', 'an optional tech label')
@enduml
```

