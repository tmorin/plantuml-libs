# GcpCloudVpn
```text
elements/gcp/Networking/GcpCloudVpn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudVpn icon](../../../icons/gcp/Networking/GcpCloudVpn.png) | ![GcpCloudVpn element](GcpCloudVpn.element.png) | ![GcpCloudVpn card](GcpCloudVpn.card.png) |
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
include('styles/gcp')

' loads the GcpCloudVpn element
include('elements/gcp/Networking/GcpCloudVpn')
GcpCloudVpn('element', 'Cloud Vpn', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpCloudVpn element
include('elements/gcp/Networking/GcpCloudVpn')
GcpCloudVpn('element', 'Cloud Vpn', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpCloudVpn card
include('elements/gcp/Networking/GcpCloudVpn')
GcpCloudVpnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/gcp')

' loads the GcpCloudVpn card
include('elements/gcp/Networking/GcpCloudVpn')
GcpCloudVpnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
