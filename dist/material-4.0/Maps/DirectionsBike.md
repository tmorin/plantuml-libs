# Directions Bike

```text
material-4.0/Maps/DirectionsBike
```

```text
include('material-4.0/Maps/DirectionsBike')
```

|icon|element|
|---|---|
|![](DirectionsBike.png)|![](DirectionsBike.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the DirectionsBike element
include('material-4.0/Maps/DirectionsBike')
DirectionsBike('directions_bike', 'Directions Bike', 'an optional tech field')
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
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the DirectionsBike element
include('material-4.0/Maps/DirectionsBike')
DirectionsBike('directions_bike', 'Directions Bike', 'an optional tech field')
@enduml
```

