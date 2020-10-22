# A24 Mp

```text
material-4.0/Image/A24Mp
```

```text
include('material-4.0/Image/A24Mp')
```

|icon|element|
|---|---|
|![](A24Mp.png)|![](A24Mp.element.png)|



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
' loads the A24Mp element
include('material-4.0/Image/A24Mp')
A24Mp('a_24_mp', 'A24 Mp', 'an optional tech field')
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
' loads the A24Mp element
include('material-4.0/Image/A24Mp')
A24Mp('a_24_mp', 'A24 Mp', 'an optional tech field')
@enduml
```

