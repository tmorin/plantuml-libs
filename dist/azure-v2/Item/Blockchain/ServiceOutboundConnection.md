# Service Outbound Connection

```text
azure-v2/Item/Blockchain/ServiceOutboundConnection
```

```text
include('azure-v2/Item/Blockchain/ServiceOutboundConnection')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceOutboundConnection.png)|![](ServiceOutboundConnection.card.png)|![](ServiceOutboundConnection.element.png)|![](ServiceOutboundConnection.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceOutboundConnection element
include('azure-v2/Item/Blockchain/ServiceOutboundConnection')
ServiceOutboundConnectionCard('service_outbound_connection', 'Service Outbound Connection', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceOutboundConnection element
include('azure-v2/Item/Blockchain/ServiceOutboundConnection')
ServiceOutboundConnectionCard('service_outbound_connection', 'Service Outbound Connection', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceOutboundConnection element
include('azure-v2/Item/Blockchain/ServiceOutboundConnection')
ServiceOutboundConnection('service_outbound_connection', 'Service Outbound Connection', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceOutboundConnection element
include('azure-v2/Item/Blockchain/ServiceOutboundConnection')
ServiceOutboundConnection('service_outbound_connection', 'Service Outbound Connection', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceOutboundConnection element
include('azure-v2/Item/Blockchain/ServiceOutboundConnection')
ServiceOutboundConnectionGroup('service_outbound_connection', 'Service Outbound Connection', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceOutboundConnection element
include('azure-v2/Item/Blockchain/ServiceOutboundConnection')
ServiceOutboundConnectionGroup('service_outbound_connection', 'Service Outbound Connection', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

