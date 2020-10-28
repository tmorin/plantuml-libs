# MaterialsDirectionsBoat
```text
elements/materials/Maps/MaterialsDirectionsBoat
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDirectionsBoat icon](../../../icons/materials/Maps/MaterialsDirectionsBoat.png) | ![MaterialsDirectionsBoat element](MaterialsDirectionsBoat.element.png) | ![MaterialsDirectionsBoat card](MaterialsDirectionsBoat.card.png) |
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
include('styles/materials')

' loads the MaterialsDirectionsBoat element
include('elements/materials/Maps/MaterialsDirectionsBoat')
MaterialsDirectionsBoat('element', 'Directions Boat', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsDirectionsBoat element
include('elements/materials/Maps/MaterialsDirectionsBoat')
MaterialsDirectionsBoat('element', 'Directions Boat', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsDirectionsBoat card
include('elements/materials/Maps/MaterialsDirectionsBoat')
MaterialsDirectionsBoatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/materials')

' loads the MaterialsDirectionsBoat card
include('elements/materials/Maps/MaterialsDirectionsBoat')
MaterialsDirectionsBoatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
