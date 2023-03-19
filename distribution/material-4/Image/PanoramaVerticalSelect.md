# PanoramaVerticalSelect


```text
material-4/Image/PanoramaVerticalSelect
```

```text
include('material-4/Image/PanoramaVerticalSelect')
```



| Illustration | PanoramaVerticalSelect |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PanoramaVerticalSelect.png) | ![illustration for PanoramaVerticalSelect](../../material-4/Image/PanoramaVerticalSelect.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element PanoramaVerticalSelect
include('material-4/Image/PanoramaVerticalSelect')

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
include('material-4/bootstrap')

' loads the Item which embeds the element PanoramaVerticalSelect
include('material-4/Image/PanoramaVerticalSelect')

' renders the element
PanoramaVerticalSelect('PanoramaVerticalSelect', 'Panorama Vertical Select', 'an optional tech label', 'an optional description')
@enduml
```

