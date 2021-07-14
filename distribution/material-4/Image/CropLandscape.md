# CropLandscape


```text
material-4/Image/CropLandscape
```

```text
include('material-4/Image/CropLandscape')
```



| Illustration | CropLandscape |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/CropLandscape.png) | ![illustration for CropLandscape](../../material-4/Image/CropLandscape.Local.png) |




## CropLandscape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CropLandscape
include('material-4/Image/CropLandscape')

' renders the element
CropLandscape('CropLandscape', 'Crop Landscape', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CropLandscape
include('material-4/Image/CropLandscape')

' renders the element
CropLandscape('CropLandscape', 'Crop Landscape', 'an optional tech label')
@enduml
```

