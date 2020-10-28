# MaterialsKeyboardCapslock
```text
elements/materials/Hardware/MaterialsKeyboardCapslock
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsKeyboardCapslock icon](../../../icons/materials/Hardware/MaterialsKeyboardCapslock.png) | ![MaterialsKeyboardCapslock element](MaterialsKeyboardCapslock.element.png) | ![MaterialsKeyboardCapslock card](MaterialsKeyboardCapslock.card.png) |
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

' loads the MaterialsKeyboardCapslock element
include('elements/materials/Hardware/MaterialsKeyboardCapslock')
MaterialsKeyboardCapslock('element', 'Keyboard Capslock', 'an optional tech field')
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

' loads the MaterialsKeyboardCapslock element
include('elements/materials/Hardware/MaterialsKeyboardCapslock')
MaterialsKeyboardCapslock('element', 'Keyboard Capslock', 'an optional tech field')
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

' loads the MaterialsKeyboardCapslock card
include('elements/materials/Hardware/MaterialsKeyboardCapslock')
MaterialsKeyboardCapslockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsKeyboardCapslock card
include('elements/materials/Hardware/MaterialsKeyboardCapslock')
MaterialsKeyboardCapslockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
