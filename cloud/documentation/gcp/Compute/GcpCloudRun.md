# GcpCloudRun
```text
elements/gcp/Compute/GcpCloudRun
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudRun icon](../../../icons/gcp/Compute/GcpCloudRun.png) | ![GcpCloudRun element](GcpCloudRun.element.png) | ![GcpCloudRun card](GcpCloudRun.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/gcp')

' loads the GcpCloudRun element
include('elements/gcp/Compute/GcpCloudRun')
GcpCloudRun('element', 'Cloud Run', 'an optional tech field')
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

' loads the GcpCloudRun element
include('elements/gcp/Compute/GcpCloudRun')
GcpCloudRun('element', 'Cloud Run', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/gcp')

' loads the GcpCloudRun card
include('elements/gcp/Compute/GcpCloudRun')
GcpCloudRunCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudRun card
include('elements/gcp/Compute/GcpCloudRun')
GcpCloudRunCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
