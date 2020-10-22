# Arrow Drop Down

```text
material-4.0/Navigation/ArrowDropDown
```

```text
include('material-4.0/Navigation/ArrowDropDown')
```

|icon|element|
|---|---|
|![](ArrowDropDown.png)|![](ArrowDropDown.element.png)|



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
' loads the ArrowDropDown element
include('material-4.0/Navigation/ArrowDropDown')
ArrowDropDown('arrow_drop_down', 'Arrow Drop Down', 'an optional tech field')
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
' loads the ArrowDropDown element
include('material-4.0/Navigation/ArrowDropDown')
ArrowDropDown('arrow_drop_down', 'Arrow Drop Down', 'an optional tech field')
@enduml
```

