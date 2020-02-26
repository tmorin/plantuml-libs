# MaterialsRecentActors
```text
elements/materials/Av/MaterialsRecentActors
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRecentActors icon](../../../icons/materials/Av/MaterialsRecentActors.png) | ![MaterialsRecentActors element](MaterialsRecentActors.element.png) | ![MaterialsRecentActors card](MaterialsRecentActors.card.png) |
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

' loads the MaterialsRecentActors element
include('elements/materials/Av/MaterialsRecentActors')
MaterialsRecentActors('element', 'Recent Actors', 'an optional tech field')
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

' loads the MaterialsRecentActors element
include('elements/materials/Av/MaterialsRecentActors')
MaterialsRecentActors('element', 'Recent Actors', 'an optional tech field')
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

' loads the MaterialsRecentActors card
include('elements/materials/Av/MaterialsRecentActors')
MaterialsRecentActorsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRecentActors card
include('elements/materials/Av/MaterialsRecentActors')
MaterialsRecentActorsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
