# Composed Message Processor

```text
eip/MessageRouting/ComposedMessageProcessor
```

```text
include('eip/MessageRouting/ComposedMessageProcessor')
```

|icon|element|
|---|---|
|![](ComposedMessageProcessor.png)|![](ComposedMessageProcessor.element.png)|



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
' loads the ComposedMessageProcessor element
include('eip/MessageRouting/ComposedMessageProcessor')
ComposedMessageProcessor('composed_message_processor', 'Composed Message Processor', 'an optional tech field')
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
' loads the ComposedMessageProcessor element
include('eip/MessageRouting/ComposedMessageProcessor')
ComposedMessageProcessor('composed_message_processor', 'Composed Message Processor', 'an optional tech field')
@enduml
```

