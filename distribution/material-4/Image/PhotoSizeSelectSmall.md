# PhotoSizeSelectSmall


```text
material-4/Image/PhotoSizeSelectSmall
```

```text
include('material-4/Image/PhotoSizeSelectSmall')
```



| Illustration | PhotoSizeSelectSmall |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PhotoSizeSelectSmall.png) | ![illustration for PhotoSizeSelectSmall](../../material-4/Image/PhotoSizeSelectSmall.Local.png) |




## PhotoSizeSelectSmall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhotoSizeSelectSmall
include('material-4/Image/PhotoSizeSelectSmall')

' renders the element
PhotoSizeSelectSmall('PhotoSizeSelectSmall', 'Photo Size Select Small', 'an optional tech label')
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

' loads the Item which embeds the element PhotoSizeSelectSmall
include('material-4/Image/PhotoSizeSelectSmall')

' renders the element
PhotoSizeSelectSmall('PhotoSizeSelectSmall', 'Photo Size Select Small', 'an optional tech label')
@enduml
```

