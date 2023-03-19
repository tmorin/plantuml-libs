# Camera


```text
material-4/Image/Camera
```

```text
include('material-4/Image/Camera')
```



| Illustration | Camera |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Camera.png) | ![illustration for Camera](../../material-4/Image/Camera.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CameraXs>`
- `<$CameraSm>`
- `<$CameraMd>`
- `<$CameraLg>`





## Camera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Camera
include('material-4/Image/Camera')

' renders the element
Camera('Camera', 'Camera', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Camera
include('material-4/Image/Camera')

' renders the element
Camera('Camera', 'Camera', 'an optional tech label', 'an optional description')
@enduml
```

