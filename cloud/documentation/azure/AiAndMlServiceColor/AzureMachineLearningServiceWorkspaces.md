# AzureMachineLearningServiceWorkspaces
```text
elements/azure/AiAndMlServiceColor/AzureMachineLearningServiceWorkspaces
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMachineLearningServiceWorkspaces icon](../../../icons/azure/AiAndMlServiceColor/AzureMachineLearningServiceWorkspaces.png) | ![AzureMachineLearningServiceWorkspaces element](AzureMachineLearningServiceWorkspaces.element.png) | ![AzureMachineLearningServiceWorkspaces card](AzureMachineLearningServiceWorkspaces.card.png) |
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

' loads the AzureMachineLearningServiceWorkspaces element
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningServiceWorkspaces')
AzureMachineLearningServiceWorkspaces('element', 'Machine Learning Service Workspaces', 'an optional tech field')
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

' loads the AzureMachineLearningServiceWorkspaces element
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningServiceWorkspaces')
AzureMachineLearningServiceWorkspaces('element', 'Machine Learning Service Workspaces', 'an optional tech field')
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

' loads the AzureMachineLearningServiceWorkspaces card
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningServiceWorkspaces')
AzureMachineLearningServiceWorkspacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMachineLearningServiceWorkspaces card
include('elements/azure/AiAndMlServiceColor/AzureMachineLearningServiceWorkspaces')
AzureMachineLearningServiceWorkspacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
