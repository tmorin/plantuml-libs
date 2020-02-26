# MaterialsSpeakerNotes
```text
elements/materials/Action/MaterialsSpeakerNotes
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSpeakerNotes icon](../../../icons/materials/Action/MaterialsSpeakerNotes.png) | ![MaterialsSpeakerNotes element](MaterialsSpeakerNotes.element.png) | ![MaterialsSpeakerNotes card](MaterialsSpeakerNotes.card.png) |
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

' loads the MaterialsSpeakerNotes element
include('elements/materials/Action/MaterialsSpeakerNotes')
MaterialsSpeakerNotes('element', 'Speaker Notes', 'an optional tech field')
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

' loads the MaterialsSpeakerNotes element
include('elements/materials/Action/MaterialsSpeakerNotes')
MaterialsSpeakerNotes('element', 'Speaker Notes', 'an optional tech field')
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

' loads the MaterialsSpeakerNotes card
include('elements/materials/Action/MaterialsSpeakerNotes')
MaterialsSpeakerNotesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSpeakerNotes card
include('elements/materials/Action/MaterialsSpeakerNotes')
MaterialsSpeakerNotesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
