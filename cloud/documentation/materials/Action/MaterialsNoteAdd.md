# MaterialsNoteAdd
```text
elements/materials/Action/MaterialsNoteAdd
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNoteAdd icon](../../../icons/materials/Action/MaterialsNoteAdd.png) | ![MaterialsNoteAdd element](MaterialsNoteAdd.element.png) | ![MaterialsNoteAdd card](MaterialsNoteAdd.card.png) |
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

' loads the MaterialsNoteAdd element
include('elements/materials/Action/MaterialsNoteAdd')
MaterialsNoteAdd('element', 'Note Add', 'an optional tech field')
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

' loads the MaterialsNoteAdd element
include('elements/materials/Action/MaterialsNoteAdd')
MaterialsNoteAdd('element', 'Note Add', 'an optional tech field')
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

' loads the MaterialsNoteAdd card
include('elements/materials/Action/MaterialsNoteAdd')
MaterialsNoteAddCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsNoteAdd card
include('elements/materials/Action/MaterialsNoteAdd')
MaterialsNoteAddCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
