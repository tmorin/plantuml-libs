# PhotoSizeSelectActual


```text
material-4/Image/PhotoSizeSelectActual
```

```text
include('material-4/Image/PhotoSizeSelectActual')
```



| Illustration | PhotoSizeSelectActual |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PhotoSizeSelectActual.png) | ![illustration for PhotoSizeSelectActual](../../material-4/Image/PhotoSizeSelectActual.Local.png) |




## PhotoSizeSelectActual

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhotoSizeSelectActual
include('material-4/Image/PhotoSizeSelectActual')

' renders the element
PhotoSizeSelectActual('PhotoSizeSelectActual', 'Photo Size Select Actual', 'an optional tech label')
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

' loads the Item which embeds the element PhotoSizeSelectActual
include('material-4/Image/PhotoSizeSelectActual')

' renders the element
PhotoSizeSelectActual('PhotoSizeSelectActual', 'Photo Size Select Actual', 'an optional tech label')
@enduml
```

