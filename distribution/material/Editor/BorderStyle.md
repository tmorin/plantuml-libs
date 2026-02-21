# BorderStyle


```text
material/Editor/BorderStyle
```

```text
include('material/Editor/BorderStyle')
```



| Illustration | BorderStyle |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/BorderStyle.png) | ![illustration for BorderStyle](../../material/Editor/BorderStyle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderStyleXs>`
- `<$BorderStyleSm>`
- `<$BorderStyleMd>`
- `<$BorderStyleLg>`





## BorderStyle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BorderStyle
include('material/Editor/BorderStyle')

' renders the element
BorderStyle('BorderStyle', 'Border Style', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderStyle
include('material/Editor/BorderStyle')

' renders the element
BorderStyle('BorderStyle', 'Border Style', 'an optional tech label', 'an optional description')
@enduml
```

