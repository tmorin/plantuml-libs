# Image


```text
material-4/Image/Image
```

```text
include('material-4/Image/Image')
```



| Illustration | Image |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Image.png) | ![illustration for Image](../../material-4/Image/Image.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImageXs>`
- `<$ImageSm>`
- `<$ImageMd>`
- `<$ImageLg>`





## Image

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Image
include('material-4/Image/Image')

' renders the element
Image('Image', 'Image', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Image
include('material-4/Image/Image')

' renders the element
Image('Image', 'Image', 'an optional tech label', 'an optional description')
@enduml
```

