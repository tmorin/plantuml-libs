# AzureIdentityGovernance
```text
elements/azure/IdentityServiceColor/AzureIdentityGovernance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureIdentityGovernance icon](../../../icons/azure/IdentityServiceColor/AzureIdentityGovernance.png) | ![AzureIdentityGovernance element](AzureIdentityGovernance.element.png) | ![AzureIdentityGovernance card](AzureIdentityGovernance.card.png) |
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

' loads the AzureIdentityGovernance element
include('elements/azure/IdentityServiceColor/AzureIdentityGovernance')
AzureIdentityGovernance('element', 'Identity Governance', 'an optional tech field')
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

' loads the AzureIdentityGovernance element
include('elements/azure/IdentityServiceColor/AzureIdentityGovernance')
AzureIdentityGovernance('element', 'Identity Governance', 'an optional tech field')
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

' loads the AzureIdentityGovernance card
include('elements/azure/IdentityServiceColor/AzureIdentityGovernance')
AzureIdentityGovernanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureIdentityGovernance card
include('elements/azure/IdentityServiceColor/AzureIdentityGovernance')
AzureIdentityGovernanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
