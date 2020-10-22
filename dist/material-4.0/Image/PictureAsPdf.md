# Picture As Pdf

```text
material-4.0/Image/PictureAsPdf
```

```text
include('material-4.0/Image/PictureAsPdf')
```

|icon|element|
|---|---|
|![](PictureAsPdf.png)|![](PictureAsPdf.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the PictureAsPdf element
include('material-4.0/Image/PictureAsPdf')
PictureAsPdf('picture_as_pdf', 'Picture As Pdf', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the PictureAsPdf element
include('material-4.0/Image/PictureAsPdf')
PictureAsPdf('picture_as_pdf', 'Picture As Pdf', 'an optional tech field')
@enduml
```

