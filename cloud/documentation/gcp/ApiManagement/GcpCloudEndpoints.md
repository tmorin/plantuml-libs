# GcpCloudEndpoints
```text
elements/gcp/ApiManagement/GcpCloudEndpoints
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudEndpoints icon](../../../icons/gcp/ApiManagement/GcpCloudEndpoints.png) | ![GcpCloudEndpoints element](GcpCloudEndpoints.element.png) | ![GcpCloudEndpoints card](GcpCloudEndpoints.card.png) |
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

' loads the GcpCloudEndpoints element
include('elements/gcp/ApiManagement/GcpCloudEndpoints')
GcpCloudEndpoints('element', 'Cloud Endpoints', 'an optional tech field')
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

' loads the GcpCloudEndpoints element
include('elements/gcp/ApiManagement/GcpCloudEndpoints')
GcpCloudEndpoints('element', 'Cloud Endpoints', 'an optional tech field')
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

' loads the GcpCloudEndpoints card
include('elements/gcp/ApiManagement/GcpCloudEndpoints')
GcpCloudEndpointsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudEndpoints card
include('elements/gcp/ApiManagement/GcpCloudEndpoints')
GcpCloudEndpointsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
