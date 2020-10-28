# MaterialsPictureInPictureAlt
```text
elements/materials/Action/MaterialsPictureInPictureAlt
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPictureInPictureAlt icon](../../../icons/materials/Action/MaterialsPictureInPictureAlt.png) | ![MaterialsPictureInPictureAlt element](MaterialsPictureInPictureAlt.element.png) | ![MaterialsPictureInPictureAlt card](MaterialsPictureInPictureAlt.card.png) |
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

' loads the MaterialsPictureInPictureAlt element
include('elements/materials/Action/MaterialsPictureInPictureAlt')
MaterialsPictureInPictureAlt('element', 'Picture In Picture Alt', 'an optional tech field')
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

' loads the MaterialsPictureInPictureAlt element
include('elements/materials/Action/MaterialsPictureInPictureAlt')
MaterialsPictureInPictureAlt('element', 'Picture In Picture Alt', 'an optional tech field')
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

' loads the MaterialsPictureInPictureAlt card
include('elements/materials/Action/MaterialsPictureInPictureAlt')
MaterialsPictureInPictureAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPictureInPictureAlt card
include('elements/materials/Action/MaterialsPictureInPictureAlt')
MaterialsPictureInPictureAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
