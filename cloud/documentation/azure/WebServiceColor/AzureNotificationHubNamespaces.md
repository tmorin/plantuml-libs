# AzureNotificationHubNamespaces
```text
elements/azure/WebServiceColor/AzureNotificationHubNamespaces
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureNotificationHubNamespaces icon](../../../icons/azure/WebServiceColor/AzureNotificationHubNamespaces.png) | ![AzureNotificationHubNamespaces element](AzureNotificationHubNamespaces.element.png) | ![AzureNotificationHubNamespaces card](AzureNotificationHubNamespaces.card.png) |
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

' loads the AzureNotificationHubNamespaces element
include('elements/azure/WebServiceColor/AzureNotificationHubNamespaces')
AzureNotificationHubNamespaces('element', 'Notification Hub Namespaces', 'an optional tech field')
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

' loads the AzureNotificationHubNamespaces element
include('elements/azure/WebServiceColor/AzureNotificationHubNamespaces')
AzureNotificationHubNamespaces('element', 'Notification Hub Namespaces', 'an optional tech field')
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

' loads the AzureNotificationHubNamespaces card
include('elements/azure/WebServiceColor/AzureNotificationHubNamespaces')
AzureNotificationHubNamespacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureNotificationHubNamespaces card
include('elements/azure/WebServiceColor/AzureNotificationHubNamespaces')
AzureNotificationHubNamespacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
