# ViewColumn


```text
material-4/Action/ViewColumn
```

```text
include('material-4/Action/ViewColumn')
```



| Illustration | ViewColumn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ViewColumn.png) | ![illustration for ViewColumn](../../material-4/Action/ViewColumn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViewColumnXs>`
- `<$ViewColumnSm>`
- `<$ViewColumnMd>`
- `<$ViewColumnLg>`





## ViewColumn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewColumn
include('material-4/Action/ViewColumn')

' renders the element
ViewColumn('ViewColumn', 'View Column', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ViewColumn
include('material-4/Action/ViewColumn')

' renders the element
ViewColumn('ViewColumn', 'View Column', 'an optional tech label', 'an optional description')
@enduml
```

