# MaterialsViewAgenda
```text
elements/materials/Action/MaterialsViewAgenda
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsViewAgenda icon](../../../icons/materials/Action/MaterialsViewAgenda.png) | ![MaterialsViewAgenda element](MaterialsViewAgenda.element.png) | ![MaterialsViewAgenda card](MaterialsViewAgenda.card.png) |
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

' loads the MaterialsViewAgenda element
include('elements/materials/Action/MaterialsViewAgenda')
MaterialsViewAgenda('element', 'View Agenda', 'an optional tech field')
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

' loads the MaterialsViewAgenda element
include('elements/materials/Action/MaterialsViewAgenda')
MaterialsViewAgenda('element', 'View Agenda', 'an optional tech field')
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

' loads the MaterialsViewAgenda card
include('elements/materials/Action/MaterialsViewAgenda')
MaterialsViewAgendaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsViewAgenda card
include('elements/materials/Action/MaterialsViewAgenda')
MaterialsViewAgendaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
