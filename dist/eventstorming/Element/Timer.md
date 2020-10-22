# Timer

```text
eventstorming/Element/Timer
```

```text
include('eventstorming/Element/Timer')
```

|element|
|---|
|![](Timer.element.local.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eventstorming bootstrap
include('eventstorming/bootstrap')
' loads the Timer element
include('eventstorming/Element/Timer')
Timer('timer', 'Timer')
note as note
A timer represents a significant moment or period.
end note
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eventstorming bootstrap
include('eventstorming/bootstrap')
' loads the Timer element
include('eventstorming/Element/Timer')
Timer('timer', 'Timer')
note as note
A timer represents a significant moment or period.
end note
@enduml
```

