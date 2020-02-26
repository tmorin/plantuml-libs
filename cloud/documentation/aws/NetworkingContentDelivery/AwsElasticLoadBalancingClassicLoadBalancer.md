# AwsElasticLoadBalancingClassicLoadBalancer
```text
elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancingClassicLoadBalancer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticLoadBalancingClassicLoadBalancer icon](../../../icons/aws/NetworkingContentDelivery/AwsElasticLoadBalancingClassicLoadBalancer.png) | ![AwsElasticLoadBalancingClassicLoadBalancer element](AwsElasticLoadBalancingClassicLoadBalancer.element.png) | ![AwsElasticLoadBalancingClassicLoadBalancer card](AwsElasticLoadBalancingClassicLoadBalancer.card.png) |
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

' loads the AwsElasticLoadBalancingClassicLoadBalancer element
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancingClassicLoadBalancer')
AwsElasticLoadBalancingClassicLoadBalancer('element', 'Elastic Load Balancing Classic Load Balancer', 'an optional tech field')
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

' loads the AwsElasticLoadBalancingClassicLoadBalancer element
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancingClassicLoadBalancer')
AwsElasticLoadBalancingClassicLoadBalancer('element', 'Elastic Load Balancing Classic Load Balancer', 'an optional tech field')
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

' loads the AwsElasticLoadBalancingClassicLoadBalancer card
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancingClassicLoadBalancer')
AwsElasticLoadBalancingClassicLoadBalancerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticLoadBalancingClassicLoadBalancer card
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancingClassicLoadBalancer')
AwsElasticLoadBalancingClassicLoadBalancerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
