# MaterialsChatBubbleOutline
```text
elements/materials/Communication/MaterialsChatBubbleOutline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsChatBubbleOutline icon](../../../icons/materials/Communication/MaterialsChatBubbleOutline.png) | ![MaterialsChatBubbleOutline element](MaterialsChatBubbleOutline.element.png) | ![MaterialsChatBubbleOutline card](MaterialsChatBubbleOutline.card.png) |
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

' loads the MaterialsChatBubbleOutline element
include('elements/materials/Communication/MaterialsChatBubbleOutline')
MaterialsChatBubbleOutline('element', 'Chat Bubble Outline', 'an optional tech field')
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

' loads the MaterialsChatBubbleOutline element
include('elements/materials/Communication/MaterialsChatBubbleOutline')
MaterialsChatBubbleOutline('element', 'Chat Bubble Outline', 'an optional tech field')
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

' loads the MaterialsChatBubbleOutline card
include('elements/materials/Communication/MaterialsChatBubbleOutline')
MaterialsChatBubbleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsChatBubbleOutline card
include('elements/materials/Communication/MaterialsChatBubbleOutline')
MaterialsChatBubbleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
