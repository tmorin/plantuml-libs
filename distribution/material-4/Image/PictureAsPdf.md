# PictureAsPdf


```text
material-4/Image/PictureAsPdf
```

```text
include('material-4/Image/PictureAsPdf')
```



| Illustration | PictureAsPdf |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PictureAsPdf.png) | ![illustration for PictureAsPdf](../../material-4/Image/PictureAsPdf.Local.png) |




## PictureAsPdf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PictureAsPdf
include('material-4/Image/PictureAsPdf')

' renders the element
PictureAsPdf('PictureAsPdf', 'Picture As Pdf', 'an optional tech label')
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

' loads the Item which embeds the element PictureAsPdf
include('material-4/Image/PictureAsPdf')

' renders the element
PictureAsPdf('PictureAsPdf', 'Picture As Pdf', 'an optional tech label')
@enduml
```

