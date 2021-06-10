# Event


```text
eventstorming/Element/Event
```

```text
include('eventstorming/Element/Event')
```



| Event |
| :---: |
| ![illustration for Event](../../eventstorming/Element/Event.Local.png) |




## Event

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Event
include('eventstorming/Element/Event')

Event('Event') [
Event
--
An event notifies something happened.
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

' loads the Item which embeds the element Event
include('eventstorming/Element/Event')

Event('Event') [
Event
--
An event notifies something happened.
]
@enduml
```

