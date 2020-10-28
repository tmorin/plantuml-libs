# GcpCloudLoadBalancing
```text
elements/gcp/Networking/GcpCloudLoadBalancing
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudLoadBalancing icon](../../../icons/gcp/Networking/GcpCloudLoadBalancing.png) | ![GcpCloudLoadBalancing element](GcpCloudLoadBalancing.element.png) | ![GcpCloudLoadBalancing card](GcpCloudLoadBalancing.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/gcp')

' loads the GcpCloudLoadBalancing element
include('elements/gcp/Networking/GcpCloudLoadBalancing')
GcpCloudLoadBalancing('element', 'Cloud Load Balancing', 'an optional tech field')
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

' loads the GcpCloudLoadBalancing element
include('elements/gcp/Networking/GcpCloudLoadBalancing')
GcpCloudLoadBalancing('element', 'Cloud Load Balancing', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/gcp')

' loads the GcpCloudLoadBalancing card
include('elements/gcp/Networking/GcpCloudLoadBalancing')
GcpCloudLoadBalancingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudLoadBalancing card
include('elements/gcp/Networking/GcpCloudLoadBalancing')
GcpCloudLoadBalancingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
