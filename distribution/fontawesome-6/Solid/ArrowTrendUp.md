# ArrowTrendUp


```text
fontawesome-6/Solid/ArrowTrendUp
```

```text
include('fontawesome-6/Solid/ArrowTrendUp')
```



| Illustration | ArrowTrendUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowTrendUp.png) | ![illustration for ArrowTrendUp](../../fontawesome-6/Solid/ArrowTrendUp.Local.png) |




## ArrowTrendUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowTrendUp
include('fontawesome-6/Solid/ArrowTrendUp')

' renders the element
ArrowTrendUp('ArrowTrendUp', 'Arrow Trend Up', 'an optional tech label')
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

' loads the Item which embeds the element ArrowTrendUp
include('fontawesome-6/Solid/ArrowTrendUp')

' renders the element
ArrowTrendUp('ArrowTrendUp', 'Arrow Trend Up', 'an optional tech label')
@enduml
```

