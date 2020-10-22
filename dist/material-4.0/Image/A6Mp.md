# A6 Mp

```text
material-4.0/Image/A6Mp
```

```text
include('material-4.0/Image/A6Mp')
```

|icon|element|
|---|---|
|![](A6Mp.png)|![](A6Mp.element.png)|



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
' loads the A6Mp element
include('material-4.0/Image/A6Mp')
A6Mp('a_6_mp', 'A6 Mp', 'an optional tech field')
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
' loads the A6Mp element
include('material-4.0/Image/A6Mp')
A6Mp('a_6_mp', 'A6 Mp', 'an optional tech field')
@enduml
```

