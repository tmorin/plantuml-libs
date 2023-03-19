# MonochromePhotos


```text
material-4/Image/MonochromePhotos
```

```text
include('material-4/Image/MonochromePhotos')
```



| Illustration | MonochromePhotos |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/MonochromePhotos.png) | ![illustration for MonochromePhotos](../../material-4/Image/MonochromePhotos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonochromePhotosXs>`
- `<$MonochromePhotosSm>`
- `<$MonochromePhotosMd>`
- `<$MonochromePhotosLg>`





## MonochromePhotos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MonochromePhotos
include('material-4/Image/MonochromePhotos')

' renders the element
MonochromePhotos('MonochromePhotos', 'Monochrome Photos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MonochromePhotos
include('material-4/Image/MonochromePhotos')

' renders the element
MonochromePhotos('MonochromePhotos', 'Monochrome Photos', 'an optional tech label', 'an optional description')
@enduml
```

