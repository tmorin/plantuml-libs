# MaterialsPanoramaHorizontal
```text
elements/materials/Image/MaterialsPanoramaHorizontal
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPanoramaHorizontal icon](../../../icons/materials/Image/MaterialsPanoramaHorizontal.png) | ![MaterialsPanoramaHorizontal element](MaterialsPanoramaHorizontal.element.png) | ![MaterialsPanoramaHorizontal card](MaterialsPanoramaHorizontal.card.png) |
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

' loads the MaterialsPanoramaHorizontal element
include('elements/materials/Image/MaterialsPanoramaHorizontal')
MaterialsPanoramaHorizontal('element', 'Panorama Horizontal', 'an optional tech field')
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

' loads the MaterialsPanoramaHorizontal element
include('elements/materials/Image/MaterialsPanoramaHorizontal')
MaterialsPanoramaHorizontal('element', 'Panorama Horizontal', 'an optional tech field')
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

' loads the MaterialsPanoramaHorizontal card
include('elements/materials/Image/MaterialsPanoramaHorizontal')
MaterialsPanoramaHorizontalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPanoramaHorizontal card
include('elements/materials/Image/MaterialsPanoramaHorizontal')
MaterialsPanoramaHorizontalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
