# MaterialsMoveToInbox
```text
elements/materials/Content/MaterialsMoveToInbox
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMoveToInbox icon](../../../icons/materials/Content/MaterialsMoveToInbox.png) | ![MaterialsMoveToInbox element](MaterialsMoveToInbox.element.png) | ![MaterialsMoveToInbox card](MaterialsMoveToInbox.card.png) |
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
include('styles/materials')

' loads the MaterialsMoveToInbox element
include('elements/materials/Content/MaterialsMoveToInbox')
MaterialsMoveToInbox('element', 'Move To Inbox', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsMoveToInbox element
include('elements/materials/Content/MaterialsMoveToInbox')
MaterialsMoveToInbox('element', 'Move To Inbox', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsMoveToInbox card
include('elements/materials/Content/MaterialsMoveToInbox')
MaterialsMoveToInboxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/materials')

' loads the MaterialsMoveToInbox card
include('elements/materials/Content/MaterialsMoveToInbox')
MaterialsMoveToInboxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
