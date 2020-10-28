# MaterialsSmokingRooms
```text
elements/materials/Places/MaterialsSmokingRooms
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSmokingRooms icon](../../../icons/materials/Places/MaterialsSmokingRooms.png) | ![MaterialsSmokingRooms element](MaterialsSmokingRooms.element.png) | ![MaterialsSmokingRooms card](MaterialsSmokingRooms.card.png) |
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

' loads the MaterialsSmokingRooms element
include('elements/materials/Places/MaterialsSmokingRooms')
MaterialsSmokingRooms('element', 'Smoking Rooms', 'an optional tech field')
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

' loads the MaterialsSmokingRooms element
include('elements/materials/Places/MaterialsSmokingRooms')
MaterialsSmokingRooms('element', 'Smoking Rooms', 'an optional tech field')
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

' loads the MaterialsSmokingRooms card
include('elements/materials/Places/MaterialsSmokingRooms')
MaterialsSmokingRoomsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSmokingRooms card
include('elements/materials/Places/MaterialsSmokingRooms')
MaterialsSmokingRoomsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
