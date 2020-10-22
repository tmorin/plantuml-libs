# A16 Mp

```text
material-4.0/Image/A16Mp
```

```text
include('material-4.0/Image/A16Mp')
```

|icon|element|
|---|---|
|![](A16Mp.png)|![](A16Mp.element.png)|



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
' loads the A16Mp element
include('material-4.0/Image/A16Mp')
A16Mp('a_16_mp', 'A16 Mp', 'an optional tech field')
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
' loads the A16Mp element
include('material-4.0/Image/A16Mp')
A16Mp('a_16_mp', 'A16 Mp', 'an optional tech field')
@enduml
```

