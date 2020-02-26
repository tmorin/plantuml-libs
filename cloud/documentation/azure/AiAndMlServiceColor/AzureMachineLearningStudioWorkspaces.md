# AzureMachineLearningStudioWorkspaces
```text
elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWorkspaces
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMachineLearningStudioWorkspaces icon](../../../icons/azure/AiAndMlServiceColor/AzureMachineLearningStudioWorkspaces.png) | ![AzureMachineLearningStudioWorkspaces element](AzureMachineLearningStudioWorkspaces.element.png) | ![AzureMachineLearningStudioWorkspaces card](AzureMachineLearningStudioWorkspaces.card.png) |
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
include('styles/azure')

' loads the AzureMachineLearningStudioWorkspaces element
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWorkspaces')
AzureMachineLearningStudioWorkspaces('element', 'Machine Learning Studio Workspaces', 'an optional tech field')
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
include('styles/azure')

' loads the AzureMachineLearningStudioWorkspaces element
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWorkspaces')
AzureMachineLearningStudioWorkspaces('element', 'Machine Learning Studio Workspaces', 'an optional tech field')
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
include('styles/azure')

' loads the AzureMachineLearningStudioWorkspaces card
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWorkspaces')
AzureMachineLearningStudioWorkspacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/azure')

' loads the AzureMachineLearningStudioWorkspaces card
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningStudioWorkspaces')
AzureMachineLearningStudioWorkspacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
