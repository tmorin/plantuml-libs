# AwsRekognition
```text
elements/aws/MachineLearning/AwsRekognition
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRekognition icon](../../../icons/aws/MachineLearning/AwsRekognition.png) | ![AwsRekognition element](AwsRekognition.element.png) | ![AwsRekognition card](AwsRekognition.card.png) |
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

' loads the AwsRekognition element
include('elements/aws/MachineLearning/AwsRekognition')
AwsRekognition('element', 'Rekognition', 'an optional tech field')
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

' loads the AwsRekognition element
include('elements/aws/MachineLearning/AwsRekognition')
AwsRekognition('element', 'Rekognition', 'an optional tech field')
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

' loads the AwsRekognition card
include('elements/aws/MachineLearning/AwsRekognition')
AwsRekognitionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRekognition card
include('elements/aws/MachineLearning/AwsRekognition')
AwsRekognitionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
