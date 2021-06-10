# ChartLine


```text
fontawesome-5/Solid/ChartLine
```

```text
include('fontawesome-5/Solid/ChartLine')
```



| Illustration | ChartLine |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChartLine.png) | ![illustration for ChartLine](../../fontawesome-5/Solid/ChartLine.Local.png) |




## ChartLine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChartLine
include('fontawesome-5/Solid/ChartLine')

' renders the element
ChartLine('ChartLine', 'Chart Line', 'an optional tech label')
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

' loads the Item which embeds the element ChartLine
include('fontawesome-5/Solid/ChartLine')

' renders the element
ChartLine('ChartLine', 'Chart Line', 'an optional tech label')
@enduml
```

