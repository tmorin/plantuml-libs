# MotionPhotosPause


```text
material/Image/MotionPhotosPause
```

```text
include('material/Image/MotionPhotosPause')
```



| Illustration | MotionPhotosPause |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/MotionPhotosPause.png) | ![illustration for MotionPhotosPause](../../material/Image/MotionPhotosPause.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MotionPhotosPauseXs>`
- `<$MotionPhotosPauseSm>`
- `<$MotionPhotosPauseMd>`
- `<$MotionPhotosPauseLg>`





## MotionPhotosPause

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MotionPhotosPause
include('material/Image/MotionPhotosPause')

' renders the element
MotionPhotosPause('MotionPhotosPause', 'Motion Photos Pause', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MotionPhotosPause
include('material/Image/MotionPhotosPause')

' renders the element
MotionPhotosPause('MotionPhotosPause', 'Motion Photos Pause', 'an optional tech label', 'an optional description')
@enduml
```

