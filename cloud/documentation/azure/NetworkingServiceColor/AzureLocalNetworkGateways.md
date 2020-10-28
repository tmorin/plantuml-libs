# AzureLocalNetworkGateways
```text
elements/azure/NetworkingServiceColor/AzureLocalNetworkGateways
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLocalNetworkGateways icon](../../../icons/azure/NetworkingServiceColor/AzureLocalNetworkGateways.png) | ![AzureLocalNetworkGateways element](AzureLocalNetworkGateways.element.png) | ![AzureLocalNetworkGateways card](AzureLocalNetworkGateways.card.png) |
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

' loads the AzureLocalNetworkGateways element
include('elements/azure/NetworkingServiceColor/AzureLocalNetworkGateways')
AzureLocalNetworkGateways('element', 'Local Network Gateways', 'an optional tech field')
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

' loads the AzureLocalNetworkGateways element
include('elements/azure/NetworkingServiceColor/AzureLocalNetworkGateways')
AzureLocalNetworkGateways('element', 'Local Network Gateways', 'an optional tech field')
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

' loads the AzureLocalNetworkGateways card
include('elements/azure/NetworkingServiceColor/AzureLocalNetworkGateways')
AzureLocalNetworkGatewaysCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLocalNetworkGateways card
include('elements/azure/NetworkingServiceColor/AzureLocalNetworkGateways')
AzureLocalNetworkGatewaysCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
