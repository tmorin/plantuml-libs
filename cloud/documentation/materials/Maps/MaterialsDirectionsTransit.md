# MaterialsDirectionsTransit
```text
elements/materials/Maps/MaterialsDirectionsTransit
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDirectionsTransit icon](../../../icons/materials/Maps/MaterialsDirectionsTransit.png) | ![MaterialsDirectionsTransit element](MaterialsDirectionsTransit.element.png) | ![MaterialsDirectionsTransit card](MaterialsDirectionsTransit.card.png) |
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

' loads the MaterialsDirectionsTransit element
include('elements/materials/Maps/MaterialsDirectionsTransit')
MaterialsDirectionsTransit('element', 'Directions Transit', 'an optional tech field')
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

' loads the MaterialsDirectionsTransit element
include('elements/materials/Maps/MaterialsDirectionsTransit')
MaterialsDirectionsTransit('element', 'Directions Transit', 'an optional tech field')
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

' loads the MaterialsDirectionsTransit card
include('elements/materials/Maps/MaterialsDirectionsTransit')
MaterialsDirectionsTransitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDirectionsTransit card
include('elements/materials/Maps/MaterialsDirectionsTransit')
MaterialsDirectionsTransitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
