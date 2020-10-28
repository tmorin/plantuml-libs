# MaterialsArrowDropDown
```text
elements/materials/Navigation/MaterialsArrowDropDown
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsArrowDropDown icon](../../../icons/materials/Navigation/MaterialsArrowDropDown.png) | ![MaterialsArrowDropDown element](MaterialsArrowDropDown.element.png) | ![MaterialsArrowDropDown card](MaterialsArrowDropDown.card.png) |
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

' loads the MaterialsArrowDropDown element
include('elements/materials/Navigation/MaterialsArrowDropDown')
MaterialsArrowDropDown('element', 'Arrow Drop Down', 'an optional tech field')
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

' loads the MaterialsArrowDropDown element
include('elements/materials/Navigation/MaterialsArrowDropDown')
MaterialsArrowDropDown('element', 'Arrow Drop Down', 'an optional tech field')
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

' loads the MaterialsArrowDropDown card
include('elements/materials/Navigation/MaterialsArrowDropDown')
MaterialsArrowDropDownCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsArrowDropDown card
include('elements/materials/Navigation/MaterialsArrowDropDown')
MaterialsArrowDropDownCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
