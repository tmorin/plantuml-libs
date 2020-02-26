# MaterialsModeEdit
```text
elements/materials/Editor/MaterialsModeEdit
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsModeEdit icon](../../../icons/materials/Editor/MaterialsModeEdit.png) | ![MaterialsModeEdit element](MaterialsModeEdit.element.png) | ![MaterialsModeEdit card](MaterialsModeEdit.card.png) |
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

' loads the MaterialsModeEdit element
include('elements/materials/Editor/MaterialsModeEdit')
MaterialsModeEdit('element', 'Mode Edit', 'an optional tech field')
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

' loads the MaterialsModeEdit element
include('elements/materials/Editor/MaterialsModeEdit')
MaterialsModeEdit('element', 'Mode Edit', 'an optional tech field')
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

' loads the MaterialsModeEdit card
include('elements/materials/Editor/MaterialsModeEdit')
MaterialsModeEditCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsModeEdit card
include('elements/materials/Editor/MaterialsModeEdit')
MaterialsModeEditCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
