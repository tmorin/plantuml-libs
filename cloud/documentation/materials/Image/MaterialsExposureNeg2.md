# MaterialsExposureNeg2
```text
elements/materials/Image/MaterialsExposureNeg2
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsExposureNeg2 icon](../../../icons/materials/Image/MaterialsExposureNeg2.png) | ![MaterialsExposureNeg2 element](MaterialsExposureNeg2.element.png) | ![MaterialsExposureNeg2 card](MaterialsExposureNeg2.card.png) |
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

' loads the MaterialsExposureNeg2 element
include('elements/materials/Image/MaterialsExposureNeg2')
MaterialsExposureNeg2('element', 'Exposure Neg2', 'an optional tech field')
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

' loads the MaterialsExposureNeg2 element
include('elements/materials/Image/MaterialsExposureNeg2')
MaterialsExposureNeg2('element', 'Exposure Neg2', 'an optional tech field')
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

' loads the MaterialsExposureNeg2 card
include('elements/materials/Image/MaterialsExposureNeg2')
MaterialsExposureNeg2Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsExposureNeg2 card
include('elements/materials/Image/MaterialsExposureNeg2')
MaterialsExposureNeg2Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
