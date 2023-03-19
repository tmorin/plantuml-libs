# PieChartOutlined


```text
material-4/Editor/PieChartOutlined
```

```text
include('material-4/Editor/PieChartOutlined')
```



| Illustration | PieChartOutlined |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/PieChartOutlined.png) | ![illustration for PieChartOutlined](../../material-4/Editor/PieChartOutlined.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PieChartOutlinedXs>`
- `<$PieChartOutlinedSm>`
- `<$PieChartOutlinedMd>`
- `<$PieChartOutlinedLg>`





## PieChartOutlined

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PieChartOutlined
include('material-4/Editor/PieChartOutlined')

' renders the element
PieChartOutlined('PieChartOutlined', 'Pie Chart Outlined', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PieChartOutlined
include('material-4/Editor/PieChartOutlined')

' renders the element
PieChartOutlined('PieChartOutlined', 'Pie Chart Outlined', 'an optional tech label', 'an optional description')
@enduml
```

