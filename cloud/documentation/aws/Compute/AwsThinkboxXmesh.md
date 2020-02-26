# AwsThinkboxXmesh
```text
elements/aws/Compute/AwsThinkboxXmesh
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsThinkboxXmesh icon](../../../icons/aws/Compute/AwsThinkboxXmesh.png) | ![AwsThinkboxXmesh element](AwsThinkboxXmesh.element.png) | ![AwsThinkboxXmesh card](AwsThinkboxXmesh.card.png) |
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

' loads the AwsThinkboxXmesh element
include('elements/aws/Compute/AwsThinkboxXmesh')
AwsThinkboxXmesh('element', 'Thinkbox Xmesh', 'an optional tech field')
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

' loads the AwsThinkboxXmesh element
include('elements/aws/Compute/AwsThinkboxXmesh')
AwsThinkboxXmesh('element', 'Thinkbox Xmesh', 'an optional tech field')
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

' loads the AwsThinkboxXmesh card
include('elements/aws/Compute/AwsThinkboxXmesh')
AwsThinkboxXmeshCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsThinkboxXmesh card
include('elements/aws/Compute/AwsThinkboxXmesh')
AwsThinkboxXmeshCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
