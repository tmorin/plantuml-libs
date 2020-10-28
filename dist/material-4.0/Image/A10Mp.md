# A10 Mp

```text
material-4.0/Image/A10Mp
```

```text
include('material-4.0/Image/A10Mp')
```

|icon|element|
|---|---|
|![](A10Mp.png)|![](A10Mp.element.png)|



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
' loads the A10Mp element
include('material-4.0/Image/A10Mp')
A10Mp('a_10_mp', 'A10 Mp', 'an optional tech field')
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
' loads the A10Mp element
include('material-4.0/Image/A10Mp')
A10Mp('a_10_mp', 'A10 Mp', 'an optional tech field')
@enduml
```
