# MaterialsExposurePlus1
```text
elements/materials/Image/MaterialsExposurePlus1
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsExposurePlus1 icon](../../../icons/materials/Image/MaterialsExposurePlus1.png) | ![MaterialsExposurePlus1 element](MaterialsExposurePlus1.element.png) | ![MaterialsExposurePlus1 card](MaterialsExposurePlus1.card.png) |
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

' loads the MaterialsExposurePlus1 element
include('elements/materials/Image/MaterialsExposurePlus1')
MaterialsExposurePlus1('element', 'Exposure Plus1', 'an optional tech field')
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

' loads the MaterialsExposurePlus1 element
include('elements/materials/Image/MaterialsExposurePlus1')
MaterialsExposurePlus1('element', 'Exposure Plus1', 'an optional tech field')
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

' loads the MaterialsExposurePlus1 card
include('elements/materials/Image/MaterialsExposurePlus1')
MaterialsExposurePlus1Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsExposurePlus1 card
include('elements/materials/Image/MaterialsExposurePlus1')
MaterialsExposurePlus1Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
