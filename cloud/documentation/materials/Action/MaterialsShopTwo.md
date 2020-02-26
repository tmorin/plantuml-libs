# MaterialsShopTwo
```text
elements/materials/Action/MaterialsShopTwo
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsShopTwo icon](../../../icons/materials/Action/MaterialsShopTwo.png) | ![MaterialsShopTwo element](MaterialsShopTwo.element.png) | ![MaterialsShopTwo card](MaterialsShopTwo.card.png) |
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

' loads the MaterialsShopTwo element
include('elements/materials/Action/MaterialsShopTwo')
MaterialsShopTwo('element', 'Shop Two', 'an optional tech field')
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

' loads the MaterialsShopTwo element
include('elements/materials/Action/MaterialsShopTwo')
MaterialsShopTwo('element', 'Shop Two', 'an optional tech field')
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

' loads the MaterialsShopTwo card
include('elements/materials/Action/MaterialsShopTwo')
MaterialsShopTwoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsShopTwo card
include('elements/materials/Action/MaterialsShopTwo')
MaterialsShopTwoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
