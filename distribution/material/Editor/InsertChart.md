# InsertChart


```text
material/Editor/InsertChart
```

```text
include('material/Editor/InsertChart')
```



| Illustration | InsertChart |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/InsertChart.png) | ![illustration for InsertChart](../../material/Editor/InsertChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InsertChartXs>`
- `<$InsertChartSm>`
- `<$InsertChartMd>`
- `<$InsertChartLg>`





## InsertChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element InsertChart
include('material/Editor/InsertChart')

' renders the element
InsertChart('InsertChart', 'Insert Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InsertChart
include('material/Editor/InsertChart')

' renders the element
InsertChart('InsertChart', 'Insert Chart', 'an optional tech label', 'an optional description')
@enduml
```

