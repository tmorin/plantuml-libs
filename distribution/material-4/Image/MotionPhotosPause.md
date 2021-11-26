# MotionPhotosPause


```text
material-4/Image/MotionPhotosPause
```

```text
include('material-4/Image/MotionPhotosPause')
```



| Illustration | MotionPhotosPause |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/MotionPhotosPause.png) | ![illustration for MotionPhotosPause](../../material-4/Image/MotionPhotosPause.Local.png) |




## MotionPhotosPause

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MotionPhotosPause
include('material-4/Image/MotionPhotosPause')

' renders the element
MotionPhotosPause('MotionPhotosPause', 'Motion Photos Pause', 'an optional tech label')
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

' loads the Item which embeds the element MotionPhotosPause
include('material-4/Image/MotionPhotosPause')

' renders the element
MotionPhotosPause('MotionPhotosPause', 'Motion Photos Pause', 'an optional tech label')
@enduml
```

