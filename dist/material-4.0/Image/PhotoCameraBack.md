# Photo Camera Back

```text
material-4.0/Image/PhotoCameraBack
```

```text
include('material-4.0/Image/PhotoCameraBack')
```

|icon|element|
|---|---|
|![](PhotoCameraBack.png)|![](PhotoCameraBack.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the PhotoCameraBack element
include('material-4.0/Image/PhotoCameraBack')
PhotoCameraBack('photo_camera_back', 'Photo Camera Back', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the PhotoCameraBack element
include('material-4.0/Image/PhotoCameraBack')
PhotoCameraBack('photo_camera_back', 'Photo Camera Back', 'an optional tech field')
@enduml
```

