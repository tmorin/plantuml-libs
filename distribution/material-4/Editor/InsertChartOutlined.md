# InsertChartOutlined


```text
material-4/Editor/InsertChartOutlined
```

```text
include('material-4/Editor/InsertChartOutlined')
```



| Illustration | InsertChartOutlined |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/InsertChartOutlined.png) | ![illustration for InsertChartOutlined](../../material-4/Editor/InsertChartOutlined.Local.png) |




## InsertChartOutlined

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element InsertChartOutlined
include('material-4/Editor/InsertChartOutlined')

' renders the element
InsertChartOutlined('InsertChartOutlined', 'Insert Chart Outlined', 'an optional tech label')
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

' loads the Item which embeds the element InsertChartOutlined
include('material-4/Editor/InsertChartOutlined')

' renders the element
InsertChartOutlined('InsertChartOutlined', 'Insert Chart Outlined', 'an optional tech label')
@enduml
```

