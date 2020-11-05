# AzureNetworkSecurityGroupsClassic
```text
elements/azure/NetworkingServiceColor/AzureNetworkSecurityGroupsClassic
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureNetworkSecurityGroupsClassic icon](../../../icons/azure/NetworkingServiceColor/AzureNetworkSecurityGroupsClassic.png) | ![AzureNetworkSecurityGroupsClassic element](AzureNetworkSecurityGroupsClassic.element.png) | ![AzureNetworkSecurityGroupsClassic card](AzureNetworkSecurityGroupsClassic.card.png) |
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

' loads the AzureNetworkSecurityGroupsClassic element
include('elements/azure/NetworkingServiceColor/AzureNetworkSecurityGroupsClassic')
AzureNetworkSecurityGroupsClassic('element', 'Network Security Groups Classic', 'an optional tech field')
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

' loads the AzureNetworkSecurityGroupsClassic element
include('elements/azure/NetworkingServiceColor/AzureNetworkSecurityGroupsClassic')
AzureNetworkSecurityGroupsClassic('element', 'Network Security Groups Classic', 'an optional tech field')
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

' loads the AzureNetworkSecurityGroupsClassic card
include('elements/azure/NetworkingServiceColor/AzureNetworkSecurityGroupsClassic')
AzureNetworkSecurityGroupsClassicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureNetworkSecurityGroupsClassic card
include('elements/azure/NetworkingServiceColor/AzureNetworkSecurityGroupsClassic')
AzureNetworkSecurityGroupsClassicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```