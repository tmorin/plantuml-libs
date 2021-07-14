# VerticalAlignBottom


```text
material-4/Editor/VerticalAlignBottom
```

```text
include('material-4/Editor/VerticalAlignBottom')
```



| Illustration | VerticalAlignBottom |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/VerticalAlignBottom.png) | ![illustration for VerticalAlignBottom](../../material-4/Editor/VerticalAlignBottom.Local.png) |




## VerticalAlignBottom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VerticalAlignBottom
include('material-4/Editor/VerticalAlignBottom')

' renders the element
VerticalAlignBottom('VerticalAlignBottom', 'Vertical Align Bottom', 'an optional tech label')
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

' loads the Item which embeds the element VerticalAlignBottom
include('material-4/Editor/VerticalAlignBottom')

' renders the element
VerticalAlignBottom('VerticalAlignBottom', 'Vertical Align Bottom', 'an optional tech label')
@enduml
```

