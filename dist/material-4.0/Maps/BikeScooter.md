# Bike Scooter

```text
material-4.0/Maps/BikeScooter
```

```text
include('material-4.0/Maps/BikeScooter')
```

|icon|element|
|---|---|
|![](BikeScooter.png)|![](BikeScooter.element.png)|



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
' loads the BikeScooter element
include('material-4.0/Maps/BikeScooter')
BikeScooter('bike_scooter', 'Bike Scooter', 'an optional tech field')
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
' loads the BikeScooter element
include('material-4.0/Maps/BikeScooter')
BikeScooter('bike_scooter', 'Bike Scooter', 'an optional tech field')
@enduml
```

