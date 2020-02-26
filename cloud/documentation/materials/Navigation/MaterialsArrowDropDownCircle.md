# MaterialsArrowDropDownCircle
```text
elements/materials/Navigation/MaterialsArrowDropDownCircle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsArrowDropDownCircle icon](../../../icons/materials/Navigation/MaterialsArrowDropDownCircle.png) | ![MaterialsArrowDropDownCircle element](MaterialsArrowDropDownCircle.element.png) | ![MaterialsArrowDropDownCircle card](MaterialsArrowDropDownCircle.card.png) |
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

' loads the MaterialsArrowDropDownCircle element
include('elements/materials/Navigation/MaterialsArrowDropDownCircle')
MaterialsArrowDropDownCircle('element', 'Arrow Drop Down Circle', 'an optional tech field')
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

' loads the MaterialsArrowDropDownCircle element
include('elements/materials/Navigation/MaterialsArrowDropDownCircle')
MaterialsArrowDropDownCircle('element', 'Arrow Drop Down Circle', 'an optional tech field')
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

' loads the MaterialsArrowDropDownCircle card
include('elements/materials/Navigation/MaterialsArrowDropDownCircle')
MaterialsArrowDropDownCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsArrowDropDownCircle card
include('elements/materials/Navigation/MaterialsArrowDropDownCircle')
MaterialsArrowDropDownCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
