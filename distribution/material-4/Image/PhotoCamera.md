# PhotoCamera


```text
material-4/Image/PhotoCamera
```

```text
include('material-4/Image/PhotoCamera')
```



| Illustration | PhotoCamera |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PhotoCamera.png) | ![illustration for PhotoCamera](../../material-4/Image/PhotoCamera.Local.png) |




## PhotoCamera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhotoCamera
include('material-4/Image/PhotoCamera')

' renders the element
PhotoCamera('PhotoCamera', 'Photo Camera', 'an optional tech label')
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

' loads the Item which embeds the element PhotoCamera
include('material-4/Image/PhotoCamera')

' renders the element
PhotoCamera('PhotoCamera', 'Photo Camera', 'an optional tech label')
@enduml
```

