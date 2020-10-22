# A7 Mp

```text
material-4.0/Image/A7Mp
```

```text
include('material-4.0/Image/A7Mp')
```

|icon|element|
|---|---|
|![](A7Mp.png)|![](A7Mp.element.png)|



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
' loads the A7Mp element
include('material-4.0/Image/A7Mp')
A7Mp('a_7_mp', 'A7 Mp', 'an optional tech field')
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
' loads the A7Mp element
include('material-4.0/Image/A7Mp')
A7Mp('a_7_mp', 'A7 Mp', 'an optional tech field')
@enduml
```

