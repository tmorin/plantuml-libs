# Dead Letter Channel

```text
eip/MessagingChannels/DeadLetterChannel
```

```text
include('eip/MessagingChannels/DeadLetterChannel')
```

|icon|element|
|---|---|
|![](DeadLetterChannel.png)|![](DeadLetterChannel.element.png)|



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
' loads the DeadLetterChannel element
include('eip/MessagingChannels/DeadLetterChannel')
DeadLetterChannel('dead_letter_channel', 'Dead Letter Channel', 'an optional tech field')
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
' loads the DeadLetterChannel element
include('eip/MessagingChannels/DeadLetterChannel')
DeadLetterChannel('dead_letter_channel', 'Dead Letter Channel', 'an optional tech field')
@enduml
```

