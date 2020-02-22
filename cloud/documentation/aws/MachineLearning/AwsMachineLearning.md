# AwsMachineLearning
```text
elements/aws/MachineLearning/AwsMachineLearning
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsMachineLearning icon](../../../icons/aws/MachineLearning/AwsMachineLearning.png) | ![AwsMachineLearning element](AwsMachineLearning.element.png) | ![AwsMachineLearning card](AwsMachineLearning.card.png) |
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

' loads the AwsMachineLearning element
include('elements/aws/MachineLearning/AwsMachineLearning')
AwsMachineLearning('element', 'Machine Learning', 'an optional tech field')
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

' loads the AwsMachineLearning element
include('elements/aws/MachineLearning/AwsMachineLearning')
AwsMachineLearning('element', 'Machine Learning', 'an optional tech field')
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

' loads the AwsMachineLearning card
include('elements/aws/MachineLearning/AwsMachineLearning')
AwsMachineLearningCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsMachineLearning card
include('elements/aws/MachineLearning/AwsMachineLearning')
AwsMachineLearningCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
