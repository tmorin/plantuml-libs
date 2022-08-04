# TruckMonster


```text
fontawesome-6/Solid/TruckMonster
```

```text
include('fontawesome-6/Solid/TruckMonster')
```



| Illustration | TruckMonster |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TruckMonster.png) | ![illustration for TruckMonster](../../fontawesome-6/Solid/TruckMonster.Local.png) |




## TruckMonster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TruckMonster
include('fontawesome-6/Solid/TruckMonster')

' renders the element
TruckMonster('TruckMonster', 'Truck Monster', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TruckMonster
include('fontawesome-6/Solid/TruckMonster')

' renders the element
TruckMonster('TruckMonster', 'Truck Monster', 'an optional tech label', 'an optional description')
@enduml
```

