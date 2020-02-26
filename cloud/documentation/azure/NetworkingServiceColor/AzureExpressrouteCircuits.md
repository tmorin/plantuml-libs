# AzureExpressrouteCircuits
```text
elements/azure/NetworkingServiceColor/AzureExpressrouteCircuits
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureExpressrouteCircuits icon](../../../icons/azure/NetworkingServiceColor/AzureExpressrouteCircuits.png) | ![AzureExpressrouteCircuits element](AzureExpressrouteCircuits.element.png) | ![AzureExpressrouteCircuits card](AzureExpressrouteCircuits.card.png) |
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

' loads the AzureExpressrouteCircuits element
include('elements/azure/NetworkingServiceColor/AzureExpressrouteCircuits')
AzureExpressrouteCircuits('element', 'Expressroute Circuits', 'an optional tech field')
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

' loads the AzureExpressrouteCircuits element
include('elements/azure/NetworkingServiceColor/AzureExpressrouteCircuits')
AzureExpressrouteCircuits('element', 'Expressroute Circuits', 'an optional tech field')
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

' loads the AzureExpressrouteCircuits card
include('elements/azure/NetworkingServiceColor/AzureExpressrouteCircuits')
AzureExpressrouteCircuitsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureExpressrouteCircuits card
include('elements/azure/NetworkingServiceColor/AzureExpressrouteCircuits')
AzureExpressrouteCircuitsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
