# MaterialsDesktopWindows
```text
elements/materials/Hardware/MaterialsDesktopWindows
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDesktopWindows icon](../../../icons/materials/Hardware/MaterialsDesktopWindows.png) | ![MaterialsDesktopWindows element](MaterialsDesktopWindows.element.png) | ![MaterialsDesktopWindows card](MaterialsDesktopWindows.card.png) |
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

' loads the MaterialsDesktopWindows element
include('elements/materials/Hardware/MaterialsDesktopWindows')
MaterialsDesktopWindows('element', 'Desktop Windows', 'an optional tech field')
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

' loads the MaterialsDesktopWindows element
include('elements/materials/Hardware/MaterialsDesktopWindows')
MaterialsDesktopWindows('element', 'Desktop Windows', 'an optional tech field')
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

' loads the MaterialsDesktopWindows card
include('elements/materials/Hardware/MaterialsDesktopWindows')
MaterialsDesktopWindowsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDesktopWindows card
include('elements/materials/Hardware/MaterialsDesktopWindows')
MaterialsDesktopWindowsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
