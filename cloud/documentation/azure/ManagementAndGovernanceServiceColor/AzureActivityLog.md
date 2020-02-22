# AzureActivityLog
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureActivityLog
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureActivityLog icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureActivityLog.png) | ![AzureActivityLog element](AzureActivityLog.element.png) | ![AzureActivityLog card](AzureActivityLog.card.png) |
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

' loads the AzureActivityLog element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureActivityLog')
AzureActivityLog('element', 'Activity Log', 'an optional tech field')
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

' loads the AzureActivityLog element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureActivityLog')
AzureActivityLog('element', 'Activity Log', 'an optional tech field')
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

' loads the AzureActivityLog card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureActivityLog')
AzureActivityLogCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureActivityLog card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureActivityLog')
AzureActivityLogCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
