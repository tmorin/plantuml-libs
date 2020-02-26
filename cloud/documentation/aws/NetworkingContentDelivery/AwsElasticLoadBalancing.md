# AwsElasticLoadBalancing
```text
elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancing
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticLoadBalancing icon](../../../icons/aws/NetworkingContentDelivery/AwsElasticLoadBalancing.png) | ![AwsElasticLoadBalancing element](AwsElasticLoadBalancing.element.png) | ![AwsElasticLoadBalancing card](AwsElasticLoadBalancing.card.png) |
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

' loads the AwsElasticLoadBalancing element
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancing')
AwsElasticLoadBalancing('element', 'Elastic Load Balancing', 'an optional tech field')
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

' loads the AwsElasticLoadBalancing element
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancing')
AwsElasticLoadBalancing('element', 'Elastic Load Balancing', 'an optional tech field')
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

' loads the AwsElasticLoadBalancing card
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancing')
AwsElasticLoadBalancingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticLoadBalancing card
include('elements/aws/NetworkingContentDelivery/AwsElasticLoadBalancing')
AwsElasticLoadBalancingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
