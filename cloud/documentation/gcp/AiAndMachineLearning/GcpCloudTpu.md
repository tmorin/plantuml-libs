# GcpCloudTpu
```text
elements/gcp/AiAndMachineLearning/GcpCloudTpu
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudTpu icon](../../../icons/gcp/AiAndMachineLearning/GcpCloudTpu.png) | ![GcpCloudTpu element](GcpCloudTpu.element.png) | ![GcpCloudTpu card](GcpCloudTpu.card.png) |
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

' loads the GcpCloudTpu element
include('elements/gcp/AiAndMachineLearning/GcpCloudTpu')
GcpCloudTpu('element', 'Cloud Tpu', 'an optional tech field')
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

' loads the GcpCloudTpu element
include('elements/gcp/AiAndMachineLearning/GcpCloudTpu')
GcpCloudTpu('element', 'Cloud Tpu', 'an optional tech field')
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

' loads the GcpCloudTpu card
include('elements/gcp/AiAndMachineLearning/GcpCloudTpu')
GcpCloudTpuCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudTpu card
include('elements/gcp/AiAndMachineLearning/GcpCloudTpu')
GcpCloudTpuCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
