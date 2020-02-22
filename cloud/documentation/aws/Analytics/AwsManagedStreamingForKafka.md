# AwsManagedStreamingForKafka
```text
elements/aws/Analytics/AwsManagedStreamingForKafka
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsManagedStreamingForKafka icon](../../../icons/aws/Analytics/AwsManagedStreamingForKafka.png) | ![AwsManagedStreamingForKafka element](AwsManagedStreamingForKafka.element.png) | ![AwsManagedStreamingForKafka card](AwsManagedStreamingForKafka.card.png) |
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

' loads the AwsManagedStreamingForKafka element
include('elements/aws/Analytics/AwsManagedStreamingForKafka')
AwsManagedStreamingForKafka('element', 'Managed Streaming For Kafka', 'an optional tech field')
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

' loads the AwsManagedStreamingForKafka element
include('elements/aws/Analytics/AwsManagedStreamingForKafka')
AwsManagedStreamingForKafka('element', 'Managed Streaming For Kafka', 'an optional tech field')
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

' loads the AwsManagedStreamingForKafka card
include('elements/aws/Analytics/AwsManagedStreamingForKafka')
AwsManagedStreamingForKafkaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsManagedStreamingForKafka card
include('elements/aws/Analytics/AwsManagedStreamingForKafka')
AwsManagedStreamingForKafkaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
