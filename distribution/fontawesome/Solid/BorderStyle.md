# BorderStyle


```text
fontawesome/Solid/BorderStyle
```

```text
include('fontawesome/Solid/BorderStyle')
```



| Illustration | BorderStyle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BorderStyle.png) | ![illustration for BorderStyle](../../fontawesome/Solid/BorderStyle.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BorderStyle
include('fontawesome/Solid/BorderStyle')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BorderStyle
include('fontawesome/Solid/BorderStyle')

' renders the element
BorderStyle('BorderStyle', 'Border Style', 'an optional tech label', 'an optional description')
@enduml
```

