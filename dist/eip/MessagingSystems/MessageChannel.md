# Message Channel

```text
eip/MessagingSystems/MessageChannel
```

```text
include('eip/MessagingSystems/MessageChannel')
```

|icon|element|
|---|---|
|![](MessageChannel.png)|![](MessageChannel.element.png)|



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
' loads the MessageChannel element
include('eip/MessagingSystems/MessageChannel')
MessageChannel('message_channel', 'Message Channel', 'an optional tech field')
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
' loads the MessageChannel element
include('eip/MessagingSystems/MessageChannel')
MessageChannel('message_channel', 'Message Channel', 'an optional tech field')
@enduml
```

