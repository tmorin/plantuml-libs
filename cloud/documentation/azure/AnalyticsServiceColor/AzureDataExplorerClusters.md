# AzureDataExplorerClusters
```text
elements/azure/AnalyticsServiceColor/AzureDataExplorerClusters
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDataExplorerClusters icon](../../../icons/azure/AnalyticsServiceColor/AzureDataExplorerClusters.png) | ![AzureDataExplorerClusters element](AzureDataExplorerClusters.element.png) | ![AzureDataExplorerClusters card](AzureDataExplorerClusters.card.png) |
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

' loads the AzureDataExplorerClusters element
include('elements/azure/AnalyticsServiceColor/AzureDataExplorerClusters')
AzureDataExplorerClusters('element', 'Data Explorer Clusters', 'an optional tech field')
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

' loads the AzureDataExplorerClusters element
include('elements/azure/AnalyticsServiceColor/AzureDataExplorerClusters')
AzureDataExplorerClusters('element', 'Data Explorer Clusters', 'an optional tech field')
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

' loads the AzureDataExplorerClusters card
include('elements/azure/AnalyticsServiceColor/AzureDataExplorerClusters')
AzureDataExplorerClustersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDataExplorerClusters card
include('elements/azure/AnalyticsServiceColor/AzureDataExplorerClusters')
AzureDataExplorerClustersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
