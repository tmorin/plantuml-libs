# AzureIntegrationAccounts
```text
elements/azure/IntegrationServiceColor/AzureIntegrationAccounts
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureIntegrationAccounts icon](../../../icons/azure/IntegrationServiceColor/AzureIntegrationAccounts.png) | ![AzureIntegrationAccounts element](AzureIntegrationAccounts.element.png) | ![AzureIntegrationAccounts card](AzureIntegrationAccounts.card.png) |
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

' loads the AzureIntegrationAccounts element
include('elements/azure/IntegrationServiceColor/AzureIntegrationAccounts')
AzureIntegrationAccounts('element', 'Integration Accounts', 'an optional tech field')
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

' loads the AzureIntegrationAccounts element
include('elements/azure/IntegrationServiceColor/AzureIntegrationAccounts')
AzureIntegrationAccounts('element', 'Integration Accounts', 'an optional tech field')
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

' loads the AzureIntegrationAccounts card
include('elements/azure/IntegrationServiceColor/AzureIntegrationAccounts')
AzureIntegrationAccountsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureIntegrationAccounts card
include('elements/azure/IntegrationServiceColor/AzureIntegrationAccounts')
AzureIntegrationAccountsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
