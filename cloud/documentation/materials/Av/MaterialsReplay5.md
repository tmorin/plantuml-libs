# MaterialsReplay5
```text
elements/materials/Av/MaterialsReplay5
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsReplay5 icon](../../../icons/materials/Av/MaterialsReplay5.png) | ![MaterialsReplay5 element](MaterialsReplay5.element.png) | ![MaterialsReplay5 card](MaterialsReplay5.card.png) |
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

' loads the MaterialsReplay5 element
include('elements/materials/Av/MaterialsReplay5')
MaterialsReplay5('element', 'Replay5', 'an optional tech field')
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

' loads the MaterialsReplay5 element
include('elements/materials/Av/MaterialsReplay5')
MaterialsReplay5('element', 'Replay5', 'an optional tech field')
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

' loads the MaterialsReplay5 card
include('elements/materials/Av/MaterialsReplay5')
MaterialsReplay5Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsReplay5 card
include('elements/materials/Av/MaterialsReplay5')
MaterialsReplay5Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
