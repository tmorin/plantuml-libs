# PanoramaPhotosphereSelect


```text
material-4/Image/PanoramaPhotosphereSelect
```

```text
include('material-4/Image/PanoramaPhotosphereSelect')
```



| Illustration | PanoramaPhotosphereSelect |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PanoramaPhotosphereSelect.png) | ![illustration for PanoramaPhotosphereSelect](../../material-4/Image/PanoramaPhotosphereSelect.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element PanoramaPhotosphereSelect
include('material-4/Image/PanoramaPhotosphereSelect')

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
include('material-4/bootstrap')

' loads the Item which embeds the element PanoramaPhotosphereSelect
include('material-4/Image/PanoramaPhotosphereSelect')

' renders the element
PanoramaPhotosphereSelect('PanoramaPhotosphereSelect', 'Panorama Photosphere Select', 'an optional tech label', 'an optional description')
@enduml
```

