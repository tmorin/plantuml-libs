# TruckPlane


```text
fontawesome-6/Solid/TruckPlane
```

```text
include('fontawesome-6/Solid/TruckPlane')
```



| Illustration | TruckPlane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TruckPlane.png) | ![illustration for TruckPlane](../../fontawesome-6/Solid/TruckPlane.Local.png) |




## TruckPlane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TruckPlane
include('fontawesome-6/Solid/TruckPlane')

' renders the element
TruckPlane('TruckPlane', 'Truck Plane', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TruckPlane
include('fontawesome-6/Solid/TruckPlane')

' renders the element
TruckPlane('TruckPlane', 'Truck Plane', 'an optional tech label', 'an optional description')
@enduml
```

