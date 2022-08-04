# PlaneArrival


```text
fontawesome-6/Solid/PlaneArrival
```

```text
include('fontawesome-6/Solid/PlaneArrival')
```



| Illustration | PlaneArrival |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlaneArrival.png) | ![illustration for PlaneArrival](../../fontawesome-6/Solid/PlaneArrival.Local.png) |




## PlaneArrival

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlaneArrival
include('fontawesome-6/Solid/PlaneArrival')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlaneArrival
include('fontawesome-6/Solid/PlaneArrival')

' renders the element
PlaneArrival('PlaneArrival', 'Plane Arrival', 'an optional tech label', 'an optional description')
@enduml
```

