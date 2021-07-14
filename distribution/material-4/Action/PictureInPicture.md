# PictureInPicture


```text
material-4/Action/PictureInPicture
```

```text
include('material-4/Action/PictureInPicture')
```



| Illustration | PictureInPicture |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PictureInPicture.png) | ![illustration for PictureInPicture](../../material-4/Action/PictureInPicture.Local.png) |




## PictureInPicture

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PictureInPicture
include('material-4/Action/PictureInPicture')

' renders the element
PictureInPicture('PictureInPicture', 'Picture In Picture', 'an optional tech label')
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

' loads the Item which embeds the element PictureInPicture
include('material-4/Action/PictureInPicture')

' renders the element
PictureInPicture('PictureInPicture', 'Picture In Picture', 'an optional tech label')
@enduml
```

