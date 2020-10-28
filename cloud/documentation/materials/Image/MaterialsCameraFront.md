# MaterialsCameraFront
```text
elements/materials/Image/MaterialsCameraFront
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCameraFront icon](../../../icons/materials/Image/MaterialsCameraFront.png) | ![MaterialsCameraFront element](MaterialsCameraFront.element.png) | ![MaterialsCameraFront card](MaterialsCameraFront.card.png) |
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

' loads the MaterialsCameraFront element
include('elements/materials/Image/MaterialsCameraFront')
MaterialsCameraFront('element', 'Camera Front', 'an optional tech field')
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

' loads the MaterialsCameraFront element
include('elements/materials/Image/MaterialsCameraFront')
MaterialsCameraFront('element', 'Camera Front', 'an optional tech field')
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

' loads the MaterialsCameraFront card
include('elements/materials/Image/MaterialsCameraFront')
MaterialsCameraFrontCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCameraFront card
include('elements/materials/Image/MaterialsCameraFront')
MaterialsCameraFrontCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
