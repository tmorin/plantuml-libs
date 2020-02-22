# GcpAutomlVision
```text
elements/gcp/AiAndMachineLearning/GcpAutomlVision
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpAutomlVision icon](../../../icons/gcp/AiAndMachineLearning/GcpAutomlVision.png) | ![GcpAutomlVision element](GcpAutomlVision.element.png) | ![GcpAutomlVision card](GcpAutomlVision.card.png) |
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

' loads the GcpAutomlVision element
include('elements/gcp/AiAndMachineLearning/GcpAutomlVision')
GcpAutomlVision('element', 'Automl Vision', 'an optional tech field')
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

' loads the GcpAutomlVision element
include('elements/gcp/AiAndMachineLearning/GcpAutomlVision')
GcpAutomlVision('element', 'Automl Vision', 'an optional tech field')
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

' loads the GcpAutomlVision card
include('elements/gcp/AiAndMachineLearning/GcpAutomlVision')
GcpAutomlVisionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpAutomlVision card
include('elements/gcp/AiAndMachineLearning/GcpAutomlVision')
GcpAutomlVisionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
