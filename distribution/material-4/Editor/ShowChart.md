# ShowChart


```text
material-4/Editor/ShowChart
```

```text
include('material-4/Editor/ShowChart')
```



| Illustration | ShowChart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/ShowChart.png) | ![illustration for ShowChart](../../material-4/Editor/ShowChart.Local.png) |




## ShowChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ShowChart
include('material-4/Editor/ShowChart')

' renders the element
ShowChart('ShowChart', 'Show Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShowChart
include('material-4/Editor/ShowChart')

' renders the element
ShowChart('ShowChart', 'Show Chart', 'an optional tech label', 'an optional description')
@enduml
```

