# AzureVirtualNetworkGateways
```text
elements/azure/NetworkingServiceColor/AzureVirtualNetworkGateways
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVirtualNetworkGateways icon](../../../icons/azure/NetworkingServiceColor/AzureVirtualNetworkGateways.png) | ![AzureVirtualNetworkGateways element](AzureVirtualNetworkGateways.element.png) | ![AzureVirtualNetworkGateways card](AzureVirtualNetworkGateways.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureVirtualNetworkGateways element
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworkGateways')
AzureVirtualNetworkGateways('element', 'Virtual Network Gateways', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureVirtualNetworkGateways element
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworkGateways')
AzureVirtualNetworkGateways('element', 'Virtual Network Gateways', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureVirtualNetworkGateways card
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworkGateways')
AzureVirtualNetworkGatewaysCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureVirtualNetworkGateways card
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworkGateways')
AzureVirtualNetworkGatewaysCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
