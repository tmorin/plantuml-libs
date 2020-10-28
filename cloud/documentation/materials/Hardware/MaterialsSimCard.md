# MaterialsSimCard
```text
elements/materials/Hardware/MaterialsSimCard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSimCard icon](../../../icons/materials/Hardware/MaterialsSimCard.png) | ![MaterialsSimCard element](MaterialsSimCard.element.png) | ![MaterialsSimCard card](MaterialsSimCard.card.png) |
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

' loads the MaterialsSimCard element
include('elements/materials/Hardware/MaterialsSimCard')
MaterialsSimCard('element', 'Sim Card', 'an optional tech field')
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

' loads the MaterialsSimCard element
include('elements/materials/Hardware/MaterialsSimCard')
MaterialsSimCard('element', 'Sim Card', 'an optional tech field')
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

' loads the MaterialsSimCard card
include('elements/materials/Hardware/MaterialsSimCard')
MaterialsSimCardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSimCard card
include('elements/materials/Hardware/MaterialsSimCard')
MaterialsSimCardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
