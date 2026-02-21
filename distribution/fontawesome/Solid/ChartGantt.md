# ChartGantt


```text
fontawesome/Solid/ChartGantt
```

```text
include('fontawesome/Solid/ChartGantt')
```



| Illustration | ChartGantt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChartGantt.png) | ![illustration for ChartGantt](../../fontawesome/Solid/ChartGantt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChartGanttXs>`
- `<$ChartGanttSm>`
- `<$ChartGanttMd>`
- `<$ChartGanttLg>`





## ChartGantt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChartGantt
include('fontawesome/Solid/ChartGantt')

' renders the element
ChartGantt('ChartGantt', 'Chart Gantt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChartGantt
include('fontawesome/Solid/ChartGantt')

' renders the element
ChartGantt('ChartGantt', 'Chart Gantt', 'an optional tech label', 'an optional description')
@enduml
```

