# Rotate90 Degrees Ccw

```text
material-4.0/Image/Rotate90DegreesCcw
```

```text
include('material-4.0/Image/Rotate90DegreesCcw')
```

|icon|element|
|---|---|
|![](Rotate90DegreesCcw.png)|![](Rotate90DegreesCcw.element.png)|



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
' loads the Rotate90DegreesCcw element
include('material-4.0/Image/Rotate90DegreesCcw')
Rotate90DegreesCcw('rotate_90_degrees_ccw', 'Rotate90 Degrees Ccw', 'an optional tech field')
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
' loads the Rotate90DegreesCcw element
include('material-4.0/Image/Rotate90DegreesCcw')
Rotate90DegreesCcw('rotate_90_degrees_ccw', 'Rotate90 Degrees Ccw', 'an optional tech field')
@enduml
```

