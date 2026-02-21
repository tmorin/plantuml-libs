# VerticalAlignBottom


```text
material/Editor/VerticalAlignBottom
```

```text
include('material/Editor/VerticalAlignBottom')
```



| Illustration | VerticalAlignBottom |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/VerticalAlignBottom.png) | ![illustration for VerticalAlignBottom](../../material/Editor/VerticalAlignBottom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VerticalAlignBottomXs>`
- `<$VerticalAlignBottomSm>`
- `<$VerticalAlignBottomMd>`
- `<$VerticalAlignBottomLg>`





## VerticalAlignBottom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element VerticalAlignBottom
include('material/Editor/VerticalAlignBottom')

' renders the element
VerticalAlignBottom('VerticalAlignBottom', 'Vertical Align Bottom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VerticalAlignBottom
include('material/Editor/VerticalAlignBottom')

' renders the element
VerticalAlignBottom('VerticalAlignBottom', 'Vertical Align Bottom', 'an optional tech label', 'an optional description')
@enduml
```

