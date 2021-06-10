# ChartPie


```text
fontawesome-5/Solid/ChartPie
```

```text
include('fontawesome-5/Solid/ChartPie')
```



| Illustration | ChartPie |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChartPie.png) | ![illustration for ChartPie](../../fontawesome-5/Solid/ChartPie.Local.png) |




## ChartPie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChartPie
include('fontawesome-5/Solid/ChartPie')

' renders the element
ChartPie('ChartPie', 'Chart Pie', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChartPie
include('fontawesome-5/Solid/ChartPie')

' renders the element
ChartPie('ChartPie', 'Chart Pie', 'an optional tech label')
@enduml
```

