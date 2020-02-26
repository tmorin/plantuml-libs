# AwsRoute53HostedZone
```text
elements/aws/NetworkingContentDelivery/AwsRoute53HostedZone
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRoute53HostedZone icon](../../../icons/aws/NetworkingContentDelivery/AwsRoute53HostedZone.png) | ![AwsRoute53HostedZone element](AwsRoute53HostedZone.element.png) | ![AwsRoute53HostedZone card](AwsRoute53HostedZone.card.png) |
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

' loads the AwsRoute53HostedZone element
include('elements/aws/NetworkingContentDelivery/AwsRoute53HostedZone')
AwsRoute53HostedZone('element', 'Route53 Hosted Zone', 'an optional tech field')
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

' loads the AwsRoute53HostedZone element
include('elements/aws/NetworkingContentDelivery/AwsRoute53HostedZone')
AwsRoute53HostedZone('element', 'Route53 Hosted Zone', 'an optional tech field')
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

' loads the AwsRoute53HostedZone card
include('elements/aws/NetworkingContentDelivery/AwsRoute53HostedZone')
AwsRoute53HostedZoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRoute53HostedZone card
include('elements/aws/NetworkingContentDelivery/AwsRoute53HostedZone')
AwsRoute53HostedZoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
