# AzureGuestAssignments
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureGuestAssignments
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureGuestAssignments icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureGuestAssignments.png) | ![AzureGuestAssignments element](AzureGuestAssignments.element.png) | ![AzureGuestAssignments card](AzureGuestAssignments.card.png) |
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

' loads the AzureGuestAssignments element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureGuestAssignments')
AzureGuestAssignments('element', 'Guest Assignments', 'an optional tech field')
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

' loads the AzureGuestAssignments element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureGuestAssignments')
AzureGuestAssignments('element', 'Guest Assignments', 'an optional tech field')
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

' loads the AzureGuestAssignments card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureGuestAssignments')
AzureGuestAssignmentsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureGuestAssignments card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureGuestAssignments')
AzureGuestAssignmentsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
