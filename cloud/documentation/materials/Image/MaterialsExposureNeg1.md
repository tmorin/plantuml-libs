# MaterialsExposureNeg1
```text
elements/materials/Image/MaterialsExposureNeg1
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsExposureNeg1 icon](../../../icons/materials/Image/MaterialsExposureNeg1.png) | ![MaterialsExposureNeg1 element](MaterialsExposureNeg1.element.png) | ![MaterialsExposureNeg1 card](MaterialsExposureNeg1.card.png) |
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

' loads the MaterialsExposureNeg1 element
include('elements/materials/Image/MaterialsExposureNeg1')
MaterialsExposureNeg1('element', 'Exposure Neg1', 'an optional tech field')
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

' loads the MaterialsExposureNeg1 element
include('elements/materials/Image/MaterialsExposureNeg1')
MaterialsExposureNeg1('element', 'Exposure Neg1', 'an optional tech field')
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

' loads the MaterialsExposureNeg1 card
include('elements/materials/Image/MaterialsExposureNeg1')
MaterialsExposureNeg1Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsExposureNeg1 card
include('elements/materials/Image/MaterialsExposureNeg1')
MaterialsExposureNeg1Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
