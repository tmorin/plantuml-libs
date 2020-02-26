# AzurePolicy
```text
elements/azure/ManagementAndGovernanceServiceColor/AzurePolicy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzurePolicy icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzurePolicy.png) | ![AzurePolicy element](AzurePolicy.element.png) | ![AzurePolicy card](AzurePolicy.card.png) |
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

' loads the AzurePolicy element
include('elements/azure/ManagementAndGovernanceServiceColor/AzurePolicy')
AzurePolicy('element', 'Policy', 'an optional tech field')
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

' loads the AzurePolicy element
include('elements/azure/ManagementAndGovernanceServiceColor/AzurePolicy')
AzurePolicy('element', 'Policy', 'an optional tech field')
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

' loads the AzurePolicy card
include('elements/azure/ManagementAndGovernanceServiceColor/AzurePolicy')
AzurePolicyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzurePolicy card
include('elements/azure/ManagementAndGovernanceServiceColor/AzurePolicy')
AzurePolicyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
