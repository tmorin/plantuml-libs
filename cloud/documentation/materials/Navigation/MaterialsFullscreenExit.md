# MaterialsFullscreenExit
```text
elements/materials/Navigation/MaterialsFullscreenExit
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFullscreenExit icon](../../../icons/materials/Navigation/MaterialsFullscreenExit.png) | ![MaterialsFullscreenExit element](MaterialsFullscreenExit.element.png) | ![MaterialsFullscreenExit card](MaterialsFullscreenExit.card.png) |
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

' loads the MaterialsFullscreenExit element
include('elements/materials/Navigation/MaterialsFullscreenExit')
MaterialsFullscreenExit('element', 'Fullscreen Exit', 'an optional tech field')
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

' loads the MaterialsFullscreenExit element
include('elements/materials/Navigation/MaterialsFullscreenExit')
MaterialsFullscreenExit('element', 'Fullscreen Exit', 'an optional tech field')
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

' loads the MaterialsFullscreenExit card
include('elements/materials/Navigation/MaterialsFullscreenExit')
MaterialsFullscreenExitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFullscreenExit card
include('elements/materials/Navigation/MaterialsFullscreenExit')
MaterialsFullscreenExitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
