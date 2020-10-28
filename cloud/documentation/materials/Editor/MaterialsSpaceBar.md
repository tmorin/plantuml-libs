# MaterialsSpaceBar
```text
elements/materials/Editor/MaterialsSpaceBar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSpaceBar icon](../../../icons/materials/Editor/MaterialsSpaceBar.png) | ![MaterialsSpaceBar element](MaterialsSpaceBar.element.png) | ![MaterialsSpaceBar card](MaterialsSpaceBar.card.png) |
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

' loads the MaterialsSpaceBar element
include('elements/materials/Editor/MaterialsSpaceBar')
MaterialsSpaceBar('element', 'Space Bar', 'an optional tech field')
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

' loads the MaterialsSpaceBar element
include('elements/materials/Editor/MaterialsSpaceBar')
MaterialsSpaceBar('element', 'Space Bar', 'an optional tech field')
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

' loads the MaterialsSpaceBar card
include('elements/materials/Editor/MaterialsSpaceBar')
MaterialsSpaceBarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSpaceBar card
include('elements/materials/Editor/MaterialsSpaceBar')
MaterialsSpaceBarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
