# StackedLineChart


```text
material/Editor/StackedLineChart
```

```text
include('material/Editor/StackedLineChart')
```



| Illustration | StackedLineChart |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/StackedLineChart.png) | ![illustration for StackedLineChart](../../material/Editor/StackedLineChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StackedLineChartXs>`
- `<$StackedLineChartSm>`
- `<$StackedLineChartMd>`
- `<$StackedLineChartLg>`





## StackedLineChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element StackedLineChart
include('material/Editor/StackedLineChart')

' renders the element
StackedLineChart('StackedLineChart', 'Stacked Line Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StackedLineChart
include('material/Editor/StackedLineChart')

' renders the element
StackedLineChart('StackedLineChart', 'Stacked Line Chart', 'an optional tech label', 'an optional description')
@enduml
```

