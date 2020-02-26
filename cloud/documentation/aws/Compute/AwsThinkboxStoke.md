# AwsThinkboxStoke
```text
elements/aws/Compute/AwsThinkboxStoke
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsThinkboxStoke icon](../../../icons/aws/Compute/AwsThinkboxStoke.png) | ![AwsThinkboxStoke element](AwsThinkboxStoke.element.png) | ![AwsThinkboxStoke card](AwsThinkboxStoke.card.png) |
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

' loads the AwsThinkboxStoke element
include('elements/aws/Compute/AwsThinkboxStoke')
AwsThinkboxStoke('element', 'Thinkbox Stoke', 'an optional tech field')
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

' loads the AwsThinkboxStoke element
include('elements/aws/Compute/AwsThinkboxStoke')
AwsThinkboxStoke('element', 'Thinkbox Stoke', 'an optional tech field')
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

' loads the AwsThinkboxStoke card
include('elements/aws/Compute/AwsThinkboxStoke')
AwsThinkboxStokeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsThinkboxStoke card
include('elements/aws/Compute/AwsThinkboxStoke')
AwsThinkboxStokeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
