# AzureApiConnections
```text
elements/azure/WebServiceColor/AzureApiConnections
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureApiConnections icon](../../../icons/azure/WebServiceColor/AzureApiConnections.png) | ![AzureApiConnections element](AzureApiConnections.element.png) | ![AzureApiConnections card](AzureApiConnections.card.png) |
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

' loads the AzureApiConnections element
include('elements/azure/WebServiceColor/AzureApiConnections')
AzureApiConnections('element', 'Api Connections', 'an optional tech field')
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

' loads the AzureApiConnections element
include('elements/azure/WebServiceColor/AzureApiConnections')
AzureApiConnections('element', 'Api Connections', 'an optional tech field')
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

' loads the AzureApiConnections card
include('elements/azure/WebServiceColor/AzureApiConnections')
AzureApiConnectionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureApiConnections card
include('elements/azure/WebServiceColor/AzureApiConnections')
AzureApiConnectionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
