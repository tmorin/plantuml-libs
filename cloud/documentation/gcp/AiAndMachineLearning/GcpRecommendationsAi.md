# GcpRecommendationsAi
```text
elements/gcp/AiAndMachineLearning/GcpRecommendationsAi
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpRecommendationsAi icon](../../../icons/gcp/AiAndMachineLearning/GcpRecommendationsAi.png) | ![GcpRecommendationsAi element](GcpRecommendationsAi.element.png) | ![GcpRecommendationsAi card](GcpRecommendationsAi.card.png) |
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

' loads the GcpRecommendationsAi element
include('elements/gcp/AiAndMachineLearning/GcpRecommendationsAi')
GcpRecommendationsAi('element', 'Recommendations Ai', 'an optional tech field')
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

' loads the GcpRecommendationsAi element
include('elements/gcp/AiAndMachineLearning/GcpRecommendationsAi')
GcpRecommendationsAi('element', 'Recommendations Ai', 'an optional tech field')
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

' loads the GcpRecommendationsAi card
include('elements/gcp/AiAndMachineLearning/GcpRecommendationsAi')
GcpRecommendationsAiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpRecommendationsAi card
include('elements/gcp/AiAndMachineLearning/GcpRecommendationsAi')
GcpRecommendationsAiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
