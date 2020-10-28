# AzureReservations
```text
elements/azure/GeneralServiceIcons/AzureReservations
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureReservations icon](../../../icons/azure/GeneralServiceIcons/AzureReservations.png) | ![AzureReservations element](AzureReservations.element.png) | ![AzureReservations card](AzureReservations.card.png) |
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
include('styles/azure')

' loads the AzureReservations element
include('elements/azure/GeneralServiceIcons/AzureReservations')
AzureReservations('element', 'Reservations', 'an optional tech field')
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
include('styles/azure')

' loads the AzureReservations element
include('elements/azure/GeneralServiceIcons/AzureReservations')
AzureReservations('element', 'Reservations', 'an optional tech field')
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
include('styles/azure')

' loads the AzureReservations card
include('elements/azure/GeneralServiceIcons/AzureReservations')
AzureReservationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/azure')

' loads the AzureReservations card
include('elements/azure/GeneralServiceIcons/AzureReservations')
AzureReservationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
