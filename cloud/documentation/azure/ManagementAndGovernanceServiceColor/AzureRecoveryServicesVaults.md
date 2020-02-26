# AzureRecoveryServicesVaults
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureRecoveryServicesVaults
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureRecoveryServicesVaults icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureRecoveryServicesVaults.png) | ![AzureRecoveryServicesVaults element](AzureRecoveryServicesVaults.element.png) | ![AzureRecoveryServicesVaults card](AzureRecoveryServicesVaults.card.png) |
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

' loads the AzureRecoveryServicesVaults element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureRecoveryServicesVaults')
AzureRecoveryServicesVaults('element', 'Recovery Services Vaults', 'an optional tech field')
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

' loads the AzureRecoveryServicesVaults element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureRecoveryServicesVaults')
AzureRecoveryServicesVaults('element', 'Recovery Services Vaults', 'an optional tech field')
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

' loads the AzureRecoveryServicesVaults card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureRecoveryServicesVaults')
AzureRecoveryServicesVaultsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureRecoveryServicesVaults card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureRecoveryServicesVaults')
AzureRecoveryServicesVaultsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
