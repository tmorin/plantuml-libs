# AddChart


```text
material-4/Editor/AddChart
```

```text
include('material-4/Editor/AddChart')
```



| Illustration | AddChart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/AddChart.png) | ![illustration for AddChart](../../material-4/Editor/AddChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddChartXs>`
- `<$AddChartSm>`
- `<$AddChartMd>`
- `<$AddChartLg>`





## AddChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddChart
include('material-4/Editor/AddChart')

' renders the element
AddChart('AddChart', 'Add Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddChart
include('material-4/Editor/AddChart')

' renders the element
AddChart('AddChart', 'Add Chart', 'an optional tech label', 'an optional description')
@enduml
```

