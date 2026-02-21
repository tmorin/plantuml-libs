# CameraRotate


```text
fontawesome/Solid/CameraRotate
```

```text
include('fontawesome/Solid/CameraRotate')
```



| Illustration | CameraRotate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CameraRotate.png) | ![illustration for CameraRotate](../../fontawesome/Solid/CameraRotate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CameraRotateXs>`
- `<$CameraRotateSm>`
- `<$CameraRotateMd>`
- `<$CameraRotateLg>`





## CameraRotate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CameraRotate
include('fontawesome/Solid/CameraRotate')

' renders the element
CameraRotate('CameraRotate', 'Camera Rotate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CameraRotate
include('fontawesome/Solid/CameraRotate')

' renders the element
CameraRotate('CameraRotate', 'Camera Rotate', 'an optional tech label', 'an optional description')
@enduml
```

