# ChartBar


```text
fontawesome-6/Solid/ChartBar
```

```text
include('fontawesome-6/Solid/ChartBar')
```



| Illustration | ChartBar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChartBar.png) | ![illustration for ChartBar](../../fontawesome-6/Solid/ChartBar.Local.png) |




## ChartBar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChartBar
include('fontawesome-6/Solid/ChartBar')

' renders the element
ChartBar('ChartBar', 'Chart Bar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChartBar
include('fontawesome-6/Solid/ChartBar')

' renders the element
ChartBar('ChartBar', 'Chart Bar', 'an optional tech label', 'an optional description')
@enduml
```

