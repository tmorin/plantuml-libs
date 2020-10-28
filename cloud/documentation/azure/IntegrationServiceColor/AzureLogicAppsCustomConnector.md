# AzureLogicAppsCustomConnector
```text
elements/azure/IntegrationServiceColor/AzureLogicAppsCustomConnector
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLogicAppsCustomConnector icon](../../../icons/azure/IntegrationServiceColor/AzureLogicAppsCustomConnector.png) | ![AzureLogicAppsCustomConnector element](AzureLogicAppsCustomConnector.element.png) | ![AzureLogicAppsCustomConnector card](AzureLogicAppsCustomConnector.card.png) |
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

' loads the AzureLogicAppsCustomConnector element
include('elements/azure/IntegrationServiceColor/AzureLogicAppsCustomConnector')
AzureLogicAppsCustomConnector('element', 'Logic Apps Custom Connector', 'an optional tech field')
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

' loads the AzureLogicAppsCustomConnector element
include('elements/azure/IntegrationServiceColor/AzureLogicAppsCustomConnector')
AzureLogicAppsCustomConnector('element', 'Logic Apps Custom Connector', 'an optional tech field')
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

' loads the AzureLogicAppsCustomConnector card
include('elements/azure/IntegrationServiceColor/AzureLogicAppsCustomConnector')
AzureLogicAppsCustomConnectorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLogicAppsCustomConnector card
include('elements/azure/IntegrationServiceColor/AzureLogicAppsCustomConnector')
AzureLogicAppsCustomConnectorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
