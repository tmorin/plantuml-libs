# MaterialsLeakRemove
```text
elements/materials/Image/MaterialsLeakRemove
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLeakRemove icon](../../../icons/materials/Image/MaterialsLeakRemove.png) | ![MaterialsLeakRemove element](MaterialsLeakRemove.element.png) | ![MaterialsLeakRemove card](MaterialsLeakRemove.card.png) |
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

' loads the MaterialsLeakRemove element
include('elements/materials/Image/MaterialsLeakRemove')
MaterialsLeakRemove('element', 'Leak Remove', 'an optional tech field')
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

' loads the MaterialsLeakRemove element
include('elements/materials/Image/MaterialsLeakRemove')
MaterialsLeakRemove('element', 'Leak Remove', 'an optional tech field')
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

' loads the MaterialsLeakRemove card
include('elements/materials/Image/MaterialsLeakRemove')
MaterialsLeakRemoveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLeakRemove card
include('elements/materials/Image/MaterialsLeakRemove')
MaterialsLeakRemoveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
