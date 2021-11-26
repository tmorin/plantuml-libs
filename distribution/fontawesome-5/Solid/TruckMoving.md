# TruckMoving


```text
fontawesome-5/Solid/TruckMoving
```

```text
include('fontawesome-5/Solid/TruckMoving')
```



| Illustration | TruckMoving |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TruckMoving.png) | ![illustration for TruckMoving](../../fontawesome-5/Solid/TruckMoving.Local.png) |




## TruckMoving

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TruckMoving
include('fontawesome-5/Solid/TruckMoving')

' renders the element
TruckMoving('TruckMoving', 'Truck Moving', 'an optional tech label')
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

' loads the Item which embeds the element TruckMoving
include('fontawesome-5/Solid/TruckMoving')

' renders the element
TruckMoving('TruckMoving', 'Truck Moving', 'an optional tech label')
@enduml
```

