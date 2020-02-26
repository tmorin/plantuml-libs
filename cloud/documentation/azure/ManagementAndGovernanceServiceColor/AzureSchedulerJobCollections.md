# AzureSchedulerJobCollections
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureSchedulerJobCollections
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSchedulerJobCollections icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureSchedulerJobCollections.png) | ![AzureSchedulerJobCollections element](AzureSchedulerJobCollections.element.png) | ![AzureSchedulerJobCollections card](AzureSchedulerJobCollections.card.png) |
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

' loads the AzureSchedulerJobCollections element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureSchedulerJobCollections')
AzureSchedulerJobCollections('element', 'Scheduler Job Collections', 'an optional tech field')
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

' loads the AzureSchedulerJobCollections element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureSchedulerJobCollections')
AzureSchedulerJobCollections('element', 'Scheduler Job Collections', 'an optional tech field')
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

' loads the AzureSchedulerJobCollections card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureSchedulerJobCollections')
AzureSchedulerJobCollectionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSchedulerJobCollections card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureSchedulerJobCollections')
AzureSchedulerJobCollectionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
