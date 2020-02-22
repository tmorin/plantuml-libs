# AzureVirtualNetworkClassic
```text
elements/azure/NetworkingServiceColor/AzureVirtualNetworkClassic
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVirtualNetworkClassic icon](../../../icons/azure/NetworkingServiceColor/AzureVirtualNetworkClassic.png) | ![AzureVirtualNetworkClassic element](AzureVirtualNetworkClassic.element.png) | ![AzureVirtualNetworkClassic card](AzureVirtualNetworkClassic.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureVirtualNetworkClassic element
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworkClassic')
AzureVirtualNetworkClassic('element', 'Virtual Network Classic', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AzureVirtualNetworkClassic element
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworkClassic')
AzureVirtualNetworkClassic('element', 'Virtual Network Classic', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/gcp')

' loads the AzureVirtualNetworkClassic card
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworkClassic')
AzureVirtualNetworkClassicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AzureVirtualNetworkClassic card
include('elements/azure/NetworkingServiceColor/AzureVirtualNetworkClassic')
AzureVirtualNetworkClassicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
