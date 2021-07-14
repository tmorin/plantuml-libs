# PanoramaWideAngle


```text
material-4/Image/PanoramaWideAngle
```

```text
include('material-4/Image/PanoramaWideAngle')
```



| Illustration | PanoramaWideAngle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PanoramaWideAngle.png) | ![illustration for PanoramaWideAngle](../../material-4/Image/PanoramaWideAngle.Local.png) |




## PanoramaWideAngle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PanoramaWideAngle
include('material-4/Image/PanoramaWideAngle')

' renders the element
PanoramaWideAngle('PanoramaWideAngle', 'Panorama Wide Angle', 'an optional tech label')
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

' loads the Item which embeds the element PanoramaWideAngle
include('material-4/Image/PanoramaWideAngle')

' renders the element
PanoramaWideAngle('PanoramaWideAngle', 'Panorama Wide Angle', 'an optional tech label')
@enduml
```

