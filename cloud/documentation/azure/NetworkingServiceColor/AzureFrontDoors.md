# AzureFrontDoors
```text
elements/azure/NetworkingServiceColor/AzureFrontDoors
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureFrontDoors icon](../../../icons/azure/NetworkingServiceColor/AzureFrontDoors.png) | ![AzureFrontDoors element](AzureFrontDoors.element.png) | ![AzureFrontDoors card](AzureFrontDoors.card.png) |
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

' loads the AzureFrontDoors element
include('elements/azure/NetworkingServiceColor/AzureFrontDoors')
AzureFrontDoors('element', 'Front Doors', 'an optional tech field')
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

' loads the AzureFrontDoors element
include('elements/azure/NetworkingServiceColor/AzureFrontDoors')
AzureFrontDoors('element', 'Front Doors', 'an optional tech field')
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

' loads the AzureFrontDoors card
include('elements/azure/NetworkingServiceColor/AzureFrontDoors')
AzureFrontDoorsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureFrontDoors card
include('elements/azure/NetworkingServiceColor/AzureFrontDoors')
AzureFrontDoorsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
