# MaterialsUnfoldLess
```text
elements/materials/Navigation/MaterialsUnfoldLess
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsUnfoldLess icon](../../../icons/materials/Navigation/MaterialsUnfoldLess.png) | ![MaterialsUnfoldLess element](MaterialsUnfoldLess.element.png) | ![MaterialsUnfoldLess card](MaterialsUnfoldLess.card.png) |
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

' loads the MaterialsUnfoldLess element
include('elements/materials/Navigation/MaterialsUnfoldLess')
MaterialsUnfoldLess('element', 'Unfold Less', 'an optional tech field')
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

' loads the MaterialsUnfoldLess element
include('elements/materials/Navigation/MaterialsUnfoldLess')
MaterialsUnfoldLess('element', 'Unfold Less', 'an optional tech field')
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

' loads the MaterialsUnfoldLess card
include('elements/materials/Navigation/MaterialsUnfoldLess')
MaterialsUnfoldLessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsUnfoldLess card
include('elements/materials/Navigation/MaterialsUnfoldLess')
MaterialsUnfoldLessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
