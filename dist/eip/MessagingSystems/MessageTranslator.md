# Message Translator

```text
eip/MessagingSystems/MessageTranslator
```

```text
include('eip/MessagingSystems/MessageTranslator')
```

|icon|element|
|---|---|
|![](MessageTranslator.png)|![](MessageTranslator.element.png)|



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
' loads the MessageTranslator element
include('eip/MessagingSystems/MessageTranslator')
MessageTranslator('message_translator', 'Message Translator', 'an optional tech field')
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
' loads the MessageTranslator element
include('eip/MessagingSystems/MessageTranslator')
MessageTranslator('message_translator', 'Message Translator', 'an optional tech field')
@enduml
```

