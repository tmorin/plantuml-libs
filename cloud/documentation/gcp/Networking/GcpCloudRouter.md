# GcpCloudRouter
```text
elements/gcp/Networking/GcpCloudRouter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudRouter icon](../../../icons/gcp/Networking/GcpCloudRouter.png) | ![GcpCloudRouter element](GcpCloudRouter.element.png) | ![GcpCloudRouter card](GcpCloudRouter.card.png) |
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

' loads the GcpCloudRouter element
include('elements/gcp/Networking/GcpCloudRouter')
GcpCloudRouter('element', 'Cloud Router', 'an optional tech field')
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

' loads the GcpCloudRouter element
include('elements/gcp/Networking/GcpCloudRouter')
GcpCloudRouter('element', 'Cloud Router', 'an optional tech field')
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

' loads the GcpCloudRouter card
include('elements/gcp/Networking/GcpCloudRouter')
GcpCloudRouterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudRouter card
include('elements/gcp/Networking/GcpCloudRouter')
GcpCloudRouterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
