# Message Broker

```text
eip/MessageRouting/MessageBroker
```

```text
include('eip/MessageRouting/MessageBroker')
```

|icon|element|
|---|---|
|![](MessageBroker.png)|![](MessageBroker.element.png)|



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
' loads the MessageBroker element
include('eip/MessageRouting/MessageBroker')
MessageBroker('message_broker', 'Message Broker', 'an optional tech field')
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
' loads the MessageBroker element
include('eip/MessageRouting/MessageBroker')
MessageBroker('message_broker', 'Message Broker', 'an optional tech field')
@enduml
```

