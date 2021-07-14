# MotionPhotosOff


```text
material-4/Image/MotionPhotosOff
```

```text
include('material-4/Image/MotionPhotosOff')
```



| Illustration | MotionPhotosOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/MotionPhotosOff.png) | ![illustration for MotionPhotosOff](../../material-4/Image/MotionPhotosOff.Local.png) |




## MotionPhotosOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MotionPhotosOff
include('material-4/Image/MotionPhotosOff')

' renders the element
MotionPhotosOff('MotionPhotosOff', 'Motion Photos Off', 'an optional tech label')
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

' loads the Item which embeds the element MotionPhotosOff
include('material-4/Image/MotionPhotosOff')

' renders the element
MotionPhotosOff('MotionPhotosOff', 'Motion Photos Off', 'an optional tech label')
@enduml
```

