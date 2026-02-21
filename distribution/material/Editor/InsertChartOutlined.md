# InsertChartOutlined


```text
material/Editor/InsertChartOutlined
```

```text
include('material/Editor/InsertChartOutlined')
```



| Illustration | InsertChartOutlined |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/InsertChartOutlined.png) | ![illustration for InsertChartOutlined](../../material/Editor/InsertChartOutlined.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InsertChartOutlinedXs>`
- `<$InsertChartOutlinedSm>`
- `<$InsertChartOutlinedMd>`
- `<$InsertChartOutlinedLg>`





## InsertChartOutlined

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element InsertChartOutlined
include('material/Editor/InsertChartOutlined')

' renders the element
InsertChartOutlined('InsertChartOutlined', 'Insert Chart Outlined', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InsertChartOutlined
include('material/Editor/InsertChartOutlined')

' renders the element
InsertChartOutlined('InsertChartOutlined', 'Insert Chart Outlined', 'an optional tech label', 'an optional description')
@enduml
```

