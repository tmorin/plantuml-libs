# ImageAspectRatio


```text
material-4/Image/ImageAspectRatio
```

```text
include('material-4/Image/ImageAspectRatio')
```



| Illustration | ImageAspectRatio |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ImageAspectRatio.png) | ![illustration for ImageAspectRatio](../../material-4/Image/ImageAspectRatio.Local.png) |




## ImageAspectRatio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ImageAspectRatio
include('material-4/Image/ImageAspectRatio')

' renders the element
ImageAspectRatio('ImageAspectRatio', 'Image Aspect Ratio', 'an optional tech label')
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

' loads the Item which embeds the element ImageAspectRatio
include('material-4/Image/ImageAspectRatio')

' renders the element
ImageAspectRatio('ImageAspectRatio', 'Image Aspect Ratio', 'an optional tech label')
@enduml
```

