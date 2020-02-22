# GcpCloudTasks
```text
elements/gcp/DeveloperTools/GcpCloudTasks
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudTasks icon](../../../icons/gcp/DeveloperTools/GcpCloudTasks.png) | ![GcpCloudTasks element](GcpCloudTasks.element.png) | ![GcpCloudTasks card](GcpCloudTasks.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the GcpCloudTasks element
include('elements/gcp/DeveloperTools/GcpCloudTasks')
GcpCloudTasks('element', 'Cloud Tasks', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the GcpCloudTasks element
include('elements/gcp/DeveloperTools/GcpCloudTasks')
GcpCloudTasks('element', 'Cloud Tasks', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the GcpCloudTasks card
include('elements/gcp/DeveloperTools/GcpCloudTasks')
GcpCloudTasksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the GcpCloudTasks card
include('elements/gcp/DeveloperTools/GcpCloudTasks')
GcpCloudTasksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
