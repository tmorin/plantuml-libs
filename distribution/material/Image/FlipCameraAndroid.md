# FlipCameraAndroid


```text
material/Image/FlipCameraAndroid
```

```text
include('material/Image/FlipCameraAndroid')
```



| Illustration | FlipCameraAndroid |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/FlipCameraAndroid.png) | ![illustration for FlipCameraAndroid](../../material/Image/FlipCameraAndroid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlipCameraAndroidXs>`
- `<$FlipCameraAndroidSm>`
- `<$FlipCameraAndroidMd>`
- `<$FlipCameraAndroidLg>`





## FlipCameraAndroid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FlipCameraAndroid
include('material/Image/FlipCameraAndroid')

' renders the element
FlipCameraAndroid('FlipCameraAndroid', 'Flip Camera Android', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FlipCameraAndroid
include('material/Image/FlipCameraAndroid')

' renders the element
FlipCameraAndroid('FlipCameraAndroid', 'Flip Camera Android', 'an optional tech label', 'an optional description')
@enduml
```

