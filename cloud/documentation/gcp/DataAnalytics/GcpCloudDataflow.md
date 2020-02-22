# GcpCloudDataflow
```text
elements/gcp/DataAnalytics/GcpCloudDataflow
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudDataflow icon](../../../icons/gcp/DataAnalytics/GcpCloudDataflow.png) | ![GcpCloudDataflow element](GcpCloudDataflow.element.png) | ![GcpCloudDataflow card](GcpCloudDataflow.card.png) |
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

' loads the GcpCloudDataflow element
include('elements/gcp/DataAnalytics/GcpCloudDataflow')
GcpCloudDataflow('element', 'Cloud Dataflow', 'an optional tech field')
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

' loads the GcpCloudDataflow element
include('elements/gcp/DataAnalytics/GcpCloudDataflow')
GcpCloudDataflow('element', 'Cloud Dataflow', 'an optional tech field')
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

' loads the GcpCloudDataflow card
include('elements/gcp/DataAnalytics/GcpCloudDataflow')
GcpCloudDataflowCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudDataflow card
include('elements/gcp/DataAnalytics/GcpCloudDataflow')
GcpCloudDataflowCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
