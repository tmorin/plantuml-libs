# MaterialsLocalMall
```text
elements/materials/Maps/MaterialsLocalMall
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalMall icon](../../../icons/materials/Maps/MaterialsLocalMall.png) | ![MaterialsLocalMall element](MaterialsLocalMall.element.png) | ![MaterialsLocalMall card](MaterialsLocalMall.card.png) |
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

' loads the MaterialsLocalMall element
include('elements/materials/Maps/MaterialsLocalMall')
MaterialsLocalMall('element', 'Local Mall', 'an optional tech field')
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

' loads the MaterialsLocalMall element
include('elements/materials/Maps/MaterialsLocalMall')
MaterialsLocalMall('element', 'Local Mall', 'an optional tech field')
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

' loads the MaterialsLocalMall card
include('elements/materials/Maps/MaterialsLocalMall')
MaterialsLocalMallCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalMall card
include('elements/materials/Maps/MaterialsLocalMall')
MaterialsLocalMallCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
