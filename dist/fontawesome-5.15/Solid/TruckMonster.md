# Truck Monster

```text
fontawesome-5.15/Solid/TruckMonster
```

```text
include('fontawesome-5.15/Solid/TruckMonster')
```

|icon|element|
|---|---|
|![](TruckMonster.png)|![](TruckMonster.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the TruckMonster element
include('fontawesome-5.15/Solid/TruckMonster')
TruckMonster('truck_monster', 'Truck Monster', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the TruckMonster element
include('fontawesome-5.15/Solid/TruckMonster')
TruckMonster('truck_monster', 'Truck Monster', 'an optional tech field')
@enduml
```

