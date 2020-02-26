# MaterialsFilter1
```text
elements/materials/Image/MaterialsFilter1
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilter1 icon](../../../icons/materials/Image/MaterialsFilter1.png) | ![MaterialsFilter1 element](MaterialsFilter1.element.png) | ![MaterialsFilter1 card](MaterialsFilter1.card.png) |
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

' loads the MaterialsFilter1 element
include('elements/materials/Image/MaterialsFilter1')
MaterialsFilter1('element', 'Filter1', 'an optional tech field')
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

' loads the MaterialsFilter1 element
include('elements/materials/Image/MaterialsFilter1')
MaterialsFilter1('element', 'Filter1', 'an optional tech field')
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

' loads the MaterialsFilter1 card
include('elements/materials/Image/MaterialsFilter1')
MaterialsFilter1Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilter1 card
include('elements/materials/Image/MaterialsFilter1')
MaterialsFilter1Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
