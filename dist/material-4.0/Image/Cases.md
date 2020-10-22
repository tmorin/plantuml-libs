# Cases

```text
material-4.0/Image/Cases
```

```text
include('material-4.0/Image/Cases')
```

|icon|element|
|---|---|
|![](Cases.png)|![](Cases.element.png)|



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
' loads the Cases element
include('material-4.0/Image/Cases')
Cases('cases', 'Cases', 'an optional tech field')
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
' loads the Cases element
include('material-4.0/Image/Cases')
Cases('cases', 'Cases', 'an optional tech field')
@enduml
```

