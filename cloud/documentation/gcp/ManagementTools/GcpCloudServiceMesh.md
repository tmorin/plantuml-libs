# GcpCloudServiceMesh
```text
elements/gcp/ManagementTools/GcpCloudServiceMesh
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudServiceMesh icon](../../../icons/gcp/ManagementTools/GcpCloudServiceMesh.png) | ![GcpCloudServiceMesh element](GcpCloudServiceMesh.element.png) | ![GcpCloudServiceMesh card](GcpCloudServiceMesh.card.png) |
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

' loads the GcpCloudServiceMesh element
include('elements/gcp/ManagementTools/GcpCloudServiceMesh')
GcpCloudServiceMesh('element', 'Cloud Service Mesh', 'an optional tech field')
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

' loads the GcpCloudServiceMesh element
include('elements/gcp/ManagementTools/GcpCloudServiceMesh')
GcpCloudServiceMesh('element', 'Cloud Service Mesh', 'an optional tech field')
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

' loads the GcpCloudServiceMesh card
include('elements/gcp/ManagementTools/GcpCloudServiceMesh')
GcpCloudServiceMeshCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudServiceMesh card
include('elements/gcp/ManagementTools/GcpCloudServiceMesh')
GcpCloudServiceMeshCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
