# MaterialsFullscreen
```text
elements/materials/Navigation/MaterialsFullscreen
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFullscreen icon](../../../icons/materials/Navigation/MaterialsFullscreen.png) | ![MaterialsFullscreen element](MaterialsFullscreen.element.png) | ![MaterialsFullscreen card](MaterialsFullscreen.card.png) |
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

' loads the MaterialsFullscreen element
include('elements/materials/Navigation/MaterialsFullscreen')
MaterialsFullscreen('element', 'Fullscreen', 'an optional tech field')
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

' loads the MaterialsFullscreen element
include('elements/materials/Navigation/MaterialsFullscreen')
MaterialsFullscreen('element', 'Fullscreen', 'an optional tech field')
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

' loads the MaterialsFullscreen card
include('elements/materials/Navigation/MaterialsFullscreen')
MaterialsFullscreenCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFullscreen card
include('elements/materials/Navigation/MaterialsFullscreen')
MaterialsFullscreenCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
