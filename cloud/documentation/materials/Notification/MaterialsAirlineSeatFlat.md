# MaterialsAirlineSeatFlat
```text
elements/materials/Notification/MaterialsAirlineSeatFlat
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAirlineSeatFlat icon](../../../icons/materials/Notification/MaterialsAirlineSeatFlat.png) | ![MaterialsAirlineSeatFlat element](MaterialsAirlineSeatFlat.element.png) | ![MaterialsAirlineSeatFlat card](MaterialsAirlineSeatFlat.card.png) |
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

' loads the MaterialsAirlineSeatFlat element
include('elements/materials/Notification/MaterialsAirlineSeatFlat')
MaterialsAirlineSeatFlat('element', 'Airline Seat Flat', 'an optional tech field')
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

' loads the MaterialsAirlineSeatFlat element
include('elements/materials/Notification/MaterialsAirlineSeatFlat')
MaterialsAirlineSeatFlat('element', 'Airline Seat Flat', 'an optional tech field')
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

' loads the MaterialsAirlineSeatFlat card
include('elements/materials/Notification/MaterialsAirlineSeatFlat')
MaterialsAirlineSeatFlatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAirlineSeatFlat card
include('elements/materials/Notification/MaterialsAirlineSeatFlat')
MaterialsAirlineSeatFlatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
