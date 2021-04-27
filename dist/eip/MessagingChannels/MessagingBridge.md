# Messaging Bridge

```text
eip/MessagingChannels/MessagingBridge
```

```text
include('eip/MessagingChannels/MessagingBridge')
```

|icon|element|
|---|---|
|![](MessagingBridge.png)|![](MessagingBridge.element.png)|



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
' loads the MessagingBridge element
include('eip/MessagingChannels/MessagingBridge')
MessagingBridge('messaging_bridge', 'Messaging Bridge', 'an optional tech field')
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
' loads the MessagingBridge element
include('eip/MessagingChannels/MessagingBridge')
MessagingBridge('messaging_bridge', 'Messaging Bridge', 'an optional tech field')
@enduml
```

