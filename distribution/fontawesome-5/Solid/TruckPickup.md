# TruckPickup


```text
fontawesome-5/Solid/TruckPickup
```

```text
include('fontawesome-5/Solid/TruckPickup')
```



| Illustration | TruckPickup |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TruckPickup.png) | ![illustration for TruckPickup](../../fontawesome-5/Solid/TruckPickup.Local.png) |




## TruckPickup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TruckPickup
include('fontawesome-5/Solid/TruckPickup')

' renders the element
TruckPickup('TruckPickup', 'Truck Pickup', 'an optional tech label')
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

' loads the Item which embeds the element TruckPickup
include('fontawesome-5/Solid/TruckPickup')

' renders the element
TruckPickup('TruckPickup', 'Truck Pickup', 'an optional tech label')
@enduml
```

