# MaterialsExposureZero
```text
elements/materials/Image/MaterialsExposureZero
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsExposureZero icon](../../../icons/materials/Image/MaterialsExposureZero.png) | ![MaterialsExposureZero element](MaterialsExposureZero.element.png) | ![MaterialsExposureZero card](MaterialsExposureZero.card.png) |
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

' loads the MaterialsExposureZero element
include('elements/materials/Image/MaterialsExposureZero')
MaterialsExposureZero('element', 'Exposure Zero', 'an optional tech field')
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

' loads the MaterialsExposureZero element
include('elements/materials/Image/MaterialsExposureZero')
MaterialsExposureZero('element', 'Exposure Zero', 'an optional tech field')
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

' loads the MaterialsExposureZero card
include('elements/materials/Image/MaterialsExposureZero')
MaterialsExposureZeroCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsExposureZero card
include('elements/materials/Image/MaterialsExposureZero')
MaterialsExposureZeroCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
