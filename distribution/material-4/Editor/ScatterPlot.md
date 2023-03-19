# ScatterPlot


```text
material-4/Editor/ScatterPlot
```

```text
include('material-4/Editor/ScatterPlot')
```



| Illustration | ScatterPlot |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/ScatterPlot.png) | ![illustration for ScatterPlot](../../material-4/Editor/ScatterPlot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScatterPlotXs>`
- `<$ScatterPlotSm>`
- `<$ScatterPlotMd>`
- `<$ScatterPlotLg>`





## ScatterPlot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ScatterPlot
include('material-4/Editor/ScatterPlot')

' renders the element
ScatterPlot('ScatterPlot', 'Scatter Plot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ScatterPlot
include('material-4/Editor/ScatterPlot')

' renders the element
ScatterPlot('ScatterPlot', 'Scatter Plot', 'an optional tech label', 'an optional description')
@enduml
```

