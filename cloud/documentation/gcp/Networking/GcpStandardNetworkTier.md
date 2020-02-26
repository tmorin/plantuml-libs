# GcpStandardNetworkTier
```text
elements/gcp/Networking/GcpStandardNetworkTier
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpStandardNetworkTier icon](../../../icons/gcp/Networking/GcpStandardNetworkTier.png) | ![GcpStandardNetworkTier element](GcpStandardNetworkTier.element.png) | ![GcpStandardNetworkTier card](GcpStandardNetworkTier.card.png) |
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

' loads the GcpStandardNetworkTier element
include('elements/gcp/Networking/GcpStandardNetworkTier')
GcpStandardNetworkTier('element', 'Standard Network Tier', 'an optional tech field')
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

' loads the GcpStandardNetworkTier element
include('elements/gcp/Networking/GcpStandardNetworkTier')
GcpStandardNetworkTier('element', 'Standard Network Tier', 'an optional tech field')
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

' loads the GcpStandardNetworkTier card
include('elements/gcp/Networking/GcpStandardNetworkTier')
GcpStandardNetworkTierCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpStandardNetworkTier card
include('elements/gcp/Networking/GcpStandardNetworkTier')
GcpStandardNetworkTierCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
