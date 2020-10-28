# MaterialsCompareArrows
```text
elements/materials/Action/MaterialsCompareArrows
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCompareArrows icon](../../../icons/materials/Action/MaterialsCompareArrows.png) | ![MaterialsCompareArrows element](MaterialsCompareArrows.element.png) | ![MaterialsCompareArrows card](MaterialsCompareArrows.card.png) |
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

' loads the MaterialsCompareArrows element
include('elements/materials/Action/MaterialsCompareArrows')
MaterialsCompareArrows('element', 'Compare Arrows', 'an optional tech field')
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

' loads the MaterialsCompareArrows element
include('elements/materials/Action/MaterialsCompareArrows')
MaterialsCompareArrows('element', 'Compare Arrows', 'an optional tech field')
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

' loads the MaterialsCompareArrows card
include('elements/materials/Action/MaterialsCompareArrows')
MaterialsCompareArrowsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCompareArrows card
include('elements/materials/Action/MaterialsCompareArrows')
MaterialsCompareArrowsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
