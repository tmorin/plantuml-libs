# MaterialsKeyboardTab
```text
elements/materials/Hardware/MaterialsKeyboardTab
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsKeyboardTab icon](../../../icons/materials/Hardware/MaterialsKeyboardTab.png) | ![MaterialsKeyboardTab element](MaterialsKeyboardTab.element.png) | ![MaterialsKeyboardTab card](MaterialsKeyboardTab.card.png) |
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

' loads the MaterialsKeyboardTab element
include('elements/materials/Hardware/MaterialsKeyboardTab')
MaterialsKeyboardTab('element', 'Keyboard Tab', 'an optional tech field')
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

' loads the MaterialsKeyboardTab element
include('elements/materials/Hardware/MaterialsKeyboardTab')
MaterialsKeyboardTab('element', 'Keyboard Tab', 'an optional tech field')
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

' loads the MaterialsKeyboardTab card
include('elements/materials/Hardware/MaterialsKeyboardTab')
MaterialsKeyboardTabCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsKeyboardTab card
include('elements/materials/Hardware/MaterialsKeyboardTab')
MaterialsKeyboardTabCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
