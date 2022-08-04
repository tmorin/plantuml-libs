# PhotoCameraBack


```text
material-4/Image/PhotoCameraBack
```

```text
include('material-4/Image/PhotoCameraBack')
```



| Illustration | PhotoCameraBack |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PhotoCameraBack.png) | ![illustration for PhotoCameraBack](../../material-4/Image/PhotoCameraBack.Local.png) |




## PhotoCameraBack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhotoCameraBack
include('material-4/Image/PhotoCameraBack')

' renders the element
PhotoCameraBack('PhotoCameraBack', 'Photo Camera Back', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhotoCameraBack
include('material-4/Image/PhotoCameraBack')

' renders the element
PhotoCameraBack('PhotoCameraBack', 'Photo Camera Back', 'an optional tech label', 'an optional description')
@enduml
```

