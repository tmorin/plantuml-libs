# Crop75

```text
material-4.0/Image/Crop75
```

```text
include('material-4.0/Image/Crop75')
```

|icon|element|
|---|---|
|![](Crop75.png)|![](Crop75.element.png)|



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
' loads the Crop75 element
include('material-4.0/Image/Crop75')
Crop75('crop_75', 'Crop75', 'an optional tech field')
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
' loads the Crop75 element
include('material-4.0/Image/Crop75')
Crop75('crop_75', 'Crop75', 'an optional tech field')
@enduml
```

