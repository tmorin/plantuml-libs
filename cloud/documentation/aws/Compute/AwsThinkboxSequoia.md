# AwsThinkboxSequoia
```text
elements/aws/Compute/AwsThinkboxSequoia
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsThinkboxSequoia icon](../../../icons/aws/Compute/AwsThinkboxSequoia.png) | ![AwsThinkboxSequoia element](AwsThinkboxSequoia.element.png) | ![AwsThinkboxSequoia card](AwsThinkboxSequoia.card.png) |
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

' loads the AwsThinkboxSequoia element
include('elements/aws/Compute/AwsThinkboxSequoia')
AwsThinkboxSequoia('element', 'Thinkbox Sequoia', 'an optional tech field')
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

' loads the AwsThinkboxSequoia element
include('elements/aws/Compute/AwsThinkboxSequoia')
AwsThinkboxSequoia('element', 'Thinkbox Sequoia', 'an optional tech field')
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

' loads the AwsThinkboxSequoia card
include('elements/aws/Compute/AwsThinkboxSequoia')
AwsThinkboxSequoiaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsThinkboxSequoia card
include('elements/aws/Compute/AwsThinkboxSequoia')
AwsThinkboxSequoiaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
