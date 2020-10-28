# MaterialsPinDrop
```text
elements/materials/Maps/MaterialsPinDrop
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPinDrop icon](../../../icons/materials/Maps/MaterialsPinDrop.png) | ![MaterialsPinDrop element](MaterialsPinDrop.element.png) | ![MaterialsPinDrop card](MaterialsPinDrop.card.png) |
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

' loads the MaterialsPinDrop element
include('elements/materials/Maps/MaterialsPinDrop')
MaterialsPinDrop('element', 'Pin Drop', 'an optional tech field')
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

' loads the MaterialsPinDrop element
include('elements/materials/Maps/MaterialsPinDrop')
MaterialsPinDrop('element', 'Pin Drop', 'an optional tech field')
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

' loads the MaterialsPinDrop card
include('elements/materials/Maps/MaterialsPinDrop')
MaterialsPinDropCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPinDrop card
include('elements/materials/Maps/MaterialsPinDrop')
MaterialsPinDropCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
