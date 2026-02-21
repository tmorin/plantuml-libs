# PanoramaPhotosphereSelect


```text
material/Image/PanoramaPhotosphereSelect
```

```text
include('material/Image/PanoramaPhotosphereSelect')
```



| Illustration | PanoramaPhotosphereSelect |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/PanoramaPhotosphereSelect.png) | ![illustration for PanoramaPhotosphereSelect](../../material/Image/PanoramaPhotosphereSelect.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PanoramaPhotosphereSelectXs>`
- `<$PanoramaPhotosphereSelectSm>`
- `<$PanoramaPhotosphereSelectMd>`
- `<$PanoramaPhotosphereSelectLg>`





## PanoramaPhotosphereSelect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PanoramaPhotosphereSelect
include('material/Image/PanoramaPhotosphereSelect')

' renders the element
PanoramaPhotosphereSelect('PanoramaPhotosphereSelect', 'Panorama Photosphere Select', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PanoramaPhotosphereSelect
include('material/Image/PanoramaPhotosphereSelect')

' renders the element
PanoramaPhotosphereSelect('PanoramaPhotosphereSelect', 'Panorama Photosphere Select', 'an optional tech label', 'an optional description')
@enduml
```

