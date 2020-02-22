# AzureMeshApplications
```text
elements/azure/ComputeServiceColor/AzureMeshApplications
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMeshApplications icon](../../../icons/azure/ComputeServiceColor/AzureMeshApplications.png) | ![AzureMeshApplications element](AzureMeshApplications.element.png) | ![AzureMeshApplications card](AzureMeshApplications.card.png) |
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

' loads the AzureMeshApplications element
include('elements/azure/ComputeServiceColor/AzureMeshApplications')
AzureMeshApplications('element', 'Mesh Applications', 'an optional tech field')
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

' loads the AzureMeshApplications element
include('elements/azure/ComputeServiceColor/AzureMeshApplications')
AzureMeshApplications('element', 'Mesh Applications', 'an optional tech field')
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

' loads the AzureMeshApplications card
include('elements/azure/ComputeServiceColor/AzureMeshApplications')
AzureMeshApplicationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMeshApplications card
include('elements/azure/ComputeServiceColor/AzureMeshApplications')
AzureMeshApplicationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
