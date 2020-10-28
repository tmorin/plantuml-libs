# AwsVpcVpnGateway
```text
elements/aws/NetworkingContentDelivery/AwsVpcVpnGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcVpnGateway icon](../../../icons/aws/NetworkingContentDelivery/AwsVpcVpnGateway.png) | ![AwsVpcVpnGateway element](AwsVpcVpnGateway.element.png) | ![AwsVpcVpnGateway card](AwsVpcVpnGateway.card.png) |
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
include('styles/aws')

' loads the AwsVpcVpnGateway element
include('elements/aws/NetworkingContentDelivery/AwsVpcVpnGateway')
AwsVpcVpnGateway('element', 'Vpc Vpn Gateway', 'an optional tech field')
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

' loads the AwsVpcVpnGateway element
include('elements/aws/NetworkingContentDelivery/AwsVpcVpnGateway')
AwsVpcVpnGateway('element', 'Vpc Vpn Gateway', 'an optional tech field')
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
include('styles/aws')

' loads the AwsVpcVpnGateway card
include('elements/aws/NetworkingContentDelivery/AwsVpcVpnGateway')
AwsVpcVpnGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcVpnGateway card
include('elements/aws/NetworkingContentDelivery/AwsVpcVpnGateway')
AwsVpcVpnGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
