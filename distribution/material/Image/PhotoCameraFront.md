# PhotoCameraFront


```text
material/Image/PhotoCameraFront
```

```text
include('material/Image/PhotoCameraFront')
```



| Illustration | PhotoCameraFront |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/PhotoCameraFront.png) | ![illustration for PhotoCameraFront](../../material/Image/PhotoCameraFront.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhotoCameraFrontXs>`
- `<$PhotoCameraFrontSm>`
- `<$PhotoCameraFrontMd>`
- `<$PhotoCameraFrontLg>`





## PhotoCameraFront

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhotoCameraFront
include('material/Image/PhotoCameraFront')

' renders the element
PhotoCameraFront('PhotoCameraFront', 'Photo Camera Front', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhotoCameraFront
include('material/Image/PhotoCameraFront')

' renders the element
PhotoCameraFront('PhotoCameraFront', 'Photo Camera Front', 'an optional tech label', 'an optional description')
@enduml
```

