# MaterialsDeveloperBoard
```text
elements/materials/Hardware/MaterialsDeveloperBoard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDeveloperBoard icon](../../../icons/materials/Hardware/MaterialsDeveloperBoard.png) | ![MaterialsDeveloperBoard element](MaterialsDeveloperBoard.element.png) | ![MaterialsDeveloperBoard card](MaterialsDeveloperBoard.card.png) |
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

' loads the MaterialsDeveloperBoard element
include('elements/materials/Hardware/MaterialsDeveloperBoard')
MaterialsDeveloperBoard('element', 'Developer Board', 'an optional tech field')
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

' loads the MaterialsDeveloperBoard element
include('elements/materials/Hardware/MaterialsDeveloperBoard')
MaterialsDeveloperBoard('element', 'Developer Board', 'an optional tech field')
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

' loads the MaterialsDeveloperBoard card
include('elements/materials/Hardware/MaterialsDeveloperBoard')
MaterialsDeveloperBoardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDeveloperBoard card
include('elements/materials/Hardware/MaterialsDeveloperBoard')
MaterialsDeveloperBoardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
