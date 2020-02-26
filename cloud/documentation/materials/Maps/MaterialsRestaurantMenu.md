# MaterialsRestaurantMenu
```text
elements/materials/Maps/MaterialsRestaurantMenu
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRestaurantMenu icon](../../../icons/materials/Maps/MaterialsRestaurantMenu.png) | ![MaterialsRestaurantMenu element](MaterialsRestaurantMenu.element.png) | ![MaterialsRestaurantMenu card](MaterialsRestaurantMenu.card.png) |
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

' loads the MaterialsRestaurantMenu element
include('elements/materials/Maps/MaterialsRestaurantMenu')
MaterialsRestaurantMenu('element', 'Restaurant Menu', 'an optional tech field')
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

' loads the MaterialsRestaurantMenu element
include('elements/materials/Maps/MaterialsRestaurantMenu')
MaterialsRestaurantMenu('element', 'Restaurant Menu', 'an optional tech field')
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

' loads the MaterialsRestaurantMenu card
include('elements/materials/Maps/MaterialsRestaurantMenu')
MaterialsRestaurantMenuCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRestaurantMenu card
include('elements/materials/Maps/MaterialsRestaurantMenu')
MaterialsRestaurantMenuCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
