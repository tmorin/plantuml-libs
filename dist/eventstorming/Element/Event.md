# Event

```text
eventstorming/Element/Event
```

```text
include('eventstorming/Element/Event')
```

|element|
|---|
|![](Event.element.local.png)|



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
' loads the Event element
include('eventstorming/Element/Event')
Event('event', 'Event')
note as note
An event notifies something happened.
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
' loads the Event element
include('eventstorming/Element/Event')
Event('event', 'Event')
note as note
An event notifies something happened.
end note
@enduml
```

