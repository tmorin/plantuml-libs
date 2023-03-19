# ChartColumn


```text
fontawesome-6/Solid/ChartColumn
```

```text
include('fontawesome-6/Solid/ChartColumn')
```



| Illustration | ChartColumn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChartColumn.png) | ![illustration for ChartColumn](../../fontawesome-6/Solid/ChartColumn.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChartColumn
include('fontawesome-6/Solid/ChartColumn')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChartColumn
include('fontawesome-6/Solid/ChartColumn')

' renders the element
ChartColumn('ChartColumn', 'Chart Column', 'an optional tech label', 'an optional description')
@enduml
```

