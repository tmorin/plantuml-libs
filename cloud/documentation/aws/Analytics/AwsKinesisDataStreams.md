# AwsKinesisDataStreams
```text
elements/aws/Analytics/AwsKinesisDataStreams
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsKinesisDataStreams icon](../../../icons/aws/Analytics/AwsKinesisDataStreams.png) | ![AwsKinesisDataStreams element](AwsKinesisDataStreams.element.png) | ![AwsKinesisDataStreams card](AwsKinesisDataStreams.card.png) |
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

' loads the AwsKinesisDataStreams element
include('elements/aws/Analytics/AwsKinesisDataStreams')
AwsKinesisDataStreams('element', 'Kinesis Data Streams', 'an optional tech field')
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

' loads the AwsKinesisDataStreams element
include('elements/aws/Analytics/AwsKinesisDataStreams')
AwsKinesisDataStreams('element', 'Kinesis Data Streams', 'an optional tech field')
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

' loads the AwsKinesisDataStreams card
include('elements/aws/Analytics/AwsKinesisDataStreams')
AwsKinesisDataStreamsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsKinesisDataStreams card
include('elements/aws/Analytics/AwsKinesisDataStreams')
AwsKinesisDataStreamsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
