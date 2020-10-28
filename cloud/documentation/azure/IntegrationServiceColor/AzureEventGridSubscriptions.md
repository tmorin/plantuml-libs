# AzureEventGridSubscriptions
```text
elements/azure/IntegrationServiceColor/AzureEventGridSubscriptions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureEventGridSubscriptions icon](../../../icons/azure/IntegrationServiceColor/AzureEventGridSubscriptions.png) | ![AzureEventGridSubscriptions element](AzureEventGridSubscriptions.element.png) | ![AzureEventGridSubscriptions card](AzureEventGridSubscriptions.card.png) |
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

' loads the AzureEventGridSubscriptions element
include('elements/azure/IntegrationServiceColor/AzureEventGridSubscriptions')
AzureEventGridSubscriptions('element', 'Event Grid Subscriptions', 'an optional tech field')
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

' loads the AzureEventGridSubscriptions element
include('elements/azure/IntegrationServiceColor/AzureEventGridSubscriptions')
AzureEventGridSubscriptions('element', 'Event Grid Subscriptions', 'an optional tech field')
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

' loads the AzureEventGridSubscriptions card
include('elements/azure/IntegrationServiceColor/AzureEventGridSubscriptions')
AzureEventGridSubscriptionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureEventGridSubscriptions card
include('elements/azure/IntegrationServiceColor/AzureEventGridSubscriptions')
AzureEventGridSubscriptionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
