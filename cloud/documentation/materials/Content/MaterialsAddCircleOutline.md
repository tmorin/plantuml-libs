# MaterialsAddCircleOutline
```text
elements/materials/Content/MaterialsAddCircleOutline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAddCircleOutline icon](../../../icons/materials/Content/MaterialsAddCircleOutline.png) | ![MaterialsAddCircleOutline element](MaterialsAddCircleOutline.element.png) | ![MaterialsAddCircleOutline card](MaterialsAddCircleOutline.card.png) |
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

' loads the MaterialsAddCircleOutline element
include('elements/materials/Content/MaterialsAddCircleOutline')
MaterialsAddCircleOutline('element', 'Add Circle Outline', 'an optional tech field')
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

' loads the MaterialsAddCircleOutline element
include('elements/materials/Content/MaterialsAddCircleOutline')
MaterialsAddCircleOutline('element', 'Add Circle Outline', 'an optional tech field')
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

' loads the MaterialsAddCircleOutline card
include('elements/materials/Content/MaterialsAddCircleOutline')
MaterialsAddCircleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAddCircleOutline card
include('elements/materials/Content/MaterialsAddCircleOutline')
MaterialsAddCircleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
