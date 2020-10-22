# Car Repair

```text
material-4.0/Maps/CarRepair
```

```text
include('material-4.0/Maps/CarRepair')
```

|icon|element|
|---|---|
|![](CarRepair.png)|![](CarRepair.element.png)|



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
' loads the CarRepair element
include('material-4.0/Maps/CarRepair')
CarRepair('car_repair', 'Car Repair', 'an optional tech field')
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
' loads the CarRepair element
include('material-4.0/Maps/CarRepair')
CarRepair('car_repair', 'Car Repair', 'an optional tech field')
@enduml
```

