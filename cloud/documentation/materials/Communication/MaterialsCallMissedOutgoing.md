# MaterialsCallMissedOutgoing
```text
elements/materials/Communication/MaterialsCallMissedOutgoing
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCallMissedOutgoing icon](../../../icons/materials/Communication/MaterialsCallMissedOutgoing.png) | ![MaterialsCallMissedOutgoing element](MaterialsCallMissedOutgoing.element.png) | ![MaterialsCallMissedOutgoing card](MaterialsCallMissedOutgoing.card.png) |
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

' loads the MaterialsCallMissedOutgoing element
include('elements/materials/Communication/MaterialsCallMissedOutgoing')
MaterialsCallMissedOutgoing('element', 'Call Missed Outgoing', 'an optional tech field')
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

' loads the MaterialsCallMissedOutgoing element
include('elements/materials/Communication/MaterialsCallMissedOutgoing')
MaterialsCallMissedOutgoing('element', 'Call Missed Outgoing', 'an optional tech field')
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

' loads the MaterialsCallMissedOutgoing card
include('elements/materials/Communication/MaterialsCallMissedOutgoing')
MaterialsCallMissedOutgoingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCallMissedOutgoing card
include('elements/materials/Communication/MaterialsCallMissedOutgoing')
MaterialsCallMissedOutgoingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
