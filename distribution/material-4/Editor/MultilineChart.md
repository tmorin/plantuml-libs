# MultilineChart


```text
material-4/Editor/MultilineChart
```

```text
include('material-4/Editor/MultilineChart')
```



| Illustration | MultilineChart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/MultilineChart.png) | ![illustration for MultilineChart](../../material-4/Editor/MultilineChart.Local.png) |




## MultilineChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MultilineChart
include('material-4/Editor/MultilineChart')

' renders the element
MultilineChart('MultilineChart', 'Multiline Chart', 'an optional tech label')
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

' loads the Item which embeds the element MultilineChart
include('material-4/Editor/MultilineChart')

' renders the element
MultilineChart('MultilineChart', 'Multiline Chart', 'an optional tech label')
@enduml
```

