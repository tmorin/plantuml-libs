# BorderHorizontal


```text
material/Editor/BorderHorizontal
```

```text
include('material/Editor/BorderHorizontal')
```



| Illustration | BorderHorizontal |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/BorderHorizontal.png) | ![illustration for BorderHorizontal](../../material/Editor/BorderHorizontal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderHorizontalXs>`
- `<$BorderHorizontalSm>`
- `<$BorderHorizontalMd>`
- `<$BorderHorizontalLg>`





## BorderHorizontal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BorderHorizontal
include('material/Editor/BorderHorizontal')

' renders the element
BorderHorizontal('BorderHorizontal', 'Border Horizontal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderHorizontal
include('material/Editor/BorderHorizontal')

' renders the element
BorderHorizontal('BorderHorizontal', 'Border Horizontal', 'an optional tech label', 'an optional description')
@enduml
```

