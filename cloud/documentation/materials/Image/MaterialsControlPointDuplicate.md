# MaterialsControlPointDuplicate
```text
elements/materials/Image/MaterialsControlPointDuplicate
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsControlPointDuplicate icon](../../../icons/materials/Image/MaterialsControlPointDuplicate.png) | ![MaterialsControlPointDuplicate element](MaterialsControlPointDuplicate.element.png) | ![MaterialsControlPointDuplicate card](MaterialsControlPointDuplicate.card.png) |
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

' loads the MaterialsControlPointDuplicate element
include('elements/materials/Image/MaterialsControlPointDuplicate')
MaterialsControlPointDuplicate('element', 'Control Point Duplicate', 'an optional tech field')
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

' loads the MaterialsControlPointDuplicate element
include('elements/materials/Image/MaterialsControlPointDuplicate')
MaterialsControlPointDuplicate('element', 'Control Point Duplicate', 'an optional tech field')
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

' loads the MaterialsControlPointDuplicate card
include('elements/materials/Image/MaterialsControlPointDuplicate')
MaterialsControlPointDuplicateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsControlPointDuplicate card
include('elements/materials/Image/MaterialsControlPointDuplicate')
MaterialsControlPointDuplicateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
