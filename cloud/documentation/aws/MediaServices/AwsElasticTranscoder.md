# AwsElasticTranscoder
```text
elements/aws/MediaServices/AwsElasticTranscoder
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticTranscoder icon](../../../icons/aws/MediaServices/AwsElasticTranscoder.png) | ![AwsElasticTranscoder element](AwsElasticTranscoder.element.png) | ![AwsElasticTranscoder card](AwsElasticTranscoder.card.png) |
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

' loads the AwsElasticTranscoder element
include('elements/aws/MediaServices/AwsElasticTranscoder')
AwsElasticTranscoder('element', 'Elastic Transcoder', 'an optional tech field')
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

' loads the AwsElasticTranscoder element
include('elements/aws/MediaServices/AwsElasticTranscoder')
AwsElasticTranscoder('element', 'Elastic Transcoder', 'an optional tech field')
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

' loads the AwsElasticTranscoder card
include('elements/aws/MediaServices/AwsElasticTranscoder')
AwsElasticTranscoderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticTranscoder card
include('elements/aws/MediaServices/AwsElasticTranscoder')
AwsElasticTranscoderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
