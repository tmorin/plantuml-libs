# ImageAspectRatio


```text
material/Image/ImageAspectRatio
```

```text
include('material/Image/ImageAspectRatio')
```



| Illustration | ImageAspectRatio |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/ImageAspectRatio.png) | ![illustration for ImageAspectRatio](../../material/Image/ImageAspectRatio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImageAspectRatioXs>`
- `<$ImageAspectRatioSm>`
- `<$ImageAspectRatioMd>`
- `<$ImageAspectRatioLg>`





## ImageAspectRatio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ImageAspectRatio
include('material/Image/ImageAspectRatio')

' renders the element
ImageAspectRatio('ImageAspectRatio', 'Image Aspect Ratio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ImageAspectRatio
include('material/Image/ImageAspectRatio')

' renders the element
ImageAspectRatio('ImageAspectRatio', 'Image Aspect Ratio', 'an optional tech label', 'an optional description')
@enduml
```

