# Columns


```text
fontawesome/Solid/Columns
```

```text
include('fontawesome/Solid/Columns')
```



| Illustration | Columns |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Columns.png) | ![illustration for Columns](../../fontawesome/Solid/Columns.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ColumnsXs>`
- `<$ColumnsSm>`
- `<$ColumnsMd>`
- `<$ColumnsLg>`





## Columns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Columns
include('fontawesome/Solid/Columns')

' renders the element
Columns('Columns', 'Columns', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Columns
include('fontawesome/Solid/Columns')

' renders the element
Columns('Columns', 'Columns', 'an optional tech label', 'an optional description')
@enduml
```

