# Color Lens

```text
material-4.0/Image/ColorLens
```

```text
include('material-4.0/Image/ColorLens')
```

|icon|element|
|---|---|
|![](ColorLens.png)|![](ColorLens.element.png)|



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
' loads the ColorLens element
include('material-4.0/Image/ColorLens')
ColorLens('color_lens', 'Color Lens', 'an optional tech field')
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
' loads the ColorLens element
include('material-4.0/Image/ColorLens')
ColorLens('color_lens', 'Color Lens', 'an optional tech field')
@enduml
```

