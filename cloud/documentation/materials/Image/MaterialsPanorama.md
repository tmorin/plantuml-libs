# MaterialsPanorama
```text
elements/materials/Image/MaterialsPanorama
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPanorama icon](../../../icons/materials/Image/MaterialsPanorama.png) | ![MaterialsPanorama element](MaterialsPanorama.element.png) | ![MaterialsPanorama card](MaterialsPanorama.card.png) |
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

' loads the MaterialsPanorama element
include('elements/materials/Image/MaterialsPanorama')
MaterialsPanorama('element', 'Panorama', 'an optional tech field')
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

' loads the MaterialsPanorama element
include('elements/materials/Image/MaterialsPanorama')
MaterialsPanorama('element', 'Panorama', 'an optional tech field')
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

' loads the MaterialsPanorama card
include('elements/materials/Image/MaterialsPanorama')
MaterialsPanoramaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPanorama card
include('elements/materials/Image/MaterialsPanorama')
MaterialsPanoramaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
