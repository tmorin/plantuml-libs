# AzureLogAnalyticsWorkspaces
```text
elements/azure/AnalyticsServiceColor/AzureLogAnalyticsWorkspaces
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLogAnalyticsWorkspaces icon](../../../icons/azure/AnalyticsServiceColor/AzureLogAnalyticsWorkspaces.png) | ![AzureLogAnalyticsWorkspaces element](AzureLogAnalyticsWorkspaces.element.png) | ![AzureLogAnalyticsWorkspaces card](AzureLogAnalyticsWorkspaces.card.png) |
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

' loads the AzureLogAnalyticsWorkspaces element
include('elements/azure/AnalyticsServiceColor/AzureLogAnalyticsWorkspaces')
AzureLogAnalyticsWorkspaces('element', 'Log Analytics Workspaces', 'an optional tech field')
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

' loads the AzureLogAnalyticsWorkspaces element
include('elements/azure/AnalyticsServiceColor/AzureLogAnalyticsWorkspaces')
AzureLogAnalyticsWorkspaces('element', 'Log Analytics Workspaces', 'an optional tech field')
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

' loads the AzureLogAnalyticsWorkspaces card
include('elements/azure/AnalyticsServiceColor/AzureLogAnalyticsWorkspaces')
AzureLogAnalyticsWorkspacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLogAnalyticsWorkspaces card
include('elements/azure/AnalyticsServiceColor/AzureLogAnalyticsWorkspaces')
AzureLogAnalyticsWorkspacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
