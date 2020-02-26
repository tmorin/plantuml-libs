# MaterialsAnnouncement
```text
elements/materials/Action/MaterialsAnnouncement
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAnnouncement icon](../../../icons/materials/Action/MaterialsAnnouncement.png) | ![MaterialsAnnouncement element](MaterialsAnnouncement.element.png) | ![MaterialsAnnouncement card](MaterialsAnnouncement.card.png) |
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

' loads the MaterialsAnnouncement element
include('elements/materials/Action/MaterialsAnnouncement')
MaterialsAnnouncement('element', 'Announcement', 'an optional tech field')
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

' loads the MaterialsAnnouncement element
include('elements/materials/Action/MaterialsAnnouncement')
MaterialsAnnouncement('element', 'Announcement', 'an optional tech field')
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

' loads the MaterialsAnnouncement card
include('elements/materials/Action/MaterialsAnnouncement')
MaterialsAnnouncementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAnnouncement card
include('elements/materials/Action/MaterialsAnnouncement')
MaterialsAnnouncementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
