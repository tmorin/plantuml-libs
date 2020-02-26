# AwsSimpleNotificationServiceSns
```text
elements/aws/ApplicationIntegration/AwsSimpleNotificationServiceSns
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSimpleNotificationServiceSns icon](../../../icons/aws/ApplicationIntegration/AwsSimpleNotificationServiceSns.png) | ![AwsSimpleNotificationServiceSns element](AwsSimpleNotificationServiceSns.element.png) | ![AwsSimpleNotificationServiceSns card](AwsSimpleNotificationServiceSns.card.png) |
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

' loads the AwsSimpleNotificationServiceSns element
include('elements/aws/ApplicationIntegration/AwsSimpleNotificationServiceSns')
AwsSimpleNotificationServiceSns('element', 'Simple Notification Service Sns', 'an optional tech field')
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

' loads the AwsSimpleNotificationServiceSns element
include('elements/aws/ApplicationIntegration/AwsSimpleNotificationServiceSns')
AwsSimpleNotificationServiceSns('element', 'Simple Notification Service Sns', 'an optional tech field')
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

' loads the AwsSimpleNotificationServiceSns card
include('elements/aws/ApplicationIntegration/AwsSimpleNotificationServiceSns')
AwsSimpleNotificationServiceSnsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSimpleNotificationServiceSns card
include('elements/aws/ApplicationIntegration/AwsSimpleNotificationServiceSns')
AwsSimpleNotificationServiceSnsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
