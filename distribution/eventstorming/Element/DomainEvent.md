# DomainEvent


```text
eventstorming/Element/DomainEvent
```

```text
include('eventstorming/Element/DomainEvent')
```



| DomainEvent |
| :---: |
| ![illustration for DomainEvent](../../eventstorming/Element/DomainEvent.Local.png) |




## DomainEvent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element DomainEvent
include('eventstorming/Element/DomainEvent')

DomainEvent('DomainEvent') [
Domain Event
--
A domain event notifies something significant happened about an aggregate.
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

' loads the Item which embeds the element DomainEvent
include('eventstorming/Element/DomainEvent')

DomainEvent('DomainEvent') [
Domain Event
--
A domain event notifies something significant happened about an aggregate.
]
@enduml
```

