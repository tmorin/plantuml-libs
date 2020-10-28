# GcpDedicatedInterconnect
```text
elements/gcp/Networking/GcpDedicatedInterconnect
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpDedicatedInterconnect icon](../../../icons/gcp/Networking/GcpDedicatedInterconnect.png) | ![GcpDedicatedInterconnect element](GcpDedicatedInterconnect.element.png) | ![GcpDedicatedInterconnect card](GcpDedicatedInterconnect.card.png) |
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

' loads the GcpDedicatedInterconnect element
include('elements/gcp/Networking/GcpDedicatedInterconnect')
GcpDedicatedInterconnect('element', 'Dedicated Interconnect', 'an optional tech field')
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

' loads the GcpDedicatedInterconnect element
include('elements/gcp/Networking/GcpDedicatedInterconnect')
GcpDedicatedInterconnect('element', 'Dedicated Interconnect', 'an optional tech field')
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

' loads the GcpDedicatedInterconnect card
include('elements/gcp/Networking/GcpDedicatedInterconnect')
GcpDedicatedInterconnectCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpDedicatedInterconnect card
include('elements/gcp/Networking/GcpDedicatedInterconnect')
GcpDedicatedInterconnectCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
