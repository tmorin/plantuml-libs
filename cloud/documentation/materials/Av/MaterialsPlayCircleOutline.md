# MaterialsPlayCircleOutline
```text
elements/materials/Av/MaterialsPlayCircleOutline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPlayCircleOutline icon](../../../icons/materials/Av/MaterialsPlayCircleOutline.png) | ![MaterialsPlayCircleOutline element](MaterialsPlayCircleOutline.element.png) | ![MaterialsPlayCircleOutline card](MaterialsPlayCircleOutline.card.png) |
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

' loads the MaterialsPlayCircleOutline element
include('elements/materials/Av/MaterialsPlayCircleOutline')
MaterialsPlayCircleOutline('element', 'Play Circle Outline', 'an optional tech field')
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

' loads the MaterialsPlayCircleOutline element
include('elements/materials/Av/MaterialsPlayCircleOutline')
MaterialsPlayCircleOutline('element', 'Play Circle Outline', 'an optional tech field')
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

' loads the MaterialsPlayCircleOutline card
include('elements/materials/Av/MaterialsPlayCircleOutline')
MaterialsPlayCircleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPlayCircleOutline card
include('elements/materials/Av/MaterialsPlayCircleOutline')
MaterialsPlayCircleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
