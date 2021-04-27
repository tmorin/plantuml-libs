# Message Dispatcher

```text
eip/MessagingEndpoints/MessageDispatcher
```

```text
include('eip/MessagingEndpoints/MessageDispatcher')
```

|icon|element|
|---|---|
|![](MessageDispatcher.png)|![](MessageDispatcher.element.png)|



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
' loads the MessageDispatcher element
include('eip/MessagingEndpoints/MessageDispatcher')
MessageDispatcher('message_dispatcher', 'Message Dispatcher', 'an optional tech field')
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
' loads the MessageDispatcher element
include('eip/MessagingEndpoints/MessageDispatcher')
MessageDispatcher('message_dispatcher', 'Message Dispatcher', 'an optional tech field')
@enduml
```

