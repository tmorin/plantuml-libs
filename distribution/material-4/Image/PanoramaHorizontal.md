# PanoramaHorizontal


```text
material-4/Image/PanoramaHorizontal
```

```text
include('material-4/Image/PanoramaHorizontal')
```



| Illustration | PanoramaHorizontal |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PanoramaHorizontal.png) | ![illustration for PanoramaHorizontal](../../material-4/Image/PanoramaHorizontal.Local.png) |




## PanoramaHorizontal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PanoramaHorizontal
include('material-4/Image/PanoramaHorizontal')

' renders the element
PanoramaHorizontal('PanoramaHorizontal', 'Panorama Horizontal', 'an optional tech label')
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

' loads the Item which embeds the element PanoramaHorizontal
include('material-4/Image/PanoramaHorizontal')

' renders the element
PanoramaHorizontal('PanoramaHorizontal', 'Panorama Horizontal', 'an optional tech label')
@enduml
```

