# Local Mall

```text
material-4.0/Maps/LocalMall
```

```text
include('material-4.0/Maps/LocalMall')
```

|icon|element|
|---|---|
|![](LocalMall.png)|![](LocalMall.element.png)|



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
' loads the LocalMall element
include('material-4.0/Maps/LocalMall')
LocalMall('local_mall', 'Local Mall', 'an optional tech field')
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
' loads the LocalMall element
include('material-4.0/Maps/LocalMall')
LocalMall('local_mall', 'Local Mall', 'an optional tech field')
@enduml
```

