# MaterialsLocalOffer
```text
elements/materials/Maps/MaterialsLocalOffer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalOffer icon](../../../icons/materials/Maps/MaterialsLocalOffer.png) | ![MaterialsLocalOffer element](MaterialsLocalOffer.element.png) | ![MaterialsLocalOffer card](MaterialsLocalOffer.card.png) |
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

' loads the MaterialsLocalOffer element
include('elements/materials/Maps/MaterialsLocalOffer')
MaterialsLocalOffer('element', 'Local Offer', 'an optional tech field')
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

' loads the MaterialsLocalOffer element
include('elements/materials/Maps/MaterialsLocalOffer')
MaterialsLocalOffer('element', 'Local Offer', 'an optional tech field')
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

' loads the MaterialsLocalOffer card
include('elements/materials/Maps/MaterialsLocalOffer')
MaterialsLocalOfferCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalOffer card
include('elements/materials/Maps/MaterialsLocalOffer')
MaterialsLocalOfferCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
