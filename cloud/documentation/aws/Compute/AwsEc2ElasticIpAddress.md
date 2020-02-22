# AwsEc2ElasticIpAddress
```text
elements/aws/Compute/AwsEc2ElasticIpAddress
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2ElasticIpAddress icon](../../../icons/aws/Compute/AwsEc2ElasticIpAddress.png) | ![AwsEc2ElasticIpAddress element](AwsEc2ElasticIpAddress.element.png) | ![AwsEc2ElasticIpAddress card](AwsEc2ElasticIpAddress.card.png) |
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

' loads the AwsEc2ElasticIpAddress element
include('elements/aws/Compute/AwsEc2ElasticIpAddress')
AwsEc2ElasticIpAddress('element', 'Ec2 Elastic Ip Address', 'an optional tech field')
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

' loads the AwsEc2ElasticIpAddress element
include('elements/aws/Compute/AwsEc2ElasticIpAddress')
AwsEc2ElasticIpAddress('element', 'Ec2 Elastic Ip Address', 'an optional tech field')
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

' loads the AwsEc2ElasticIpAddress card
include('elements/aws/Compute/AwsEc2ElasticIpAddress')
AwsEc2ElasticIpAddressCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2ElasticIpAddress card
include('elements/aws/Compute/AwsEc2ElasticIpAddress')
AwsEc2ElasticIpAddressCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
