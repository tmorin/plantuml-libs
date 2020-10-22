# Scatter Plot

```text
material-4.0/Editor/ScatterPlot
```

```text
include('material-4.0/Editor/ScatterPlot')
```

|icon|element|
|---|---|
|![](ScatterPlot.png)|![](ScatterPlot.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the ScatterPlot element
include('material-4.0/Editor/ScatterPlot')
ScatterPlot('scatter_plot', 'Scatter Plot', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the ScatterPlot element
include('material-4.0/Editor/ScatterPlot')
ScatterPlot('scatter_plot', 'Scatter Plot', 'an optional tech field')
@enduml
```

