# MaterialsTimer10
```text
elements/materials/Image/MaterialsTimer10
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTimer10 icon](../../../icons/materials/Image/MaterialsTimer10.png) | ![MaterialsTimer10 element](MaterialsTimer10.element.png) | ![MaterialsTimer10 card](MaterialsTimer10.card.png) |
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

' loads the MaterialsTimer10 element
include('elements/materials/Image/MaterialsTimer10')
MaterialsTimer10('element', 'Timer10', 'an optional tech field')
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

' loads the MaterialsTimer10 element
include('elements/materials/Image/MaterialsTimer10')
MaterialsTimer10('element', 'Timer10', 'an optional tech field')
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

' loads the MaterialsTimer10 card
include('elements/materials/Image/MaterialsTimer10')
MaterialsTimer10Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTimer10 card
include('elements/materials/Image/MaterialsTimer10')
MaterialsTimer10Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
