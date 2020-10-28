# GcpGroupExternalSaasProviders
| Example | Resource |
| :-: | --- |
| ![GcpGroupExternalSaasProviders group](GcpGroupExternalSaasProviders.group.png) | `groups/gcp/GcpGroupExternalSaasProviders` |
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

' loads the GcpGroupExternalSaasProviders group
include('groups/gcp/GcpGroupExternalSaasProviders')
GcpGroupExternalSaasProviders('element', 'External SaaS Providers', 'an optional tech field')
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

' loads the GcpGroupExternalSaasProviders group
include('groups/gcp/GcpGroupExternalSaasProviders')
GcpGroupExternalSaasProviders('element', 'External SaaS Providers', 'an optional tech field')
@enduml
```
