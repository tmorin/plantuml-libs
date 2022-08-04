# WaterfallChart


```text
material-4/Navigation/WaterfallChart
```

```text
include('material-4/Navigation/WaterfallChart')
```



| Illustration | WaterfallChart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/WaterfallChart.png) | ![illustration for WaterfallChart](../../material-4/Navigation/WaterfallChart.Local.png) |




## WaterfallChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WaterfallChart
include('material-4/Navigation/WaterfallChart')

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
include('material-4/bootstrap')

' loads the Item which embeds the element WaterfallChart
include('material-4/Navigation/WaterfallChart')

' renders the element
WaterfallChart('WaterfallChart', 'Waterfall Chart', 'an optional tech label', 'an optional description')
@enduml
```

