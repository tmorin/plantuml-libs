# BarChart


```text
material-4/Editor/BarChart
```

```text
include('material-4/Editor/BarChart')
```



| Illustration | BarChart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BarChart.png) | ![illustration for BarChart](../../material-4/Editor/BarChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BarChartXs>`
- `<$BarChartSm>`
- `<$BarChartMd>`
- `<$BarChartLg>`





## BarChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BarChart
include('material-4/Editor/BarChart')

' renders the element
BarChart('BarChart', 'Bar Chart', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element BarChart
include('material-4/Editor/BarChart')

' renders the element
BarChart('BarChart', 'Bar Chart', 'an optional tech label', 'an optional description')
@enduml
```

