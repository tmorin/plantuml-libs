# Insights


```text
material-4/Content/Insights
```

```text
include('material-4/Content/Insights')
```



| Illustration | Insights |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Insights.png) | ![illustration for Insights](../../material-4/Content/Insights.Local.png) |




## Insights

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Insights
include('material-4/Content/Insights')

' renders the element
Insights('Insights', 'Insights', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Insights
include('material-4/Content/Insights')

' renders the element
Insights('Insights', 'Insights', 'an optional tech label', 'an optional description')
@enduml
```

