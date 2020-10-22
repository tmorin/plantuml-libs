# A15 Mp

```text
material-4.0/Image/A15Mp
```

```text
include('material-4.0/Image/A15Mp')
```

|icon|element|
|---|---|
|![](A15Mp.png)|![](A15Mp.element.png)|



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
' loads the A15Mp element
include('material-4.0/Image/A15Mp')
A15Mp('a_15_mp', 'A15 Mp', 'an optional tech field')
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
' loads the A15Mp element
include('material-4.0/Image/A15Mp')
A15Mp('a_15_mp', 'A15 Mp', 'an optional tech field')
@enduml
```

