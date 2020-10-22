# A18 Mp

```text
material-4.0/Image/A18Mp
```

```text
include('material-4.0/Image/A18Mp')
```

|icon|element|
|---|---|
|![](A18Mp.png)|![](A18Mp.element.png)|



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
' loads the A18Mp element
include('material-4.0/Image/A18Mp')
A18Mp('a_18_mp', 'A18 Mp', 'an optional tech field')
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
' loads the A18Mp element
include('material-4.0/Image/A18Mp')
A18Mp('a_18_mp', 'A18 Mp', 'an optional tech field')
@enduml
```

