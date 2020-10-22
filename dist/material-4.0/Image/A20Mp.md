# A20 Mp

```text
material-4.0/Image/A20Mp
```

```text
include('material-4.0/Image/A20Mp')
```

|icon|element|
|---|---|
|![](A20Mp.png)|![](A20Mp.element.png)|



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
' loads the A20Mp element
include('material-4.0/Image/A20Mp')
A20Mp('a_20_mp', 'A20 Mp', 'an optional tech field')
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
' loads the A20Mp element
include('material-4.0/Image/A20Mp')
A20Mp('a_20_mp', 'A20 Mp', 'an optional tech field')
@enduml
```

