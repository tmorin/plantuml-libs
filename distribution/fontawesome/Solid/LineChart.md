# LineChart


```text
fontawesome/Solid/LineChart
```

```text
include('fontawesome/Solid/LineChart')
```



| Illustration | LineChart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LineChart.png) | ![illustration for LineChart](../../fontawesome/Solid/LineChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LineChartXs>`
- `<$LineChartSm>`
- `<$LineChartMd>`
- `<$LineChartLg>`





## LineChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LineChart
include('fontawesome/Solid/LineChart')

' renders the element
LineChart('LineChart', 'Line Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LineChart
include('fontawesome/Solid/LineChart')

' renders the element
LineChart('LineChart', 'Line Chart', 'an optional tech label', 'an optional description')
@enduml
```

