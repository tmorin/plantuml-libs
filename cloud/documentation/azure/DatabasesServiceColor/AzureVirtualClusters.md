# AzureVirtualClusters
```text
elements/azure/DatabasesServiceColor/AzureVirtualClusters
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVirtualClusters icon](../../../icons/azure/DatabasesServiceColor/AzureVirtualClusters.png) | ![AzureVirtualClusters element](AzureVirtualClusters.element.png) | ![AzureVirtualClusters card](AzureVirtualClusters.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureVirtualClusters element
include('elements/azure/DatabasesServiceColor/AzureVirtualClusters')
AzureVirtualClusters('element', 'Virtual Clusters', 'an optional tech field')
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

' loads the AzureVirtualClusters element
include('elements/azure/DatabasesServiceColor/AzureVirtualClusters')
AzureVirtualClusters('element', 'Virtual Clusters', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureVirtualClusters card
include('elements/azure/DatabasesServiceColor/AzureVirtualClusters')
AzureVirtualClustersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureVirtualClusters card
include('elements/azure/DatabasesServiceColor/AzureVirtualClusters')
AzureVirtualClustersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
