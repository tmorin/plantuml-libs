# MaterialsSpeakerGroup
```text
elements/materials/Hardware/MaterialsSpeakerGroup
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSpeakerGroup icon](../../../icons/materials/Hardware/MaterialsSpeakerGroup.png) | ![MaterialsSpeakerGroup element](MaterialsSpeakerGroup.element.png) | ![MaterialsSpeakerGroup card](MaterialsSpeakerGroup.card.png) |
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

' loads the MaterialsSpeakerGroup element
include('elements/materials/Hardware/MaterialsSpeakerGroup')
MaterialsSpeakerGroup('element', 'Speaker Group', 'an optional tech field')
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

' loads the MaterialsSpeakerGroup element
include('elements/materials/Hardware/MaterialsSpeakerGroup')
MaterialsSpeakerGroup('element', 'Speaker Group', 'an optional tech field')
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

' loads the MaterialsSpeakerGroup card
include('elements/materials/Hardware/MaterialsSpeakerGroup')
MaterialsSpeakerGroupCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSpeakerGroup card
include('elements/materials/Hardware/MaterialsSpeakerGroup')
MaterialsSpeakerGroupCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
