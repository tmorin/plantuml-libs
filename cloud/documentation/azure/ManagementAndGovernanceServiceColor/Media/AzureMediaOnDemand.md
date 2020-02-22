# AzureMediaOnDemand
```text
elements/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaOnDemand
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMediaOnDemand icon](../../../../icons/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaOnDemand.png) | ![AzureMediaOnDemand element](AzureMediaOnDemand.element.png) | ![AzureMediaOnDemand card](AzureMediaOnDemand.card.png) |
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

' loads the AzureMediaOnDemand element
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaOnDemand')
AzureMediaOnDemand('element', 'Media On Demand', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureMediaOnDemand element
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaOnDemand')
AzureMediaOnDemand('element', 'Media On Demand', 'an optional tech field')
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

' loads the AzureMediaOnDemand card
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaOnDemand')
AzureMediaOnDemandCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the GCP style
include('styles/gcp')

' loads the AzureMediaOnDemand card
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaOnDemand')
AzureMediaOnDemandCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
