# AwsDeepLearningAmis
```text
elements/aws/MachineLearning/AwsDeepLearningAmis
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDeepLearningAmis icon](../../../icons/aws/MachineLearning/AwsDeepLearningAmis.png) | ![AwsDeepLearningAmis element](AwsDeepLearningAmis.element.png) | ![AwsDeepLearningAmis card](AwsDeepLearningAmis.card.png) |
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
include('styles/aws')

' loads the AwsDeepLearningAmis element
include('elements/aws/MachineLearning/AwsDeepLearningAmis')
AwsDeepLearningAmis('element', 'Deep Learning Amis', 'an optional tech field')
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
include('styles/aws')

' loads the AwsDeepLearningAmis element
include('elements/aws/MachineLearning/AwsDeepLearningAmis')
AwsDeepLearningAmis('element', 'Deep Learning Amis', 'an optional tech field')
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
include('styles/aws')

' loads the AwsDeepLearningAmis card
include('elements/aws/MachineLearning/AwsDeepLearningAmis')
AwsDeepLearningAmisCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/aws')

' loads the AwsDeepLearningAmis card
include('elements/aws/MachineLearning/AwsDeepLearningAmis')
AwsDeepLearningAmisCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
