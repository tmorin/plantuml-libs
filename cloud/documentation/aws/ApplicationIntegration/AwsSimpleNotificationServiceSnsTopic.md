# AwsSimpleNotificationServiceSnsTopic
```text
elements/aws/ApplicationIntegration/AwsSimpleNotificationServiceSnsTopic
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSimpleNotificationServiceSnsTopic icon](../../../icons/aws/ApplicationIntegration/AwsSimpleNotificationServiceSnsTopic.png) | ![AwsSimpleNotificationServiceSnsTopic element](AwsSimpleNotificationServiceSnsTopic.element.png) | ![AwsSimpleNotificationServiceSnsTopic card](AwsSimpleNotificationServiceSnsTopic.card.png) |
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

' loads the AwsSimpleNotificationServiceSnsTopic element
include('elements/aws/ApplicationIntegration/AwsSimpleNotificationServiceSnsTopic')
AwsSimpleNotificationServiceSnsTopic('element', 'Simple Notification Service Sns Topic', 'an optional tech field')
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

' loads the AwsSimpleNotificationServiceSnsTopic element
include('elements/aws/ApplicationIntegration/AwsSimpleNotificationServiceSnsTopic')
AwsSimpleNotificationServiceSnsTopic('element', 'Simple Notification Service Sns Topic', 'an optional tech field')
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

' loads the AwsSimpleNotificationServiceSnsTopic card
include('elements/aws/ApplicationIntegration/AwsSimpleNotificationServiceSnsTopic')
AwsSimpleNotificationServiceSnsTopicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSimpleNotificationServiceSnsTopic card
include('elements/aws/ApplicationIntegration/AwsSimpleNotificationServiceSnsTopic')
AwsSimpleNotificationServiceSnsTopicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
