# MaterialsCardGiftcard
```text
elements/materials/Action/MaterialsCardGiftcard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCardGiftcard icon](../../../icons/materials/Action/MaterialsCardGiftcard.png) | ![MaterialsCardGiftcard element](MaterialsCardGiftcard.element.png) | ![MaterialsCardGiftcard card](MaterialsCardGiftcard.card.png) |
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

' loads the MaterialsCardGiftcard element
include('elements/materials/Action/MaterialsCardGiftcard')
MaterialsCardGiftcard('element', 'Card Giftcard', 'an optional tech field')
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

' loads the MaterialsCardGiftcard element
include('elements/materials/Action/MaterialsCardGiftcard')
MaterialsCardGiftcard('element', 'Card Giftcard', 'an optional tech field')
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

' loads the MaterialsCardGiftcard card
include('elements/materials/Action/MaterialsCardGiftcard')
MaterialsCardGiftcardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCardGiftcard card
include('elements/materials/Action/MaterialsCardGiftcard')
MaterialsCardGiftcardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
