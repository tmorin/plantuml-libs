# AzureMachineLearningStudioWebServices
```text
elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMachineLearningStudioWebServices icon](../../../icons/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServices.png) | ![AzureMachineLearningStudioWebServices element](AzureMachineLearningStudioWebServices.element.png) | ![AzureMachineLearningStudioWebServices card](AzureMachineLearningStudioWebServices.card.png) |
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

' loads the AzureMachineLearningStudioWebServices element
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServices')
AzureMachineLearningStudioWebServices('element', 'Machine Learning Studio Web Services', 'an optional tech field')
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

' loads the AzureMachineLearningStudioWebServices element
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServices')
AzureMachineLearningStudioWebServices('element', 'Machine Learning Studio Web Services', 'an optional tech field')
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

' loads the AzureMachineLearningStudioWebServices card
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServices')
AzureMachineLearningStudioWebServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMachineLearningStudioWebServices card
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServices')
AzureMachineLearningStudioWebServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
