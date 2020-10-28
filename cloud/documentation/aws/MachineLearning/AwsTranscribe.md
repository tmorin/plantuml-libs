# AwsTranscribe
```text
elements/aws/MachineLearning/AwsTranscribe
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsTranscribe icon](../../../icons/aws/MachineLearning/AwsTranscribe.png) | ![AwsTranscribe element](AwsTranscribe.element.png) | ![AwsTranscribe card](AwsTranscribe.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsTranscribe element
include('elements/aws/MachineLearning/AwsTranscribe')
AwsTranscribe('element', 'Transcribe', 'an optional tech field')
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

' loads the AwsTranscribe element
include('elements/aws/MachineLearning/AwsTranscribe')
AwsTranscribe('element', 'Transcribe', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsTranscribe card
include('elements/aws/MachineLearning/AwsTranscribe')
AwsTranscribeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsTranscribe card
include('elements/aws/MachineLearning/AwsTranscribe')
AwsTranscribeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
