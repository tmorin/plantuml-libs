# GcpGroupExternalInfrastructure1stParty
| Example | Resource |
| :-: | --- |
| ![GcpGroupExternalInfrastructure1stParty group](GcpGroupExternalInfrastructure1stParty.group.png) | `groups/gcp/GcpGroupExternalInfrastructure1stParty` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/gcp')

' loads the GcpGroupExternalInfrastructure1stParty group
include('groups/gcp/GcpGroupExternalInfrastructure1stParty')
GcpGroupExternalInfrastructure1stParty('element', 'External infrastructure 1st party', 'an optional tech field')
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

' loads the GcpGroupExternalInfrastructure1stParty group
include('groups/gcp/GcpGroupExternalInfrastructure1stParty')
GcpGroupExternalInfrastructure1stParty('element', 'External infrastructure 1st party', 'an optional tech field')
@enduml
```
