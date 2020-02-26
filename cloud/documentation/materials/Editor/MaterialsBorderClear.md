# MaterialsBorderClear
```text
elements/materials/Editor/MaterialsBorderClear
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBorderClear icon](../../../icons/materials/Editor/MaterialsBorderClear.png) | ![MaterialsBorderClear element](MaterialsBorderClear.element.png) | ![MaterialsBorderClear card](MaterialsBorderClear.card.png) |
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

' loads the MaterialsBorderClear element
include('elements/materials/Editor/MaterialsBorderClear')
MaterialsBorderClear('element', 'Border Clear', 'an optional tech field')
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

' loads the MaterialsBorderClear element
include('elements/materials/Editor/MaterialsBorderClear')
MaterialsBorderClear('element', 'Border Clear', 'an optional tech field')
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

' loads the MaterialsBorderClear card
include('elements/materials/Editor/MaterialsBorderClear')
MaterialsBorderClearCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBorderClear card
include('elements/materials/Editor/MaterialsBorderClear')
MaterialsBorderClearCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
