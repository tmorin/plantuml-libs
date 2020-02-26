# MaterialsNetwork
```text
elements/materials/MaterialsNetwork
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNetwork icon](../../icons/materials/MaterialsNetwork.png) | ![MaterialsNetwork element](MaterialsNetwork.element.png) | ![MaterialsNetwork card](MaterialsNetwork.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsNetwork element
include('elements/materials/MaterialsNetwork')
MaterialsNetwork('element', 'Network', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the MaterialsNetwork element
include('elements/materials/MaterialsNetwork')
MaterialsNetwork('element', 'Network', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsNetwork card
include('elements/materials/MaterialsNetwork')
MaterialsNetworkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the MaterialsNetwork card
include('elements/materials/MaterialsNetwork')
MaterialsNetworkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
