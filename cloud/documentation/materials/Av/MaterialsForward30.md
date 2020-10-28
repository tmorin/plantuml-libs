# MaterialsForward30
```text
elements/materials/Av/MaterialsForward30
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsForward30 icon](../../../icons/materials/Av/MaterialsForward30.png) | ![MaterialsForward30 element](MaterialsForward30.element.png) | ![MaterialsForward30 card](MaterialsForward30.card.png) |
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

' loads the MaterialsForward30 element
include('elements/materials/Av/MaterialsForward30')
MaterialsForward30('element', 'Forward30', 'an optional tech field')
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

' loads the MaterialsForward30 element
include('elements/materials/Av/MaterialsForward30')
MaterialsForward30('element', 'Forward30', 'an optional tech field')
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

' loads the MaterialsForward30 card
include('elements/materials/Av/MaterialsForward30')
MaterialsForward30Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsForward30 card
include('elements/materials/Av/MaterialsForward30')
MaterialsForward30Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
