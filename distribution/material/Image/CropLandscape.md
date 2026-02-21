# CropLandscape


```text
material/Image/CropLandscape
```

```text
include('material/Image/CropLandscape')
```



| Illustration | CropLandscape |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/CropLandscape.png) | ![illustration for CropLandscape](../../material/Image/CropLandscape.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CropLandscapeXs>`
- `<$CropLandscapeSm>`
- `<$CropLandscapeMd>`
- `<$CropLandscapeLg>`





## CropLandscape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CropLandscape
include('material/Image/CropLandscape')

' renders the element
CropLandscape('CropLandscape', 'Crop Landscape', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element CropLandscape
include('material/Image/CropLandscape')

' renders the element
CropLandscape('CropLandscape', 'Crop Landscape', 'an optional tech label', 'an optional description')
@enduml
```

