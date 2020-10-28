# MaterialsAccountBox
```text
elements/materials/Action/MaterialsAccountBox
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAccountBox icon](../../../icons/materials/Action/MaterialsAccountBox.png) | ![MaterialsAccountBox element](MaterialsAccountBox.element.png) | ![MaterialsAccountBox card](MaterialsAccountBox.card.png) |
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

' loads the MaterialsAccountBox element
include('elements/materials/Action/MaterialsAccountBox')
MaterialsAccountBox('element', 'Account Box', 'an optional tech field')
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

' loads the MaterialsAccountBox element
include('elements/materials/Action/MaterialsAccountBox')
MaterialsAccountBox('element', 'Account Box', 'an optional tech field')
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

' loads the MaterialsAccountBox card
include('elements/materials/Action/MaterialsAccountBox')
MaterialsAccountBoxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAccountBox card
include('elements/materials/Action/MaterialsAccountBox')
MaterialsAccountBoxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
