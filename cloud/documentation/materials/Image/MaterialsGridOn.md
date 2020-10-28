# MaterialsGridOn
```text
elements/materials/Image/MaterialsGridOn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsGridOn icon](../../../icons/materials/Image/MaterialsGridOn.png) | ![MaterialsGridOn element](MaterialsGridOn.element.png) | ![MaterialsGridOn card](MaterialsGridOn.card.png) |
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

' loads the MaterialsGridOn element
include('elements/materials/Image/MaterialsGridOn')
MaterialsGridOn('element', 'Grid On', 'an optional tech field')
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

' loads the MaterialsGridOn element
include('elements/materials/Image/MaterialsGridOn')
MaterialsGridOn('element', 'Grid On', 'an optional tech field')
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

' loads the MaterialsGridOn card
include('elements/materials/Image/MaterialsGridOn')
MaterialsGridOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsGridOn card
include('elements/materials/Image/MaterialsGridOn')
MaterialsGridOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
