# AzureServiceBus
```text
elements/azure/IntegrationServiceColor/AzureServiceBus
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureServiceBus icon](../../../icons/azure/IntegrationServiceColor/AzureServiceBus.png) | ![AzureServiceBus element](AzureServiceBus.element.png) | ![AzureServiceBus card](AzureServiceBus.card.png) |
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

' loads the AzureServiceBus element
include('elements/azure/IntegrationServiceColor/AzureServiceBus')
AzureServiceBus('element', 'Service Bus', 'an optional tech field')
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

' loads the AzureServiceBus element
include('elements/azure/IntegrationServiceColor/AzureServiceBus')
AzureServiceBus('element', 'Service Bus', 'an optional tech field')
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

' loads the AzureServiceBus card
include('elements/azure/IntegrationServiceColor/AzureServiceBus')
AzureServiceBusCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureServiceBus card
include('elements/azure/IntegrationServiceColor/AzureServiceBus')
AzureServiceBusCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
