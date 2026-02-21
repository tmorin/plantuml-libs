# LinkedCamera


```text
material/Image/LinkedCamera
```

```text
include('material/Image/LinkedCamera')
```



| Illustration | LinkedCamera |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/LinkedCamera.png) | ![illustration for LinkedCamera](../../material/Image/LinkedCamera.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinkedCameraXs>`
- `<$LinkedCameraSm>`
- `<$LinkedCameraMd>`
- `<$LinkedCameraLg>`





## LinkedCamera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LinkedCamera
include('material/Image/LinkedCamera')

' renders the element
LinkedCamera('LinkedCamera', 'Linked Camera', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LinkedCamera
include('material/Image/LinkedCamera')

' renders the element
LinkedCamera('LinkedCamera', 'Linked Camera', 'an optional tech label', 'an optional description')
@enduml
```

