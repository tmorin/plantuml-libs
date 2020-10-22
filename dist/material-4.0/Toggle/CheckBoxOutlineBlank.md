# Check Box Outline Blank

```text
material-4.0/Toggle/CheckBoxOutlineBlank
```

```text
include('material-4.0/Toggle/CheckBoxOutlineBlank')
```

|icon|element|
|---|---|
|![](CheckBoxOutlineBlank.png)|![](CheckBoxOutlineBlank.element.png)|



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
' loads the CheckBoxOutlineBlank element
include('material-4.0/Toggle/CheckBoxOutlineBlank')
CheckBoxOutlineBlank('check_box_outline_blank', 'Check Box Outline Blank', 'an optional tech field')
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
' loads the CheckBoxOutlineBlank element
include('material-4.0/Toggle/CheckBoxOutlineBlank')
CheckBoxOutlineBlank('check_box_outline_blank', 'Check Box Outline Blank', 'an optional tech field')
@enduml
```

