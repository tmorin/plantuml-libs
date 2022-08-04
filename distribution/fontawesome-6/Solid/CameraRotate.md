# CameraRotate


```text
fontawesome-6/Solid/CameraRotate
```

```text
include('fontawesome-6/Solid/CameraRotate')
```



| Illustration | CameraRotate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CameraRotate.png) | ![illustration for CameraRotate](../../fontawesome-6/Solid/CameraRotate.Local.png) |




## CameraRotate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CameraRotate
include('fontawesome-6/Solid/CameraRotate')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CameraRotate
include('fontawesome-6/Solid/CameraRotate')

' renders the element
CameraRotate('CameraRotate', 'Camera Rotate', 'an optional tech label', 'an optional description')
@enduml
```

