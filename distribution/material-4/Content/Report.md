# Report


```text
material-4/Content/Report
```

```text
include('material-4/Content/Report')
```



| Illustration | Report |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Report.png) | ![illustration for Report](../../material-4/Content/Report.Local.png) |




## Report

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Report
include('material-4/Content/Report')

' renders the element
Report('Report', 'Report', 'an optional tech label')
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

' loads the Item which embeds the element Report
include('material-4/Content/Report')

' renders the element
Report('Report', 'Report', 'an optional tech label')
@enduml
```

