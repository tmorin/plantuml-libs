# SwitchCamera


```text
material-4/Image/SwitchCamera
```

```text
include('material-4/Image/SwitchCamera')
```



| Illustration | SwitchCamera |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/SwitchCamera.png) | ![illustration for SwitchCamera](../../material-4/Image/SwitchCamera.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element SwitchCamera
include('material-4/Image/SwitchCamera')

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
include('material-4/bootstrap')

' loads the Item which embeds the element SwitchCamera
include('material-4/Image/SwitchCamera')

' renders the element
SwitchCamera('SwitchCamera', 'Switch Camera', 'an optional tech label', 'an optional description')
@enduml
```

