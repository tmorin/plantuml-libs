# GcpKeyManagementService
```text
elements/gcp/Security/GcpKeyManagementService
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpKeyManagementService icon](../../../icons/gcp/Security/GcpKeyManagementService.png) | ![GcpKeyManagementService element](GcpKeyManagementService.element.png) | ![GcpKeyManagementService card](GcpKeyManagementService.card.png) |
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

' loads the GcpKeyManagementService element
include('elements/gcp/Security/GcpKeyManagementService')
GcpKeyManagementService('element', 'Key Management Service', 'an optional tech field')
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

' loads the GcpKeyManagementService element
include('elements/gcp/Security/GcpKeyManagementService')
GcpKeyManagementService('element', 'Key Management Service', 'an optional tech field')
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

' loads the GcpKeyManagementService card
include('elements/gcp/Security/GcpKeyManagementService')
GcpKeyManagementServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpKeyManagementService card
include('elements/gcp/Security/GcpKeyManagementService')
GcpKeyManagementServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
