# TableView


```text
material-4/Action/TableView
```

```text
include('material-4/Action/TableView')
```



| Illustration | TableView |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/TableView.png) | ![illustration for TableView](../../material-4/Action/TableView.Local.png) |




## TableView

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TableView
include('material-4/Action/TableView')

' renders the element
TableView('TableView', 'Table View', 'an optional tech label')
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

' loads the Item which embeds the element TableView
include('material-4/Action/TableView')

' renders the element
TableView('TableView', 'Table View', 'an optional tech label')
@enduml
```

