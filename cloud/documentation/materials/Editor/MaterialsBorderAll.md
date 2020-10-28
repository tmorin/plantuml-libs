# MaterialsBorderAll
```text
elements/materials/Editor/MaterialsBorderAll
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBorderAll icon](../../../icons/materials/Editor/MaterialsBorderAll.png) | ![MaterialsBorderAll element](MaterialsBorderAll.element.png) | ![MaterialsBorderAll card](MaterialsBorderAll.card.png) |
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

' loads the MaterialsBorderAll element
include('elements/materials/Editor/MaterialsBorderAll')
MaterialsBorderAll('element', 'Border All', 'an optional tech field')
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

' loads the MaterialsBorderAll element
include('elements/materials/Editor/MaterialsBorderAll')
MaterialsBorderAll('element', 'Border All', 'an optional tech field')
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

' loads the MaterialsBorderAll card
include('elements/materials/Editor/MaterialsBorderAll')
MaterialsBorderAllCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBorderAll card
include('elements/materials/Editor/MaterialsBorderAll')
MaterialsBorderAllCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
