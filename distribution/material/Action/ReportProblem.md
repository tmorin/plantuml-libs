# ReportProblem


```text
material/Action/ReportProblem
```

```text
include('material/Action/ReportProblem')
```



| Illustration | ReportProblem |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ReportProblem.png) | ![illustration for ReportProblem](../../material/Action/ReportProblem.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReportProblemXs>`
- `<$ReportProblemSm>`
- `<$ReportProblemMd>`
- `<$ReportProblemLg>`





## ReportProblem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ReportProblem
include('material/Action/ReportProblem')

' renders the element
ReportProblem('ReportProblem', 'Report Problem', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ReportProblem
include('material/Action/ReportProblem')

' renders the element
ReportProblem('ReportProblem', 'Report Problem', 'an optional tech label', 'an optional description')
@enduml
```

