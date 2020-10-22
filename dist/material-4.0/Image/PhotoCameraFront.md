# Photo Camera Front

```text
material-4.0/Image/PhotoCameraFront
```

```text
include('material-4.0/Image/PhotoCameraFront')
```

|icon|element|
|---|---|
|![](PhotoCameraFront.png)|![](PhotoCameraFront.element.png)|



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
' loads the PhotoCameraFront element
include('material-4.0/Image/PhotoCameraFront')
PhotoCameraFront('photo_camera_front', 'Photo Camera Front', 'an optional tech field')
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
' loads the PhotoCameraFront element
include('material-4.0/Image/PhotoCameraFront')
PhotoCameraFront('photo_camera_front', 'Photo Camera Front', 'an optional tech field')
@enduml
```

