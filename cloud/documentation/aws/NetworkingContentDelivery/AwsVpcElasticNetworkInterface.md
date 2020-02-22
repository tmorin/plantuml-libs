# AwsVpcElasticNetworkInterface
```text
elements/aws/NetworkingContentDelivery/AwsVpcElasticNetworkInterface
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcElasticNetworkInterface icon](../../../icons/aws/NetworkingContentDelivery/AwsVpcElasticNetworkInterface.png) | ![AwsVpcElasticNetworkInterface element](AwsVpcElasticNetworkInterface.element.png) | ![AwsVpcElasticNetworkInterface card](AwsVpcElasticNetworkInterface.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the AwsVpcElasticNetworkInterface element
include('elements/aws/NetworkingContentDelivery/AwsVpcElasticNetworkInterface')
AwsVpcElasticNetworkInterface('element', 'Vpc Elastic Network Interface', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AwsVpcElasticNetworkInterface element
include('elements/aws/NetworkingContentDelivery/AwsVpcElasticNetworkInterface')
AwsVpcElasticNetworkInterface('element', 'Vpc Elastic Network Interface', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the AwsVpcElasticNetworkInterface card
include('elements/aws/NetworkingContentDelivery/AwsVpcElasticNetworkInterface')
AwsVpcElasticNetworkInterfaceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AwsVpcElasticNetworkInterface card
include('elements/aws/NetworkingContentDelivery/AwsVpcElasticNetworkInterface')
AwsVpcElasticNetworkInterfaceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
