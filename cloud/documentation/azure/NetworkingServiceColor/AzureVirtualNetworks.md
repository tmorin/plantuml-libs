# AzureVirtualNetworks
```text
elements/azure/NetworkingServiceColor/AzureVirtualNetworks
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVirtualNetworks icon](../../../icons/azure/NetworkingServiceColor/AzureVirtualNetworks.png) | ![AzureVirtualNetworks element](AzureVirtualNetworks.element.png) | ![AzureVirtualNetworks card](AzureVirtualNetworks.card.png) |
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

' loads the AzureVirtualNetworks element
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworks')
AzureVirtualNetworks('element', 'Virtual Networks', 'an optional tech field')
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

' loads the AzureVirtualNetworks element
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworks')
AzureVirtualNetworks('element', 'Virtual Networks', 'an optional tech field')
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

' loads the AzureVirtualNetworks card
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworks')
AzureVirtualNetworksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureVirtualNetworks card
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworks')
AzureVirtualNetworksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
