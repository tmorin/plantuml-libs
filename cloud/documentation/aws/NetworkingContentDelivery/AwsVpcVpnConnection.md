# AwsVpcVpnConnection
```text
elements/aws/NetworkingContentDelivery/AwsVpcVpnConnection
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcVpnConnection icon](../../../icons/aws/NetworkingContentDelivery/AwsVpcVpnConnection.png) | ![AwsVpcVpnConnection element](AwsVpcVpnConnection.element.png) | ![AwsVpcVpnConnection card](AwsVpcVpnConnection.card.png) |
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

' loads the AwsVpcVpnConnection element
include('elements/aws/NetworkingContentDelivery/AwsVpcVpnConnection')
AwsVpcVpnConnection('element', 'Vpc Vpn Connection', 'an optional tech field')
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

' loads the AwsVpcVpnConnection element
include('elements/aws/NetworkingContentDelivery/AwsVpcVpnConnection')
AwsVpcVpnConnection('element', 'Vpc Vpn Connection', 'an optional tech field')
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

' loads the AwsVpcVpnConnection card
include('elements/aws/NetworkingContentDelivery/AwsVpcVpnConnection')
AwsVpcVpnConnectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcVpnConnection card
include('elements/aws/NetworkingContentDelivery/AwsVpcVpnConnection')
AwsVpcVpnConnectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
