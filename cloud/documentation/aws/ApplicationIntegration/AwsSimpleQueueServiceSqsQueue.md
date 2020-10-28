# AwsSimpleQueueServiceSqsQueue
```text
elements/aws/ApplicationIntegration/AwsSimpleQueueServiceSqsQueue
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSimpleQueueServiceSqsQueue icon](../../../icons/aws/ApplicationIntegration/AwsSimpleQueueServiceSqsQueue.png) | ![AwsSimpleQueueServiceSqsQueue element](AwsSimpleQueueServiceSqsQueue.element.png) | ![AwsSimpleQueueServiceSqsQueue card](AwsSimpleQueueServiceSqsQueue.card.png) |
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

' loads the AwsSimpleQueueServiceSqsQueue element
include('elements/aws/ApplicationIntegration/AwsSimpleQueueServiceSqsQueue')
AwsSimpleQueueServiceSqsQueue('element', 'Simple Queue Service Sqs Queue', 'an optional tech field')
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

' loads the AwsSimpleQueueServiceSqsQueue element
include('elements/aws/ApplicationIntegration/AwsSimpleQueueServiceSqsQueue')
AwsSimpleQueueServiceSqsQueue('element', 'Simple Queue Service Sqs Queue', 'an optional tech field')
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

' loads the AwsSimpleQueueServiceSqsQueue card
include('elements/aws/ApplicationIntegration/AwsSimpleQueueServiceSqsQueue')
AwsSimpleQueueServiceSqsQueueCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSimpleQueueServiceSqsQueue card
include('elements/aws/ApplicationIntegration/AwsSimpleQueueServiceSqsQueue')
AwsSimpleQueueServiceSqsQueueCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
