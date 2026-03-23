# PictureInPicture


```text
fontawesome/Solid/PictureInPicture
```

```text
include('fontawesome/Solid/PictureInPicture')
```



| Illustration | PictureInPicture |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PictureInPicture.png) | ![illustration for PictureInPicture](../../fontawesome/Solid/PictureInPicture.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PictureInPicture
include('fontawesome/Solid/PictureInPicture')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PictureInPicture
include('fontawesome/Solid/PictureInPicture')

' renders the element
PictureInPicture('PictureInPicture', 'Picture In Picture', 'an optional tech label', 'an optional description')
@enduml
```

