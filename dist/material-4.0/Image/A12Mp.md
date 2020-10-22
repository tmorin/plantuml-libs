# A12 Mp

```text
material-4.0/Image/A12Mp
```

```text
include('material-4.0/Image/A12Mp')
```

|icon|element|
|---|---|
|![](A12Mp.png)|![](A12Mp.element.png)|



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
' loads the A12Mp element
include('material-4.0/Image/A12Mp')
A12Mp('a_12_mp', 'A12 Mp', 'an optional tech field')
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
' loads the A12Mp element
include('material-4.0/Image/A12Mp')
A12Mp('a_12_mp', 'A12 Mp', 'an optional tech field')
@enduml
```

