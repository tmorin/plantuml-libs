# MaterialsAddCircle
```text
elements/materials/Content/MaterialsAddCircle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAddCircle icon](../../../icons/materials/Content/MaterialsAddCircle.png) | ![MaterialsAddCircle element](MaterialsAddCircle.element.png) | ![MaterialsAddCircle card](MaterialsAddCircle.card.png) |
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

' loads the MaterialsAddCircle element
include('elements/materials/Content/MaterialsAddCircle')
MaterialsAddCircle('element', 'Add Circle', 'an optional tech field')
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

' loads the MaterialsAddCircle element
include('elements/materials/Content/MaterialsAddCircle')
MaterialsAddCircle('element', 'Add Circle', 'an optional tech field')
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

' loads the MaterialsAddCircle card
include('elements/materials/Content/MaterialsAddCircle')
MaterialsAddCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAddCircle card
include('elements/materials/Content/MaterialsAddCircle')
MaterialsAddCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
