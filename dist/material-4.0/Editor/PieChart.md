# Pie Chart

```text
material-4.0/Editor/PieChart
```

```text
include('material-4.0/Editor/PieChart')
```

|icon|element|
|---|---|
|![](PieChart.png)|![](PieChart.element.png)|



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
' loads the PieChart element
include('material-4.0/Editor/PieChart')
PieChart('pie_chart', 'Pie Chart', 'an optional tech field')
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
' loads the PieChart element
include('material-4.0/Editor/PieChart')
PieChart('pie_chart', 'Pie Chart', 'an optional tech field')
@enduml
```

