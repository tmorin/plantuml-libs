# PanoramaVerticalSelect


```text
material/Image/PanoramaVerticalSelect
```

```text
include('material/Image/PanoramaVerticalSelect')
```



| Illustration | PanoramaVerticalSelect |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/PanoramaVerticalSelect.png) | ![illustration for PanoramaVerticalSelect](../../material/Image/PanoramaVerticalSelect.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PanoramaVerticalSelectXs>`
- `<$PanoramaVerticalSelectSm>`
- `<$PanoramaVerticalSelectMd>`
- `<$PanoramaVerticalSelectLg>`





## PanoramaVerticalSelect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PanoramaVerticalSelect
include('material/Image/PanoramaVerticalSelect')

' renders the element
PanoramaVerticalSelect('PanoramaVerticalSelect', 'Panorama Vertical Select', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PanoramaVerticalSelect
include('material/Image/PanoramaVerticalSelect')

' renders the element
PanoramaVerticalSelect('PanoramaVerticalSelect', 'Panorama Vertical Select', 'an optional tech label', 'an optional description')
@enduml
```

