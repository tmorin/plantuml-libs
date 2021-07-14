# PanoramaPhotosphere


```text
material-4/Image/PanoramaPhotosphere
```

```text
include('material-4/Image/PanoramaPhotosphere')
```



| Illustration | PanoramaPhotosphere |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PanoramaPhotosphere.png) | ![illustration for PanoramaPhotosphere](../../material-4/Image/PanoramaPhotosphere.Local.png) |




## PanoramaPhotosphere

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PanoramaPhotosphere
include('material-4/Image/PanoramaPhotosphere')

' renders the element
PanoramaPhotosphere('PanoramaPhotosphere', 'Panorama Photosphere', 'an optional tech label')
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

' loads the Item which embeds the element PanoramaPhotosphere
include('material-4/Image/PanoramaPhotosphere')

' renders the element
PanoramaPhotosphere('PanoramaPhotosphere', 'Panorama Photosphere', 'an optional tech label')
@enduml
```

