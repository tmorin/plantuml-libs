# PlaneArrival


```text
fontawesome-5/Solid/PlaneArrival
```

```text
include('fontawesome-5/Solid/PlaneArrival')
```



| Illustration | PlaneArrival |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PlaneArrival.png) | ![illustration for PlaneArrival](../../fontawesome-5/Solid/PlaneArrival.Local.png) |




## PlaneArrival

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PlaneArrival
include('fontawesome-5/Solid/PlaneArrival')

' renders the element
PlaneArrival('PlaneArrival', 'Plane Arrival', 'an optional tech label')
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

' loads the Item which embeds the element PlaneArrival
include('fontawesome-5/Solid/PlaneArrival')

' renders the element
PlaneArrival('PlaneArrival', 'Plane Arrival', 'an optional tech label')
@enduml
```

