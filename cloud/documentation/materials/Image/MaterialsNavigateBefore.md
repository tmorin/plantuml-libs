# MaterialsNavigateBefore
```text
elements/materials/Image/MaterialsNavigateBefore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNavigateBefore icon](../../../icons/materials/Image/MaterialsNavigateBefore.png) | ![MaterialsNavigateBefore element](MaterialsNavigateBefore.element.png) | ![MaterialsNavigateBefore card](MaterialsNavigateBefore.card.png) |
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

' loads the MaterialsNavigateBefore element
include('elements/materials/Image/MaterialsNavigateBefore')
MaterialsNavigateBefore('element', 'Navigate Before', 'an optional tech field')
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

' loads the MaterialsNavigateBefore element
include('elements/materials/Image/MaterialsNavigateBefore')
MaterialsNavigateBefore('element', 'Navigate Before', 'an optional tech field')
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

' loads the MaterialsNavigateBefore card
include('elements/materials/Image/MaterialsNavigateBefore')
MaterialsNavigateBeforeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsNavigateBefore card
include('elements/materials/Image/MaterialsNavigateBefore')
MaterialsNavigateBeforeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
