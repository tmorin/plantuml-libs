# MaterialsAirlineSeatFlatAngled
```text
elements/materials/Notification/MaterialsAirlineSeatFlatAngled
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAirlineSeatFlatAngled icon](../../../icons/materials/Notification/MaterialsAirlineSeatFlatAngled.png) | ![MaterialsAirlineSeatFlatAngled element](MaterialsAirlineSeatFlatAngled.element.png) | ![MaterialsAirlineSeatFlatAngled card](MaterialsAirlineSeatFlatAngled.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsAirlineSeatFlatAngled element
include('elements/materials/Notification/MaterialsAirlineSeatFlatAngled')
MaterialsAirlineSeatFlatAngled('element', 'Airline Seat Flat Angled', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsAirlineSeatFlatAngled element
include('elements/materials/Notification/MaterialsAirlineSeatFlatAngled')
MaterialsAirlineSeatFlatAngled('element', 'Airline Seat Flat Angled', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsAirlineSeatFlatAngled card
include('elements/materials/Notification/MaterialsAirlineSeatFlatAngled')
MaterialsAirlineSeatFlatAngledCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsAirlineSeatFlatAngled card
include('elements/materials/Notification/MaterialsAirlineSeatFlatAngled')
MaterialsAirlineSeatFlatAngledCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
