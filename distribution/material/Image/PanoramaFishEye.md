# PanoramaFishEye


```text
material/Image/PanoramaFishEye
```

```text
include('material/Image/PanoramaFishEye')
```



| Illustration | PanoramaFishEye |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/PanoramaFishEye.png) | ![illustration for PanoramaFishEye](../../material/Image/PanoramaFishEye.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PanoramaFishEyeXs>`
- `<$PanoramaFishEyeSm>`
- `<$PanoramaFishEyeMd>`
- `<$PanoramaFishEyeLg>`





## PanoramaFishEye

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PanoramaFishEye
include('material/Image/PanoramaFishEye')

' renders the element
PanoramaFishEye('PanoramaFishEye', 'Panorama Fish Eye', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PanoramaFishEye
include('material/Image/PanoramaFishEye')

' renders the element
PanoramaFishEye('PanoramaFishEye', 'Panorama Fish Eye', 'an optional tech label', 'an optional description')
@enduml
```

