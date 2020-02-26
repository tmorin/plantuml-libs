# GcpCloudRoutes
```text
elements/gcp/Networking/GcpCloudRoutes
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudRoutes icon](../../../icons/gcp/Networking/GcpCloudRoutes.png) | ![GcpCloudRoutes element](GcpCloudRoutes.element.png) | ![GcpCloudRoutes card](GcpCloudRoutes.card.png) |
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

' loads the GcpCloudRoutes element
include('elements/gcp/Networking/GcpCloudRoutes')
GcpCloudRoutes('element', 'Cloud Routes', 'an optional tech field')
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

' loads the GcpCloudRoutes element
include('elements/gcp/Networking/GcpCloudRoutes')
GcpCloudRoutes('element', 'Cloud Routes', 'an optional tech field')
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

' loads the GcpCloudRoutes card
include('elements/gcp/Networking/GcpCloudRoutes')
GcpCloudRoutesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudRoutes card
include('elements/gcp/Networking/GcpCloudRoutes')
GcpCloudRoutesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
