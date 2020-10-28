# MaterialsAddToQueue
```text
elements/materials/Av/MaterialsAddToQueue
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAddToQueue icon](../../../icons/materials/Av/MaterialsAddToQueue.png) | ![MaterialsAddToQueue element](MaterialsAddToQueue.element.png) | ![MaterialsAddToQueue card](MaterialsAddToQueue.card.png) |
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

' loads the MaterialsAddToQueue element
include('elements/materials/Av/MaterialsAddToQueue')
MaterialsAddToQueue('element', 'Add To Queue', 'an optional tech field')
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

' loads the MaterialsAddToQueue element
include('elements/materials/Av/MaterialsAddToQueue')
MaterialsAddToQueue('element', 'Add To Queue', 'an optional tech field')
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

' loads the MaterialsAddToQueue card
include('elements/materials/Av/MaterialsAddToQueue')
MaterialsAddToQueueCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAddToQueue card
include('elements/materials/Av/MaterialsAddToQueue')
MaterialsAddToQueueCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
