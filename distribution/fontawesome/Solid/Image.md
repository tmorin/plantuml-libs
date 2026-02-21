# Image


```text
fontawesome/Solid/Image
```

```text
include('fontawesome/Solid/Image')
```



| Illustration | Image |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Image.png) | ![illustration for Image](../../fontawesome/Solid/Image.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Image
include('fontawesome/Solid/Image')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Image
include('fontawesome/Solid/Image')

' renders the element
Image('Image', 'Image', 'an optional tech label', 'an optional description')
@enduml
```

