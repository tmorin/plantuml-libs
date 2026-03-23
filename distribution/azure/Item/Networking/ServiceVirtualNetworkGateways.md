# ServiceVirtualNetworkGateways


```text
azure/Item/Networking/ServiceVirtualNetworkGateways
```

```text
include('azure/Item/Networking/ServiceVirtualNetworkGateways')
```



| Illustration | ServiceVirtualNetworkGateways | ServiceVirtualNetworkGatewaysCard | ServiceVirtualNetworkGatewaysGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Networking/ServiceVirtualNetworkGateways.png) | ![illustration for ServiceVirtualNetworkGateways](../../../azure/Item/Networking/ServiceVirtualNetworkGateways.Local.png) | ![illustration for ServiceVirtualNetworkGatewaysCard](../../../azure/Item/Networking/ServiceVirtualNetworkGatewaysCard.Local.png) | ![illustration for ServiceVirtualNetworkGatewaysGroup](../../../azure/Item/Networking/ServiceVirtualNetworkGatewaysGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceVirtualNetworkGatewaysXs>`
- `<$ServiceVirtualNetworkGatewaysSm>`
- `<$ServiceVirtualNetworkGatewaysMd>`
- `<$ServiceVirtualNetworkGatewaysLg>`





## ServiceVirtualNetworkGateways

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVirtualNetworkGateways
include('azure/Item/Networking/ServiceVirtualNetworkGateways')

' renders the element
ServiceVirtualNetworkGateways('ServiceVirtualNetworkGateways', 'Service Virtual Network Gateways', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVirtualNetworkGateways
include('azure/Item/Networking/ServiceVirtualNetworkGateways')

' renders the element
ServiceVirtualNetworkGateways('ServiceVirtualNetworkGateways', 'Service Virtual Network Gateways', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceVirtualNetworkGatewaysCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVirtualNetworkGatewaysCard
include('azure/Item/Networking/ServiceVirtualNetworkGateways')

' renders the element
ServiceVirtualNetworkGatewaysCard('ServiceVirtualNetworkGatewaysCard', 'Service Virtual Network Gateways Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVirtualNetworkGatewaysCard
include('azure/Item/Networking/ServiceVirtualNetworkGateways')

' renders the element
ServiceVirtualNetworkGatewaysCard('ServiceVirtualNetworkGatewaysCard', 'Service Virtual Network Gateways Card', 'an optional description')
@enduml
```

## ServiceVirtualNetworkGatewaysGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVirtualNetworkGatewaysGroup
include('azure/Item/Networking/ServiceVirtualNetworkGateways')

' renders the element
ServiceVirtualNetworkGatewaysGroup('ServiceVirtualNetworkGatewaysGroup', 'Service Virtual Network Gateways Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceVirtualNetworkGatewaysGroup
include('azure/Item/Networking/ServiceVirtualNetworkGateways')

' renders the element
ServiceVirtualNetworkGatewaysGroup('ServiceVirtualNetworkGatewaysGroup', 'Service Virtual Network Gateways Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

