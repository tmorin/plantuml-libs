# MaterialsAssignmentReturn
```text
elements/materials/Action/MaterialsAssignmentReturn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAssignmentReturn icon](../../../icons/materials/Action/MaterialsAssignmentReturn.png) | ![MaterialsAssignmentReturn element](MaterialsAssignmentReturn.element.png) | ![MaterialsAssignmentReturn card](MaterialsAssignmentReturn.card.png) |
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

' loads the MaterialsAssignmentReturn element
include('elements/materials/Action/MaterialsAssignmentReturn')
MaterialsAssignmentReturn('element', 'Assignment Return', 'an optional tech field')
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

' loads the MaterialsAssignmentReturn element
include('elements/materials/Action/MaterialsAssignmentReturn')
MaterialsAssignmentReturn('element', 'Assignment Return', 'an optional tech field')
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

' loads the MaterialsAssignmentReturn card
include('elements/materials/Action/MaterialsAssignmentReturn')
MaterialsAssignmentReturnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAssignmentReturn card
include('elements/materials/Action/MaterialsAssignmentReturn')
MaterialsAssignmentReturnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
