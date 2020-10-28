# MaterialsShoppingBasket
```text
elements/materials/Action/MaterialsShoppingBasket
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsShoppingBasket icon](../../../icons/materials/Action/MaterialsShoppingBasket.png) | ![MaterialsShoppingBasket element](MaterialsShoppingBasket.element.png) | ![MaterialsShoppingBasket card](MaterialsShoppingBasket.card.png) |
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

' loads the MaterialsShoppingBasket element
include('elements/materials/Action/MaterialsShoppingBasket')
MaterialsShoppingBasket('element', 'Shopping Basket', 'an optional tech field')
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

' loads the MaterialsShoppingBasket element
include('elements/materials/Action/MaterialsShoppingBasket')
MaterialsShoppingBasket('element', 'Shopping Basket', 'an optional tech field')
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

' loads the MaterialsShoppingBasket card
include('elements/materials/Action/MaterialsShoppingBasket')
MaterialsShoppingBasketCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsShoppingBasket card
include('elements/materials/Action/MaterialsShoppingBasket')
MaterialsShoppingBasketCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
