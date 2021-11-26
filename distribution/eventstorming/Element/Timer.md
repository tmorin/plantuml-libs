# Timer


```text
eventstorming/Element/Timer
```

```text
include('eventstorming/Element/Timer')
```



| Timer |
| :---: |
| ![illustration for Timer](../../eventstorming/Element/Timer.Local.png) |




## Timer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Timer
include('eventstorming/Element/Timer')

Timer('Timer') [
Timer
--
A timer represents a significant moment or period.
]
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
include('eventstorming/bootstrap')

' loads the Item which embeds the element Timer
include('eventstorming/Element/Timer')

Timer('Timer') [
Timer
--
A timer represents a significant moment or period.
]
@enduml
```

