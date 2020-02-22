# AzureSupportRequests
```text
elements/azure/GeneralServiceIcons/AzureSupportRequests
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSupportRequests icon](../../../icons/azure/GeneralServiceIcons/AzureSupportRequests.png) | ![AzureSupportRequests element](AzureSupportRequests.element.png) | ![AzureSupportRequests card](AzureSupportRequests.card.png) |
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

' loads the AzureSupportRequests element
include('elements/azure/GeneralServiceIcons/AzureSupportRequests')
AzureSupportRequests('element', 'Support Requests', 'an optional tech field')
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

' loads the AzureSupportRequests element
include('elements/azure/GeneralServiceIcons/AzureSupportRequests')
AzureSupportRequests('element', 'Support Requests', 'an optional tech field')
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

' loads the AzureSupportRequests card
include('elements/azure/GeneralServiceIcons/AzureSupportRequests')
AzureSupportRequestsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSupportRequests card
include('elements/azure/GeneralServiceIcons/AzureSupportRequests')
AzureSupportRequestsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
