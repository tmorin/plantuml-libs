# MaterialsRemoveFromQueue
```text
elements/materials/Av/MaterialsRemoveFromQueue
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRemoveFromQueue icon](../../../icons/materials/Av/MaterialsRemoveFromQueue.png) | ![MaterialsRemoveFromQueue element](MaterialsRemoveFromQueue.element.png) | ![MaterialsRemoveFromQueue card](MaterialsRemoveFromQueue.card.png) |
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

' loads the MaterialsRemoveFromQueue element
include('elements/materials/Av/MaterialsRemoveFromQueue')
MaterialsRemoveFromQueue('element', 'Remove From Queue', 'an optional tech field')
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

' loads the MaterialsRemoveFromQueue element
include('elements/materials/Av/MaterialsRemoveFromQueue')
MaterialsRemoveFromQueue('element', 'Remove From Queue', 'an optional tech field')
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

' loads the MaterialsRemoveFromQueue card
include('elements/materials/Av/MaterialsRemoveFromQueue')
MaterialsRemoveFromQueueCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRemoveFromQueue card
include('elements/materials/Av/MaterialsRemoveFromQueue')
MaterialsRemoveFromQueueCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
