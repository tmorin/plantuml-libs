# MaterialsBorderStyle
```text
elements/materials/Editor/MaterialsBorderStyle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBorderStyle icon](../../../icons/materials/Editor/MaterialsBorderStyle.png) | ![MaterialsBorderStyle element](MaterialsBorderStyle.element.png) | ![MaterialsBorderStyle card](MaterialsBorderStyle.card.png) |
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

' loads the MaterialsBorderStyle element
include('elements/materials/Editor/MaterialsBorderStyle')
MaterialsBorderStyle('element', 'Border Style', 'an optional tech field')
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

' loads the MaterialsBorderStyle element
include('elements/materials/Editor/MaterialsBorderStyle')
MaterialsBorderStyle('element', 'Border Style', 'an optional tech field')
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

' loads the MaterialsBorderStyle card
include('elements/materials/Editor/MaterialsBorderStyle')
MaterialsBorderStyleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBorderStyle card
include('elements/materials/Editor/MaterialsBorderStyle')
MaterialsBorderStyleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
