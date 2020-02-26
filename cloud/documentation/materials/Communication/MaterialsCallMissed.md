# MaterialsCallMissed
```text
elements/materials/Communication/MaterialsCallMissed
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCallMissed icon](../../../icons/materials/Communication/MaterialsCallMissed.png) | ![MaterialsCallMissed element](MaterialsCallMissed.element.png) | ![MaterialsCallMissed card](MaterialsCallMissed.card.png) |
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

' loads the MaterialsCallMissed element
include('elements/materials/Communication/MaterialsCallMissed')
MaterialsCallMissed('element', 'Call Missed', 'an optional tech field')
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

' loads the MaterialsCallMissed element
include('elements/materials/Communication/MaterialsCallMissed')
MaterialsCallMissed('element', 'Call Missed', 'an optional tech field')
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

' loads the MaterialsCallMissed card
include('elements/materials/Communication/MaterialsCallMissed')
MaterialsCallMissedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCallMissed card
include('elements/materials/Communication/MaterialsCallMissed')
MaterialsCallMissedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
