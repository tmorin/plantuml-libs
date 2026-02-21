# XmarksLines


```text
fontawesome/Solid/XmarksLines
```

```text
include('fontawesome/Solid/XmarksLines')
```



| Illustration | XmarksLines |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/XmarksLines.png) | ![illustration for XmarksLines](../../fontawesome/Solid/XmarksLines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XmarksLinesXs>`
- `<$XmarksLinesSm>`
- `<$XmarksLinesMd>`
- `<$XmarksLinesLg>`





## XmarksLines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element XmarksLines
include('fontawesome/Solid/XmarksLines')

' renders the element
XmarksLines('XmarksLines', 'Xmarks Lines', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element XmarksLines
include('fontawesome/Solid/XmarksLines')

' renders the element
XmarksLines('XmarksLines', 'Xmarks Lines', 'an optional tech label', 'an optional description')
@enduml
```

