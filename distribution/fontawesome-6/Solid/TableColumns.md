# TableColumns


```text
fontawesome-6/Solid/TableColumns
```

```text
include('fontawesome-6/Solid/TableColumns')
```



| Illustration | TableColumns |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TableColumns.png) | ![illustration for TableColumns](../../fontawesome-6/Solid/TableColumns.Local.png) |




## TableColumns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TableColumns
include('fontawesome-6/Solid/TableColumns')

' renders the element
TableColumns('TableColumns', 'Table Columns', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TableColumns
include('fontawesome-6/Solid/TableColumns')

' renders the element
TableColumns('TableColumns', 'Table Columns', 'an optional tech label', 'an optional description')
@enduml
```

