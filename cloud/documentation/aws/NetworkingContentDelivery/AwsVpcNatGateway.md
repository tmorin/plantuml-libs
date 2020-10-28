# AwsVpcNatGateway
```text
elements/aws/NetworkingContentDelivery/AwsVpcNatGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcNatGateway icon](../../../icons/aws/NetworkingContentDelivery/AwsVpcNatGateway.png) | ![AwsVpcNatGateway element](AwsVpcNatGateway.element.png) | ![AwsVpcNatGateway card](AwsVpcNatGateway.card.png) |
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

' loads the AwsVpcNatGateway element
include('elements/aws/NetworkingContentDelivery/AwsVpcNatGateway')
AwsVpcNatGateway('element', 'Vpc Nat Gateway', 'an optional tech field')
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

' loads the AwsVpcNatGateway element
include('elements/aws/NetworkingContentDelivery/AwsVpcNatGateway')
AwsVpcNatGateway('element', 'Vpc Nat Gateway', 'an optional tech field')
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

' loads the AwsVpcNatGateway card
include('elements/aws/NetworkingContentDelivery/AwsVpcNatGateway')
AwsVpcNatGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcNatGateway card
include('elements/aws/NetworkingContentDelivery/AwsVpcNatGateway')
AwsVpcNatGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
