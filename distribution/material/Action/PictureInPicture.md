# PictureInPicture


```text
material/Action/PictureInPicture
```

```text
include('material/Action/PictureInPicture')
```



| Illustration | PictureInPicture |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/PictureInPicture.png) | ![illustration for PictureInPicture](../../material/Action/PictureInPicture.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PictureInPictureXs>`
- `<$PictureInPictureSm>`
- `<$PictureInPictureMd>`
- `<$PictureInPictureLg>`





## PictureInPicture

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PictureInPicture
include('material/Action/PictureInPicture')

' renders the element
PictureInPicture('PictureInPicture', 'Picture In Picture', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PictureInPicture
include('material/Action/PictureInPicture')

' renders the element
PictureInPicture('PictureInPicture', 'Picture In Picture', 'an optional tech label', 'an optional description')
@enduml
```

