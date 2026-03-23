# PieChart


```text
fontawesome/Solid/PieChart
```

```text
include('fontawesome/Solid/PieChart')
```



| Illustration | PieChart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PieChart.png) | ![illustration for PieChart](../../fontawesome/Solid/PieChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PieChartXs>`
- `<$PieChartSm>`
- `<$PieChartMd>`
- `<$PieChartLg>`





## PieChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PieChart
include('fontawesome/Solid/PieChart')

' renders the element
PieChart('PieChart', 'Pie Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PieChart
include('fontawesome/Solid/PieChart')

' renders the element
PieChart('PieChart', 'Pie Chart', 'an optional tech label', 'an optional description')
@enduml
```

