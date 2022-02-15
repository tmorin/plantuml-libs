# ChartGantt


```text
fontawesome-6/Solid/ChartGantt
```

```text
include('fontawesome-6/Solid/ChartGantt')
```



| Illustration | ChartGantt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChartGantt.png) | ![illustration for ChartGantt](../../fontawesome-6/Solid/ChartGantt.Local.png) |




## ChartGantt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChartGantt
include('fontawesome-6/Solid/ChartGantt')

' renders the element
ChartGantt('ChartGantt', 'Chart Gantt', 'an optional tech label')
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

' loads the Item which embeds the element ChartGantt
include('fontawesome-6/Solid/ChartGantt')

' renders the element
ChartGantt('ChartGantt', 'Chart Gantt', 'an optional tech label')
@enduml
```

