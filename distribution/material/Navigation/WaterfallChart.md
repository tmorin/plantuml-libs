# WaterfallChart


```text
material/Navigation/WaterfallChart
```

```text
include('material/Navigation/WaterfallChart')
```



| Illustration | WaterfallChart |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/WaterfallChart.png) | ![illustration for WaterfallChart](../../material/Navigation/WaterfallChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WaterfallChartXs>`
- `<$WaterfallChartSm>`
- `<$WaterfallChartMd>`
- `<$WaterfallChartLg>`





## WaterfallChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WaterfallChart
include('material/Navigation/WaterfallChart')

' renders the element
WaterfallChart('WaterfallChart', 'Waterfall Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WaterfallChart
include('material/Navigation/WaterfallChart')

' renders the element
WaterfallChart('WaterfallChart', 'Waterfall Chart', 'an optional tech label', 'an optional description')
@enduml
```

