# MaterialsDoneAll
```text
elements/materials/Action/MaterialsDoneAll
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDoneAll icon](../../../icons/materials/Action/MaterialsDoneAll.png) | ![MaterialsDoneAll element](MaterialsDoneAll.element.png) | ![MaterialsDoneAll card](MaterialsDoneAll.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsDoneAll element
include('elements/materials/Action/MaterialsDoneAll')
MaterialsDoneAll('element', 'Done All', 'an optional tech field')
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

' loads the MaterialsDoneAll element
include('elements/materials/Action/MaterialsDoneAll')
MaterialsDoneAll('element', 'Done All', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsDoneAll card
include('elements/materials/Action/MaterialsDoneAll')
MaterialsDoneAllCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDoneAll card
include('elements/materials/Action/MaterialsDoneAll')
MaterialsDoneAllCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
