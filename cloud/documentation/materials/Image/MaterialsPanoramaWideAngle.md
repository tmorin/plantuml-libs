# MaterialsPanoramaWideAngle
```text
elements/materials/Image/MaterialsPanoramaWideAngle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPanoramaWideAngle icon](../../../icons/materials/Image/MaterialsPanoramaWideAngle.png) | ![MaterialsPanoramaWideAngle element](MaterialsPanoramaWideAngle.element.png) | ![MaterialsPanoramaWideAngle card](MaterialsPanoramaWideAngle.card.png) |
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

' loads the MaterialsPanoramaWideAngle element
include('elements/materials/Image/MaterialsPanoramaWideAngle')
MaterialsPanoramaWideAngle('element', 'Panorama Wide Angle', 'an optional tech field')
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

' loads the MaterialsPanoramaWideAngle element
include('elements/materials/Image/MaterialsPanoramaWideAngle')
MaterialsPanoramaWideAngle('element', 'Panorama Wide Angle', 'an optional tech field')
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

' loads the MaterialsPanoramaWideAngle card
include('elements/materials/Image/MaterialsPanoramaWideAngle')
MaterialsPanoramaWideAngleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPanoramaWideAngle card
include('elements/materials/Image/MaterialsPanoramaWideAngle')
MaterialsPanoramaWideAngleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
