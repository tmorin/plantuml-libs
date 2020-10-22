# Service Virtual Network Gateways

```text
azure-v2/Item/Networking/ServiceVirtualNetworkGateways
```

```text
include('azure-v2/Item/Networking/ServiceVirtualNetworkGateways')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceVirtualNetworkGateways.png)|![](ServiceVirtualNetworkGateways.card.png)|![](ServiceVirtualNetworkGateways.element.png)|![](ServiceVirtualNetworkGateways.group.png)|



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
' loads the ServiceVirtualNetworkGateways element
include('azure-v2/Item/Networking/ServiceVirtualNetworkGateways')
ServiceVirtualNetworkGatewaysCard('service_virtual_network_gateways', 'Service Virtual Network Gateways', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceVirtualNetworkGateways element
include('azure-v2/Item/Networking/ServiceVirtualNetworkGateways')
ServiceVirtualNetworkGatewaysCard('service_virtual_network_gateways', 'Service Virtual Network Gateways', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceVirtualNetworkGateways element
include('azure-v2/Item/Networking/ServiceVirtualNetworkGateways')
ServiceVirtualNetworkGateways('service_virtual_network_gateways', 'Service Virtual Network Gateways', 'an optional tech field')
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
' loads the ServiceVirtualNetworkGateways element
include('azure-v2/Item/Networking/ServiceVirtualNetworkGateways')
ServiceVirtualNetworkGateways('service_virtual_network_gateways', 'Service Virtual Network Gateways', 'an optional tech field')
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
' loads the ServiceVirtualNetworkGateways element
include('azure-v2/Item/Networking/ServiceVirtualNetworkGateways')
ServiceVirtualNetworkGatewaysGroup('service_virtual_network_gateways', 'Service Virtual Network Gateways', 'an optional tech field'){
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
' loads the ServiceVirtualNetworkGateways element
include('azure-v2/Item/Networking/ServiceVirtualNetworkGateways')
ServiceVirtualNetworkGatewaysGroup('service_virtual_network_gateways', 'Service Virtual Network Gateways', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

