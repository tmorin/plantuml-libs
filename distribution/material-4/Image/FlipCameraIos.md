# FlipCameraIos


```text
material-4/Image/FlipCameraIos
```

```text
include('material-4/Image/FlipCameraIos')
```



| Illustration | FlipCameraIos |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FlipCameraIos.png) | ![illustration for FlipCameraIos](../../material-4/Image/FlipCameraIos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlipCameraIosXs>`
- `<$FlipCameraIosSm>`
- `<$FlipCameraIosMd>`
- `<$FlipCameraIosLg>`





## FlipCameraIos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FlipCameraIos
include('material-4/Image/FlipCameraIos')

' renders the element
FlipCameraIos('FlipCameraIos', 'Flip Camera Ios', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FlipCameraIos
include('material-4/Image/FlipCameraIos')

' renders the element
FlipCameraIos('FlipCameraIos', 'Flip Camera Ios', 'an optional tech label', 'an optional description')
@enduml
```

