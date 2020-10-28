# AzureConnections
```text
elements/azure/NetworkingServiceColor/AzureConnections
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureConnections icon](../../../icons/azure/NetworkingServiceColor/AzureConnections.png) | ![AzureConnections element](AzureConnections.element.png) | ![AzureConnections card](AzureConnections.card.png) |
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

' loads the AzureConnections element
include('elements/azure/NetworkingServiceColor/AzureConnections')
AzureConnections('element', 'Connections', 'an optional tech field')
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

' loads the AzureConnections element
include('elements/azure/NetworkingServiceColor/AzureConnections')
AzureConnections('element', 'Connections', 'an optional tech field')
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

' loads the AzureConnections card
include('elements/azure/NetworkingServiceColor/AzureConnections')
AzureConnectionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureConnections card
include('elements/azure/NetworkingServiceColor/AzureConnections')
AzureConnectionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
