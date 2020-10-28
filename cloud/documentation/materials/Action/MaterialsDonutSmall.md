# MaterialsDonutSmall
```text
elements/materials/Action/MaterialsDonutSmall
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDonutSmall icon](../../../icons/materials/Action/MaterialsDonutSmall.png) | ![MaterialsDonutSmall element](MaterialsDonutSmall.element.png) | ![MaterialsDonutSmall card](MaterialsDonutSmall.card.png) |
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

' loads the MaterialsDonutSmall element
include('elements/materials/Action/MaterialsDonutSmall')
MaterialsDonutSmall('element', 'Donut Small', 'an optional tech field')
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

' loads the MaterialsDonutSmall element
include('elements/materials/Action/MaterialsDonutSmall')
MaterialsDonutSmall('element', 'Donut Small', 'an optional tech field')
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

' loads the MaterialsDonutSmall card
include('elements/materials/Action/MaterialsDonutSmall')
MaterialsDonutSmallCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDonutSmall card
include('elements/materials/Action/MaterialsDonutSmall')
MaterialsDonutSmallCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
