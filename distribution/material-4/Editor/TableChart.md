# TableChart


```text
material-4/Editor/TableChart
```

```text
include('material-4/Editor/TableChart')
```



| Illustration | TableChart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/TableChart.png) | ![illustration for TableChart](../../material-4/Editor/TableChart.Local.png) |




## TableChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TableChart
include('material-4/Editor/TableChart')

' renders the element
TableChart('TableChart', 'Table Chart', 'an optional tech label')
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

' loads the Item which embeds the element TableChart
include('material-4/Editor/TableChart')

' renders the element
TableChart('TableChart', 'Table Chart', 'an optional tech label')
@enduml
```

