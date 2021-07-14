# PanoramaHorizontalSelect


```text
material-4/Image/PanoramaHorizontalSelect
```

```text
include('material-4/Image/PanoramaHorizontalSelect')
```



| Illustration | PanoramaHorizontalSelect |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PanoramaHorizontalSelect.png) | ![illustration for PanoramaHorizontalSelect](../../material-4/Image/PanoramaHorizontalSelect.Local.png) |




## PanoramaHorizontalSelect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PanoramaHorizontalSelect
include('material-4/Image/PanoramaHorizontalSelect')

' renders the element
PanoramaHorizontalSelect('PanoramaHorizontalSelect', 'Panorama Horizontal Select', 'an optional tech label')
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

' loads the Item which embeds the element PanoramaHorizontalSelect
include('material-4/Image/PanoramaHorizontalSelect')

' renders the element
PanoramaHorizontalSelect('PanoramaHorizontalSelect', 'Panorama Horizontal Select', 'an optional tech label')
@enduml
```

