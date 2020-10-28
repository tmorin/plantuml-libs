# MaterialsExposurePlus2
```text
elements/materials/Image/MaterialsExposurePlus2
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsExposurePlus2 icon](../../../icons/materials/Image/MaterialsExposurePlus2.png) | ![MaterialsExposurePlus2 element](MaterialsExposurePlus2.element.png) | ![MaterialsExposurePlus2 card](MaterialsExposurePlus2.card.png) |
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

' loads the MaterialsExposurePlus2 element
include('elements/materials/Image/MaterialsExposurePlus2')
MaterialsExposurePlus2('element', 'Exposure Plus2', 'an optional tech field')
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

' loads the MaterialsExposurePlus2 element
include('elements/materials/Image/MaterialsExposurePlus2')
MaterialsExposurePlus2('element', 'Exposure Plus2', 'an optional tech field')
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

' loads the MaterialsExposurePlus2 card
include('elements/materials/Image/MaterialsExposurePlus2')
MaterialsExposurePlus2Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsExposurePlus2 card
include('elements/materials/Image/MaterialsExposurePlus2')
MaterialsExposurePlus2Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
