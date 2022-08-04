# BubbleChart


```text
material-4/Editor/BubbleChart
```

```text
include('material-4/Editor/BubbleChart')
```



| Illustration | BubbleChart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BubbleChart.png) | ![illustration for BubbleChart](../../material-4/Editor/BubbleChart.Local.png) |




## BubbleChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BubbleChart
include('material-4/Editor/BubbleChart')

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
include('material-4/bootstrap')

' loads the Item which embeds the element BubbleChart
include('material-4/Editor/BubbleChart')

' renders the element
BubbleChart('BubbleChart', 'Bubble Chart', 'an optional tech label', 'an optional description')
@enduml
```

