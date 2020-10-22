# Crop54

```text
material-4.0/Image/Crop54
```

```text
include('material-4.0/Image/Crop54')
```

|icon|element|
|---|---|
|![](Crop54.png)|![](Crop54.element.png)|



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
' loads the Crop54 element
include('material-4.0/Image/Crop54')
Crop54('crop_54', 'Crop54', 'an optional tech field')
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
' loads the Crop54 element
include('material-4.0/Image/Crop54')
Crop54('crop_54', 'Crop54', 'an optional tech field')
@enduml
```

