# XmarksLines


```text
fontawesome-6/Solid/XmarksLines
```

```text
include('fontawesome-6/Solid/XmarksLines')
```



| Illustration | XmarksLines |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/XmarksLines.png) | ![illustration for XmarksLines](../../fontawesome-6/Solid/XmarksLines.Local.png) |




## XmarksLines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element XmarksLines
include('fontawesome-6/Solid/XmarksLines')

' renders the element
XmarksLines('XmarksLines', 'Xmarks Lines', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element XmarksLines
include('fontawesome-6/Solid/XmarksLines')

' renders the element
XmarksLines('XmarksLines', 'Xmarks Lines', 'an optional tech label')
@enduml
```

