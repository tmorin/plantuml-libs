# CameraFront


```text
material/Image/CameraFront
```

```text
include('material/Image/CameraFront')
```



| Illustration | CameraFront |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/CameraFront.png) | ![illustration for CameraFront](../../material/Image/CameraFront.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CameraFrontXs>`
- `<$CameraFrontSm>`
- `<$CameraFrontMd>`
- `<$CameraFrontLg>`





## CameraFront

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CameraFront
include('material/Image/CameraFront')

' renders the element
CameraFront('CameraFront', 'Camera Front', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CameraFront
include('material/Image/CameraFront')

' renders the element
CameraFront('CameraFront', 'Camera Front', 'an optional tech label', 'an optional description')
@enduml
```

