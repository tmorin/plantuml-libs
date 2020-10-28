# AzureManagedApplications
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureManagedApplications
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureManagedApplications icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureManagedApplications.png) | ![AzureManagedApplications element](AzureManagedApplications.element.png) | ![AzureManagedApplications card](AzureManagedApplications.card.png) |
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

' loads the AzureManagedApplications element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureManagedApplications')
AzureManagedApplications('element', 'Managed Applications', 'an optional tech field')
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

' loads the AzureManagedApplications element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureManagedApplications')
AzureManagedApplications('element', 'Managed Applications', 'an optional tech field')
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

' loads the AzureManagedApplications card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureManagedApplications')
AzureManagedApplicationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureManagedApplications card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureManagedApplications')
AzureManagedApplicationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
