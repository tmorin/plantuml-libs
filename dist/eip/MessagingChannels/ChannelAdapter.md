# Channel Adapter

```text
eip/MessagingChannels/ChannelAdapter
```

```text
include('eip/MessagingChannels/ChannelAdapter')
```

|icon|element|
|---|---|
|![](ChannelAdapter.png)|![](ChannelAdapter.element.png)|



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
' loads the ChannelAdapter element
include('eip/MessagingChannels/ChannelAdapter')
ChannelAdapter('channel_adapter', 'Channel Adapter', 'an optional tech field')
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
' loads the ChannelAdapter element
include('eip/MessagingChannels/ChannelAdapter')
ChannelAdapter('channel_adapter', 'Channel Adapter', 'an optional tech field')
@enduml
```

