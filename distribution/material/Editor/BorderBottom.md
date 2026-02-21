# BorderBottom


```text
material/Editor/BorderBottom
```

```text
include('material/Editor/BorderBottom')
```



| Illustration | BorderBottom |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/BorderBottom.png) | ![illustration for BorderBottom](../../material/Editor/BorderBottom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderBottomXs>`
- `<$BorderBottomSm>`
- `<$BorderBottomMd>`
- `<$BorderBottomLg>`





## BorderBottom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BorderBottom
include('material/Editor/BorderBottom')

' renders the element
BorderBottom('BorderBottom', 'Border Bottom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderBottom
include('material/Editor/BorderBottom')

' renders the element
BorderBottom('BorderBottom', 'Border Bottom', 'an optional tech label', 'an optional description')
@enduml
```

