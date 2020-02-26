# GcpGroupInfrastructureSystem
| Example | Resource |
| :-: | --- |
| ![GcpGroupInfrastructureSystem group](GcpGroupInfrastructureSystem.group.png) | `groups/gcp/GcpGroupInfrastructureSystem` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/gcp')

' loads the GcpGroupInfrastructureSystem group
include('groups/gcp/GcpGroupInfrastructureSystem')
GcpGroupInfrastructureSystem('element', 'Infrastructure System', 'an optional tech field')
@enduml
```
## Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the style
include('styles/gcp')

' loads the GcpGroupInfrastructureSystem group
include('groups/gcp/GcpGroupInfrastructureSystem')
GcpGroupInfrastructureSystem('element', 'Infrastructure System', 'an optional tech field')
@enduml
```
