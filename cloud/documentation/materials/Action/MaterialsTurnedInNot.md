# MaterialsTurnedInNot
```text
elements/materials/Action/MaterialsTurnedInNot
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTurnedInNot icon](../../../icons/materials/Action/MaterialsTurnedInNot.png) | ![MaterialsTurnedInNot element](MaterialsTurnedInNot.element.png) | ![MaterialsTurnedInNot card](MaterialsTurnedInNot.card.png) |
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

' loads the MaterialsTurnedInNot element
include('elements/materials/Action/MaterialsTurnedInNot')
MaterialsTurnedInNot('element', 'Turned In Not', 'an optional tech field')
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

' loads the MaterialsTurnedInNot element
include('elements/materials/Action/MaterialsTurnedInNot')
MaterialsTurnedInNot('element', 'Turned In Not', 'an optional tech field')
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

' loads the MaterialsTurnedInNot card
include('elements/materials/Action/MaterialsTurnedInNot')
MaterialsTurnedInNotCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTurnedInNot card
include('elements/materials/Action/MaterialsTurnedInNot')
MaterialsTurnedInNotCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
