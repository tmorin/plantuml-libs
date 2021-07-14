# MotionPhotosOn


```text
material-4/Image/MotionPhotosOn
```

```text
include('material-4/Image/MotionPhotosOn')
```



| Illustration | MotionPhotosOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/MotionPhotosOn.png) | ![illustration for MotionPhotosOn](../../material-4/Image/MotionPhotosOn.Local.png) |




## MotionPhotosOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MotionPhotosOn
include('material-4/Image/MotionPhotosOn')

' renders the element
MotionPhotosOn('MotionPhotosOn', 'Motion Photos On', 'an optional tech label')
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

' loads the Item which embeds the element MotionPhotosOn
include('material-4/Image/MotionPhotosOn')

' renders the element
MotionPhotosOn('MotionPhotosOn', 'Motion Photos On', 'an optional tech label')
@enduml
```

