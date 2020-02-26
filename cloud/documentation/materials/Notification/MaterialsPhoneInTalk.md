# MaterialsPhoneInTalk
```text
elements/materials/Notification/MaterialsPhoneInTalk
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhoneInTalk icon](../../../icons/materials/Notification/MaterialsPhoneInTalk.png) | ![MaterialsPhoneInTalk element](MaterialsPhoneInTalk.element.png) | ![MaterialsPhoneInTalk card](MaterialsPhoneInTalk.card.png) |
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

' loads the MaterialsPhoneInTalk element
include('elements/materials/Notification/MaterialsPhoneInTalk')
MaterialsPhoneInTalk('element', 'Phone In Talk', 'an optional tech field')
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

' loads the MaterialsPhoneInTalk element
include('elements/materials/Notification/MaterialsPhoneInTalk')
MaterialsPhoneInTalk('element', 'Phone In Talk', 'an optional tech field')
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

' loads the MaterialsPhoneInTalk card
include('elements/materials/Notification/MaterialsPhoneInTalk')
MaterialsPhoneInTalkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPhoneInTalk card
include('elements/materials/Notification/MaterialsPhoneInTalk')
MaterialsPhoneInTalkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
