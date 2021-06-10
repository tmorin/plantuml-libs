# CameraRetro


```text
fontawesome-5/Solid/CameraRetro
```

```text
include('fontawesome-5/Solid/CameraRetro')
```



| Illustration | CameraRetro |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CameraRetro.png) | ![illustration for CameraRetro](../../fontawesome-5/Solid/CameraRetro.Local.png) |




## CameraRetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CameraRetro
include('fontawesome-5/Solid/CameraRetro')

' renders the element
CameraRetro('CameraRetro', 'Camera Retro', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CameraRetro
include('fontawesome-5/Solid/CameraRetro')

' renders the element
CameraRetro('CameraRetro', 'Camera Retro', 'an optional tech label')
@enduml
```

