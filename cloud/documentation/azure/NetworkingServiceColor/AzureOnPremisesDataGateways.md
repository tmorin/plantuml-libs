# AzureOnPremisesDataGateways
```text
elements/azure/NetworkingServiceColor/AzureOnPremisesDataGateways
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureOnPremisesDataGateways icon](../../../icons/azure/NetworkingServiceColor/AzureOnPremisesDataGateways.png) | ![AzureOnPremisesDataGateways element](AzureOnPremisesDataGateways.element.png) | ![AzureOnPremisesDataGateways card](AzureOnPremisesDataGateways.card.png) |
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

' loads the AzureOnPremisesDataGateways element
include('elements/azure/NetworkingServiceColor/AzureOnPremisesDataGateways')
AzureOnPremisesDataGateways('element', 'On Premises Data Gateways', 'an optional tech field')
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

' loads the AzureOnPremisesDataGateways element
include('elements/azure/NetworkingServiceColor/AzureOnPremisesDataGateways')
AzureOnPremisesDataGateways('element', 'On Premises Data Gateways', 'an optional tech field')
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

' loads the AzureOnPremisesDataGateways card
include('elements/azure/NetworkingServiceColor/AzureOnPremisesDataGateways')
AzureOnPremisesDataGatewaysCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureOnPremisesDataGateways card
include('elements/azure/NetworkingServiceColor/AzureOnPremisesDataGateways')
AzureOnPremisesDataGatewaysCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
