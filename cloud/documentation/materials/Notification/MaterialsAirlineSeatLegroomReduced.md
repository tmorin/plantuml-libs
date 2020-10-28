# MaterialsAirlineSeatLegroomReduced
```text
elements/materials/Notification/MaterialsAirlineSeatLegroomReduced
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAirlineSeatLegroomReduced icon](../../../icons/materials/Notification/MaterialsAirlineSeatLegroomReduced.png) | ![MaterialsAirlineSeatLegroomReduced element](MaterialsAirlineSeatLegroomReduced.element.png) | ![MaterialsAirlineSeatLegroomReduced card](MaterialsAirlineSeatLegroomReduced.card.png) |
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

' loads the MaterialsAirlineSeatLegroomReduced element
include('elements/materials/Notification/MaterialsAirlineSeatLegroomReduced')
MaterialsAirlineSeatLegroomReduced('element', 'Airline Seat Legroom Reduced', 'an optional tech field')
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

' loads the MaterialsAirlineSeatLegroomReduced element
include('elements/materials/Notification/MaterialsAirlineSeatLegroomReduced')
MaterialsAirlineSeatLegroomReduced('element', 'Airline Seat Legroom Reduced', 'an optional tech field')
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

' loads the MaterialsAirlineSeatLegroomReduced card
include('elements/materials/Notification/MaterialsAirlineSeatLegroomReduced')
MaterialsAirlineSeatLegroomReducedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAirlineSeatLegroomReduced card
include('elements/materials/Notification/MaterialsAirlineSeatLegroomReduced')
MaterialsAirlineSeatLegroomReducedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
