# Point Of Sale

```text
material-4.0/Hardware/PointOfSale
```

```text
include('material-4.0/Hardware/PointOfSale')
```

|icon|element|
|---|---|
|![](PointOfSale.png)|![](PointOfSale.element.png)|



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
' loads the PointOfSale element
include('material-4.0/Hardware/PointOfSale')
PointOfSale('point_of_sale', 'Point Of Sale', 'an optional tech field')
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
' loads the PointOfSale element
include('material-4.0/Hardware/PointOfSale')
PointOfSale('point_of_sale', 'Point Of Sale', 'an optional tech field')
@enduml
```

