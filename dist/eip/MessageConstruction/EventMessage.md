# Event Message

```text
eip/MessageConstruction/EventMessage
```

```text
include('eip/MessageConstruction/EventMessage')
```

|icon|element|
|---|---|
|![](EventMessage.png)|![](EventMessage.element.png)|



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
' loads the EventMessage element
include('eip/MessageConstruction/EventMessage')
EventMessage('event_message', 'Event Message', 'an optional tech field')
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
' loads the EventMessage element
include('eip/MessageConstruction/EventMessage')
EventMessage('event_message', 'Event Message', 'an optional tech field')
@enduml
```

