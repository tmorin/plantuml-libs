# AzureAutomationAccounts
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureAutomationAccounts
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAutomationAccounts icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureAutomationAccounts.png) | ![AzureAutomationAccounts element](AzureAutomationAccounts.element.png) | ![AzureAutomationAccounts card](AzureAutomationAccounts.card.png) |
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

' loads the AzureAutomationAccounts element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureAutomationAccounts')
AzureAutomationAccounts('element', 'Automation Accounts', 'an optional tech field')
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

' loads the AzureAutomationAccounts element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureAutomationAccounts')
AzureAutomationAccounts('element', 'Automation Accounts', 'an optional tech field')
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

' loads the AzureAutomationAccounts card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureAutomationAccounts')
AzureAutomationAccountsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAutomationAccounts card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureAutomationAccounts')
AzureAutomationAccountsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
