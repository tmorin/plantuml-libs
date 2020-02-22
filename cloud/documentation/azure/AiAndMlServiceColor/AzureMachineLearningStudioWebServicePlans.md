# AzureMachineLearningStudioWebServicePlans
```text
elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServicePlans
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMachineLearningStudioWebServicePlans icon](../../../icons/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServicePlans.png) | ![AzureMachineLearningStudioWebServicePlans element](AzureMachineLearningStudioWebServicePlans.element.png) | ![AzureMachineLearningStudioWebServicePlans card](AzureMachineLearningStudioWebServicePlans.card.png) |
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

' loads the AzureMachineLearningStudioWebServicePlans element
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServicePlans')
AzureMachineLearningStudioWebServicePlans('element', 'Machine Learning Studio Web Service Plans', 'an optional tech field')
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

' loads the AzureMachineLearningStudioWebServicePlans element
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServicePlans')
AzureMachineLearningStudioWebServicePlans('element', 'Machine Learning Studio Web Service Plans', 'an optional tech field')
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

' loads the AzureMachineLearningStudioWebServicePlans card
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServicePlans')
AzureMachineLearningStudioWebServicePlansCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMachineLearningStudioWebServicePlans card
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWebServicePlans')
AzureMachineLearningStudioWebServicePlansCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
