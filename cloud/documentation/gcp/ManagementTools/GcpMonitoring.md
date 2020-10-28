# GcpMonitoring
```text
elements/gcp/ManagementTools/GcpMonitoring
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpMonitoring icon](../../../icons/gcp/ManagementTools/GcpMonitoring.png) | ![GcpMonitoring element](GcpMonitoring.element.png) | ![GcpMonitoring card](GcpMonitoring.card.png) |
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

' loads the GcpMonitoring element
include('elements/gcp/ManagementTools/GcpMonitoring')
GcpMonitoring('element', 'Monitoring', 'an optional tech field')
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

' loads the GcpMonitoring element
include('elements/gcp/ManagementTools/GcpMonitoring')
GcpMonitoring('element', 'Monitoring', 'an optional tech field')
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

' loads the GcpMonitoring card
include('elements/gcp/ManagementTools/GcpMonitoring')
GcpMonitoringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpMonitoring card
include('elements/gcp/ManagementTools/GcpMonitoring')
GcpMonitoringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
