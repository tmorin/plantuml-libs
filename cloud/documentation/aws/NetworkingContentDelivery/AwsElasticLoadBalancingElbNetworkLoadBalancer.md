# AwsElasticLoadBalancingElbNetworkLoadBalancer
```text
elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancingElbNetworkLoadBalancer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticLoadBalancingElbNetworkLoadBalancer icon](../../../icons/aws/NetworkingContentDelivery/AwsElasticLoadBalancingElbNetworkLoadBalancer.png) | ![AwsElasticLoadBalancingElbNetworkLoadBalancer element](AwsElasticLoadBalancingElbNetworkLoadBalancer.element.png) | ![AwsElasticLoadBalancingElbNetworkLoadBalancer card](AwsElasticLoadBalancingElbNetworkLoadBalancer.card.png) |
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

' loads the AwsElasticLoadBalancingElbNetworkLoadBalancer element
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancingElbNetworkLoadBalancer')
AwsElasticLoadBalancingElbNetworkLoadBalancer('element', 'Elastic Load Balancing Elb Network Load Balancer', 'an optional tech field')
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

' loads the AwsElasticLoadBalancingElbNetworkLoadBalancer element
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancingElbNetworkLoadBalancer')
AwsElasticLoadBalancingElbNetworkLoadBalancer('element', 'Elastic Load Balancing Elb Network Load Balancer', 'an optional tech field')
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

' loads the AwsElasticLoadBalancingElbNetworkLoadBalancer card
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancingElbNetworkLoadBalancer')
AwsElasticLoadBalancingElbNetworkLoadBalancerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticLoadBalancingElbNetworkLoadBalancer card
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancingElbNetworkLoadBalancer')
AwsElasticLoadBalancingElbNetworkLoadBalancerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
