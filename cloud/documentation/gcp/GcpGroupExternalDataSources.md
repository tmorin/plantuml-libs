# GcpGroupExternalDataSources
| Example | Resource |
| :-: | --- |
| ![GcpGroupExternalDataSources group](GcpGroupExternalDataSources.group.png) | `groups/gcp/GcpGroupExternalDataSources` |
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

' loads the GcpGroupExternalDataSources group
include('groups/gcp/GcpGroupExternalDataSources')
GcpGroupExternalDataSources('element', 'External Data Sources', 'an optional tech field')
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

' loads the GcpGroupExternalDataSources group
include('groups/gcp/GcpGroupExternalDataSources')
GcpGroupExternalDataSources('element', 'External Data Sources', 'an optional tech field')
@enduml
```
