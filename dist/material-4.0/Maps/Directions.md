# Directions

```text
material-4.0/Maps/Directions
```

```text
include('material-4.0/Maps/Directions')
```

|icon|element|
|---|---|
|![](Directions.png)|![](Directions.element.png)|



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
' loads the Directions element
include('material-4.0/Maps/Directions')
Directions('directions', 'Directions', 'an optional tech field')
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
' loads the Directions element
include('material-4.0/Maps/Directions')
Directions('directions', 'Directions', 'an optional tech field')
@enduml
```

