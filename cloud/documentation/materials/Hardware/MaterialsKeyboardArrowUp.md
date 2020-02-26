# MaterialsKeyboardArrowUp
```text
elements/materials/Hardware/MaterialsKeyboardArrowUp
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsKeyboardArrowUp icon](../../../icons/materials/Hardware/MaterialsKeyboardArrowUp.png) | ![MaterialsKeyboardArrowUp element](MaterialsKeyboardArrowUp.element.png) | ![MaterialsKeyboardArrowUp card](MaterialsKeyboardArrowUp.card.png) |
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

' loads the MaterialsKeyboardArrowUp element
include('elements/materials/Hardware/MaterialsKeyboardArrowUp')
MaterialsKeyboardArrowUp('element', 'Keyboard Arrow Up', 'an optional tech field')
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

' loads the MaterialsKeyboardArrowUp element
include('elements/materials/Hardware/MaterialsKeyboardArrowUp')
MaterialsKeyboardArrowUp('element', 'Keyboard Arrow Up', 'an optional tech field')
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

' loads the MaterialsKeyboardArrowUp card
include('elements/materials/Hardware/MaterialsKeyboardArrowUp')
MaterialsKeyboardArrowUpCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsKeyboardArrowUp card
include('elements/materials/Hardware/MaterialsKeyboardArrowUp')
MaterialsKeyboardArrowUpCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
