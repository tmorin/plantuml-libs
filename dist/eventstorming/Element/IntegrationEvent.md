# IntegrationEvent

```text
eventstorming/Element/IntegrationEvent
```

```text
include('eventstorming/Element/IntegrationEvent')
```

|element|
|---|
|![](IntegrationEvent.element.local.png)|



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
' loads the IntegrationEvent element
include('eventstorming/Element/IntegrationEvent')
IntegrationEvent('integration_event', 'IntegrationEvent')
note as note
An integration event notifies to other systems something happened.
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
' loads the IntegrationEvent element
include('eventstorming/Element/IntegrationEvent')
IntegrationEvent('integration_event', 'IntegrationEvent')
note as note
An integration event notifies to other systems something happened.
end note
@enduml
```

