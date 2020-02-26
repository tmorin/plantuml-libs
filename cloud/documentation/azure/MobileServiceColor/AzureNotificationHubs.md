# AzureNotificationHubs
```text
elements/azure/MobileServiceColor/AzureNotificationHubs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureNotificationHubs icon](../../../icons/azure/MobileServiceColor/AzureNotificationHubs.png) | ![AzureNotificationHubs element](AzureNotificationHubs.element.png) | ![AzureNotificationHubs card](AzureNotificationHubs.card.png) |
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

' loads the AzureNotificationHubs element
include('elements/azure/MobileServiceColor/AzureNotificationHubs')
AzureNotificationHubs('element', 'Notification Hubs', 'an optional tech field')
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

' loads the AzureNotificationHubs element
include('elements/azure/MobileServiceColor/AzureNotificationHubs')
AzureNotificationHubs('element', 'Notification Hubs', 'an optional tech field')
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

' loads the AzureNotificationHubs card
include('elements/azure/MobileServiceColor/AzureNotificationHubs')
AzureNotificationHubsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureNotificationHubs card
include('elements/azure/MobileServiceColor/AzureNotificationHubs')
AzureNotificationHubsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
