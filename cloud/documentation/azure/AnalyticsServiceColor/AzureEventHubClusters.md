# AzureEventHubClusters
```text
elements/azure/AnalyticsServiceColor/AzureEventHubClusters
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureEventHubClusters icon](../../../icons/azure/AnalyticsServiceColor/AzureEventHubClusters.png) | ![AzureEventHubClusters element](AzureEventHubClusters.element.png) | ![AzureEventHubClusters card](AzureEventHubClusters.card.png) |
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

' loads the AzureEventHubClusters element
include('elements/azure/AnalyticsServiceColor/AzureEventHubClusters')
AzureEventHubClusters('element', 'Event Hub Clusters', 'an optional tech field')
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

' loads the AzureEventHubClusters element
include('elements/azure/AnalyticsServiceColor/AzureEventHubClusters')
AzureEventHubClusters('element', 'Event Hub Clusters', 'an optional tech field')
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

' loads the AzureEventHubClusters card
include('elements/azure/AnalyticsServiceColor/AzureEventHubClusters')
AzureEventHubClustersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureEventHubClusters card
include('elements/azure/AnalyticsServiceColor/AzureEventHubClusters')
AzureEventHubClustersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
