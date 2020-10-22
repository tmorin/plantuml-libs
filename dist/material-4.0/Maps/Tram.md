# Tram

```text
material-4.0/Maps/Tram
```

```text
include('material-4.0/Maps/Tram')
```

|icon|element|
|---|---|
|![](Tram.png)|![](Tram.element.png)|



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
' loads the Tram element
include('material-4.0/Maps/Tram')
Tram('tram', 'Tram', 'an optional tech field')
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
' loads the Tram element
include('material-4.0/Maps/Tram')
Tram('tram', 'Tram', 'an optional tech field')
@enduml
```

