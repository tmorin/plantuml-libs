# MaterialsBorderHorizontal
```text
elements/materials/Editor/MaterialsBorderHorizontal
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBorderHorizontal icon](../../../icons/materials/Editor/MaterialsBorderHorizontal.png) | ![MaterialsBorderHorizontal element](MaterialsBorderHorizontal.element.png) | ![MaterialsBorderHorizontal card](MaterialsBorderHorizontal.card.png) |
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

' loads the MaterialsBorderHorizontal element
include('elements/materials/Editor/MaterialsBorderHorizontal')
MaterialsBorderHorizontal('element', 'Border Horizontal', 'an optional tech field')
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

' loads the MaterialsBorderHorizontal element
include('elements/materials/Editor/MaterialsBorderHorizontal')
MaterialsBorderHorizontal('element', 'Border Horizontal', 'an optional tech field')
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

' loads the MaterialsBorderHorizontal card
include('elements/materials/Editor/MaterialsBorderHorizontal')
MaterialsBorderHorizontalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBorderHorizontal card
include('elements/materials/Editor/MaterialsBorderHorizontal')
MaterialsBorderHorizontalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```