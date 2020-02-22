# AwsSiteToSiteVpn
```text
elements/aws/NetworkingContentDelivery/AwsSiteToSiteVpn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSiteToSiteVpn icon](../../../icons/aws/NetworkingContentDelivery/AwsSiteToSiteVpn.png) | ![AwsSiteToSiteVpn element](AwsSiteToSiteVpn.element.png) | ![AwsSiteToSiteVpn card](AwsSiteToSiteVpn.card.png) |
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

' loads the AwsSiteToSiteVpn element
include('elements/aws/NetworkingContentDelivery/AwsSiteToSiteVpn')
AwsSiteToSiteVpn('element', 'Site To Site Vpn', 'an optional tech field')
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

' loads the AwsSiteToSiteVpn element
include('elements/aws/NetworkingContentDelivery/AwsSiteToSiteVpn')
AwsSiteToSiteVpn('element', 'Site To Site Vpn', 'an optional tech field')
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

' loads the AwsSiteToSiteVpn card
include('elements/aws/NetworkingContentDelivery/AwsSiteToSiteVpn')
AwsSiteToSiteVpnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSiteToSiteVpn card
include('elements/aws/NetworkingContentDelivery/AwsSiteToSiteVpn')
AwsSiteToSiteVpnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
