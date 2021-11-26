# ReportOff


```text
material-4/Content/ReportOff
```

```text
include('material-4/Content/ReportOff')
```



| Illustration | ReportOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/ReportOff.png) | ![illustration for ReportOff](../../material-4/Content/ReportOff.Local.png) |




## ReportOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ReportOff
include('material-4/Content/ReportOff')

' renders the element
ReportOff('ReportOff', 'Report Off', 'an optional tech label')
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

' loads the Item which embeds the element ReportOff
include('material-4/Content/ReportOff')

' renders the element
ReportOff('ReportOff', 'Report Off', 'an optional tech label')
@enduml
```

