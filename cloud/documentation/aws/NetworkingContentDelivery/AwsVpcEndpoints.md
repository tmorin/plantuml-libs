# AwsVpcEndpoints
```text
elements/aws/NetworkingContentDelivery/AwsVpcEndpoints
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcEndpoints icon](../../../icons/aws/NetworkingContentDelivery/AwsVpcEndpoints.png) | ![AwsVpcEndpoints element](AwsVpcEndpoints.element.png) | ![AwsVpcEndpoints card](AwsVpcEndpoints.card.png) |
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

' loads the AwsVpcEndpoints element
include('elements/aws/NetworkingContentDelivery/AwsVpcEndpoints')
AwsVpcEndpoints('element', 'Vpc Endpoints', 'an optional tech field')
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

' loads the AwsVpcEndpoints element
include('elements/aws/NetworkingContentDelivery/AwsVpcEndpoints')
AwsVpcEndpoints('element', 'Vpc Endpoints', 'an optional tech field')
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

' loads the AwsVpcEndpoints card
include('elements/aws/NetworkingContentDelivery/AwsVpcEndpoints')
AwsVpcEndpointsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcEndpoints card
include('elements/aws/NetworkingContentDelivery/AwsVpcEndpoints')
AwsVpcEndpointsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
