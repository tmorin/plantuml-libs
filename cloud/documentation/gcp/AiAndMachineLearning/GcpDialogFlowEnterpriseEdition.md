# GcpDialogFlowEnterpriseEdition
```text
elements/gcp/AiAndMachineLearning/GcpDialogFlowEnterpriseEdition
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpDialogFlowEnterpriseEdition icon](../../../icons/gcp/AiAndMachineLearning/GcpDialogFlowEnterpriseEdition.png) | ![GcpDialogFlowEnterpriseEdition element](GcpDialogFlowEnterpriseEdition.element.png) | ![GcpDialogFlowEnterpriseEdition card](GcpDialogFlowEnterpriseEdition.card.png) |
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

' loads the GcpDialogFlowEnterpriseEdition element
include('elements/gcp/AiAndMachineLearning/GcpDialogFlowEnterpriseEdition')
GcpDialogFlowEnterpriseEdition('element', 'Dialog Flow Enterprise Edition', 'an optional tech field')
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

' loads the GcpDialogFlowEnterpriseEdition element
include('elements/gcp/AiAndMachineLearning/GcpDialogFlowEnterpriseEdition')
GcpDialogFlowEnterpriseEdition('element', 'Dialog Flow Enterprise Edition', 'an optional tech field')
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

' loads the GcpDialogFlowEnterpriseEdition card
include('elements/gcp/AiAndMachineLearning/GcpDialogFlowEnterpriseEdition')
GcpDialogFlowEnterpriseEditionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpDialogFlowEnterpriseEdition card
include('elements/gcp/AiAndMachineLearning/GcpDialogFlowEnterpriseEdition')
GcpDialogFlowEnterpriseEditionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
