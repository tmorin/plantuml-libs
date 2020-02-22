# AzureBatchAi
```text
elements/azure/AiAndMlServiceColor/AzureBatchAi
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureBatchAi icon](../../../icons/azure/AiAndMlServiceColor/AzureBatchAi.png) | ![AzureBatchAi element](AzureBatchAi.element.png) | ![AzureBatchAi card](AzureBatchAi.card.png) |
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

' loads the AzureBatchAi element
include('elements/azure/AiAndMlServiceColor/AzureBatchAi')
AzureBatchAi('element', 'Batch Ai', 'an optional tech field')
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

' loads the AzureBatchAi element
include('elements/azure/AiAndMlServiceColor/AzureBatchAi')
AzureBatchAi('element', 'Batch Ai', 'an optional tech field')
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

' loads the AzureBatchAi card
include('elements/azure/AiAndMlServiceColor/AzureBatchAi')
AzureBatchAiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureBatchAi card
include('elements/azure/AiAndMlServiceColor/AzureBatchAi')
AzureBatchAiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
