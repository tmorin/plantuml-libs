# MaterialsLocalDrink
```text
elements/materials/Maps/MaterialsLocalDrink
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalDrink icon](../../../icons/materials/Maps/MaterialsLocalDrink.png) | ![MaterialsLocalDrink element](MaterialsLocalDrink.element.png) | ![MaterialsLocalDrink card](MaterialsLocalDrink.card.png) |
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

' loads the MaterialsLocalDrink element
include('elements/materials/Maps/MaterialsLocalDrink')
MaterialsLocalDrink('element', 'Local Drink', 'an optional tech field')
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

' loads the MaterialsLocalDrink element
include('elements/materials/Maps/MaterialsLocalDrink')
MaterialsLocalDrink('element', 'Local Drink', 'an optional tech field')
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

' loads the MaterialsLocalDrink card
include('elements/materials/Maps/MaterialsLocalDrink')
MaterialsLocalDrinkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalDrink card
include('elements/materials/Maps/MaterialsLocalDrink')
MaterialsLocalDrinkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
