# SwitchCamera


```text
material/Image/SwitchCamera
```

```text
include('material/Image/SwitchCamera')
```



| Illustration | SwitchCamera |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/SwitchCamera.png) | ![illustration for SwitchCamera](../../material/Image/SwitchCamera.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwitchCameraXs>`
- `<$SwitchCameraSm>`
- `<$SwitchCameraMd>`
- `<$SwitchCameraLg>`





## SwitchCamera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SwitchCamera
include('material/Image/SwitchCamera')

' renders the element
SwitchCamera('SwitchCamera', 'Switch Camera', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element SwitchCamera
include('material/Image/SwitchCamera')

' renders the element
SwitchCamera('SwitchCamera', 'Switch Camera', 'an optional tech label', 'an optional description')
@enduml
```

