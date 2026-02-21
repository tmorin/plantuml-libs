# FlipCameraIos


```text
material/Image/FlipCameraIos
```

```text
include('material/Image/FlipCameraIos')
```



| Illustration | FlipCameraIos |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/FlipCameraIos.png) | ![illustration for FlipCameraIos](../../material/Image/FlipCameraIos.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element FlipCameraIos
include('material/Image/FlipCameraIos')

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
include('material/bootstrap')

' loads the Item which embeds the element FlipCameraIos
include('material/Image/FlipCameraIos')

' renders the element
FlipCameraIos('FlipCameraIos', 'Flip Camera Ios', 'an optional tech label', 'an optional description')
@enduml
```

