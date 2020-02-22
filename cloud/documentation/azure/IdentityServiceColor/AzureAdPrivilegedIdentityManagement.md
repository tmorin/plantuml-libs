# AzureAdPrivilegedIdentityManagement
```text
elements/azure/IdentityServiceColor/AzureAdPrivilegedIdentityManagement
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAdPrivilegedIdentityManagement icon](../../../icons/azure/IdentityServiceColor/AzureAdPrivilegedIdentityManagement.png) | ![AzureAdPrivilegedIdentityManagement element](AzureAdPrivilegedIdentityManagement.element.png) | ![AzureAdPrivilegedIdentityManagement card](AzureAdPrivilegedIdentityManagement.card.png) |
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

' loads the AzureAdPrivilegedIdentityManagement element
include('elements/azure/IdentityServiceColor/AzureAdPrivilegedIdentityManagement')
AzureAdPrivilegedIdentityManagement('element', 'Ad Privileged Identity Management', 'an optional tech field')
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

' loads the AzureAdPrivilegedIdentityManagement element
include('elements/azure/IdentityServiceColor/AzureAdPrivilegedIdentityManagement')
AzureAdPrivilegedIdentityManagement('element', 'Ad Privileged Identity Management', 'an optional tech field')
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

' loads the AzureAdPrivilegedIdentityManagement card
include('elements/azure/IdentityServiceColor/AzureAdPrivilegedIdentityManagement')
AzureAdPrivilegedIdentityManagementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAdPrivilegedIdentityManagement card
include('elements/azure/IdentityServiceColor/AzureAdPrivilegedIdentityManagement')
AzureAdPrivilegedIdentityManagementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
