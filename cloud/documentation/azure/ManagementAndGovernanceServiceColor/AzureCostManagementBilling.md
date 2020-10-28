# AzureCostManagementBilling
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureCostManagementBilling
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCostManagementBilling icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureCostManagementBilling.png) | ![AzureCostManagementBilling element](AzureCostManagementBilling.element.png) | ![AzureCostManagementBilling card](AzureCostManagementBilling.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureCostManagementBilling element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureCostManagementBilling')
AzureCostManagementBilling('element', 'Cost Management Billing', 'an optional tech field')
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

' loads the AzureCostManagementBilling element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureCostManagementBilling')
AzureCostManagementBilling('element', 'Cost Management Billing', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureCostManagementBilling card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureCostManagementBilling')
AzureCostManagementBillingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCostManagementBilling card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureCostManagementBilling')
AzureCostManagementBillingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
