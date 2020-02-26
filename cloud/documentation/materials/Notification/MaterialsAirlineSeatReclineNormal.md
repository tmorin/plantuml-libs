# MaterialsAirlineSeatReclineNormal
```text
elements/materials/Notification/MaterialsAirlineSeatReclineNormal
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAirlineSeatReclineNormal icon](../../../icons/materials/Notification/MaterialsAirlineSeatReclineNormal.png) | ![MaterialsAirlineSeatReclineNormal element](MaterialsAirlineSeatReclineNormal.element.png) | ![MaterialsAirlineSeatReclineNormal card](MaterialsAirlineSeatReclineNormal.card.png) |
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

' loads the MaterialsAirlineSeatReclineNormal element
include('elements/materials/Notification/MaterialsAirlineSeatReclineNormal')
MaterialsAirlineSeatReclineNormal('element', 'Airline Seat Recline Normal', 'an optional tech field')
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

' loads the MaterialsAirlineSeatReclineNormal element
include('elements/materials/Notification/MaterialsAirlineSeatReclineNormal')
MaterialsAirlineSeatReclineNormal('element', 'Airline Seat Recline Normal', 'an optional tech field')
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

' loads the MaterialsAirlineSeatReclineNormal card
include('elements/materials/Notification/MaterialsAirlineSeatReclineNormal')
MaterialsAirlineSeatReclineNormalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAirlineSeatReclineNormal card
include('elements/materials/Notification/MaterialsAirlineSeatReclineNormal')
MaterialsAirlineSeatReclineNormalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
