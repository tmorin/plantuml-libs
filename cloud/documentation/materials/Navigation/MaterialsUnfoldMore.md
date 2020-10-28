# MaterialsUnfoldMore
```text
elements/materials/Navigation/MaterialsUnfoldMore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsUnfoldMore icon](../../../icons/materials/Navigation/MaterialsUnfoldMore.png) | ![MaterialsUnfoldMore element](MaterialsUnfoldMore.element.png) | ![MaterialsUnfoldMore card](MaterialsUnfoldMore.card.png) |
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

' loads the MaterialsUnfoldMore element
include('elements/materials/Navigation/MaterialsUnfoldMore')
MaterialsUnfoldMore('element', 'Unfold More', 'an optional tech field')
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

' loads the MaterialsUnfoldMore element
include('elements/materials/Navigation/MaterialsUnfoldMore')
MaterialsUnfoldMore('element', 'Unfold More', 'an optional tech field')
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

' loads the MaterialsUnfoldMore card
include('elements/materials/Navigation/MaterialsUnfoldMore')
MaterialsUnfoldMoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsUnfoldMore card
include('elements/materials/Navigation/MaterialsUnfoldMore')
MaterialsUnfoldMoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
