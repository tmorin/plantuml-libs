# AwsSimpleQueueServiceSqs
```text
elements/aws/ApplicationIntegration/AwsSimpleQueueServiceSqs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSimpleQueueServiceSqs icon](../../../icons/aws/ApplicationIntegration/AwsSimpleQueueServiceSqs.png) | ![AwsSimpleQueueServiceSqs element](AwsSimpleQueueServiceSqs.element.png) | ![AwsSimpleQueueServiceSqs card](AwsSimpleQueueServiceSqs.card.png) |
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

' loads the AwsSimpleQueueServiceSqs element
include('elements/aws/ApplicationIntegration/AwsSimpleQueueServiceSqs')
AwsSimpleQueueServiceSqs('element', 'Simple Queue Service Sqs', 'an optional tech field')
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

' loads the AwsSimpleQueueServiceSqs element
include('elements/aws/ApplicationIntegration/AwsSimpleQueueServiceSqs')
AwsSimpleQueueServiceSqs('element', 'Simple Queue Service Sqs', 'an optional tech field')
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

' loads the AwsSimpleQueueServiceSqs card
include('elements/aws/ApplicationIntegration/AwsSimpleQueueServiceSqs')
AwsSimpleQueueServiceSqsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSimpleQueueServiceSqs card
include('elements/aws/ApplicationIntegration/AwsSimpleQueueServiceSqs')
AwsSimpleQueueServiceSqsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
