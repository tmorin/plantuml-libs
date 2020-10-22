# DomainEvent

```text
eventstorming/Element/DomainEvent
```

```text
include('eventstorming/Element/DomainEvent')
```

|element|
|---|
|![](DomainEvent.element.local.png)|



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
' loads the DomainEvent element
include('eventstorming/Element/DomainEvent')
DomainEvent('domain_event', 'DomainEvent')
note as note
A domain event notifies something significant happened about an aggregate.
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
' loads the DomainEvent element
include('eventstorming/Element/DomainEvent')
DomainEvent('domain_event', 'DomainEvent')
note as note
A domain event notifies something significant happened about an aggregate.
end note
@enduml
```

