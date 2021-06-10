# TruckMonster


```text
fontawesome-5/Solid/TruckMonster
```

```text
include('fontawesome-5/Solid/TruckMonster')
```



| Illustration | TruckMonster |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TruckMonster.png) | ![illustration for TruckMonster](../../fontawesome-5/Solid/TruckMonster.Local.png) |




## TruckMonster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TruckMonster
include('fontawesome-5/Solid/TruckMonster')

' renders the element
TruckMonster('TruckMonster', 'Truck Monster', 'an optional tech label')
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

' loads the Item which embeds the element TruckMonster
include('fontawesome-5/Solid/TruckMonster')

' renders the element
TruckMonster('TruckMonster', 'Truck Monster', 'an optional tech label')
@enduml
```

