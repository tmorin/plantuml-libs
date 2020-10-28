# MaterialsPanoramaFishEye
```text
elements/materials/Image/MaterialsPanoramaFishEye
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPanoramaFishEye icon](../../../icons/materials/Image/MaterialsPanoramaFishEye.png) | ![MaterialsPanoramaFishEye element](MaterialsPanoramaFishEye.element.png) | ![MaterialsPanoramaFishEye card](MaterialsPanoramaFishEye.card.png) |
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

' loads the MaterialsPanoramaFishEye element
include('elements/materials/Image/MaterialsPanoramaFishEye')
MaterialsPanoramaFishEye('element', 'Panorama Fish Eye', 'an optional tech field')
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

' loads the MaterialsPanoramaFishEye element
include('elements/materials/Image/MaterialsPanoramaFishEye')
MaterialsPanoramaFishEye('element', 'Panorama Fish Eye', 'an optional tech field')
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

' loads the MaterialsPanoramaFishEye card
include('elements/materials/Image/MaterialsPanoramaFishEye')
MaterialsPanoramaFishEyeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPanoramaFishEye card
include('elements/materials/Image/MaterialsPanoramaFishEye')
MaterialsPanoramaFishEyeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
