# Cell Wifi

```text
material-4.0/Communication/CellWifi
```

```text
include('material-4.0/Communication/CellWifi')
```

|icon|element|
|---|---|
|![](CellWifi.png)|![](CellWifi.element.png)|



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
' loads the CellWifi element
include('material-4.0/Communication/CellWifi')
CellWifi('cell_wifi', 'Cell Wifi', 'an optional tech field')
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
' loads the CellWifi element
include('material-4.0/Communication/CellWifi')
CellWifi('cell_wifi', 'Cell Wifi', 'an optional tech field')
@enduml
```

