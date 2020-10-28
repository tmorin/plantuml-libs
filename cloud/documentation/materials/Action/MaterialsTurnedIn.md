# MaterialsTurnedIn
```text
elements/materials/Action/MaterialsTurnedIn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTurnedIn icon](../../../icons/materials/Action/MaterialsTurnedIn.png) | ![MaterialsTurnedIn element](MaterialsTurnedIn.element.png) | ![MaterialsTurnedIn card](MaterialsTurnedIn.card.png) |
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

' loads the MaterialsTurnedIn element
include('elements/materials/Action/MaterialsTurnedIn')
MaterialsTurnedIn('element', 'Turned In', 'an optional tech field')
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

' loads the MaterialsTurnedIn element
include('elements/materials/Action/MaterialsTurnedIn')
MaterialsTurnedIn('element', 'Turned In', 'an optional tech field')
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

' loads the MaterialsTurnedIn card
include('elements/materials/Action/MaterialsTurnedIn')
MaterialsTurnedInCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTurnedIn card
include('elements/materials/Action/MaterialsTurnedIn')
MaterialsTurnedInCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
