# AwsThinkboxDeadline
```text
elements/aws/Compute/AwsThinkboxDeadline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsThinkboxDeadline icon](../../../icons/aws/Compute/AwsThinkboxDeadline.png) | ![AwsThinkboxDeadline element](AwsThinkboxDeadline.element.png) | ![AwsThinkboxDeadline card](AwsThinkboxDeadline.card.png) |
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

' loads the AwsThinkboxDeadline element
include('elements/aws/Compute/AwsThinkboxDeadline')
AwsThinkboxDeadline('element', 'Thinkbox Deadline', 'an optional tech field')
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

' loads the AwsThinkboxDeadline element
include('elements/aws/Compute/AwsThinkboxDeadline')
AwsThinkboxDeadline('element', 'Thinkbox Deadline', 'an optional tech field')
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

' loads the AwsThinkboxDeadline card
include('elements/aws/Compute/AwsThinkboxDeadline')
AwsThinkboxDeadlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsThinkboxDeadline card
include('elements/aws/Compute/AwsThinkboxDeadline')
AwsThinkboxDeadlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
