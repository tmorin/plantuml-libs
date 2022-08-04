# ChartArea


```text
fontawesome-6/Solid/ChartArea
```

```text
include('fontawesome-6/Solid/ChartArea')
```



| Illustration | ChartArea |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChartArea.png) | ![illustration for ChartArea](../../fontawesome-6/Solid/ChartArea.Local.png) |




## ChartArea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChartArea
include('fontawesome-6/Solid/ChartArea')

' renders the element
ChartArea('ChartArea', 'Chart Area', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChartArea
include('fontawesome-6/Solid/ChartArea')

' renders the element
ChartArea('ChartArea', 'Chart Area', 'an optional tech label', 'an optional description')
@enduml
```

