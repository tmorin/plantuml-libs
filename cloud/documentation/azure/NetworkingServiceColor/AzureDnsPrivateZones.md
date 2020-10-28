# AzureDnsPrivateZones
```text
elements/azure/NetworkingServiceColor/AzureDnsPrivateZones
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDnsPrivateZones icon](../../../icons/azure/NetworkingServiceColor/AzureDnsPrivateZones.png) | ![AzureDnsPrivateZones element](AzureDnsPrivateZones.element.png) | ![AzureDnsPrivateZones card](AzureDnsPrivateZones.card.png) |
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

' loads the AzureDnsPrivateZones element
include('elements/azure/NetworkingServiceColor/AzureDnsPrivateZones')
AzureDnsPrivateZones('element', 'Dns Private Zones', 'an optional tech field')
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

' loads the AzureDnsPrivateZones element
include('elements/azure/NetworkingServiceColor/AzureDnsPrivateZones')
AzureDnsPrivateZones('element', 'Dns Private Zones', 'an optional tech field')
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

' loads the AzureDnsPrivateZones card
include('elements/azure/NetworkingServiceColor/AzureDnsPrivateZones')
AzureDnsPrivateZonesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDnsPrivateZones card
include('elements/azure/NetworkingServiceColor/AzureDnsPrivateZones')
AzureDnsPrivateZonesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
