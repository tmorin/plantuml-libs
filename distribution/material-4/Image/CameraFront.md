# CameraFront


```text
material-4/Image/CameraFront
```

```text
include('material-4/Image/CameraFront')
```



| Illustration | CameraFront |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/CameraFront.png) | ![illustration for CameraFront](../../material-4/Image/CameraFront.Local.png) |




## CameraFront

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CameraFront
include('material-4/Image/CameraFront')

' renders the element
CameraFront('CameraFront', 'Camera Front', 'an optional tech label')
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

' loads the Item which embeds the element CameraFront
include('material-4/Image/CameraFront')

' renders the element
CameraFront('CameraFront', 'Camera Front', 'an optional tech label')
@enduml
```

