# GcpGroupOptionalComponent
| Example | Resource |
| :-: | --- |
| ![GcpGroupOptionalComponent group](GcpGroupOptionalComponent.group.png) | `groups/gcp/GcpGroupOptionalComponent` |
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

' loads the GcpGroupOptionalComponent group
include('groups/gcp/GcpGroupOptionalComponent')
GcpGroupOptionalComponent('element', 'Optional Component', 'an optional tech field')
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

' loads the GcpGroupOptionalComponent group
include('groups/gcp/GcpGroupOptionalComponent')
GcpGroupOptionalComponent('element', 'Optional Component', 'an optional tech field')
@enduml
```
