# Camera


```text
fontawesome/Regular/Camera
```

```text
include('fontawesome/Regular/Camera')
```



| Illustration | Camera |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Camera.png) | ![illustration for Camera](../../fontawesome/Regular/Camera.Local.png) |



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
include('fontawesome/Regular/Camera')

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
include('fontawesome/Regular/Camera')

' renders the element
Camera('Camera', 'Camera', 'an optional tech label', 'an optional description')
@enduml
```

