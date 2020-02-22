# GcpGroupProjectZone
| Example | Resource |
| :-: | --- |
| ![GcpGroupProjectZone group](GcpGroupProjectZone.group.png) | `groups/gcp/GcpGroupProjectZone` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the GcpGroupProjectZone group
include('groups/gcp/GcpGroupProjectZone')
GcpGroupProjectZone('element', 'Project Zone', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the GcpGroupProjectZone group
include('groups/gcp/GcpGroupProjectZone')
GcpGroupProjectZone('element', 'Project Zone', 'an optional tech field')
@enduml
```
