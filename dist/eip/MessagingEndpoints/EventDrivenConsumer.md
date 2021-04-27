# Event Driven Consumer

```text
eip/MessagingEndpoints/EventDrivenConsumer
```

```text
include('eip/MessagingEndpoints/EventDrivenConsumer')
```

|icon|element|
|---|---|
|![](EventDrivenConsumer.png)|![](EventDrivenConsumer.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the EventDrivenConsumer element
include('eip/MessagingEndpoints/EventDrivenConsumer')
EventDrivenConsumer('event_driven_consumer', 'Event Driven Consumer', 'an optional tech field')
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
' loads the eip bootstrap
include('eip/bootstrap')
' loads the EventDrivenConsumer element
include('eip/MessagingEndpoints/EventDrivenConsumer')
EventDrivenConsumer('event_driven_consumer', 'Event Driven Consumer', 'an optional tech field')
@enduml
```

