# MaterialsBorderTop
```text
elements/materials/Editor/MaterialsBorderTop
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBorderTop icon](../../../icons/materials/Editor/MaterialsBorderTop.png) | ![MaterialsBorderTop element](MaterialsBorderTop.element.png) | ![MaterialsBorderTop card](MaterialsBorderTop.card.png) |
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

' loads the MaterialsBorderTop element
include('elements/materials/Editor/MaterialsBorderTop')
MaterialsBorderTop('element', 'Border Top', 'an optional tech field')
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

' loads the MaterialsBorderTop element
include('elements/materials/Editor/MaterialsBorderTop')
MaterialsBorderTop('element', 'Border Top', 'an optional tech field')
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

' loads the MaterialsBorderTop card
include('elements/materials/Editor/MaterialsBorderTop')
MaterialsBorderTopCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBorderTop card
include('elements/materials/Editor/MaterialsBorderTop')
MaterialsBorderTopCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
