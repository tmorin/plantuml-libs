# GcpGroupOnPremise
| Example | Resource |
| :-: | --- |
| ![GcpGroupOnPremise group](GcpGroupOnPremise.group.png) | `groups/gcp/GcpGroupOnPremise` |
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

' loads the GcpGroupOnPremise group
include('groups/gcp/GcpGroupOnPremise')
GcpGroupOnPremise('element', 'On premise', 'an optional tech field')
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

' loads the GcpGroupOnPremise group
include('groups/gcp/GcpGroupOnPremise')
GcpGroupOnPremise('element', 'On premise', 'an optional tech field')
@enduml
```
