# GridView


```text
material/File/GridView
```

```text
include('material/File/GridView')
```



| Illustration | GridView |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/GridView.png) | ![illustration for GridView](../../material/File/GridView.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GridViewXs>`
- `<$GridViewSm>`
- `<$GridViewMd>`
- `<$GridViewLg>`





## GridView

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element GridView
include('material/File/GridView')

' renders the element
GridView('GridView', 'Grid View', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GridView
include('material/File/GridView')

' renders the element
GridView('GridView', 'Grid View', 'an optional tech label', 'an optional description')
@enduml
```

