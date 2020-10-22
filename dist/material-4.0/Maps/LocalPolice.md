# Local Police

```text
material-4.0/Maps/LocalPolice
```

```text
include('material-4.0/Maps/LocalPolice')
```

|icon|element|
|---|---|
|![](LocalPolice.png)|![](LocalPolice.element.png)|



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
' loads the LocalPolice element
include('material-4.0/Maps/LocalPolice')
LocalPolice('local_police', 'Local Police', 'an optional tech field')
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
' loads the LocalPolice element
include('material-4.0/Maps/LocalPolice')
LocalPolice('local_police', 'Local Police', 'an optional tech field')
@enduml
```

