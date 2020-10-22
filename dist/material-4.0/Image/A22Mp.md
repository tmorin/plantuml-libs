# A22 Mp

```text
material-4.0/Image/A22Mp
```

```text
include('material-4.0/Image/A22Mp')
```

|icon|element|
|---|---|
|![](A22Mp.png)|![](A22Mp.element.png)|



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
' loads the A22Mp element
include('material-4.0/Image/A22Mp')
A22Mp('a_22_mp', 'A22 Mp', 'an optional tech field')
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
' loads the A22Mp element
include('material-4.0/Image/A22Mp')
A22Mp('a_22_mp', 'A22 Mp', 'an optional tech field')
@enduml
```

