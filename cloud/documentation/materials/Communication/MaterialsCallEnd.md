# MaterialsCallEnd
```text
elements/materials/Communication/MaterialsCallEnd
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCallEnd icon](../../../icons/materials/Communication/MaterialsCallEnd.png) | ![MaterialsCallEnd element](MaterialsCallEnd.element.png) | ![MaterialsCallEnd card](MaterialsCallEnd.card.png) |
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

' loads the MaterialsCallEnd element
include('elements/materials/Communication/MaterialsCallEnd')
MaterialsCallEnd('element', 'Call End', 'an optional tech field')
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

' loads the MaterialsCallEnd element
include('elements/materials/Communication/MaterialsCallEnd')
MaterialsCallEnd('element', 'Call End', 'an optional tech field')
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

' loads the MaterialsCallEnd card
include('elements/materials/Communication/MaterialsCallEnd')
MaterialsCallEndCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCallEnd card
include('elements/materials/Communication/MaterialsCallEnd')
MaterialsCallEndCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
