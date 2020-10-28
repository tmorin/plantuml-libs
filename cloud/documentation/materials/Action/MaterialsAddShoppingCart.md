# MaterialsAddShoppingCart
```text
elements/materials/Action/MaterialsAddShoppingCart
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAddShoppingCart icon](../../../icons/materials/Action/MaterialsAddShoppingCart.png) | ![MaterialsAddShoppingCart element](MaterialsAddShoppingCart.element.png) | ![MaterialsAddShoppingCart card](MaterialsAddShoppingCart.card.png) |
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

' loads the MaterialsAddShoppingCart element
include('elements/materials/Action/MaterialsAddShoppingCart')
MaterialsAddShoppingCart('element', 'Add Shopping Cart', 'an optional tech field')
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

' loads the MaterialsAddShoppingCart element
include('elements/materials/Action/MaterialsAddShoppingCart')
MaterialsAddShoppingCart('element', 'Add Shopping Cart', 'an optional tech field')
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

' loads the MaterialsAddShoppingCart card
include('elements/materials/Action/MaterialsAddShoppingCart')
MaterialsAddShoppingCartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAddShoppingCart card
include('elements/materials/Action/MaterialsAddShoppingCart')
MaterialsAddShoppingCartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
