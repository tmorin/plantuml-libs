# InsertChart


```text
material-4/Editor/InsertChart
```

```text
include('material-4/Editor/InsertChart')
```



| Illustration | InsertChart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/InsertChart.png) | ![illustration for InsertChart](../../material-4/Editor/InsertChart.Local.png) |




## InsertChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element InsertChart
include('material-4/Editor/InsertChart')

' renders the element
InsertChart('InsertChart', 'Insert Chart', 'an optional tech label')
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

' loads the Item which embeds the element InsertChart
include('material-4/Editor/InsertChart')

' renders the element
InsertChart('InsertChart', 'Insert Chart', 'an optional tech label')
@enduml
```

