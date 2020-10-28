# MaterialsEventSeat
```text
elements/materials/Action/MaterialsEventSeat
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsEventSeat icon](../../../icons/materials/Action/MaterialsEventSeat.png) | ![MaterialsEventSeat element](MaterialsEventSeat.element.png) | ![MaterialsEventSeat card](MaterialsEventSeat.card.png) |
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

' loads the MaterialsEventSeat element
include('elements/materials/Action/MaterialsEventSeat')
MaterialsEventSeat('element', 'Event Seat', 'an optional tech field')
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

' loads the MaterialsEventSeat element
include('elements/materials/Action/MaterialsEventSeat')
MaterialsEventSeat('element', 'Event Seat', 'an optional tech field')
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

' loads the MaterialsEventSeat card
include('elements/materials/Action/MaterialsEventSeat')
MaterialsEventSeatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsEventSeat card
include('elements/materials/Action/MaterialsEventSeat')
MaterialsEventSeatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
