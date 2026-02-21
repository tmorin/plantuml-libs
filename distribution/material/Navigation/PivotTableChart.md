# PivotTableChart


```text
material/Navigation/PivotTableChart
```

```text
include('material/Navigation/PivotTableChart')
```



| Illustration | PivotTableChart |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/PivotTableChart.png) | ![illustration for PivotTableChart](../../material/Navigation/PivotTableChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PivotTableChartXs>`
- `<$PivotTableChartSm>`
- `<$PivotTableChartMd>`
- `<$PivotTableChartLg>`





## PivotTableChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PivotTableChart
include('material/Navigation/PivotTableChart')

' renders the element
PivotTableChart('PivotTableChart', 'Pivot Table Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PivotTableChart
include('material/Navigation/PivotTableChart')

' renders the element
PivotTableChart('PivotTableChart', 'Pivot Table Chart', 'an optional tech label', 'an optional description')
@enduml
```

