# CameraRear


```text
material-4/Image/CameraRear
```

```text
include('material-4/Image/CameraRear')
```



| Illustration | CameraRear |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/CameraRear.png) | ![illustration for CameraRear](../../material-4/Image/CameraRear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CameraRearXs>`
- `<$CameraRearSm>`
- `<$CameraRearMd>`
- `<$CameraRearLg>`





## CameraRear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CameraRear
include('material-4/Image/CameraRear')

' renders the element
CameraRear('CameraRear', 'Camera Rear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CameraRear
include('material-4/Image/CameraRear')

' renders the element
CameraRear('CameraRear', 'Camera Rear', 'an optional tech label', 'an optional description')
@enduml
```

