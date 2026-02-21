# BubbleChart


```text
material/Editor/BubbleChart
```

```text
include('material/Editor/BubbleChart')
```



| Illustration | BubbleChart |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/BubbleChart.png) | ![illustration for BubbleChart](../../material/Editor/BubbleChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BubbleChartXs>`
- `<$BubbleChartSm>`
- `<$BubbleChartMd>`
- `<$BubbleChartLg>`





## BubbleChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BubbleChart
include('material/Editor/BubbleChart')

' renders the element
BubbleChart('BubbleChart', 'Bubble Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BubbleChart
include('material/Editor/BubbleChart')

' renders the element
BubbleChart('BubbleChart', 'Bubble Chart', 'an optional tech label', 'an optional description')
@enduml
```

