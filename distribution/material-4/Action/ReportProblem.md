# ReportProblem


```text
material-4/Action/ReportProblem
```

```text
include('material-4/Action/ReportProblem')
```



| Illustration | ReportProblem |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ReportProblem.png) | ![illustration for ReportProblem](../../material-4/Action/ReportProblem.Local.png) |




## ReportProblem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ReportProblem
include('material-4/Action/ReportProblem')

' renders the element
ReportProblem('ReportProblem', 'Report Problem', 'an optional tech label')
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

' loads the Item which embeds the element ReportProblem
include('material-4/Action/ReportProblem')

' renders the element
ReportProblem('ReportProblem', 'Report Problem', 'an optional tech label')
@enduml
```

