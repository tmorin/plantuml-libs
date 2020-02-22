# AwsRekognitionImage
```text
elements/aws/MachineLearning/AwsRekognitionImage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRekognitionImage icon](../../../icons/aws/MachineLearning/AwsRekognitionImage.png) | ![AwsRekognitionImage element](AwsRekognitionImage.element.png) | ![AwsRekognitionImage card](AwsRekognitionImage.card.png) |
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

' loads the AwsRekognitionImage element
include('elements/aws/MachineLearning/AwsRekognitionImage')
AwsRekognitionImage('element', 'Rekognition Image', 'an optional tech field')
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

' loads the AwsRekognitionImage element
include('elements/aws/MachineLearning/AwsRekognitionImage')
AwsRekognitionImage('element', 'Rekognition Image', 'an optional tech field')
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

' loads the AwsRekognitionImage card
include('elements/aws/MachineLearning/AwsRekognitionImage')
AwsRekognitionImageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRekognitionImage card
include('elements/aws/MachineLearning/AwsRekognitionImage')
AwsRekognitionImageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
