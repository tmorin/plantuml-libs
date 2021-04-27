# Invalid Message Channel

```text
eip/MessagingChannels/InvalidMessageChannel
```

```text
include('eip/MessagingChannels/InvalidMessageChannel')
```

|icon|element|
|---|---|
|![](InvalidMessageChannel.png)|![](InvalidMessageChannel.element.png)|



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
' loads the InvalidMessageChannel element
include('eip/MessagingChannels/InvalidMessageChannel')
InvalidMessageChannel('invalid_message_channel', 'Invalid Message Channel', 'an optional tech field')
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
' loads the InvalidMessageChannel element
include('eip/MessagingChannels/InvalidMessageChannel')
InvalidMessageChannel('invalid_message_channel', 'Invalid Message Channel', 'an optional tech field')
@enduml
```

