# MaterialsShoppingCart
```text
elements/materials/Action/MaterialsShoppingCart
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsShoppingCart icon](../../../icons/materials/Action/MaterialsShoppingCart.png) | ![MaterialsShoppingCart element](MaterialsShoppingCart.element.png) | ![MaterialsShoppingCart card](MaterialsShoppingCart.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsShoppingCart element
include('elements/materials/Action/MaterialsShoppingCart')
MaterialsShoppingCart('element', 'Shopping Cart', 'an optional tech field')
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

' loads the MaterialsShoppingCart element
include('elements/materials/Action/MaterialsShoppingCart')
MaterialsShoppingCart('element', 'Shopping Cart', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsShoppingCart card
include('elements/materials/Action/MaterialsShoppingCart')
MaterialsShoppingCartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsShoppingCart card
include('elements/materials/Action/MaterialsShoppingCart')
MaterialsShoppingCartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
