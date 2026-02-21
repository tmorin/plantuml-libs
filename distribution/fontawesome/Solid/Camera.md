# Camera


```text
fontawesome/Solid/Camera
```

```text
include('fontawesome/Solid/Camera')
```



| Illustration | Camera |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Camera.png) | ![illustration for Camera](../../fontawesome/Solid/Camera.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Camera
include('fontawesome/Solid/Camera')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Camera
include('fontawesome/Solid/Camera')

' renders the element
Camera('Camera', 'Camera', 'an optional tech label', 'an optional description')
@enduml
```

