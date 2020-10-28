# AzureLogicApps
```text
elements/azure/IntegrationServiceColor/AzureLogicApps
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLogicApps icon](../../../icons/azure/IntegrationServiceColor/AzureLogicApps.png) | ![AzureLogicApps element](AzureLogicApps.element.png) | ![AzureLogicApps card](AzureLogicApps.card.png) |
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

' loads the AzureLogicApps element
include('elements/azure/IntegrationServiceColor/AzureLogicApps')
AzureLogicApps('element', 'Logic Apps', 'an optional tech field')
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

' loads the AzureLogicApps element
include('elements/azure/IntegrationServiceColor/AzureLogicApps')
AzureLogicApps('element', 'Logic Apps', 'an optional tech field')
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

' loads the AzureLogicApps card
include('elements/azure/IntegrationServiceColor/AzureLogicApps')
AzureLogicAppsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLogicApps card
include('elements/azure/IntegrationServiceColor/AzureLogicApps')
AzureLogicAppsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
