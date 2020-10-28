# MaterialsGamepad
```text
elements/materials/Hardware/MaterialsGamepad
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsGamepad icon](../../../icons/materials/Hardware/MaterialsGamepad.png) | ![MaterialsGamepad element](MaterialsGamepad.element.png) | ![MaterialsGamepad card](MaterialsGamepad.card.png) |
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

' loads the MaterialsGamepad element
include('elements/materials/Hardware/MaterialsGamepad')
MaterialsGamepad('element', 'Gamepad', 'an optional tech field')
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

' loads the MaterialsGamepad element
include('elements/materials/Hardware/MaterialsGamepad')
MaterialsGamepad('element', 'Gamepad', 'an optional tech field')
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

' loads the MaterialsGamepad card
include('elements/materials/Hardware/MaterialsGamepad')
MaterialsGamepadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsGamepad card
include('elements/materials/Hardware/MaterialsGamepad')
MaterialsGamepadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
