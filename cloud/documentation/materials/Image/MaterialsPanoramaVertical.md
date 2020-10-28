# MaterialsPanoramaVertical
```text
elements/materials/Image/MaterialsPanoramaVertical
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPanoramaVertical icon](../../../icons/materials/Image/MaterialsPanoramaVertical.png) | ![MaterialsPanoramaVertical element](MaterialsPanoramaVertical.element.png) | ![MaterialsPanoramaVertical card](MaterialsPanoramaVertical.card.png) |
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

' loads the MaterialsPanoramaVertical element
include('elements/materials/Image/MaterialsPanoramaVertical')
MaterialsPanoramaVertical('element', 'Panorama Vertical', 'an optional tech field')
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

' loads the MaterialsPanoramaVertical element
include('elements/materials/Image/MaterialsPanoramaVertical')
MaterialsPanoramaVertical('element', 'Panorama Vertical', 'an optional tech field')
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

' loads the MaterialsPanoramaVertical card
include('elements/materials/Image/MaterialsPanoramaVertical')
MaterialsPanoramaVerticalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPanoramaVertical card
include('elements/materials/Image/MaterialsPanoramaVertical')
MaterialsPanoramaVerticalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
