# GcpCloudScheduler
```text
elements/gcp/DeveloperTools/GcpCloudScheduler
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudScheduler icon](../../../icons/gcp/DeveloperTools/GcpCloudScheduler.png) | ![GcpCloudScheduler element](GcpCloudScheduler.element.png) | ![GcpCloudScheduler card](GcpCloudScheduler.card.png) |
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

' loads the GcpCloudScheduler element
include('elements/gcp/DeveloperTools/GcpCloudScheduler')
GcpCloudScheduler('element', 'Cloud Scheduler', 'an optional tech field')
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

' loads the GcpCloudScheduler element
include('elements/gcp/DeveloperTools/GcpCloudScheduler')
GcpCloudScheduler('element', 'Cloud Scheduler', 'an optional tech field')
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

' loads the GcpCloudScheduler card
include('elements/gcp/DeveloperTools/GcpCloudScheduler')
GcpCloudSchedulerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudScheduler card
include('elements/gcp/DeveloperTools/GcpCloudScheduler')
GcpCloudSchedulerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
