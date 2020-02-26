# AwsVpcCustomerGateway
```text
elements/aws/NetworkingContentDelivery/AwsVpcCustomerGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcCustomerGateway icon](../../../icons/aws/NetworkingContentDelivery/AwsVpcCustomerGateway.png) | ![AwsVpcCustomerGateway element](AwsVpcCustomerGateway.element.png) | ![AwsVpcCustomerGateway card](AwsVpcCustomerGateway.card.png) |
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

' loads the AwsVpcCustomerGateway element
include('elements/aws/NetworkingContentDelivery/AwsVpcCustomerGateway')
AwsVpcCustomerGateway('element', 'Vpc Customer Gateway', 'an optional tech field')
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

' loads the AwsVpcCustomerGateway element
include('elements/aws/NetworkingContentDelivery/AwsVpcCustomerGateway')
AwsVpcCustomerGateway('element', 'Vpc Customer Gateway', 'an optional tech field')
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

' loads the AwsVpcCustomerGateway card
include('elements/aws/NetworkingContentDelivery/AwsVpcCustomerGateway')
AwsVpcCustomerGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcCustomerGateway card
include('elements/aws/NetworkingContentDelivery/AwsVpcCustomerGateway')
AwsVpcCustomerGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
