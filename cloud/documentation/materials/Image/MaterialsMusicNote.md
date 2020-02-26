# MaterialsMusicNote
```text
elements/materials/Image/MaterialsMusicNote
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMusicNote icon](../../../icons/materials/Image/MaterialsMusicNote.png) | ![MaterialsMusicNote element](MaterialsMusicNote.element.png) | ![MaterialsMusicNote card](MaterialsMusicNote.card.png) |
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

' loads the MaterialsMusicNote element
include('elements/materials/Image/MaterialsMusicNote')
MaterialsMusicNote('element', 'Music Note', 'an optional tech field')
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

' loads the MaterialsMusicNote element
include('elements/materials/Image/MaterialsMusicNote')
MaterialsMusicNote('element', 'Music Note', 'an optional tech field')
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

' loads the MaterialsMusicNote card
include('elements/materials/Image/MaterialsMusicNote')
MaterialsMusicNoteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsMusicNote card
include('elements/materials/Image/MaterialsMusicNote')
MaterialsMusicNoteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
