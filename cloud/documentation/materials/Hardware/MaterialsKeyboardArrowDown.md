# MaterialsKeyboardArrowDown
```text
elements/materials/Hardware/MaterialsKeyboardArrowDown
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsKeyboardArrowDown icon](../../../icons/materials/Hardware/MaterialsKeyboardArrowDown.png) | ![MaterialsKeyboardArrowDown element](MaterialsKeyboardArrowDown.element.png) | ![MaterialsKeyboardArrowDown card](MaterialsKeyboardArrowDown.card.png) |
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

' loads the MaterialsKeyboardArrowDown element
include('elements/materials/Hardware/MaterialsKeyboardArrowDown')
MaterialsKeyboardArrowDown('element', 'Keyboard Arrow Down', 'an optional tech field')
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

' loads the MaterialsKeyboardArrowDown element
include('elements/materials/Hardware/MaterialsKeyboardArrowDown')
MaterialsKeyboardArrowDown('element', 'Keyboard Arrow Down', 'an optional tech field')
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

' loads the MaterialsKeyboardArrowDown card
include('elements/materials/Hardware/MaterialsKeyboardArrowDown')
MaterialsKeyboardArrowDownCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsKeyboardArrowDown card
include('elements/materials/Hardware/MaterialsKeyboardArrowDown')
MaterialsKeyboardArrowDownCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
