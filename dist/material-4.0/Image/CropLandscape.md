# Crop Landscape

```text
material-4.0/Image/CropLandscape
```

```text
include('material-4.0/Image/CropLandscape')
```

|icon|element|
|---|---|
|![](CropLandscape.png)|![](CropLandscape.element.png)|



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
' loads the CropLandscape element
include('material-4.0/Image/CropLandscape')
CropLandscape('crop_landscape', 'Crop Landscape', 'an optional tech field')
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
' loads the CropLandscape element
include('material-4.0/Image/CropLandscape')
CropLandscape('crop_landscape', 'Crop Landscape', 'an optional tech field')
@enduml
```

