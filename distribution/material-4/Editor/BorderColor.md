# BorderColor


```text
material-4/Editor/BorderColor
```

```text
include('material-4/Editor/BorderColor')
```



| Illustration | BorderColor |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BorderColor.png) | ![illustration for BorderColor](../../material-4/Editor/BorderColor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderColorXs>`
- `<$BorderColorSm>`
- `<$BorderColorMd>`
- `<$BorderColorLg>`





## BorderColor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BorderColor
include('material-4/Editor/BorderColor')

' renders the element
BorderColor('BorderColor', 'Border Color', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderColor
include('material-4/Editor/BorderColor')

' renders the element
BorderColor('BorderColor', 'Border Color', 'an optional tech label', 'an optional description')
@enduml
```

