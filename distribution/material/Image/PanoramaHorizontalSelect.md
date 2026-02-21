# PanoramaHorizontalSelect


```text
material/Image/PanoramaHorizontalSelect
```

```text
include('material/Image/PanoramaHorizontalSelect')
```



| Illustration | PanoramaHorizontalSelect |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/PanoramaHorizontalSelect.png) | ![illustration for PanoramaHorizontalSelect](../../material/Image/PanoramaHorizontalSelect.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PanoramaHorizontalSelectXs>`
- `<$PanoramaHorizontalSelectSm>`
- `<$PanoramaHorizontalSelectMd>`
- `<$PanoramaHorizontalSelectLg>`





## PanoramaHorizontalSelect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PanoramaHorizontalSelect
include('material/Image/PanoramaHorizontalSelect')

' renders the element
PanoramaHorizontalSelect('PanoramaHorizontalSelect', 'Panorama Horizontal Select', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PanoramaHorizontalSelect
include('material/Image/PanoramaHorizontalSelect')

' renders the element
PanoramaHorizontalSelect('PanoramaHorizontalSelect', 'Panorama Horizontal Select', 'an optional tech label', 'an optional description')
@enduml
```

