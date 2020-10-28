# GcpPremiumNetworkTier
```text
elements/gcp/Networking/GcpPremiumNetworkTier
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpPremiumNetworkTier icon](../../../icons/gcp/Networking/GcpPremiumNetworkTier.png) | ![GcpPremiumNetworkTier element](GcpPremiumNetworkTier.element.png) | ![GcpPremiumNetworkTier card](GcpPremiumNetworkTier.card.png) |
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

' loads the GcpPremiumNetworkTier element
include('elements/gcp/Networking/GcpPremiumNetworkTier')
GcpPremiumNetworkTier('element', 'Premium Network Tier', 'an optional tech field')
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

' loads the GcpPremiumNetworkTier element
include('elements/gcp/Networking/GcpPremiumNetworkTier')
GcpPremiumNetworkTier('element', 'Premium Network Tier', 'an optional tech field')
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

' loads the GcpPremiumNetworkTier card
include('elements/gcp/Networking/GcpPremiumNetworkTier')
GcpPremiumNetworkTierCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpPremiumNetworkTier card
include('elements/gcp/Networking/GcpPremiumNetworkTier')
GcpPremiumNetworkTierCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
