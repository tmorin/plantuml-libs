# TruckMoving


```text
fontawesome/Solid/TruckMoving
```

```text
include('fontawesome/Solid/TruckMoving')
```



| Illustration | TruckMoving |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TruckMoving.png) | ![illustration for TruckMoving](../../fontawesome/Solid/TruckMoving.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TruckMovingXs>`
- `<$TruckMovingSm>`
- `<$TruckMovingMd>`
- `<$TruckMovingLg>`





## TruckMoving

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TruckMoving
include('fontawesome/Solid/TruckMoving')

' renders the element
TruckMoving('TruckMoving', 'Truck Moving', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TruckMoving
include('fontawesome/Solid/TruckMoving')

' renders the element
TruckMoving('TruckMoving', 'Truck Moving', 'an optional tech label', 'an optional description')
@enduml
```

