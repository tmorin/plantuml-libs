# CameraRetro


```text
fontawesome/Solid/CameraRetro
```

```text
include('fontawesome/Solid/CameraRetro')
```



| Illustration | CameraRetro |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CameraRetro.png) | ![illustration for CameraRetro](../../fontawesome/Solid/CameraRetro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CameraRetroXs>`
- `<$CameraRetroSm>`
- `<$CameraRetroMd>`
- `<$CameraRetroLg>`





## CameraRetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CameraRetro
include('fontawesome/Solid/CameraRetro')

' renders the element
CameraRetro('CameraRetro', 'Camera Retro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CameraRetro
include('fontawesome/Solid/CameraRetro')

' renders the element
CameraRetro('CameraRetro', 'Camera Retro', 'an optional tech label', 'an optional description')
@enduml
```

