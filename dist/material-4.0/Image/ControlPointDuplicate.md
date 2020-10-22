# Control Point Duplicate

```text
material-4.0/Image/ControlPointDuplicate
```

```text
include('material-4.0/Image/ControlPointDuplicate')
```

|icon|element|
|---|---|
|![](ControlPointDuplicate.png)|![](ControlPointDuplicate.element.png)|



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
' loads the ControlPointDuplicate element
include('material-4.0/Image/ControlPointDuplicate')
ControlPointDuplicate('control_point_duplicate', 'Control Point Duplicate', 'an optional tech field')
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
' loads the ControlPointDuplicate element
include('material-4.0/Image/ControlPointDuplicate')
ControlPointDuplicate('control_point_duplicate', 'Control Point Duplicate', 'an optional tech field')
@enduml
```

