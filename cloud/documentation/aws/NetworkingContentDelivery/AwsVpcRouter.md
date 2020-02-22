# AwsVpcRouter
```text
elements/aws/NetworkingContentDelivery/AwsVpcRouter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcRouter icon](../../../icons/aws/NetworkingContentDelivery/AwsVpcRouter.png) | ![AwsVpcRouter element](AwsVpcRouter.element.png) | ![AwsVpcRouter card](AwsVpcRouter.card.png) |
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

' loads the AwsVpcRouter element
include('elements/aws/NetworkingContentDelivery/AwsVpcRouter')
AwsVpcRouter('element', 'Vpc Router', 'an optional tech field')
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

' loads the AwsVpcRouter element
include('elements/aws/NetworkingContentDelivery/AwsVpcRouter')
AwsVpcRouter('element', 'Vpc Router', 'an optional tech field')
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

' loads the AwsVpcRouter card
include('elements/aws/NetworkingContentDelivery/AwsVpcRouter')
AwsVpcRouterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcRouter card
include('elements/aws/NetworkingContentDelivery/AwsVpcRouter')
AwsVpcRouterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
