# Report


```text
material/Content/Report
```

```text
include('material/Content/Report')
```



| Illustration | Report |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Report.png) | ![illustration for Report](../../material/Content/Report.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReportXs>`
- `<$ReportSm>`
- `<$ReportMd>`
- `<$ReportLg>`





## Report

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Report
include('material/Content/Report')

' renders the element
Report('Report', 'Report', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Report
include('material/Content/Report')

' renders the element
Report('Report', 'Report', 'an optional tech label', 'an optional description')
@enduml
```

