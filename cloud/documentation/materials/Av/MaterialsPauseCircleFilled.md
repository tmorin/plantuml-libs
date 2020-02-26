# MaterialsPauseCircleFilled
```text
elements/materials/Av/MaterialsPauseCircleFilled
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPauseCircleFilled icon](../../../icons/materials/Av/MaterialsPauseCircleFilled.png) | ![MaterialsPauseCircleFilled element](MaterialsPauseCircleFilled.element.png) | ![MaterialsPauseCircleFilled card](MaterialsPauseCircleFilled.card.png) |
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

' loads the MaterialsPauseCircleFilled element
include('elements/materials/Av/MaterialsPauseCircleFilled')
MaterialsPauseCircleFilled('element', 'Pause Circle Filled', 'an optional tech field')
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

' loads the MaterialsPauseCircleFilled element
include('elements/materials/Av/MaterialsPauseCircleFilled')
MaterialsPauseCircleFilled('element', 'Pause Circle Filled', 'an optional tech field')
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

' loads the MaterialsPauseCircleFilled card
include('elements/materials/Av/MaterialsPauseCircleFilled')
MaterialsPauseCircleFilledCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPauseCircleFilled card
include('elements/materials/Av/MaterialsPauseCircleFilled')
MaterialsPauseCircleFilledCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
