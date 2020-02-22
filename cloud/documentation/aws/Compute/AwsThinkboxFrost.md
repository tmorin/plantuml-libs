# AwsThinkboxFrost
```text
elements/aws/Compute/AwsThinkboxFrost
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsThinkboxFrost icon](../../../icons/aws/Compute/AwsThinkboxFrost.png) | ![AwsThinkboxFrost element](AwsThinkboxFrost.element.png) | ![AwsThinkboxFrost card](AwsThinkboxFrost.card.png) |
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

' loads the AwsThinkboxFrost element
include('elements/aws/Compute/AwsThinkboxFrost')
AwsThinkboxFrost('element', 'Thinkbox Frost', 'an optional tech field')
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

' loads the AwsThinkboxFrost element
include('elements/aws/Compute/AwsThinkboxFrost')
AwsThinkboxFrost('element', 'Thinkbox Frost', 'an optional tech field')
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

' loads the AwsThinkboxFrost card
include('elements/aws/Compute/AwsThinkboxFrost')
AwsThinkboxFrostCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsThinkboxFrost card
include('elements/aws/Compute/AwsThinkboxFrost')
AwsThinkboxFrostCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
