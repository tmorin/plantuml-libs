# AzureIntegrationServiceEnvironments
```text
elements/azure/IntegrationServiceColor/AzureIntegrationServiceEnvironments
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureIntegrationServiceEnvironments icon](../../../icons/azure/IntegrationServiceColor/AzureIntegrationServiceEnvironments.png) | ![AzureIntegrationServiceEnvironments element](AzureIntegrationServiceEnvironments.element.png) | ![AzureIntegrationServiceEnvironments card](AzureIntegrationServiceEnvironments.card.png) |
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

' loads the AzureIntegrationServiceEnvironments element
include('elements/azure/IntegrationServiceColor/AzureIntegrationServiceEnvironments')
AzureIntegrationServiceEnvironments('element', 'Integration Service Environments', 'an optional tech field')
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

' loads the AzureIntegrationServiceEnvironments element
include('elements/azure/IntegrationServiceColor/AzureIntegrationServiceEnvironments')
AzureIntegrationServiceEnvironments('element', 'Integration Service Environments', 'an optional tech field')
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

' loads the AzureIntegrationServiceEnvironments card
include('elements/azure/IntegrationServiceColor/AzureIntegrationServiceEnvironments')
AzureIntegrationServiceEnvironmentsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureIntegrationServiceEnvironments card
include('elements/azure/IntegrationServiceColor/AzureIntegrationServiceEnvironments')
AzureIntegrationServiceEnvironmentsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
