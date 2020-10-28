# MaterialsKeyboard
```text
elements/materials/Hardware/MaterialsKeyboard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsKeyboard icon](../../../icons/materials/Hardware/MaterialsKeyboard.png) | ![MaterialsKeyboard element](MaterialsKeyboard.element.png) | ![MaterialsKeyboard card](MaterialsKeyboard.card.png) |
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

' loads the MaterialsKeyboard element
include('elements/materials/Hardware/MaterialsKeyboard')
MaterialsKeyboard('element', 'Keyboard', 'an optional tech field')
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

' loads the MaterialsKeyboard element
include('elements/materials/Hardware/MaterialsKeyboard')
MaterialsKeyboard('element', 'Keyboard', 'an optional tech field')
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

' loads the MaterialsKeyboard card
include('elements/materials/Hardware/MaterialsKeyboard')
MaterialsKeyboardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsKeyboard card
include('elements/materials/Hardware/MaterialsKeyboard')
MaterialsKeyboardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
