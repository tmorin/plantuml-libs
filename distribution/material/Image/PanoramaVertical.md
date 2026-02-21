# PanoramaVertical


```text
material/Image/PanoramaVertical
```

```text
include('material/Image/PanoramaVertical')
```



| Illustration | PanoramaVertical |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/PanoramaVertical.png) | ![illustration for PanoramaVertical](../../material/Image/PanoramaVertical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PanoramaVerticalXs>`
- `<$PanoramaVerticalSm>`
- `<$PanoramaVerticalMd>`
- `<$PanoramaVerticalLg>`





## PanoramaVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PanoramaVertical
include('material/Image/PanoramaVertical')

' renders the element
PanoramaVertical('PanoramaVertical', 'Panorama Vertical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PanoramaVertical
include('material/Image/PanoramaVertical')

' renders the element
PanoramaVertical('PanoramaVertical', 'Panorama Vertical', 'an optional tech label', 'an optional description')
@enduml
```

