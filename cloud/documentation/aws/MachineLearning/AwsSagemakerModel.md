# AwsSagemakerModel
```text
elements/aws/MachineLearning/AwsSagemakerModel
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSagemakerModel icon](../../../icons/aws/MachineLearning/AwsSagemakerModel.png) | ![AwsSagemakerModel element](AwsSagemakerModel.element.png) | ![AwsSagemakerModel card](AwsSagemakerModel.card.png) |
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

' loads the AwsSagemakerModel element
include('elements/aws/MachineLearning/AwsSagemakerModel')
AwsSagemakerModel('element', 'Sagemaker Model', 'an optional tech field')
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

' loads the AwsSagemakerModel element
include('elements/aws/MachineLearning/AwsSagemakerModel')
AwsSagemakerModel('element', 'Sagemaker Model', 'an optional tech field')
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

' loads the AwsSagemakerModel card
include('elements/aws/MachineLearning/AwsSagemakerModel')
AwsSagemakerModelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSagemakerModel card
include('elements/aws/MachineLearning/AwsSagemakerModel')
AwsSagemakerModelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
