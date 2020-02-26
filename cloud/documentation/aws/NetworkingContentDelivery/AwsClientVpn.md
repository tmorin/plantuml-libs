# AwsClientVpn
```text
elements/aws/NetworkingContentDelivery/AwsClientVpn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsClientVpn icon](../../../icons/aws/NetworkingContentDelivery/AwsClientVpn.png) | ![AwsClientVpn element](AwsClientVpn.element.png) | ![AwsClientVpn card](AwsClientVpn.card.png) |
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
include('styles/aws')

' loads the AwsClientVpn element
include('elements/aws/NetworkingContentDelivery/AwsClientVpn')
AwsClientVpn('element', 'Client Vpn', 'an optional tech field')
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
include('styles/aws')

' loads the AwsClientVpn element
include('elements/aws/NetworkingContentDelivery/AwsClientVpn')
AwsClientVpn('element', 'Client Vpn', 'an optional tech field')
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
include('styles/aws')

' loads the AwsClientVpn card
include('elements/aws/NetworkingContentDelivery/AwsClientVpn')
AwsClientVpnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/aws')

' loads the AwsClientVpn card
include('elements/aws/NetworkingContentDelivery/AwsClientVpn')
AwsClientVpnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
