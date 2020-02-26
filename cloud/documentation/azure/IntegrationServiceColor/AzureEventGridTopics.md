# AzureEventGridTopics
```text
elements/azure/IntegrationServiceColor/AzureEventGridTopics
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureEventGridTopics icon](../../../icons/azure/IntegrationServiceColor/AzureEventGridTopics.png) | ![AzureEventGridTopics element](AzureEventGridTopics.element.png) | ![AzureEventGridTopics card](AzureEventGridTopics.card.png) |
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

' loads the AzureEventGridTopics element
include('elements/azure/IntegrationServiceColor/AzureEventGridTopics')
AzureEventGridTopics('element', 'Event Grid Topics', 'an optional tech field')
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

' loads the AzureEventGridTopics element
include('elements/azure/IntegrationServiceColor/AzureEventGridTopics')
AzureEventGridTopics('element', 'Event Grid Topics', 'an optional tech field')
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

' loads the AzureEventGridTopics card
include('elements/azure/IntegrationServiceColor/AzureEventGridTopics')
AzureEventGridTopicsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureEventGridTopics card
include('elements/azure/IntegrationServiceColor/AzureEventGridTopics')
AzureEventGridTopicsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
