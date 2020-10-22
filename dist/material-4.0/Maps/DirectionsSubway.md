# Directions Subway

```text
material-4.0/Maps/DirectionsSubway
```

```text
include('material-4.0/Maps/DirectionsSubway')
```

|icon|element|
|---|---|
|![](DirectionsSubway.png)|![](DirectionsSubway.element.png)|



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
' loads the DirectionsSubway element
include('material-4.0/Maps/DirectionsSubway')
DirectionsSubway('directions_subway', 'Directions Subway', 'an optional tech field')
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
' loads the DirectionsSubway element
include('material-4.0/Maps/DirectionsSubway')
DirectionsSubway('directions_subway', 'Directions Subway', 'an optional tech field')
@enduml
```

