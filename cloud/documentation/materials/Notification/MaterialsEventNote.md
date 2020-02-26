# MaterialsEventNote
```text
elements/materials/Notification/MaterialsEventNote
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsEventNote icon](../../../icons/materials/Notification/MaterialsEventNote.png) | ![MaterialsEventNote element](MaterialsEventNote.element.png) | ![MaterialsEventNote card](MaterialsEventNote.card.png) |
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

' loads the MaterialsEventNote element
include('elements/materials/Notification/MaterialsEventNote')
MaterialsEventNote('element', 'Event Note', 'an optional tech field')
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

' loads the MaterialsEventNote element
include('elements/materials/Notification/MaterialsEventNote')
MaterialsEventNote('element', 'Event Note', 'an optional tech field')
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

' loads the MaterialsEventNote card
include('elements/materials/Notification/MaterialsEventNote')
MaterialsEventNoteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsEventNote card
include('elements/materials/Notification/MaterialsEventNote')
MaterialsEventNoteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
