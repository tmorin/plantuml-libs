# PanoramaWideAngleSelect


```text
material-4/Image/PanoramaWideAngleSelect
```

```text
include('material-4/Image/PanoramaWideAngleSelect')
```



| Illustration | PanoramaWideAngleSelect |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PanoramaWideAngleSelect.png) | ![illustration for PanoramaWideAngleSelect](../../material-4/Image/PanoramaWideAngleSelect.Local.png) |




## PanoramaWideAngleSelect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PanoramaWideAngleSelect
include('material-4/Image/PanoramaWideAngleSelect')

' renders the element
PanoramaWideAngleSelect('PanoramaWideAngleSelect', 'Panorama Wide Angle Select', 'an optional tech label')
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

' loads the Item which embeds the element PanoramaWideAngleSelect
include('material-4/Image/PanoramaWideAngleSelect')

' renders the element
PanoramaWideAngleSelect('PanoramaWideAngleSelect', 'Panorama Wide Angle Select', 'an optional tech label')
@enduml
```

