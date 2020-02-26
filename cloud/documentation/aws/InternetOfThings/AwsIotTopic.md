# AwsIotTopic
```text
elements/aws/InternetOfThings/AwsIotTopic
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotTopic icon](../../../icons/aws/InternetOfThings/AwsIotTopic.png) | ![AwsIotTopic element](AwsIotTopic.element.png) | ![AwsIotTopic card](AwsIotTopic.card.png) |
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

' loads the AwsIotTopic element
include('elements/aws/InternetOfThings/AwsIotTopic')
AwsIotTopic('element', 'Iot Topic', 'an optional tech field')
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

' loads the AwsIotTopic element
include('elements/aws/InternetOfThings/AwsIotTopic')
AwsIotTopic('element', 'Iot Topic', 'an optional tech field')
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

' loads the AwsIotTopic card
include('elements/aws/InternetOfThings/AwsIotTopic')
AwsIotTopicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotTopic card
include('elements/aws/InternetOfThings/AwsIotTopic')
AwsIotTopicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
