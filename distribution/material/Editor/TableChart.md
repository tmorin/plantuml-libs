# TableChart


```text
material/Editor/TableChart
```

```text
include('material/Editor/TableChart')
```



| Illustration | TableChart |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/TableChart.png) | ![illustration for TableChart](../../material/Editor/TableChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TableChartXs>`
- `<$TableChartSm>`
- `<$TableChartMd>`
- `<$TableChartLg>`





## TableChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TableChart
include('material/Editor/TableChart')

' renders the element
TableChart('TableChart', 'Table Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TableChart
include('material/Editor/TableChart')

' renders the element
TableChart('TableChart', 'Table Chart', 'an optional tech label', 'an optional description')
@enduml
```

