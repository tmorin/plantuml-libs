# AwsRoute53
```text
elements/aws/NetworkingContentDelivery/AwsRoute53
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRoute53 icon](../../../icons/aws/NetworkingContentDelivery/AwsRoute53.png) | ![AwsRoute53 element](AwsRoute53.element.png) | ![AwsRoute53 card](AwsRoute53.card.png) |
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

' loads the AwsRoute53 element
include('elements/aws/NetworkingContentDelivery/AwsRoute53')
AwsRoute53('element', 'Route53', 'an optional tech field')
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

' loads the AwsRoute53 element
include('elements/aws/NetworkingContentDelivery/AwsRoute53')
AwsRoute53('element', 'Route53', 'an optional tech field')
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

' loads the AwsRoute53 card
include('elements/aws/NetworkingContentDelivery/AwsRoute53')
AwsRoute53Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRoute53 card
include('elements/aws/NetworkingContentDelivery/AwsRoute53')
AwsRoute53Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
