# TableView


```text
material/Action/TableView
```

```text
include('material/Action/TableView')
```



| Illustration | TableView |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/TableView.png) | ![illustration for TableView](../../material/Action/TableView.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TableViewXs>`
- `<$TableViewSm>`
- `<$TableViewMd>`
- `<$TableViewLg>`





## TableView

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TableView
include('material/Action/TableView')

' renders the element
TableView('TableView', 'Table View', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TableView
include('material/Action/TableView')

' renders the element
TableView('TableView', 'Table View', 'an optional tech label', 'an optional description')
@enduml
```

