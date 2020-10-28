# MaterialsDesktopMac
```text
elements/materials/Hardware/MaterialsDesktopMac
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDesktopMac icon](../../../icons/materials/Hardware/MaterialsDesktopMac.png) | ![MaterialsDesktopMac element](MaterialsDesktopMac.element.png) | ![MaterialsDesktopMac card](MaterialsDesktopMac.card.png) |
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

' loads the MaterialsDesktopMac element
include('elements/materials/Hardware/MaterialsDesktopMac')
MaterialsDesktopMac('element', 'Desktop Mac', 'an optional tech field')
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

' loads the MaterialsDesktopMac element
include('elements/materials/Hardware/MaterialsDesktopMac')
MaterialsDesktopMac('element', 'Desktop Mac', 'an optional tech field')
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

' loads the MaterialsDesktopMac card
include('elements/materials/Hardware/MaterialsDesktopMac')
MaterialsDesktopMacCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDesktopMac card
include('elements/materials/Hardware/MaterialsDesktopMac')
MaterialsDesktopMacCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
