# StackedLineChart


```text
material-4/Editor/StackedLineChart
```

```text
include('material-4/Editor/StackedLineChart')
```



| Illustration | StackedLineChart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/StackedLineChart.png) | ![illustration for StackedLineChart](../../material-4/Editor/StackedLineChart.Local.png) |




## StackedLineChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StackedLineChart
include('material-4/Editor/StackedLineChart')

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
include('material-4/bootstrap')

' loads the Item which embeds the element StackedLineChart
include('material-4/Editor/StackedLineChart')

' renders the element
StackedLineChart('StackedLineChart', 'Stacked Line Chart', 'an optional tech label', 'an optional description')
@enduml
```

