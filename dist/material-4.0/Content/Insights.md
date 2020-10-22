# Insights

```text
material-4.0/Content/Insights
```

```text
include('material-4.0/Content/Insights')
```

|icon|element|
|---|---|
|![](Insights.png)|![](Insights.element.png)|



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
' loads the Insights element
include('material-4.0/Content/Insights')
Insights('insights', 'Insights', 'an optional tech field')
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
' loads the Insights element
include('material-4.0/Content/Insights')
Insights('insights', 'Insights', 'an optional tech field')
@enduml
```

