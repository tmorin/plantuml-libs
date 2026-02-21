# PictureAsPdf


```text
material/Image/PictureAsPdf
```

```text
include('material/Image/PictureAsPdf')
```



| Illustration | PictureAsPdf |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/PictureAsPdf.png) | ![illustration for PictureAsPdf](../../material/Image/PictureAsPdf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PictureAsPdfXs>`
- `<$PictureAsPdfSm>`
- `<$PictureAsPdfMd>`
- `<$PictureAsPdfLg>`





## PictureAsPdf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PictureAsPdf
include('material/Image/PictureAsPdf')

' renders the element
PictureAsPdf('PictureAsPdf', 'Picture As Pdf', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element PictureAsPdf
include('material/Image/PictureAsPdf')

' renders the element
PictureAsPdf('PictureAsPdf', 'Picture As Pdf', 'an optional tech label', 'an optional description')
@enduml
```

