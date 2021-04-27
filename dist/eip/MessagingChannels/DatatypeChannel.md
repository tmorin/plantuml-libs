# Datatype Channel

```text
eip/MessagingChannels/DatatypeChannel
```

```text
include('eip/MessagingChannels/DatatypeChannel')
```

|icon|element|
|---|---|
|![](DatatypeChannel.png)|![](DatatypeChannel.element.png)|



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
' loads the DatatypeChannel element
include('eip/MessagingChannels/DatatypeChannel')
DatatypeChannel('datatype_channel', 'Datatype Channel', 'an optional tech field')
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
' loads the DatatypeChannel element
include('eip/MessagingChannels/DatatypeChannel')
DatatypeChannel('datatype_channel', 'Datatype Channel', 'an optional tech field')
@enduml
```

