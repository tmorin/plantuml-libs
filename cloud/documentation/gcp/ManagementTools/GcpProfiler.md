# GcpProfiler
```text
elements/gcp/ManagementTools/GcpProfiler
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpProfiler icon](../../../icons/gcp/ManagementTools/GcpProfiler.png) | ![GcpProfiler element](GcpProfiler.element.png) | ![GcpProfiler card](GcpProfiler.card.png) |
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

' loads the GcpProfiler element
include('elements/gcp/ManagementTools/GcpProfiler')
GcpProfiler('element', 'Profiler', 'an optional tech field')
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

' loads the GcpProfiler element
include('elements/gcp/ManagementTools/GcpProfiler')
GcpProfiler('element', 'Profiler', 'an optional tech field')
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

' loads the GcpProfiler card
include('elements/gcp/ManagementTools/GcpProfiler')
GcpProfilerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpProfiler card
include('elements/gcp/ManagementTools/GcpProfiler')
GcpProfilerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
