# ServiceLocalNetworkGateways


```text
azure-11/Item/Other/ServiceLocalNetworkGateways
```

```text
include('azure-11/Item/Other/ServiceLocalNetworkGateways')
```



| Illustration | ServiceLocalNetworkGateways | ServiceLocalNetworkGatewaysCard | ServiceLocalNetworkGatewaysGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Other/ServiceLocalNetworkGateways.png) | ![illustration for ServiceLocalNetworkGateways](../../../azure-11/Item/Other/ServiceLocalNetworkGateways.Local.png) | ![illustration for ServiceLocalNetworkGatewaysCard](../../../azure-11/Item/Other/ServiceLocalNetworkGatewaysCard.Local.png) | ![illustration for ServiceLocalNetworkGatewaysGroup](../../../azure-11/Item/Other/ServiceLocalNetworkGatewaysGroup.Local.png) |




## ServiceLocalNetworkGateways

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLocalNetworkGateways
include('azure-11/Item/Other/ServiceLocalNetworkGateways')

' renders the element
ServiceLocalNetworkGateways('ServiceLocalNetworkGateways', 'Service Local Network Gateways', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLocalNetworkGateways
include('azure-11/Item/Other/ServiceLocalNetworkGateways')

' renders the element
ServiceLocalNetworkGateways('ServiceLocalNetworkGateways', 'Service Local Network Gateways', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceLocalNetworkGatewaysCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLocalNetworkGatewaysCard
include('azure-11/Item/Other/ServiceLocalNetworkGateways')

' renders the element
ServiceLocalNetworkGatewaysCard('ServiceLocalNetworkGatewaysCard', 'Service Local Network Gateways Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLocalNetworkGatewaysCard
include('azure-11/Item/Other/ServiceLocalNetworkGateways')

' renders the element
ServiceLocalNetworkGatewaysCard('ServiceLocalNetworkGatewaysCard', 'Service Local Network Gateways Card', 'an optional description')
@enduml
```

## ServiceLocalNetworkGatewaysGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLocalNetworkGatewaysGroup
include('azure-11/Item/Other/ServiceLocalNetworkGateways')

' renders the element
ServiceLocalNetworkGatewaysGroup('ServiceLocalNetworkGatewaysGroup', 'Service Local Network Gateways Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLocalNetworkGatewaysGroup
include('azure-11/Item/Other/ServiceLocalNetworkGateways')

' renders the element
ServiceLocalNetworkGatewaysGroup('ServiceLocalNetworkGatewaysGroup', 'Service Local Network Gateways Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

