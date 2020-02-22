# AzureCloudServices
```text
elements/azure/ComputeServiceColor/AzureCloudServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCloudServices icon](../../../icons/azure/ComputeServiceColor/AzureCloudServices.png) | ![AzureCloudServices element](AzureCloudServices.element.png) | ![AzureCloudServices card](AzureCloudServices.card.png) |
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

' loads the AzureCloudServices element
include('elements/azure/ComputeServiceColor/AzureCloudServices')
AzureCloudServices('element', 'Cloud Services', 'an optional tech field')
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

' loads the AzureCloudServices element
include('elements/azure/ComputeServiceColor/AzureCloudServices')
AzureCloudServices('element', 'Cloud Services', 'an optional tech field')
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

' loads the AzureCloudServices card
include('elements/azure/ComputeServiceColor/AzureCloudServices')
AzureCloudServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCloudServices card
include('elements/azure/ComputeServiceColor/AzureCloudServices')
AzureCloudServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
