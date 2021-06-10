# ChartBar


```text
fontawesome-5/Solid/ChartBar
```

```text
include('fontawesome-5/Solid/ChartBar')
```



| Illustration | ChartBar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChartBar.png) | ![illustration for ChartBar](../../fontawesome-5/Solid/ChartBar.Local.png) |




## ChartBar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChartBar
include('fontawesome-5/Solid/ChartBar')

' renders the element
ChartBar('ChartBar', 'Chart Bar', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChartBar
include('fontawesome-5/Solid/ChartBar')

' renders the element
ChartBar('ChartBar', 'Chart Bar', 'an optional tech label')
@enduml
```

