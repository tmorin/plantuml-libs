# GcpGroupPod
| Example | Resource |
| :-: | --- |
| ![GcpGroupPod group](GcpGroupPod.group.png) | `groups/gcp/GcpGroupPod` |
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

' loads the GcpGroupPod group
include('groups/gcp/GcpGroupPod')
GcpGroupPod('element', 'Pod', 'an optional tech field')
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

' loads the GcpGroupPod group
include('groups/gcp/GcpGroupPod')
GcpGroupPod('element', 'Pod', 'an optional tech field')
@enduml
```
