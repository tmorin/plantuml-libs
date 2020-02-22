# AwsFraudDetector
```text
elements/aws/MachineLearning/AwsFraudDetector
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsFraudDetector icon](../../../icons/aws/MachineLearning/AwsFraudDetector.png) | ![AwsFraudDetector element](AwsFraudDetector.element.png) | ![AwsFraudDetector card](AwsFraudDetector.card.png) |
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

' loads the AwsFraudDetector element
include('elements/aws/MachineLearning/AwsFraudDetector')
AwsFraudDetector('element', 'Fraud Detector', 'an optional tech field')
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

' loads the AwsFraudDetector element
include('elements/aws/MachineLearning/AwsFraudDetector')
AwsFraudDetector('element', 'Fraud Detector', 'an optional tech field')
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

' loads the AwsFraudDetector card
include('elements/aws/MachineLearning/AwsFraudDetector')
AwsFraudDetectorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsFraudDetector card
include('elements/aws/MachineLearning/AwsFraudDetector')
AwsFraudDetectorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
