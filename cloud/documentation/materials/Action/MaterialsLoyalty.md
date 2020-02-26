# MaterialsLoyalty
```text
elements/materials/Action/MaterialsLoyalty
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLoyalty icon](../../../icons/materials/Action/MaterialsLoyalty.png) | ![MaterialsLoyalty element](MaterialsLoyalty.element.png) | ![MaterialsLoyalty card](MaterialsLoyalty.card.png) |
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

' loads the MaterialsLoyalty element
include('elements/materials/Action/MaterialsLoyalty')
MaterialsLoyalty('element', 'Loyalty', 'an optional tech field')
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

' loads the MaterialsLoyalty element
include('elements/materials/Action/MaterialsLoyalty')
MaterialsLoyalty('element', 'Loyalty', 'an optional tech field')
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

' loads the MaterialsLoyalty card
include('elements/materials/Action/MaterialsLoyalty')
MaterialsLoyaltyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLoyalty card
include('elements/materials/Action/MaterialsLoyalty')
MaterialsLoyaltyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
