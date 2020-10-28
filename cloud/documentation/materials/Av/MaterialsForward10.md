# MaterialsForward10
```text
elements/materials/Av/MaterialsForward10
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsForward10 icon](../../../icons/materials/Av/MaterialsForward10.png) | ![MaterialsForward10 element](MaterialsForward10.element.png) | ![MaterialsForward10 card](MaterialsForward10.card.png) |
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

' loads the MaterialsForward10 element
include('elements/materials/Av/MaterialsForward10')
MaterialsForward10('element', 'Forward10', 'an optional tech field')
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

' loads the MaterialsForward10 element
include('elements/materials/Av/MaterialsForward10')
MaterialsForward10('element', 'Forward10', 'an optional tech field')
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

' loads the MaterialsForward10 card
include('elements/materials/Av/MaterialsForward10')
MaterialsForward10Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsForward10 card
include('elements/materials/Av/MaterialsForward10')
MaterialsForward10Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
