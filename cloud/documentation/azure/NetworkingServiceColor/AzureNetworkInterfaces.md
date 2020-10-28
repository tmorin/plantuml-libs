# AzureNetworkInterfaces
```text
elements/azure/NetworkingServiceColor/AzureNetworkInterfaces
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureNetworkInterfaces icon](../../../icons/azure/NetworkingServiceColor/AzureNetworkInterfaces.png) | ![AzureNetworkInterfaces element](AzureNetworkInterfaces.element.png) | ![AzureNetworkInterfaces card](AzureNetworkInterfaces.card.png) |
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

' loads the AzureNetworkInterfaces element
include('elements/azure/NetworkingServiceColor/AzureNetworkInterfaces')
AzureNetworkInterfaces('element', 'Network Interfaces', 'an optional tech field')
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

' loads the AzureNetworkInterfaces element
include('elements/azure/NetworkingServiceColor/AzureNetworkInterfaces')
AzureNetworkInterfaces('element', 'Network Interfaces', 'an optional tech field')
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

' loads the AzureNetworkInterfaces card
include('elements/azure/NetworkingServiceColor/AzureNetworkInterfaces')
AzureNetworkInterfacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureNetworkInterfaces card
include('elements/azure/NetworkingServiceColor/AzureNetworkInterfaces')
AzureNetworkInterfacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
