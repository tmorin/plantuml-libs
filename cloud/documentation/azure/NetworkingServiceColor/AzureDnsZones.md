# AzureDnsZones
```text
elements/azure/NetworkingServiceColor/AzureDnsZones
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDnsZones icon](../../../icons/azure/NetworkingServiceColor/AzureDnsZones.png) | ![AzureDnsZones element](AzureDnsZones.element.png) | ![AzureDnsZones card](AzureDnsZones.card.png) |
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
include('styles/azure')

' loads the AzureDnsZones element
include('elements/azure/NetworkingServiceColor/AzureDnsZones')
AzureDnsZones('element', 'Dns Zones', 'an optional tech field')
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

' loads the AzureDnsZones element
include('elements/azure/NetworkingServiceColor/AzureDnsZones')
AzureDnsZones('element', 'Dns Zones', 'an optional tech field')
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
include('styles/azure')

' loads the AzureDnsZones card
include('elements/azure/NetworkingServiceColor/AzureDnsZones')
AzureDnsZonesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDnsZones card
include('elements/azure/NetworkingServiceColor/AzureDnsZones')
AzureDnsZonesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
