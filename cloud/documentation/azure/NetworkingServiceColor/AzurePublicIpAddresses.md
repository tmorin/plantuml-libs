# AzurePublicIpAddresses
```text
elements/azure/NetworkingServiceColor/AzurePublicIpAddresses
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzurePublicIpAddresses icon](../../../icons/azure/NetworkingServiceColor/AzurePublicIpAddresses.png) | ![AzurePublicIpAddresses element](AzurePublicIpAddresses.element.png) | ![AzurePublicIpAddresses card](AzurePublicIpAddresses.card.png) |
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

' loads the AzurePublicIpAddresses element
include('elements/azure/NetworkingServiceColor/AzurePublicIpAddresses')
AzurePublicIpAddresses('element', 'Public Ip Addresses', 'an optional tech field')
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

' loads the AzurePublicIpAddresses element
include('elements/azure/NetworkingServiceColor/AzurePublicIpAddresses')
AzurePublicIpAddresses('element', 'Public Ip Addresses', 'an optional tech field')
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

' loads the AzurePublicIpAddresses card
include('elements/azure/NetworkingServiceColor/AzurePublicIpAddresses')
AzurePublicIpAddressesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzurePublicIpAddresses card
include('elements/azure/NetworkingServiceColor/AzurePublicIpAddresses')
AzurePublicIpAddressesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
