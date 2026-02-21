# ChartColumn


```text
fontawesome/Solid/ChartColumn
```

```text
include('fontawesome/Solid/ChartColumn')
```



| Illustration | ChartColumn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChartColumn.png) | ![illustration for ChartColumn](../../fontawesome/Solid/ChartColumn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChartColumnXs>`
- `<$ChartColumnSm>`
- `<$ChartColumnMd>`
- `<$ChartColumnLg>`





## ChartColumn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChartColumn
include('fontawesome/Solid/ChartColumn')

' renders the element
ChartColumn('ChartColumn', 'Chart Column', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChartColumn
include('fontawesome/Solid/ChartColumn')

' renders the element
ChartColumn('ChartColumn', 'Chart Column', 'an optional tech label', 'an optional description')
@enduml
```

