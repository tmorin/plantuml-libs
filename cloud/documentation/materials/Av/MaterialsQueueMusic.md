# MaterialsQueueMusic
```text
elements/materials/Av/MaterialsQueueMusic
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsQueueMusic icon](../../../icons/materials/Av/MaterialsQueueMusic.png) | ![MaterialsQueueMusic element](MaterialsQueueMusic.element.png) | ![MaterialsQueueMusic card](MaterialsQueueMusic.card.png) |
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

' loads the MaterialsQueueMusic element
include('elements/materials/Av/MaterialsQueueMusic')
MaterialsQueueMusic('element', 'Queue Music', 'an optional tech field')
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

' loads the MaterialsQueueMusic element
include('elements/materials/Av/MaterialsQueueMusic')
MaterialsQueueMusic('element', 'Queue Music', 'an optional tech field')
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

' loads the MaterialsQueueMusic card
include('elements/materials/Av/MaterialsQueueMusic')
MaterialsQueueMusicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsQueueMusic card
include('elements/materials/Av/MaterialsQueueMusic')
MaterialsQueueMusicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
